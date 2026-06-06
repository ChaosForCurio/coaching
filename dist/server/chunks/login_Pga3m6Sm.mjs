import { d as db, u as users, a as attendance } from './schema_Hqu5BfNF.mjs';
import { eq, and } from 'drizzle-orm';

const POST = async ({ request, cookies }) => {
  try {
    let email = null;
    let password = null;
    const contentType = request.headers.get("content-type") ?? "";
    if (contentType.includes("application/json")) {
      const json = await request.json();
      email = json.email ?? null;
      password = json.password ?? null;
    } else if (contentType.includes("multipart/form-data") || contentType.includes("application/x-www-form-urlencoded")) {
      const data = await request.formData();
      email = data.get("email");
      password = data.get("password");
    } else {
      const bodyText = await request.text();
      try {
        const json = JSON.parse(bodyText);
        email = json.email ?? null;
        password = json.password ?? null;
      } catch {
        const params = new URLSearchParams(bodyText);
        email = params.get("email");
        password = params.get("password");
      }
    }
    if (typeof email !== "string" || typeof password !== "string" || !email || !password) {
      return new Response(JSON.stringify({ error: "Missing email or password" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const userList = await db.select().from(users).where(eq(users.email, email)).limit(1);
    const user = userList[0];
    if (!user || user.password_hash !== password) {
      return new Response(JSON.stringify({ error: "Invalid credentials" }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }
    cookies.set("userSession", user.id.toString(), {
      path: "/",
      httpOnly: true,
      secure: false,
      // true in production (HTTPS)
      maxAge: 60 * 60 * 24 * 7
      // 1 week
    });
    if (user.role === "STUDENT") {
      const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
      const existing = await db.select().from(attendance).where(and(eq(attendance.student_id, user.id), eq(attendance.date, today))).limit(1);
      if (existing.length === 0) {
        await db.insert(attendance).values({ student_id: user.id, date: today });
      }
    }
    const url = "/dashboard";
    return new Response(JSON.stringify({ url }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    const message = err?.message ?? String(err);
    console.error("[LOGIN ERROR]", message, err?.stack ?? "");
    return new Response(
      JSON.stringify({ error: "Server error: " + message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
