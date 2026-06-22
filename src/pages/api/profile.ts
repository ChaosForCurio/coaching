import type { APIRoute } from 'astro';
import { db } from '../../db';
import { users } from '../../db/schema';
import { eq } from 'drizzle-orm';
import { redis } from '../../utils/redis';
import { rateLimit, rateLimitKey } from '../../utils/rateLimit';

function sanitizeHTML(str: string): string {
  return str.replace(/<[^>]*>?/gm, ''); // simple strip tags
}

export const GET: APIRoute = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const uid = url.searchParams.get('uid');
    
    if (!uid) {
      return new Response(JSON.stringify({ error: 'Missing UID' }), { status: 400 });
    }
    
    const userList = await db.select().from(users).where(eq(users.firebase_uid, uid)).limit(1);
    if (userList.length === 0) {
      return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });
    }
    
    return new Response(JSON.stringify(userList[0]), { status: 200 });
  } catch (err: any) {
    console.error("[PROFILE GET ERROR]", err?.message, err?.stack);
    return new Response(JSON.stringify({ error: err?.message || 'Unknown error', type: err?.constructor?.name }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

export const PATCH: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { uid, name, phone, bio } = body;
    
    if (!uid) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
    }
    
    const userList = await db.select().from(users).where(eq(users.firebase_uid, uid)).limit(1);
    const user = userList[0];
    
    if (!user) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
    }

    // Rate Limit: 10 profile updates per hour per user
    const { allowed, resetInSeconds } = await rateLimit(
      redis,
      rateLimitKey('profile_update', `${user.id}`),
      10,
      3600
    );

    if (!allowed) {
      return new Response(
        JSON.stringify({
          error: `Rate limit exceeded. Try again in ${Math.ceil(resetInSeconds / 60)} min.`,
        }),
        { status: 429, headers: { 'Content-Type': 'application/json' } }
      );
    }
    // Validation
    const updates: Partial<{ name: string; phone: string; bio: string }> = {};

    if (name !== undefined) {
      const trimmedName = name.trim();
      if (!trimmedName || trimmedName.length > 100) {
        return new Response(
          JSON.stringify({ error: 'Name must be 1-100 characters' }),
          { status: 422 }
        );
      }
      updates.name = sanitizeHTML(trimmedName);
    }

    if (phone !== undefined) {
      const trimmedPhone = phone.trim();
      if (trimmedPhone && !/^\+?[\d\s\-()]{7,20}$/.test(trimmedPhone)) {
        return new Response(
          JSON.stringify({ error: 'Invalid phone number format' }),
          { status: 422 }
        );
      }
      updates.phone = sanitizeHTML(trimmedPhone);
    }

    if (bio !== undefined) {
      const trimmedBio = bio.trim();
      if (trimmedBio.length > 500) {
        return new Response(
          JSON.stringify({ error: 'Bio must be under 500 characters' }),
          { status: 422 }
        );
      }
      updates.bio = sanitizeHTML(trimmedBio);
    }

    if (Object.keys(updates).length === 0) {
      return new Response(
        JSON.stringify({ error: 'No valid fields to update' }),
        { status: 400 }
      );
    }

    await db.update(users).set(updates).where(eq(users.id, user.id));

    return new Response(JSON.stringify({ success: true, updates }), {
      status: 200,
    });
  } catch (err: any) {
    console.error("Profile PATCH Error:", err);
    return new Response(JSON.stringify({ error: err.message, stack: err.stack }), {
      status: 500,
    });
  }
};
