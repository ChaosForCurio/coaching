import { db } from '../db';
import { users, attendance, enrollments } from '../db/schema';
import { eq, and } from 'drizzle-orm';
import { logAction } from './auditLog';

const NEON_AUTH_BASE_URL = import.meta.env.NEON_AUTH_BASE_URL;

export interface NeonAuthUser {
  id: string;
  email: string;
  name?: string | null;
  emailVerified?: boolean;
  image?: string | null;
}

export interface NeonAuthSession {
  session: {
    id: string;
    userId: string;
    expiresAt: string;
  };
  user: NeonAuthUser;
}

/**
 * Validates a Neon Auth session by calling the managed Better Auth REST API.
 * Forwards the Neon Auth session cookie so the server can identify the session.
 */
export async function validateNeonAuthSession(
  neonSessionCookie: string
): Promise<NeonAuthSession | null> {
  if (!NEON_AUTH_BASE_URL) {
    console.error('[NEON AUTH] NEON_AUTH_BASE_URL is not configured');
    return null;
  }

  try {
    const res = await fetch(`${NEON_AUTH_BASE_URL}/get-session`, {
      headers: {
        // Forward the Neon Auth session cookie so the auth server can look it up
        cookie: neonSessionCookie,
      },
    });

    if (!res.ok) {
      console.error('[NEON AUTH] get-session failed:', res.status, await res.text());
      return null;
    }

    const data = await res.json();

    // Better Auth returns null or an empty body when there's no session
    if (!data || !data.user) {
      return null;
    }

    return data as NeonAuthSession;
  } catch (err) {
    console.error('[NEON AUTH] validateNeonAuthSession error:', err);
    return null;
  }
}

/**
 * Synchronizes the authenticated Neon Auth user with the local PostgreSQL `users` table.
 * Creates the user if they don't exist yet, applying the intended role for new accounts.
 * Also auto-marks attendance for student logins.
 */
export async function getOrCreateLocalUser(
  neonUser: NeonAuthUser,
  intendedRole: 'STUDENT' | 'TEACHER',
  clientIp?: string
): Promise<any> {
  const email = neonUser.email;
  if (!email) {
    throw new Error('Neon Auth user email is required for database synchronization');
  }

  // Find user by email
  const existingUsers = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1);

  let localUser = existingUsers[0];

  if (!localUser) {
    // Brand-new user — create with the intended role
    const insertedUsers = await db
      .insert(users)
      .values({
        name: neonUser.name || email.split('@')[0],
        email,
        password_hash: 'external_neon_auth',
        role: intendedRole,
        phone: null,
      })
      .returning();

    localUser = insertedUsers[0];

    // Audit log account creation
    logAction(localUser.id, 'register', 'session', undefined, {
      ip: clientIp,
      source: 'neon_auth_sync',
    });
  } else if (
    localUser.password_hash === 'external_neon_auth' &&
    localUser.role !== intendedRole
  ) {
    // Existing Neon-auth-only user whose role changed. Honor pending-role once.
    await db
      .update(users)
      .set({ role: intendedRole })
      .where(eq(users.id, localUser.id));
    localUser = { ...localUser, role: intendedRole };
  }

  // Auto-mark attendance if user is STUDENT
  if (localUser.role === 'STUDENT') {
    try {
      const today = new Date().toISOString().split('T')[0];
      const userEnrollments = await db
        .select()
        .from(enrollments)
        .where(eq(enrollments.student_id, localUser.id));

      for (const enr of userEnrollments) {
        const existing = await db
          .select()
          .from(attendance)
          .where(
            and(
              eq(attendance.student_id, localUser.id),
              eq(attendance.course_id, enr.course_id),
              eq(attendance.date, today)
            )
          )
          .limit(1);

        if (existing.length === 0) {
          await db.insert(attendance).values({
            student_id: localUser.id,
            course_id: enr.course_id,
            date: today,
          });
        }
      }
    } catch (attendanceErr) {
      console.error('[NEON AUTH SYNC] Failed to auto-mark attendance:', attendanceErr);
    }
  }

  return localUser;
}
