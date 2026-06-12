import type { APIRoute } from 'astro';
import { db } from '../../db';
import { users } from '../../db/schema';
import { eq } from 'drizzle-orm';
import { requireAuth } from '../../utils/auth';

export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    const currentUser = await requireAuth(cookies);
    
    if (!currentUser) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const body = await request.json();
    const { avatarUrl } = body;

    if (!avatarUrl || typeof avatarUrl !== 'string') {
      return new Response(JSON.stringify({ error: 'Invalid avatar URL' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Update the database
    await db.update(users)
      .set({ avatar_url: avatarUrl })
      .where(eq(users.id, currentUser.id));

    return new Response(JSON.stringify({ success: true, avatarUrl }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error updating avatar:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
