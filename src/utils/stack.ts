import { db } from '../db';
import { users, attendance, enrollments } from '../db/schema';
import { eq, and } from 'drizzle-orm';
import { logAction } from './auditLog';

const PROJECT_ID = import.meta.env.PUBLIC_STACK_PROJECT_ID;
const SECRET_KEY = import.meta.env.STACK_SECRET_KEY || import.meta.env.HEXCLAVE_SECRET_SERVER_KEY;

export interface StackUser {
  id: string;
  primary_email?: string;
  display_name?: string;
  metadata?: {
    role?: 'STUDENT' | 'TEACHER';
    phone?: string;
    [key: string]: any;
  };
}

/**
 * Validates the access token with Stack Auth's server.
 */
export async function validateStackSession(accessToken: string): Promise<StackUser | null> {
  if (!PROJECT_ID || !SECRET_KEY) {
    console.error('Stack Auth environment variables are not configured');
    return null;
  }

  try {
    const res = await fetch('https://api.hexclave.com/api/v1/users/me', {
      headers: {
        'x-stack-access-type': 'server',
        'x-stack-project-id': PROJECT_ID,
        'x-stack-secret-server-key': SECRET_KEY,
        'x-stack-access-token': accessToken,
      },
    });

    if (!res.ok) {
      return null;
    }

    const data = await res.json();
    return {
      id: data.id,
      primary_email: data.primary_email,
      display_name: data.display_name,
      metadata: data.metadata || {},
    };
  } catch (err) {
    console.error('[STACK AUTH ERROR] validateStackSession:', err);
    return null;
  }
}

/**
 * Synchronizes the authenticated Stack user with the local PostgreSQL database.
 */
export async function getOrCreateLocalUser(stackUser: StackUser, clientIp?: string): Promise<any> {
  const email = stackUser.primary_email;
  if (!email) {
    throw new Error('Stack user email is required for database synchronization');
  }

  // Find user by email
  const existingUsers = await db.select().from(users).where(eq(users.email, email)).limit(1);
  let localUser = existingUsers[0];

  if (!localUser) {
    // Determine role from metadata or default to STUDENT
    const role = (stackUser.metadata?.role || 'STUDENT').toUpperCase() as 'STUDENT' | 'TEACHER';
    const phone = stackUser.metadata?.phone || null;

    const insertedUsers = await db.insert(users).values({
      name: stackUser.display_name || email.split('@')[0],
      email: email,
      password_hash: 'external_stack_auth',
      role: role,
      phone: phone,
    }).returning();

    localUser = insertedUsers[0];
    
    // Audit log account creation
    logAction(localUser.id, 'register', 'session', undefined, { ip: clientIp, source: 'stack_auth_sync' });
  }

  // Auto-mark attendance if user is STUDENT
  if (localUser.role === 'STUDENT') {
    try {
      const today = new Date().toISOString().split('T')[0];
      const userEnrollments = await db.select().from(enrollments).where(eq(enrollments.student_id, localUser.id));

      for (const enr of userEnrollments) {
        const existing = await db.select().from(attendance)
          .where(and(
            eq(attendance.student_id, localUser.id),
            eq(attendance.course_id, enr.course_id),
            eq(attendance.date, today)
          ))
          .limit(1);

        if (existing.length === 0) {
          await db.insert(attendance).values({
            student_id: localUser.id,
            course_id: enr.course_id,
            date: today
          });
        }
      }
    } catch (attendanceErr) {
      console.error('[STACK AUTH SYNC] Failed to auto-mark attendance:', attendanceErr);
    }
  }

  return localUser;
}
