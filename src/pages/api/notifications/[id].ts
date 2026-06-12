import type { APIRoute } from 'astro';
import { db } from '../../../db';
import { notifications } from '../../../db/schema';
import { and, eq } from 'drizzle-orm';
import { requireAuth } from '../../../utils/auth';

/**
 * PATCH /api/notifications/[id]
 * Marks a single notification as read. Only the owner can mark their own.
 */
export const PATCH: APIRoute = async ({ params, cookies }) => {
  const user = await requireAuth(cookies);
  if (!user) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const id = parseInt(params.id ?? '');
  if (isNaN(id)) {
    return new Response(JSON.stringify({ error: 'Invalid notification ID' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Scope update to this user's notifications only (security: can't mark others' as read)
  const result = await db
    .update(notifications)
    .set({ is_read: true })
    .where(and(eq(notifications.id, id), eq(notifications.user_id, user.id)))
    .returning();

  if (result.length === 0) {
    return new Response(JSON.stringify({ error: 'Notification not found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};

/**
 * DELETE /api/notifications/[id]
 * Deletes a single notification (for dismissal UI).
 */
export const DELETE: APIRoute = async ({ params, cookies }) => {
  const user = await requireAuth(cookies);
  if (!user) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const id = parseInt(params.id ?? '');
  if (isNaN(id)) {
    return new Response(JSON.stringify({ error: 'Invalid notification ID' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  await db
    .delete(notifications)
    .where(and(eq(notifications.id, id), eq(notifications.user_id, user.id)));

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
