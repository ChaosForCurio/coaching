import { d as db, u as users } from './index_DJ2IURco.mjs';
import { eq } from 'drizzle-orm';
import bcrypt from 'bcryptjs';
import { c as createSession } from './auth_B1QfE5tq.mjs';
import { r as redis } from './redis_CUoFhAj3.mjs';
import { r as rateLimit, a as rateLimitKey } from './rateLimit_BAVK40wj.mjs';

const POST = async ({ request, cookies }) => {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const { allowed, resetInSeconds } = await rateLimit(
    redis,
    rateLimitKey("register", ip),
    5,
    // 5 registrations
    3600
    // per hour
  );
  if (!allowed) {
    return new Response(
      JSON.stringify({ error: `Too many registrations from this IP. Try again in ${Math.ceil(resetInSeconds / 60)} minutes.` }),
      { status: 429, headers: { "Content-Type": "application/json" } }
    );
  }
  const data = await request.formData();
  const name = data.get("name");
  const email = data.get("email");
  const password = data.get("password");
  const role = data.get("role");
  if (typeof name !== "string" || typeof email !== "string" || typeof password !== "string" || typeof role !== "string") {
    return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
  }
  const existingUser = await db.select().from(users).where(eq(users.email, email)).limit(1);
  if (existingUser.length > 0) {
    return new Response(JSON.stringify({ error: "Email already registered" }), { status: 409 });
  }
  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(password, salt);
  const newUserList = await db.insert(users).values({
    name,
    email,
    password_hash: passwordHash,
    role: role.toUpperCase()
  }).returning();
  const user = newUserList[0];
  const token = await createSession(user.id, ip, request.headers.get("user-agent") ?? void 0);
  cookies.set("userSession", token, {
    path: "/",
    httpOnly: true,
    secure: true,
    maxAge: 60 * 60 * 24 * 7
    // 1 week
  });
  return new Response(JSON.stringify({ uuid: user.id }), { status: 200 });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
