import type { APIRoute } from 'astro';
import { db } from '../../../db/client';
import { pushSubscriptions } from '../../../db/schema';
import { eq } from 'drizzle-orm';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { token, userId, topic = 'general', deviceType = 'chrome' } = body;

    if (!token || typeof token !== 'string') {
      return new Response(
        JSON.stringify({ error: 'FCM push token is required' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Upsert subscription
    const existing = await db
      .select()
      .from(pushSubscriptions)
      .where(eq(pushSubscriptions.token, token))
      .limit(1);

    if (existing.length > 0) {
      await db
        .update(pushSubscriptions)
        .set({
          userId: userId ? Number(userId) : existing[0].userId,
          topic,
          deviceType,
          updatedAt: new Date(),
        })
        .where(eq(pushSubscriptions.token, token));
    } else {
      await db.insert(pushSubscriptions).values({
        token,
        userId: userId ? Number(userId) : null,
        topic,
        deviceType,
      });
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Subscribed to notifications successfully',
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error: any) {
    console.error('Error saving push subscription:', error);
    return new Response(
      JSON.stringify({
        error: 'Failed to save subscription',
        details: error.message,
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
