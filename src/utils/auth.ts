import type { AstroCookies } from 'astro';
import { db } from '../db';
import { users, sessions } from '../db/schema';
import { eq, and, gt } from 'drizzle-orm';
import crypto from 'node:crypto';
import { desc } from 'drizzle-orm';
import { validateStackSession, getOrCreateLocalUser } from './stack';

export async function createSession(userId: number, ip?: string, userAgent?: string): Promise<string> {
  const token = crypto.randomUUID();
  const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000); // 1 day

  await db.insert(sessions).values({
    user_id: userId,
    token,
    expires_at: expiresAt,
    ip: ip ?? null,
    user_agent: userAgent ?? null,
  });

  // Limit to 3 active sessions — oldest are pruned
  const activeSessions = await db
    .select()
    .from(sessions)
    .where(eq(sessions.user_id, userId))
    .orderBy(desc(sessions.created_at));

  if (activeSessions.length > 3) {
    const sessionsToDelete = activeSessions.slice(3);
    for (const session of sessionsToDelete) {
      await db.delete(sessions).where(eq(sessions.id, session.id));
    }
  }

  return token;
}

export async function getSessionUserId(cookies: AstroCookies): Promise<number | null> {
  // 1. Check Stack Auth session first
  const stackToken = cookies.get('stack-access-token')?.value;
  if (stackToken) {
    const stackUser = await validateStackSession(stackToken);
    if (stackUser) {
      try {
        // Read the role chosen on the login page (set as a short-lived cookie)
        const pendingRole = cookies.get('pending-role')?.value;
        const intendedRole: 'STUDENT' | 'TEACHER' =
          pendingRole === 'TEACHER' ? 'TEACHER' : 'STUDENT';

        // Inject the intended role into metadata so new users get the right role
        const stackUserWithRole = {
          ...stackUser,
          metadata: {
            ...(stackUser.metadata ?? {}),
            role: intendedRole,
          },
        };

        const localUser = await getOrCreateLocalUser(stackUserWithRole);

        // Clear the short-lived pending-role cookie once consumed
        if (pendingRole) {
          cookies.delete('pending-role', { path: '/' });
        }

        return localUser.id;
      } catch (err) {
        console.error('[AUTH UTILS] Failed to sync Stack user:', err);
      }
    }
  }

  // 2. Fallback to legacy userSession
  const token = cookies.get('userSession')?.value;
  if (!token) return null;

  try {
    const sessionList = await db
      .select()
      .from(sessions)
      .where(and(eq(sessions.token, token), gt(sessions.expires_at, new Date())))
      .limit(1);

    if (sessionList.length === 0) {
      return null;
    }

    return sessionList[0].user_id;
  } catch (err) {
    return null;
  }
}

export async function requireAuth(cookies: AstroCookies) {
  const userId = await getSessionUserId(cookies);
  if (!userId) return null;

  const userList = await db.select().from(users).where(eq(users.id, userId)).limit(1);
  return userList[0] || null;
}

