import { d as db, u as users, e as enrollments, b as attendance } from './schema_CuVt3FVI.mjs';
import { eq, and } from 'drizzle-orm';
import bcrypt from 'bcryptjs';
import { c as createSession } from './auth_CFMQny9D.mjs';
import { r as redis } from './redis_CUoFhAj3.mjs';
import { r as rateLimit, a as rateLimitKey } from './rateLimit_BAVK40wj.mjs';
import { l as logAction } from './auditLog_Ddj_dmE3.mjs';

const POST = async ({ request, cookies }) => {
  try {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    const { allowed, remaining, resetInSeconds } = await rateLimit(
      redis,
      rateLimitKey("login", ip),
      10,
      // 10 attempts
      900
      // per 15 minutes
    );
    if (!allowed) {
      return new Response(
        JSON.stringify({
          error: `Too many login attempts. Please wait ${Math.ceil(resetInSeconds / 60)} minutes before trying again.`
        }),
        {
          status: 429,
          headers: {
            "Content-Type": "application/json",
            "X-RateLimit-Remaining": String(remaining),
            "Retry-After": String(resetInSeconds)
          }
        }
      );
    }
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
    if (!user) {
      return new Response(JSON.stringify({ error: "Invalid credentials" }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }
    const isValid = await bcrypt.compare(password, user.password_hash);
    if (!isValid) {
      return new Response(JSON.stringify({ error: "Invalid credentials" }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }
    const token = await createSession(user.id, ip, request.headers.get("user-agent") ?? void 0);
    cookies.set("userSession", token, {
      path: "/",
      httpOnly: true,
      secure: true,
      maxAge: 60 * 60 * 24
      // 1 day
    });
    if (user.role === "STUDENT") {
      const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
      const userEnrollments = await db.select().from(enrollments).where(eq(enrollments.student_id, user.id));
      for (const enr of userEnrollments) {
        const existing = await db.select().from(attendance).where(and(
          eq(attendance.student_id, user.id),
          eq(attendance.course_id, enr.course_id),
          eq(attendance.date, today)
        )).limit(1);
        if (existing.length === 0) {
          await db.insert(attendance).values({
            student_id: user.id,
            course_id: enr.course_id,
            date: today
          });
        }
      }
    }
    logAction(user.id, "login", "session", void 0, { ip, role: user.role });
    return new Response(JSON.stringify({ url: "/dashboard" }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    const message = err?.message ?? String(err);
    console.error("[LOGIN ERROR]", message, err?.stack ?? "");
    return new Response(
      JSON.stringify({ error: "An unexpected error occurred. Please try again." }),
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
