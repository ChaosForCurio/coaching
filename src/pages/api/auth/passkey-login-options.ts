/**
 * POST /api/auth/passkey-login-options
 *
 * Called when the user clicks "Sign in with Windows Hello".
 * Returns WebAuthn PublicKeyCredentialRequestOptions (assertion options).
 * Stores the challenge in Redis (90s TTL) keyed by a random session handle.
 */
import type { APIRoute } from 'astro';
import { db } from '../../../db';
import { passkeys, users } from '../../../db/schema';
import { eq } from 'drizzle-orm';
import { redis } from '../../../utils/redis';
import crypto from 'node:crypto';

function getRpId(request: Request): string {
  const host = request.headers.get('host') ?? 'localhost';
  return host.split(':')[0];
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json().catch(() => ({}));
    const email: string | undefined = body?.email;

    const rpId = getRpId(request);

    // Build allowed credentials list — if we know the email, pre-populate them
    let allowCredentials: { type: string; id: string }[] = [];
    if (email) {
      const userList = await db.select().from(users).where(eq(users.email, email)).limit(1);
      if (userList.length > 0) {
        const userPasskeys = await db
          .select()
          .from(passkeys)
          .where(eq(passkeys.user_id, userList[0].id));
        allowCredentials = userPasskeys.map(pk => ({
          type: 'public-key',
          id: pk.credential_id,
          transports: ['internal'],
        }));
      }
    }

    // Generate a challenge and a one-time handle to correlate request → verify
    const challenge = crypto.randomBytes(32).toString('base64url');
    const handle = crypto.randomBytes(16).toString('hex');

    // Store challenge under handle in Redis (90 seconds)
    await redis.set(`passkey_login_challenge:${handle}`, challenge, { ex: 90 });

    const options = {
      challenge,
      rpId,
      allowCredentials,
      userVerification: 'required',
      timeout: 60000,
    };

    return new Response(JSON.stringify({ options, handle }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err: any) {
    console.error('[PASSKEY-LOGIN-OPTIONS]', err);
    return new Response(JSON.stringify({ error: 'Server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
