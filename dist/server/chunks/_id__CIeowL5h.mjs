import { d as db, n as notifications } from './schema_UQndYuIj.mjs';
import { and, eq } from 'drizzle-orm';
import { r as requireAuth } from './auth_LP014y4c.mjs';

const PATCH = async ({ params, cookies }) => {
  const user = await requireAuth(cookies);
  if (!user) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" }
    });
  }
  const id = parseInt(params.id ?? "");
  if (isNaN(id)) {
    return new Response(JSON.stringify({ error: "Invalid notification ID" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
  const result = await db.update(notifications).set({ is_read: true }).where(and(eq(notifications.id, id), eq(notifications.user_id, user.id))).returning();
  if (result.length === 0) {
    return new Response(JSON.stringify({ error: "Notification not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" }
    });
  }
  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
};
const DELETE = async ({ params, cookies }) => {
  const user = await requireAuth(cookies);
  if (!user) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" }
    });
  }
  const id = parseInt(params.id ?? "");
  if (isNaN(id)) {
    return new Response(JSON.stringify({ error: "Invalid notification ID" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
  await db.delete(notifications).where(and(eq(notifications.id, id), eq(notifications.user_id, user.id)));
  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  DELETE,
  PATCH
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
