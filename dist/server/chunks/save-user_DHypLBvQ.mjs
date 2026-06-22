import { d as db, u as users } from './schema_B5qW88Nb.mjs';
import { eq } from 'drizzle-orm';

const POST = async ({ request }) => {
  try {
    const body = await request.json();
    const { uid, email, role, name } = body;
    if (!uid || !email || !role) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
    }
    const userName = name || email.split("@")[0];
    const existingUser = await db.select().from(users).where(eq(users.email, email)).limit(1);
    if (existingUser.length > 0) {
      await db.update(users).set({ firebase_uid: uid }).where(eq(users.id, existingUser[0].id));
      return new Response(JSON.stringify({ success: true, message: "User linked" }), { status: 200 });
    }
    await db.insert(users).values({
      firebase_uid: uid,
      email,
      name: userName,
      role: role.toUpperCase()
      // Schema enum is 'STUDENT' or 'TEACHER'
      // password_hash is now optional in schema, so we don't need to provide it
    });
    return new Response(JSON.stringify({ success: true, message: "User saved" }), { status: 200 });
  } catch (error) {
    console.error("Error saving user:", error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
