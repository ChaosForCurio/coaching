import { d as db, u as users } from './index_DJ2IURco.mjs';
import { eq } from 'drizzle-orm';
import { r as requireAuth } from './auth_B1QfE5tq.mjs';
import { r as redis } from './redis_CUoFhAj3.mjs';
import { r as rateLimit, a as rateLimitKey } from './rateLimit_BAVK40wj.mjs';

function sanitizeHTML(str) {
  return str.replace(/<[^>]*>?/gm, "");
}
const PATCH = async ({ request, cookies }) => {
  try {
    const user = await requireAuth(cookies);
    if (!user) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }
    const { allowed, resetInSeconds } = await rateLimit(
      redis,
      rateLimitKey("profile_update", `${user.id}`),
      10,
      3600
    );
    if (!allowed) {
      return new Response(
        JSON.stringify({ error: `Rate limit exceeded. Try again in ${Math.ceil(resetInSeconds / 60)} min.` }),
        { status: 429, headers: { "Content-Type": "application/json" } }
      );
    }
    const body = await request.json();
    const { name, phone, bio } = body;
    const updates = {};
    if (name !== void 0) {
      const trimmedName = name.trim();
      if (!trimmedName || trimmedName.length > 100) {
        return new Response(JSON.stringify({ error: "Name must be 1-100 characters" }), { status: 422 });
      }
      updates.name = sanitizeHTML(trimmedName);
    }
    if (phone !== void 0) {
      const trimmedPhone = phone.trim();
      if (trimmedPhone && !/^\+?[\d\s\-()]{7,20}$/.test(trimmedPhone)) {
        return new Response(JSON.stringify({ error: "Invalid phone number format" }), { status: 422 });
      }
      updates.phone = sanitizeHTML(trimmedPhone);
    }
    if (bio !== void 0) {
      const trimmedBio = bio.trim();
      if (trimmedBio.length > 500) {
        return new Response(JSON.stringify({ error: "Bio must be under 500 characters" }), { status: 422 });
      }
      updates.bio = sanitizeHTML(trimmedBio);
    }
    if (Object.keys(updates).length === 0) {
      return new Response(JSON.stringify({ error: "No valid fields to update" }), { status: 400 });
    }
    await db.update(users).set(updates).where(eq(users.id, user.id));
    return new Response(JSON.stringify({ success: true, updates }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  PATCH
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
