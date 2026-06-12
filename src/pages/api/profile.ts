import type { APIRoute } from 'astro';
import { db } from '../../db';
import { users } from '../../db/schema';
import { eq } from 'drizzle-orm';
import { requireAuth } from '../../utils/auth';
import { redis } from '../../utils/redis';
import { rateLimit, rateLimitKey } from '../../utils/rateLimit';

function sanitizeHTML(str: string): string {
  return str.replace(/<[^>]*>?/gm, ''); // simple strip tags
}

export const PATCH: APIRoute = async ({ request, cookies }) => {
  try {
    const user = await requireAuth(cookies);
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
        JSON.stringify({ error: `Rate limit exceeded. Try again in ${Math.ceil(resetInSeconds / 60)} min.` }),
        { status: 429, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const body = await request.json();
    const { name, phone, bio } = body;

    // Validation
    const updates: Partial<{ name: string; phone: string; bio: string }> = {};

    if (name !== undefined) {
      const trimmedName = name.trim();
      if (!trimmedName || trimmedName.length > 100) {
        return new Response(JSON.stringify({ error: 'Name must be 1-100 characters' }), { status: 422 });
      }
      updates.name = sanitizeHTML(trimmedName);
    }

    if (phone !== undefined) {
      const trimmedPhone = phone.trim();
      if (trimmedPhone && !/^\+?[\d\s\-()]{7,20}$/.test(trimmedPhone)) {
        return new Response(JSON.stringify({ error: 'Invalid phone number format' }), { status: 422 });
      }
      updates.phone = sanitizeHTML(trimmedPhone);
    }

    if (bio !== undefined) {
      const trimmedBio = bio.trim();
      if (trimmedBio.length > 500) {
        return new Response(JSON.stringify({ error: 'Bio must be under 500 characters' }), { status: 422 });
      }
      updates.bio = sanitizeHTML(trimmedBio);
    }

    if (Object.keys(updates).length === 0) {
      return new Response(JSON.stringify({ error: 'No valid fields to update' }), { status: 400 });
    }

    await db.update(users).set(updates).where(eq(users.id, user.id));

    return new Response(JSON.stringify({ success: true, updates }), { status: 200 });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
};
