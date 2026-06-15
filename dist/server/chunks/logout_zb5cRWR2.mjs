import { d as db, s as sessions } from './schema_CuVt3FVI.mjs';
import { eq } from 'drizzle-orm';
import { l as logAction } from './auditLog_Ddj_dmE3.mjs';
import { r as requireAuth } from './auth_IRlGwh__.mjs';

const POST = async ({ cookies }) => {
  const user = await requireAuth(cookies);
  const currentToken = cookies.get("userSession")?.value;
  if (currentToken) {
    await db.delete(sessions).where(eq(sessions.token, currentToken));
    if (user) {
      logAction(user.id, "logout", "session", void 0, { token_prefix: currentToken.slice(0, 8) });
    }
  }
  cookies.delete("userSession", { path: "/" });
  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
