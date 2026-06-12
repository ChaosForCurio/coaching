import type { APIRoute } from 'astro';
import { db } from '../../../db';
import { users, passwordResetTokens } from '../../../db/schema';
import { eq } from 'drizzle-orm';
import crypto from 'node:crypto';
import { redis } from '../../../utils/redis';
import { rateLimit, rateLimitKeyByEmail } from '../../../utils/rateLimit';
import { sendPasswordResetEmail } from '../../../utils/email';

export const POST: APIRoute = async ({ request }) => {
  try {
    const contentType = request.headers.get('content-type') ?? '';
    let email: string | null = null;

    if (contentType.includes('application/json')) {
      const json = await request.json();
      email = json.email ?? null;
    } else {
      const data = await request.formData();
      email = data.get('email') as string | null;
    }

    if (!email || typeof email !== 'string') {
      return new Response(JSON.stringify({ error: 'Email is required.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // ── Rate limit: 3 reset requests per email per hour ────────────────────
    const { allowed, resetInSeconds } = await rateLimit(
      redis,
      rateLimitKeyByEmail('forgot_password', email),
      3,
      3600
    );

    if (!allowed) {
      return new Response(
        JSON.stringify({ error: `Too many reset requests. Try again in ${Math.ceil(resetInSeconds / 60)} minutes.` }),
        { status: 429, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // ── Look up user ───────────────────────────────────────────────────────
    const userList = await db.select().from(users).where(eq(users.email, email)).limit(1);
    const user = userList[0];

    // Always return success to prevent email enumeration
    if (!user) {
      return new Response(
        JSON.stringify({ success: true, message: 'If that email exists, a reset link has been sent.' }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // ── Generate a secure token ────────────────────────────────────────────
    const token = crypto.randomBytes(32).toString('hex');
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

    await db.insert(passwordResetTokens).values({
      user_id: user.id,
      token,
      expires_at: expiresAt,
    });

    // ── Send email ─────────────────────────────────────────────────────────
    const origin = request.headers.get('origin') || 'http://localhost:4321';
    const resetUrl = `${origin}/reset-password?token=${token}`;

    // Always log reset URL in dev for easy testing
    console.log(`[ForgotPassword] Reset URL for ${user.email}:`, resetUrl);

    try {
      await sendPasswordResetEmail(user.email, resetUrl);
    } catch (emailErr: any) {
      // Log the email failure but still return success to the user
      // (the token is saved — they can use the URL from server logs in dev)
      console.error('[ForgotPassword] Failed to send email:', emailErr?.message ?? emailErr);
    }

    return new Response(
      JSON.stringify({ success: true, message: 'If that email exists, a reset link has been sent.' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (err: any) {
    console.error('[ForgotPassword Error]', err?.message ?? err);
    return new Response(JSON.stringify({ error: 'Internal server error.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
