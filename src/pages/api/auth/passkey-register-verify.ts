/**
 * POST /api/auth/passkey-register-verify
 *
 * Called after the browser creates a passkey credential.
 * Verifies the attestation and stores the public key in the DB.
 */
import type { APIRoute } from 'astro';
import { requireAuth } from '../../../utils/auth';
import { db } from '../../../db';
import { passkeys } from '../../../db/schema';
import { redis } from '../../../utils/redis';
import crypto from 'node:crypto';

function getRpId(request: Request): string {
  const host = request.headers.get('host') ?? 'localhost';
  return host.split(':')[0];
}

/** Convert a base64url string to a Buffer */
function fromB64url(s: string): Buffer {
  return Buffer.from(s, 'base64url');
}

/**
 * Parse the authenticatorData from a WebAuthn attestation.
 * Returns the COSE public key bytes (credential public key) and the credentialId.
 *
 * authenticatorData layout (WebAuthn spec §6.1):
 *   [0..31]   rpIdHash (32 bytes)
 *   [32]      flags (1 byte)
 *   [33..36]  signCount (4 bytes, big-endian)
 *   [37..]    attestedCredentialData (if AT flag set):
 *               aaguid         16 bytes
 *               credIdLen      2 bytes
 *               credentialId   credIdLen bytes
 *               credentialPublicKey  (rest, COSE_Key CBOR)
 */
function parseAuthData(authData: Buffer): {
  rpIdHash: Buffer;
  flags: number;
  counter: number;
  credentialId: Buffer;
  cosePublicKey: Buffer;
} {
  const rpIdHash = authData.subarray(0, 32);
  const flags = authData[32];
  const counter = authData.readUInt32BE(33);

  // AT flag = bit 6 (0x40) — attested credential data present
  if (!(flags & 0x40)) {
    throw new Error('Attested credential data flag not set');
  }

  // Skip rpIdHash(32) + flags(1) + counter(4) + aaguid(16) = offset 53
  const credIdLen = authData.readUInt16BE(53);
  const credentialId = authData.subarray(55, 55 + credIdLen);
  const cosePublicKey = authData.subarray(55 + credIdLen);

  return { rpIdHash, flags, counter, credentialId, cosePublicKey };
}

export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    const user = await requireAuth(cookies);
    if (!user) {
      return new Response(JSON.stringify({ error: 'Not authenticated' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const body = await request.json();
    const { credential, deviceName } = body as {
      credential: {
        id: string;
        rawId: string;
        type: string;
        response: {
          clientDataJSON: string;
          attestationObject: string;
        };
      };
      deviceName?: string;
    };

    if (!redis) {
      return new Response(JSON.stringify({ error: 'Redis is not configured' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // ── 1. Retrieve & delete stored challenge ─────────────────────────────────
    const storedChallenge = await redis.get<string>(`passkey_reg_challenge:${user.id}`);
    if (!storedChallenge) {
      return new Response(JSON.stringify({ error: 'Challenge expired or not found' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    await redis.del(`passkey_reg_challenge:${user.id}`);

    // ── 2. Parse clientDataJSON ───────────────────────────────────────────────
    const clientDataJSON = JSON.parse(
      fromB64url(credential.response.clientDataJSON).toString('utf8')
    );

    if (clientDataJSON.type !== 'webauthn.create') {
      return new Response(JSON.stringify({ error: 'Invalid client data type' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (clientDataJSON.challenge !== storedChallenge) {
      return new Response(JSON.stringify({ error: 'Challenge mismatch' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const rpId = getRpId(request);
    const origin = request.headers.get('origin') ?? `https://${rpId}`;
    if (clientDataJSON.origin !== origin) {
      return new Response(JSON.stringify({ error: 'Origin mismatch' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // ── 3. Parse attestationObject (CBOR) ─────────────────────────────────────
    // We use a minimal CBOR decoder for the subset of CBOR we need here.
    const attObjBuf = fromB64url(credential.response.attestationObject);
    const attObj = decodeCBOR(attObjBuf) as {
      fmt: string;
      authData: Uint8Array;
      attStmt: Record<string, unknown>;
    };

    const authData = Buffer.from(attObj.authData);

    // ── 4. Verify rpIdHash ────────────────────────────────────────────────────
    const expectedRpIdHash = crypto.createHash('sha256').update(rpId).digest();
    const { rpIdHash, flags, counter, credentialId, cosePublicKey } = parseAuthData(authData);

    if (!expectedRpIdHash.equals(rpIdHash)) {
      return new Response(JSON.stringify({ error: 'RP ID hash mismatch' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // UV flag (bit 2 = 0x04) must be set (user verified)
    if (!(flags & 0x04)) {
      return new Response(JSON.stringify({ error: 'User verification required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // ── 5. Store credential ───────────────────────────────────────────────────
    const credentialIdB64 = credentialId.toString('base64url');
    const publicKeyB64 = cosePublicKey.toString('base64url');
    const name = deviceName ?? detectDeviceName(credential.response.clientDataJSON);

    await db.insert(passkeys).values({
      user_id: user.id,
      credential_id: credentialIdB64,
      public_key: publicKeyB64,
      counter,
      device_name: name,
    }).onConflictDoNothing();

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err: any) {
    console.error('[PASSKEY-REG-VERIFY]', err);
    return new Response(JSON.stringify({ error: 'Server error: ' + err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

/** Guess a friendly device name from the user agent or clientDataJSON origin */
function detectDeviceName(clientDataJSONB64: string): string {
  try {
    const cd = JSON.parse(Buffer.from(clientDataJSONB64, 'base64url').toString());
    const origin: string = cd.origin ?? '';
    if (origin.includes('localhost')) return 'Local Device';
  } catch { /* ignore */ }
  return 'Passkey Device';
}

// ─── Minimal CBOR decoder (covers the map/bytes/text/uint subset WebAuthn uses) ──

function decodeCBOR(buf: Buffer): unknown {
  const [val] = decodeCBORValue(buf, 0);
  return val;
}

function decodeCBORValue(buf: Buffer, offset: number): [unknown, number] {
  const initial = buf[offset++];
  const majorType = (initial >> 5) & 0x07;
  const addInfo = initial & 0x1f;

  let length = 0;
  if (addInfo < 24) {
    length = addInfo;
  } else if (addInfo === 24) {
    length = buf[offset++];
  } else if (addInfo === 25) {
    length = buf.readUInt16BE(offset); offset += 2;
  } else if (addInfo === 26) {
    length = buf.readUInt32BE(offset); offset += 4;
  }

  switch (majorType) {
    case 0: return [length, offset];                          // unsigned int
    case 2: {                                                 // byte string
      const bytes = buf.subarray(offset, offset + length);
      return [bytes, offset + length];
    }
    case 3: {                                                 // text string
      const text = buf.subarray(offset, offset + length).toString('utf8');
      return [text, offset + length];
    }
    case 4: {                                                 // array
      const arr: unknown[] = [];
      for (let i = 0; i < length; i++) {
        const [val, next] = decodeCBORValue(buf, offset);
        arr.push(val); offset = next;
      }
      return [arr, offset];
    }
    case 5: {                                                 // map
      const map: Record<string | number, unknown> = {};
      for (let i = 0; i < length; i++) {
        const [key, next1] = decodeCBORValue(buf, offset);
        const [val, next2] = decodeCBORValue(buf, next1);
        map[key as string | number] = val;
        offset = next2;
      }
      return [map, offset];
    }
    default:
      throw new Error(`Unsupported CBOR major type: ${majorType}`);
  }
}
