import type { APIRoute } from 'astro';
import { getOrCreateLocalUser } from '../../../utils/stack';

export const POST: APIRoute = async ({ request }) => {
  try {
    const payload = await request.json();
    const eventType = payload.type;
    const eventData = payload.data;

    if (!eventType || !eventData) {
      return new Response(JSON.stringify({ error: 'Invalid payload structure' }), { status: 400 });
    }

    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';

    // Handle user events
    if (eventType === 'user.created' || eventType === 'user.updated') {
      const stackUser = {
        id: eventData.id,
        primary_email: eventData.primary_email,
        display_name: eventData.display_name,
        metadata: eventData.metadata || {},
      };

      if (!stackUser.primary_email) {
        return new Response(JSON.stringify({ error: 'Primary email is missing' }), { status: 400 });
      }

      await getOrCreateLocalUser(stackUser, ip);
      return new Response(JSON.stringify({ success: true, message: 'User synchronized successfully' }), { status: 200 });
    }

    return new Response(JSON.stringify({ success: true, message: 'Event ignored' }), { status: 200 });
  } catch (err: any) {
    console.error('[STACK WEBHOOK ERROR]', err?.message || err);
    return new Response(JSON.stringify({ error: err?.message || 'Internal server error' }), { status: 500 });
  }
};
