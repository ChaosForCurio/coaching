import type { APIRoute } from 'astro';
import { sendBroadcastNotification } from '@/lib/pushNotification';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const authHeader = request.headers.get('authorization');
    const adminSecret = process.env.ADMIN_NOTIFY_SECRET;

    // Optional admin key check for automated webhooks/cron jobs
    if (adminSecret && authHeader !== `Bearer ${adminSecret}`) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const { title, body, url, topic } = await request.json();

    if (!title || !body) {
      return new Response(
        JSON.stringify({
          error: 'Title and body are required for notifications',
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const result = await sendBroadcastNotification(
      { title, body, url },
      topic || 'general'
    );

    return new Response(JSON.stringify(result), {
      status: result.success ? 200 : 500,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
