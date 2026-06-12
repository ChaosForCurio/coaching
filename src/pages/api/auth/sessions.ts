import type { APIRoute } from 'astro';
import { db } from '../../../db';
import { sessions } from '../../../db/schema';
import { eq, and, gt, ne } from 'drizzle-orm';
import { requireAuth, getSessionUserId } from '../../../utils/auth';

/**
 * GET /api/auth/sessions
 * Returns all active sessions for the current user.
 * Masks the token — only shows metadata.
 */
export const GET: APIRoute = async ({ cookies }) => {
  const user = await requireAuth(cookies);
  if (!user) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const now = new Date();
  const activeSessions = await db
    .select({
      id: sessions.id,
      created_at: sessions.created_at,
      expires_at: sessions.expires_at,
      ip: sessions.ip,
      user_agent: sessions.user_agent,
    })
    .from(sessions)
    .where(and(eq(sessions.user_id, user.id), gt(sessions.expires_at, now)));

  // Mark current session
  const currentToken = cookies.get('userSession')?.value;
  const currentSessionList = currentToken
    ? await db.select({ id: sessions.id }).from(sessions).where(eq(sessions.token, currentToken)).limit(1)
    : [];
  const currentSessionId = currentSessionList[0]?.id;

  const sessionData = activeSessions.map(s => ({
    ...s,
    isCurrent: s.id === currentSessionId,
  }));

  return new Response(JSON.stringify({ sessions: sessionData }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};

/**
 * DELETE /api/auth/sessions
 * Logs out ALL other devices (keeps current session active).
 */
export const DELETE: APIRoute = async ({ cookies }) => {
  const user = await requireAuth(cookies);
  if (!user) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const currentToken = cookies.get('userSession')?.value;

  // Find current session ID so we can exclude it
  const currentSessionList = currentToken
    ? await db.select({ id: sessions.id }).from(sessions).where(eq(sessions.token, currentToken)).limit(1)
    : [];
  const currentSessionId = currentSessionList[0]?.id;

  if (currentSessionId) {
    // Delete all sessions EXCEPT the current one
    await db
      .delete(sessions)
      .where(and(eq(sessions.user_id, user.id), ne(sessions.id, currentSessionId)));
  } else {
    // If we can't find current session, delete all (force full logout)
    await db.delete(sessions).where(eq(sessions.user_id, user.id));
  }

  return new Response(JSON.stringify({ success: true, message: 'All other sessions terminated.' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
