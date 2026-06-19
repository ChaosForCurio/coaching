import type { APIRoute } from 'astro';
import { validateNeonAuthSession, getOrCreateLocalUser } from '../../../utils/neonAuth';
import { createSession } from '../../../utils/auth';
import { logAction } from '../../../utils/auditLog';

/**
 * GET /api/auth/sso-callback
 *
 * Neon Auth (Better Auth) redirects here after the Google OAuth flow completes.
 * Neon Auth sets a `__Secure-neonauth.session_token` (or `neonauth.session_token`
 * on non-HTTPS) cookie before redirecting, so we:
 *  1. Forward all cookies to the Neon Auth /get-session endpoint to retrieve
 *     the authenticated user
 *  2. Read the `pending-role` cookie set by the login page JS
 *  3. Sync / create the local DB user (applying the chosen role for NEW users)
 *  4. Issue our own `userSession` cookie and redirect to /dashboard
 */
export const GET: APIRoute = async ({ request, cookies }) => {
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
  const ua = request.headers.get('user-agent') ?? undefined;

  // ── 1. Forward all cookies to Neon Auth to validate the session ──────────
  // Better Auth sets __Secure-neonauth.session_token (HTTPS) or
  // neonauth.session_token (HTTP / localhost) after OAuth completes.
  const rawCookieHeader = request.headers.get('cookie') ?? '';

  if (!rawCookieHeader) {
    return new Response(null, {
      status: 302,
      headers: { Location: '/login?error=no_session' },
    });
  }

  const neonSession = await validateNeonAuthSession(rawCookieHeader);

  if (!neonSession || !neonSession.user?.email) {
    return new Response(null, {
      status: 302,
      headers: { Location: '/login?error=invalid_session' },
    });
  }

  // ── 2. Determine intended role from pending-role cookie ──────────────────
  const pendingRoleCookie = cookies.get('pending-role')?.value;
  const intendedRole: 'STUDENT' | 'TEACHER' =
    pendingRoleCookie === 'TEACHER' ? 'TEACHER' : 'STUDENT';

  // Clear the short-lived pending-role cookie
  cookies.delete('pending-role', { path: '/' });

  // ── 3. Sync / create the local DB user ───────────────────────────────────
  const localUser = await getOrCreateLocalUser(neonSession.user, intendedRole, ip);

  // ── 4. Create local session ──────────────────────────────────────────────
  const sessionToken = await createSession(localUser.id, ip, ua);

  cookies.set('userSession', sessionToken, {
    path: '/',
    httpOnly: true,
    secure: import.meta.env.PROD,
    sameSite: 'lax',
    maxAge: 60 * 60 * 24, // 1 day
  });

  // ── 5. Audit log ─────────────────────────────────────────────────────────
  logAction(localUser.id, 'login', 'session', undefined, {
    ip,
    role: localUser.role,
    source: 'neon_auth_google',
  });

  // ── 6. Redirect to role-appropriate dashboard ────────────────────────────
  const destination = localUser.role === 'TEACHER' ? '/dashboard/mark' : '/dashboard';

  return new Response(null, {
    status: 302,
    headers: { Location: destination },
  });
};
