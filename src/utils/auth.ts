import type { AstroCookies } from 'astro';
import { db } from '../db';
import { users } from '../db/schema';
import { eq } from 'drizzle-orm';
import { verifyIdToken } from './firebaseAdmin';

/**
 * Validates the user session by verifying the Firebase ID Token stored in
 * the `__session` cookie. The token is cryptographically signed by Google
 * and verified server-side — it cannot be forged.
 */
export async function requireAuth(cookies: AstroCookies) {
  const idToken = cookies.get('__session')?.value;
  if (!idToken) return null;

  // Verify the token with Firebase Admin — this makes it production-safe.
  const decoded = await verifyIdToken(idToken);
  if (!decoded) return null;

  const uid = decoded.uid;

  try {
    const userList = await db
      .select()
      .from(users)
      .where(eq(users.firebase_uid, uid))
      .limit(1);

    return userList[0] || null;
  } catch (err) {
    console.error('Database error in requireAuth:', err);
    return null;
  }
}

/**
 * Returns the Firebase UID from a verified session cookie, without a DB lookup.
 * Useful for API routes that only need to know who the caller is.
 */
export async function getSessionUID(cookies: AstroCookies): Promise<string | null> {
  const idToken = cookies.get('__session')?.value;
  if (!idToken) return null;
  const decoded = await verifyIdToken(idToken);
  return decoded?.uid ?? null;
}
