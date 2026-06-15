import { d as db, s as sessions, p as passwordResetTokens } from './schema_CuVt3FVI.mjs';
import { lt, eq } from 'drizzle-orm';

const GET = async ({ request }) => {
  const secret = request.headers.get("x-cron-secret") ?? new URL(request.url).searchParams.get("secret");
  const expectedSecret = "cron_super_secret_change_me_in_prod";
  if (secret !== expectedSecret) {
    return new Response(JSON.stringify({ error: "Forbidden" }), {
      status: 403,
      headers: { "Content-Type": "application/json" }
    });
  }
  const now = /* @__PURE__ */ new Date();
  const deletedSessions = await db.delete(sessions).where(lt(sessions.expires_at, now)).returning({ id: sessions.id });
  const deletedTokens = await db.delete(passwordResetTokens).where(
    // Delete if expired OR already used
    lt(passwordResetTokens.expires_at, now)
  ).returning({ id: passwordResetTokens.id });
  const usedTokens = await db.delete(passwordResetTokens).where(eq(passwordResetTokens.used, true)).returning({ id: passwordResetTokens.id });
  const summary = {
    success: true,
    timestamp: now.toISOString(),
    deletedSessions: deletedSessions.length,
    deletedTokens: deletedTokens.length + usedTokens.length
  };
  console.log("[Cron] Cleanup complete:", summary);
  return new Response(JSON.stringify(summary), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
