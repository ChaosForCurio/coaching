import { d as db, s as sessions } from './schema_CuVt3FVI.mjs';
import { eq, and, ne, gt } from 'drizzle-orm';
import { r as requireAuth } from './auth_IRlGwh__.mjs';

const GET = async ({ cookies }) => {
  const user = await requireAuth(cookies);
  if (!user) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" }
    });
  }
  const now = /* @__PURE__ */ new Date();
  const activeSessions = await db.select({
    id: sessions.id,
    created_at: sessions.created_at,
    expires_at: sessions.expires_at,
    ip: sessions.ip,
    user_agent: sessions.user_agent
  }).from(sessions).where(and(eq(sessions.user_id, user.id), gt(sessions.expires_at, now)));
  const currentToken = cookies.get("userSession")?.value;
  const currentSessionList = currentToken ? await db.select({ id: sessions.id }).from(sessions).where(eq(sessions.token, currentToken)).limit(1) : [];
  const currentSessionId = currentSessionList[0]?.id;
  const sessionData = activeSessions.map((s) => ({
    ...s,
    isCurrent: s.id === currentSessionId
  }));
  return new Response(JSON.stringify({ sessions: sessionData }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
};
const DELETE = async ({ cookies }) => {
  const user = await requireAuth(cookies);
  if (!user) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" }
    });
  }
  const currentToken = cookies.get("userSession")?.value;
  const currentSessionList = currentToken ? await db.select({ id: sessions.id }).from(sessions).where(eq(sessions.token, currentToken)).limit(1) : [];
  const currentSessionId = currentSessionList[0]?.id;
  if (currentSessionId) {
    await db.delete(sessions).where(and(eq(sessions.user_id, user.id), ne(sessions.id, currentSessionId)));
  } else {
    await db.delete(sessions).where(eq(sessions.user_id, user.id));
  }
  return new Response(JSON.stringify({ success: true, message: "All other sessions terminated." }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  DELETE,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
