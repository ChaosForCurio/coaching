import { d as db, u as users } from './schema_B5qW88Nb.mjs';
import { eq } from 'drizzle-orm';

async function requireAuth(cookies) {
  const uid = cookies.get("firebase_uid")?.value;
  if (!uid) return null;
  try {
    const userList = await db.select().from(users).where(eq(users.firebase_uid, uid)).limit(1);
    return userList[0] || null;
  } catch (err) {
    console.error("Database error in requireAuth:", err);
    return null;
  }
}

export { requireAuth as r };
