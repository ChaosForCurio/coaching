/**
 * POST /api/auth/passkey-register-options
 *
 * Called when a logged-in user wants to register a passkey.
 * Returns WebAuthn PublicKeyCredentialCreationOptions.
 * Stores the challenge in Redis for 90 seconds.
 */
import type { APIRoute } from 'astro';
import { requireAuth } from '../../../utils/auth';
import { redis } from '../../../utils/redis';
import crypto from 'node:crypto';

// The Relying Party ID must match the domain (without port) of the site.
// For localhost we use 'localhost'; on production use your actual domain.
function getRpId(request: Request): string {
  const host = request.headers.get('host') ?? 'localhost';
  // Strip port if present
  return host.split(':')[0];
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

    const rpId = getRpId(request);
    const origin = request.headers.get('origin') ?? `https://${rpId}`;

    // Generate a random 32-byte challenge
    const challengeBytes = crypto.randomBytes(32);
    const challengeB64 = challengeBytes.toString('base64url');

    if (!redis) {
      return new Response(JSON.stringify({ error: 'Redis is not configured' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Store challenge in Redis keyed by user id (TTL 90s)
    await redis.set(`passkey_reg_challenge:${user.id}`, challengeB64, { ex: 90 });

    // User ID as base64url (WebAuthn user handle)
    const userIdB64 = Buffer.from(String(user.id)).toString('base64url');

    const options = {
      challenge: challengeB64,
      rp: {
        name: 'Bhavya Career Institute',
        id: rpId,
      },
      user: {
        id: userIdB64,
        name: user.email,
        displayName: user.name,
      },
      pubKeyCredParams: [
        { type: 'public-key', alg: -7  },  // ES256 (ECDSA w/ SHA-256)
        { type: 'public-key', alg: -257 }, // RS256 (RSASSA-PKCS1-v1_5)
      ],
      authenticatorSelection: {
        authenticatorAttachment: 'platform', // only built-in (Windows Hello, Touch ID)
        userVerification: 'required',
        residentKey: 'preferred',
      },
      timeout: 60000,
      attestation: 'none', // no attestation needed for this use case
    };

    return new Response(JSON.stringify({ options, origin }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err: any) {
    console.error('[PASSKEY-REG-OPTIONS]', err);
    return new Response(JSON.stringify({ error: 'Server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
