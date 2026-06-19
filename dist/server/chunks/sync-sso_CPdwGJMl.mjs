import { neon } from '@neondatabase/serverless';
import { d as db, u as users, e as enrollments, b as attendance } from './schema_CuVt3FVI.mjs';
import { eq, and } from 'drizzle-orm';
import { l as logAction } from './auditLog_Ddj_dmE3.mjs';
import { c as createSession } from './auth_CFMQny9D.mjs';

async function getOrCreateLocalUser(neonUser, intendedRole, clientIp) {
  const email = neonUser.email;
  if (!email) {
    throw new Error("Neon Auth user email is required for database synchronization");
  }
  const existingUsers = await db.select().from(users).where(eq(users.email, email)).limit(1);
  let localUser = existingUsers[0];
  if (!localUser) {
    const insertedUsers = await db.insert(users).values({
      name: neonUser.name || email.split("@")[0],
      email,
      password_hash: "external_neon_auth",
      role: intendedRole,
      phone: null
    }).returning();
    localUser = insertedUsers[0];
    logAction(localUser.id, "register", "session", void 0, {
      ip: clientIp,
      source: "neon_auth_sync"
    });
  } else if (localUser.role !== intendedRole) {
    await db.update(users).set({ role: intendedRole }).where(eq(users.id, localUser.id));
    localUser = { ...localUser, role: intendedRole };
  }
  if (localUser.role === "STUDENT") {
    try {
      const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
      const userEnrollments = await db.select().from(enrollments).where(eq(enrollments.student_id, localUser.id));
      for (const enr of userEnrollments) {
        const existing = await db.select().from(attendance).where(
          and(
            eq(attendance.student_id, localUser.id),
            eq(attendance.course_id, enr.course_id),
            eq(attendance.date, today)
          )
        ).limit(1);
        if (existing.length === 0) {
          await db.insert(attendance).values({
            student_id: localUser.id,
            course_id: enr.course_id,
            date: today
          });
        }
      }
    } catch (attendanceErr) {
      console.error("[NEON AUTH SYNC] Failed to auto-mark attendance:", attendanceErr);
    }
  }
  return localUser;
}

const POST = async ({ request, cookies }) => {
  try {
    const { sessionId } = await request.json();
    if (!sessionId || typeof sessionId !== "string") {
      return new Response(JSON.stringify({ error: "Missing session ID" }), { status: 400 });
    }
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
    const ua = request.headers.get("user-agent") ?? void 0;
    const sql = neon("postgresql://neondb_owner:npg_2hqP5xpdHtEZ@ep-wispy-truth-ap7kmm96.c-7.us-east-1.aws.neon.tech/neondb?sslmode=require");
    const sessionRes = await sql`
      SELECT "userId", "expiresAt" 
      FROM neon_auth.session 
      WHERE id = ${sessionId}
      LIMIT 1
    `;
    if (sessionRes.length === 0) {
      return new Response(JSON.stringify({ error: "Invalid session ID" }), { status: 401 });
    }
    const sessionData = sessionRes[0];
    if (new Date(sessionData.expiresAt) < /* @__PURE__ */ new Date()) {
      return new Response(JSON.stringify({ error: "Session expired" }), { status: 401 });
    }
    const userRes = await sql`
      SELECT id, name, email, "emailVerified", image
      FROM neon_auth.user
      WHERE id = ${sessionData.userId}
      LIMIT 1
    `;
    if (userRes.length === 0) {
      return new Response(JSON.stringify({ error: "User not found" }), { status: 404 });
    }
    const authUser = userRes[0];
    const pendingRoleCookie = cookies.get("pending-role")?.value;
    const intendedRole = pendingRoleCookie === "TEACHER" ? "TEACHER" : "STUDENT";
    cookies.delete("pending-role", { path: "/" });
    const localUser = await getOrCreateLocalUser(authUser, intendedRole, ip);
    const sessionToken = await createSession(localUser.id, ip, ua);
    cookies.set("userSession", sessionToken, {
      path: "/",
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24
      // 1 day
    });
    logAction(localUser.id, "login", "session", void 0, {
      ip,
      role: localUser.role,
      source: "neon_auth_google_sso"
    });
    const destination = localUser.role === "TEACHER" ? "/dashboard/mark" : "/dashboard";
    return new Response(JSON.stringify({ redirectUrl: destination }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    console.error("[SYNC SSO] Error:", err);
    return new Response(JSON.stringify({ error: "Internal server error" }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
