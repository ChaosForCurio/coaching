import { d as db, f as auditLogs } from './schema_B5qW88Nb.mjs';
import { eq, desc } from 'drizzle-orm';
import { r as requireAuth } from './auth_CpEEQcq3.mjs';

const GET = async ({ request, cookies }) => {
  const user = await requireAuth(cookies);
  if (!user) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" }
    });
  }
  if (user.role !== "TEACHER") {
    return new Response(
      JSON.stringify({ error: "Forbidden. Teachers only." }),
      {
        status: 403,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
  const url = new URL(request.url);
  const limit = Math.min(parseInt(url.searchParams.get("limit") ?? "50"), 100);
  const logs = await db.select({
    id: auditLogs.id,
    action: auditLogs.action,
    entity_type: auditLogs.entity_type,
    entity_id: auditLogs.entity_id,
    metadata: auditLogs.metadata,
    created_at: auditLogs.created_at
  }).from(auditLogs).where(eq(auditLogs.user_id, user.id)).orderBy(desc(auditLogs.created_at)).limit(limit);
  return new Response(JSON.stringify({ logs }), {
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
