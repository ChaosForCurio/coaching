import type { APIRoute } from 'astro';
import { neon } from '@neondatabase/serverless';
import { getOrCreateLocalUser, type NeonAuthUser } from '../../../utils/neonAuth';
import { createSession } from '../../../utils/auth';
import { logAction } from '../../../utils/auditLog';

/**
 * POST /api/auth/sync-sso
 *
 * Receives the session ID from the client-side SSO callback page,
 * verifies it securely against the neon_auth database schema,
 * and creates the first-party session.
 */
export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    const { sessionId } = await request.json();
    if (!sessionId || typeof sessionId !== 'string') {
      return new Response(JSON.stringify({ error: 'Missing session ID' }), { status: 400 });
    }

    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
    const ua = request.headers.get('user-agent') ?? undefined;

    // 1. Verify the session ID against the neon_auth schema
    const sql = neon(import.meta.env.DATABASE_URL);
    
    // Note: We use raw SQL with bound parameters to prevent SQL injection.
    // Better Auth stores sessions in neon_auth.session and users in neon_auth.user
    const sessionRes = await sql`
      SELECT "userId", "expiresAt" 
      FROM neon_auth.session 
      WHERE id = ${sessionId}
      LIMIT 1
    `;

    if (sessionRes.length === 0) {
      return new Response(JSON.stringify({ error: 'Invalid session ID' }), { status: 401 });
    }

    const sessionData = sessionRes[0];
    
    // Check if session has expired
    if (new Date(sessionData.expiresAt) < new Date()) {
      return new Response(JSON.stringify({ error: 'Session expired' }), { status: 401 });
    }

    // 2. Fetch the user details from neon_auth.user
    const userRes = await sql`
      SELECT id, name, email, "emailVerified", image
      FROM neon_auth.user
      WHERE id = ${sessionData.userId}
      LIMIT 1
    `;

    if (userRes.length === 0) {
      return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });
    }

    const authUser = userRes[0] as NeonAuthUser;

    // 3. Determine intended role from pending-role cookie
    const pendingRoleCookie = cookies.get('pending-role')?.value;
    const intendedRole: 'STUDENT' | 'TEACHER' = pendingRoleCookie === 'TEACHER' ? 'TEACHER' : 'STUDENT';
    
    // Clear the short-lived pending-role cookie
    cookies.delete('pending-role', { path: '/' });

    // 4. Sync / create the local DB user
    const localUser = await getOrCreateLocalUser(authUser, intendedRole, ip);

    // 5. Create local session
    const sessionToken = await createSession(localUser.id, ip, ua);

    cookies.set('userSession', sessionToken, {
      path: '/',
      httpOnly: true,
      secure: import.meta.env.PROD,
      sameSite: 'lax',
      maxAge: 60 * 60 * 24, // 1 day
    });

    // 6. Audit log
    logAction(localUser.id, 'login', 'session', undefined, {
      ip,
      role: localUser.role,
      source: 'neon_auth_google_sso',
    });

    // 7. Return redirect URL
    const destination = localUser.role === 'TEACHER' ? '/dashboard/mark' : '/dashboard';
    
    return new Response(JSON.stringify({ redirectUrl: destination }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (err) {
    console.error('[SYNC SSO] Error:', err);
    return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500 });
  }
};
