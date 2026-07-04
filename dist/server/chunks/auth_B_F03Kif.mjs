globalThis.process ??= {};
globalThis.process.env ??= {};
import { d as db, u as users, e as eq } from "./schema_AfQQoxGU.mjs";
import { v as verifyIdToken } from "./firebaseAdmin_DxqtLTrK.mjs";
async function requireAuth(cookies) {
  const idToken = cookies.get("__session")?.value;
  if (!idToken) return null;
  const decoded = await verifyIdToken(idToken);
  if (!decoded) return null;
  const uid = decoded.uid;
  try {
    const userList = await db.select().from(users).where(eq(users.firebase_uid, uid)).limit(1);
    return userList[0] || null;
  } catch (err) {
    console.error("Database error in requireAuth:", err);
    return null;
  }
}
async function getSessionUID(cookies) {
  const idToken = cookies.get("__session")?.value;
  if (!idToken) return null;
  const decoded = await verifyIdToken(idToken);
  return decoded?.uid ?? null;
}
export {
  getSessionUID as g,
  requireAuth as r
};
