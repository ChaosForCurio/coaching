import { d as db, u as users, e as enrollments, b as attendance } from './schema_CuVt3FVI.mjs';
import { eq, and } from 'drizzle-orm';
import { l as logAction } from './auditLog_Ddj_dmE3.mjs';
import { c as createSession } from './auth_CFMQny9D.mjs';

const NEON_AUTH_BASE_URL = "https://ep-wispy-truth-ap7kmm96.neonauth.c-7.us-east-1.aws.neon.tech/neondb/auth";
async function validateNeonAuthSession(neonSessionCookie) {
  try {
    const res = await fetch(`${NEON_AUTH_BASE_URL}/get-session`, {
      headers: {
        // Forward the Neon Auth session cookie so the auth server can look it up
        cookie: neonSessionCookie
      }
    });
    if (!res.ok) {
      console.error("[NEON AUTH] get-session failed:", res.status, await res.text());
      return null;
    }
    const data = await res.json();
    if (!data || !data.user) {
      return null;
    }
    return data;
  } catch (err) {
    console.error("[NEON AUTH] validateNeonAuthSession error:", err);
    return null;
  }
}
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
  } else if (localUser.password_hash === "external_neon_auth" && localUser.role !== intendedRole) {
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

const GET = async ({ request, cookies }) => {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const ua = request.headers.get("user-agent") ?? void 0;
  const rawCookieHeader = request.headers.get("cookie") ?? "";
  if (!rawCookieHeader) {
    return new Response(null, {
      status: 302,
      headers: { Location: "/login?error=no_session" }
    });
  }
  const neonSession = await validateNeonAuthSession(rawCookieHeader);
  if (!neonSession || !neonSession.user?.email) {
    return new Response(null, {
      status: 302,
      headers: { Location: "/login?error=invalid_session" }
    });
  }
  const pendingRoleCookie = cookies.get("pending-role")?.value;
  const intendedRole = pendingRoleCookie === "TEACHER" ? "TEACHER" : "STUDENT";
  cookies.delete("pending-role", { path: "/" });
  const localUser = await getOrCreateLocalUser(neonSession.user, intendedRole, ip);
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
    source: "neon_auth_google"
  });
  return new Response(null, {
    status: 302,
    headers: { Location: "/dashboard" }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
