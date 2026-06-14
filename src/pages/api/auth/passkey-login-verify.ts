/**
 * POST /api/auth/passkey-login-verify
 *
 * Called after the browser signs the challenge with the passkey.
 * Verifies the assertion signature against the stored public key,
 * updates the counter, and creates a session cookie.
 */
import type { APIRoute } from 'astro';
import { db } from '../../../db';
import { passkeys, users } from '../../../db/schema';
import { eq } from 'drizzle-orm';
import { redis } from '../../../utils/redis';
import { createSession } from '../../../utils/auth';
import { logAction } from '../../../utils/auditLog';
import crypto from 'node:crypto';

function getRpId(request: Request): string {
  const host = request.headers.get('host') ?? 'localhost';
  return host.split(':')[0];
}

function fromB64url(s: string): Buffer {
  return Buffer.from(s, 'base64url');
}

/**
 * Parse authenticatorData for assertion verification.
 * Layout: rpIdHash(32) | flags(1) | signCount(4) | ...
 */
function parseAssertionAuthData(authData: Buffer): {
  rpIdHash: Buffer;
  flags: number;
  counter: number;
} {
  const rpIdHash = authData.subarray(0, 32);
  const flags = authData[32];
  const counter = authData.readUInt32BE(33);
  return { rpIdHash, flags, counter };
}

/**
 * Decode a COSE EC2 (alg=-7, ES256) or RSA (alg=-257, RS256) public key
 * stored as raw CBOR bytes and return a Node.js KeyObject.
 *
 * COSE key map params used:
 *   kty (1): 2=EC2, 3=RSA
 *   alg (3): -7=ES256, -257=RS256
 *   EC2: crv(-1)=1(P-256), x(-2), y(-3)
 *   RSA: n(-1), e(-2)
 */
function importCOSEPublicKey(coseBytes: Buffer): crypto.KeyObject {
  const map = decodeCBORMap(coseBytes);

  const kty = map[1] as number;

  if (kty === 2) {
    // EC2 — P-256
    const x = map[-2] as Buffer;
    const y = map[-3] as Buffer;
    // Uncompressed EC point: 0x04 || x || y
    const publicKeyBytes = Buffer.concat([Buffer.from([0x04]), x, y]);
    return crypto.createPublicKey({
      key: {
        kty: 'EC',
        crv: 'P-256',
        x: x.toString('base64url'),
        y: y.toString('base64url'),
      },
      format: 'jwk',
    });
  } else if (kty === 3) {
    // RSA
    const n = map[-1] as Buffer;
    const e = map[-2] as Buffer;
    return crypto.createPublicKey({
      key: {
        kty: 'RSA',
        n: n.toString('base64url'),
        e: e.toString('base64url'),
      },
      format: 'jwk',
    });
  }

  throw new Error(`Unsupported COSE kty: ${kty}`);
}

export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    const body = await request.json();
    const { credential, handle } = body as {
      credential: {
        id: string;
        rawId: string;
        type: string;
        response: {
          clientDataJSON: string;
          authenticatorData: string;
          signature: string;
          userHandle: string | null;
        };
      };
      handle: string;
    };

    // ── 1. Retrieve & delete stored challenge ─────────────────────────────────
    if (!redis) {
      return new Response(JSON.stringify({ error: 'Passkey login is temporarily unavailable. Please sign in with your password.' }), {
        status: 503,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    const storedChallenge = await redis.get<string>(`passkey_login_challenge:${handle}`);
    if (!storedChallenge) {
      return new Response(JSON.stringify({ error: 'Challenge expired. Please try again.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    await redis.del(`passkey_login_challenge:${handle}`);

    // ── 2. Parse clientDataJSON ───────────────────────────────────────────────
    const clientData = JSON.parse(
      fromB64url(credential.response.clientDataJSON).toString('utf8')
    );

    if (clientData.type !== 'webauthn.get') {
      return new Response(JSON.stringify({ error: 'Invalid client data type' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (clientData.challenge !== storedChallenge) {
      return new Response(JSON.stringify({ error: 'Challenge mismatch' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const rpId = getRpId(request);
    const origin = request.headers.get('origin') ?? `https://${rpId}`;
    if (clientData.origin !== origin) {
      return new Response(JSON.stringify({ error: 'Origin mismatch' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // ── 3. Look up credential in DB ───────────────────────────────────────────
    const credentialId = credential.id; // base64url
    const passkeyList = await db
      .select()
      .from(passkeys)
      .where(eq(passkeys.credential_id, credentialId))
      .limit(1);

    if (passkeyList.length === 0) {
      return new Response(JSON.stringify({ error: 'Passkey not found' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const passkey = passkeyList[0];

    // ── 4. Verify authenticatorData ───────────────────────────────────────────
    const authDataBuf = fromB64url(credential.response.authenticatorData);
    const { rpIdHash, flags, counter } = parseAssertionAuthData(authDataBuf);

    const expectedRpIdHash = crypto.createHash('sha256').update(rpId).digest();
    if (!expectedRpIdHash.equals(rpIdHash)) {
      return new Response(JSON.stringify({ error: 'RP ID hash mismatch' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // UV flag (bit 2) must be set
    if (!(flags & 0x04)) {
      return new Response(JSON.stringify({ error: 'User verification required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Replay-attack check: counter must be greater than stored counter
    if (passkey.counter > 0 && counter <= passkey.counter) {
      return new Response(JSON.stringify({ error: 'Signature counter invalid (possible replay attack)' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // ── 5. Verify signature ───────────────────────────────────────────────────
    const clientDataHash = crypto
      .createHash('sha256')
      .update(fromB64url(credential.response.clientDataJSON))
      .digest();

    const verificationData = Buffer.concat([authDataBuf, clientDataHash]);
    const signature = fromB64url(credential.response.signature);
    const coseKey = fromB64url(passkey.public_key);
    const publicKey = importCOSEPublicKey(coseKey);

    const isValid = crypto.verify('sha256', verificationData, publicKey, signature);
    if (!isValid) {
      return new Response(JSON.stringify({ error: 'Signature verification failed' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // ── 6. Update counter ─────────────────────────────────────────────────────
    await db
      .update(passkeys)
      .set({ counter })
      .where(eq(passkeys.id, passkey.id));

    // ── 7. Load user & create session ─────────────────────────────────────────
    const userList = await db.select().from(users).where(eq(users.id, passkey.user_id)).limit(1);
    if (userList.length === 0) {
      return new Response(JSON.stringify({ error: 'User not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    const user = userList[0];
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    const token = await createSession(user.id, ip, request.headers.get('user-agent') ?? undefined);

    cookies.set('userSession', token, {
      path: '/',
      httpOnly: true,
      secure: import.meta.env.PROD,
      maxAge: 60 * 60 * 24 * 30, // 30 days for passkey login
    });

    logAction(user.id, 'passkey_login', 'session', undefined, { ip, role: user.role });

    return new Response(JSON.stringify({ url: '/dashboard' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (err: any) {
    console.error('[PASSKEY-LOGIN-VERIFY]', err);
    return new Response(JSON.stringify({ error: 'Server error: ' + err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

// ─── Minimal CBOR map decoder ──────────────────────────────────────────────────

function decodeCBORMap(buf: Buffer): Record<number, unknown> {
  const [val] = decodeCBORValue(buf, 0);
  return val as Record<number, unknown>;
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

  // Negative integer (major type 1): value = -1 - n
  if (majorType === 1) return [-(length + 1), offset];

  switch (majorType) {
    case 0: return [length, offset];
    case 2: {
      const bytes = buf.subarray(offset, offset + length);
      return [Buffer.from(bytes), offset + length];
    }
    case 3: {
      const text = buf.subarray(offset, offset + length).toString('utf8');
      return [text, offset + length];
    }
    case 4: {
      const arr: unknown[] = [];
      for (let i = 0; i < length; i++) {
        const [val, next] = decodeCBORValue(buf, offset);
        arr.push(val); offset = next;
      }
      return [arr, offset];
    }
    case 5: {
      const map: Record<number | string, unknown> = {};
      for (let i = 0; i < length; i++) {
        const [key, next1] = decodeCBORValue(buf, offset);
        const [val, next2] = decodeCBORValue(buf, next1);
        map[key as number] = val;
        offset = next2;
      }
      return [map, offset];
    }
    default:
      throw new Error(`Unsupported CBOR major type: ${majorType}`);
  }
}
