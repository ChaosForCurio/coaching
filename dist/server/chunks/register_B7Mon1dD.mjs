import { d as db, u as users } from './schema_Hqu5BfNF.mjs';
import { eq } from 'drizzle-orm';

const POST = async ({ request, cookies }) => {
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
  const newUserList = await db.insert(users).values({
    name,
    email,
    password_hash: password,
    // In production, hash this password!
    role: role.toUpperCase()
  }).returning();
  const user = newUserList[0];
  cookies.set("userSession", user.id.toString(), {
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
