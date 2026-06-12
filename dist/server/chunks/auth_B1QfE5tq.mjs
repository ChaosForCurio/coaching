import { d as db, u as users, s as sessions } from './index_DJ2IURco.mjs';
import { eq, desc, and, gt } from 'drizzle-orm';
import crypto from 'node:crypto';

async function createSession(userId, ip, userAgent) {
  const token = crypto.randomUUID();
  const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1e3);
  await db.insert(sessions).values({
    user_id: userId,
    token,
    expires_at: expiresAt,
    ip: ip ?? null,
    user_agent: userAgent ?? null
  });
  const activeSessions = await db.select().from(sessions).where(eq(sessions.user_id, userId)).orderBy(desc(sessions.created_at));
  if (activeSessions.length > 3) {
    const sessionsToDelete = activeSessions.slice(3);
    for (const session of sessionsToDelete) {
      await db.delete(sessions).where(eq(sessions.id, session.id));
    }
  }
  return token;
}
async function getSessionUserId(cookies) {
  const token = cookies.get("userSession")?.value;
  if (!token) return null;
  try {
    const sessionList = await db.select().from(sessions).where(and(eq(sessions.token, token), gt(sessions.expires_at, /* @__PURE__ */ new Date()))).limit(1);
    if (sessionList.length === 0) {
      return null;
    }
    return sessionList[0].user_id;
  } catch (err) {
    return null;
  }
}
async function requireAuth(cookies) {
  const userId = await getSessionUserId(cookies);
  if (!userId) return null;
  const userList = await db.select().from(users).where(eq(users.id, userId)).limit(1);
  return userList[0] || null;
}

export { createSession as c, requireAuth as r };
