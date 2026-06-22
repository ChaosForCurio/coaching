import type { APIRoute } from 'astro';
import { db } from '../../../db';
import { notifications } from '../../../db/schema';
import { eq, desc } from 'drizzle-orm';
import { requireAuth } from '../../../utils/auth';

/**
 * GET /api/notifications
 * Returns all notifications for the authenticated user, newest first.
 * Includes unread count in the response.
 */
export const GET: APIRoute = async ({ cookies }) => {
  const user = await requireAuth(cookies);
  if (!user) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const userNotifications = await db
    .select()
    .from(notifications)
    .where(eq(notifications.user_id, user.id))
    .orderBy(desc(notifications.created_at))
    .limit(50);

  const unreadCount = userNotifications.filter((n) => !n.is_read).length;

  return new Response(
    JSON.stringify({ notifications: userNotifications, unreadCount }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
};

/**
 * PATCH /api/notifications
 * Marks ALL notifications as read for the current user.
 */
export const PATCH: APIRoute = async ({ cookies }) => {
  const user = await requireAuth(cookies);
  if (!user) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  await db
    .update(notifications)
    .set({ is_read: true })
    .where(eq(notifications.user_id, user.id));

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
