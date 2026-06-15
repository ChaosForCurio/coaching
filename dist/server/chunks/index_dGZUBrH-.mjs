import { d as db, n as notifications } from './schema_CuVt3FVI.mjs';
import { eq, desc } from 'drizzle-orm';
import { r as requireAuth } from './auth_IRlGwh__.mjs';

const GET = async ({ cookies }) => {
  const user = await requireAuth(cookies);
  if (!user) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" }
    });
  }
  const userNotifications = await db.select().from(notifications).where(eq(notifications.user_id, user.id)).orderBy(desc(notifications.created_at)).limit(50);
  const unreadCount = userNotifications.filter((n) => !n.is_read).length;
  return new Response(
    JSON.stringify({ notifications: userNotifications, unreadCount }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
};
const PATCH = async ({ cookies }) => {
  const user = await requireAuth(cookies);
  if (!user) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" }
    });
  }
  await db.update(notifications).set({ is_read: true }).where(eq(notifications.user_id, user.id));
  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  PATCH
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
