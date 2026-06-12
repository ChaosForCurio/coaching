import type { APIRoute } from 'astro';
import { db } from '../../../db';
import { sessions } from '../../../db/schema';
import { eq } from 'drizzle-orm';
import { logAction } from '../../../utils/auditLog';
import { requireAuth } from '../../../utils/auth';

/**
 * POST /api/auth/logout
 * Deletes the current session from the database and clears the cookie.
 */
export const POST: APIRoute = async ({ cookies }) => {
  const user = await requireAuth(cookies);
  const currentToken = cookies.get('userSession')?.value;

  if (currentToken) {
    await db.delete(sessions).where(eq(sessions.token, currentToken));
    if (user) {
      logAction(user.id, 'logout', 'session', undefined, { token_prefix: currentToken.slice(0, 8) });
    }
  }

  // Clear the cookie regardless
  cookies.delete('userSession', { path: '/' });

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
