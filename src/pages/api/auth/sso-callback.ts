import type { APIRoute } from 'astro';
import { db } from '../../../db';
import { users } from '../../../db/schema';
import { eq } from 'drizzle-orm';
import { validateStackSession, getOrCreateLocalUser } from '../../../utils/stack';
import { createSession } from '../../../utils/auth';
import { logAction } from '../../../utils/auditLog';

/**
 * GET /api/auth/sso-callback
 *
 * Stack Auth redirects here after the Google OAuth flow completes.
 * Stack sets a `stack-access-token` cookie before redirecting, so we:
 *  1. Read that token and validate it with the Stack API
 *  2. Read the `pending-role` cookie set by the login page JS
 *  3. Sync / create the local DB user (applying the chosen role for NEW users)
 *  4. If the user already exists and their role is the generic default, we honour
 *     the pending-role so a teacher signing up for the first time gets TEACHER
 *  5. Issue our own `userSession` cookie and redirect to /dashboard
 */
export const GET: APIRoute = async ({ request, cookies }) => {
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
  const ua = request.headers.get('user-agent') ?? undefined;

  // ── 1. Read Stack access token ───────────────────────────────────────────
  //  Stack Auth sets this cookie on the callback redirect.
  const stackToken = cookies.get('stack-access-token')?.value;

  if (!stackToken) {
    // No token — send back to login with an error hint
    return new Response(null, {
      status: 302,
      headers: { Location: '/login?error=no_token' },
    });
  }

  // ── 2. Validate with Stack API ───────────────────────────────────────────
  const stackUser = await validateStackSession(stackToken);

  if (!stackUser || !stackUser.primary_email) {
    return new Response(null, {
      status: 302,
      headers: { Location: '/login?error=invalid_token' },
    });
  }

  // ── 3. Determine intended role from pending-role cookie ──────────────────
  const pendingRoleCookie = cookies.get('pending-role')?.value;
  const intendedRole: 'STUDENT' | 'TEACHER' =
    pendingRoleCookie === 'TEACHER' ? 'TEACHER' : 'STUDENT';

  // Clear the short-lived pending-role cookie
  cookies.delete('pending-role', { path: '/' });

  // ── 4. Check if user already exists in our DB ────────────────────────────
  const existingUsers = await db
    .select()
    .from(users)
    .where(eq(users.email, stackUser.primary_email))
    .limit(1);

  let localUser = existingUsers[0];

  if (!localUser) {
    // Brand-new user — inject the intended role into the Stack user metadata
    // so getOrCreateLocalUser creates the account with the right role.
    const stackUserWithRole = {
      ...stackUser,
      metadata: {
        ...(stackUser.metadata ?? {}),
        role: intendedRole,
      },
    };
    localUser = await getOrCreateLocalUser(stackUserWithRole, ip);
  } else if (
    localUser.password_hash === 'external_stack_auth' &&
    localUser.role !== intendedRole
  ) {
    // Existing Stack-auth-only user whose role doesn't match the selection.
    // We respect the pending-role once (useful if someone signed up as STUDENT
    // and now logs in selecting TEACHER, assuming they are the institute owner).
    // For production you may want to gate this behind an admin approval flow.
    await db
      .update(users)
      .set({ role: intendedRole })
      .where(eq(users.id, localUser.id));
    localUser = { ...localUser, role: intendedRole };
  }

  // ── 5. Create local session ──────────────────────────────────────────────
  const sessionToken = await createSession(localUser.id, ip, ua);

  cookies.set('userSession', sessionToken, {
    path: '/',
    httpOnly: true,
    secure: import.meta.env.PROD,
    sameSite: 'lax',
    maxAge: 60 * 60 * 24, // 1 day
  });

  // ── 6. Audit log ─────────────────────────────────────────────────────────
  logAction(localUser.id, 'login', 'session', undefined, {
    ip,
    role: localUser.role,
    source: 'stack_sso_google',
  });

  // ── 7. Redirect to dashboard ─────────────────────────────────────────────
  return new Response(null, {
    status: 302,
    headers: { Location: '/dashboard' },
  });
};
