import { r as requireAuth } from './auth_CFMQny9D.mjs';
import { d as db, g as passkeys } from './schema_CuVt3FVI.mjs';
import { and, eq } from 'drizzle-orm';
import { l as logAction } from './auditLog_Ddj_dmE3.mjs';

const POST = async ({ request, cookies }) => {
  try {
    const user = await requireAuth(cookies);
    if (!user) {
      return new Response(JSON.stringify({ error: "Not authenticated" }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }
    const body = await request.json();
    const { credentialId } = body;
    if (!credentialId) {
      return new Response(JSON.stringify({ error: "Missing credential ID" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    await db.delete(passkeys).where(and(eq(passkeys.credential_id, credentialId), eq(passkeys.user_id, user.id)));
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    logAction(user.id, "passkey_revoke", "user", user.id, { credentialId, ip });
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    console.error("[PASSKEY-DELETE]", err);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
