import type { APIRoute } from 'astro';
import { db } from '../../../db';
import { sessions, passwordResetTokens } from '../../../db/schema';
import { and, lt, eq } from 'drizzle-orm';

/**
 * GET /api/cron/cleanup-sessions
 *
 * Cleans up expired sessions and used/expired password reset tokens.
 * Protected by a CRON_SECRET header to prevent public access.
 *
 * Intended to be called by:
 *  - Vercel Cron (vercel.json)
 *  - A simple external scheduler (cron-job.org, etc.)
 *  - Manual invocation for testing
 *
 * Example Vercel cron config (vercel.json):
 * {
 *   "crons": [{ "path": "/api/cron/cleanup-sessions", "schedule": "0 3 * * *" }]
 * }
 */
export const GET: APIRoute = async ({ request }) => {
  // ── Auth guard ──────────────────────────────────────────────────────────
  const secret = request.headers.get('x-cron-secret')
    ?? new URL(request.url).searchParams.get('secret');

  const expectedSecret =
    (import.meta.env?.CRON_SECRET as string | undefined) || process.env.CRON_SECRET;

  if (!expectedSecret || secret !== expectedSecret) {
    return new Response(JSON.stringify({ error: 'Forbidden' }), {
      status: 403,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const now = new Date();

  // ── Delete expired sessions ─────────────────────────────────────────────
  const deletedSessions = await db
    .delete(sessions)
    .where(lt(sessions.expires_at, now))
    .returning({ id: sessions.id });

  // ── Delete expired or used password reset tokens ────────────────────────
  const deletedTokens = await db
    .delete(passwordResetTokens)
    .where(
      // Delete if expired OR already used
      lt(passwordResetTokens.expires_at, now)
    )
    .returning({ id: passwordResetTokens.id });

  const usedTokens = await db
    .delete(passwordResetTokens)
    .where(eq(passwordResetTokens.used, true))
    .returning({ id: passwordResetTokens.id });

  const summary = {
    success: true,
    timestamp: now.toISOString(),
    deletedSessions: deletedSessions.length,
    deletedTokens: deletedTokens.length + usedTokens.length,
  };

  console.log('[Cron] Cleanup complete:', summary);

  return new Response(JSON.stringify(summary), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
