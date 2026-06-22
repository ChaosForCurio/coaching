import type { AstroCookies } from 'astro';
import { db } from '../db';
import { users } from '../db/schema';
import { eq } from 'drizzle-orm';

/**
 * Validates the user session based on the Firebase UID cookie.
 * IMPORTANT: In a production app, you should verify a Firebase ID Token here instead of a raw UID.
 */
export async function requireAuth(cookies: AstroCookies) {
  const uid = cookies.get('firebase_uid')?.value;
  if (!uid) return null;

  try {
    const userList = await db
      .select()
      .from(users)
      .where(eq(users.firebase_uid, uid))
      .limit(1);
      
    return userList[0] || null;
  } catch (err) {
    console.error("Database error in requireAuth:", err);
    return null;
  }
}
