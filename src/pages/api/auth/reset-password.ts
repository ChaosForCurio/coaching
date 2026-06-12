import type { APIRoute } from 'astro';
import { db } from '../../../db';
import { users, passwordResetTokens } from '../../../db/schema';
import { eq, and, gt } from 'drizzle-orm';
import bcrypt from 'bcryptjs';
import { logAction } from '../../../utils/auditLog';

export const POST: APIRoute = async ({ request }) => {
  try {
    const contentType = request.headers.get('content-type') ?? '';
    let token: string | null = null;
    let newPassword: string | null = null;

    if (contentType.includes('application/json')) {
      const json = await request.json();
      token = json.token ?? null;
      newPassword = json.password ?? null;
    } else {
      const data = await request.formData();
      token = data.get('token') as string | null;
      newPassword = data.get('password') as string | null;
    }

    if (!token || !newPassword) {
      return new Response(JSON.stringify({ error: 'Token and new password are required.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (newPassword.length < 8) {
      return new Response(JSON.stringify({ error: 'Password must be at least 8 characters.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // ── Validate token ─────────────────────────────────────────────────────
    const now = new Date();
    const tokenRecord = await db
      .select()
      .from(passwordResetTokens)
      .where(
        and(
          eq(passwordResetTokens.token, token),
          eq(passwordResetTokens.used, false),
          gt(passwordResetTokens.expires_at, now)
        )
      )
      .limit(1);

    if (tokenRecord.length === 0) {
      return new Response(
        JSON.stringify({ error: 'Invalid or expired reset link. Please request a new one.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const resetRecord = tokenRecord[0];

    // ── Update the user's password ─────────────────────────────────────────
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(newPassword, salt);

    await db
      .update(users)
      .set({ password_hash: passwordHash })
      .where(eq(users.id, resetRecord.user_id));

    // ── Mark token as used ─────────────────────────────────────────────────
    await db
      .update(passwordResetTokens)
      .set({ used: true })
      .where(eq(passwordResetTokens.id, resetRecord.id));

    // ── Audit log ──────────────────────────────────────────────────────────
    logAction(resetRecord.user_id, 'password_reset', 'user', resetRecord.user_id);

    return new Response(
      JSON.stringify({ success: true, message: 'Password reset successfully. You can now log in.' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (err: any) {
    console.error('[ResetPassword Error]', err?.message ?? err);
    return new Response(JSON.stringify({ error: 'Internal server error.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
