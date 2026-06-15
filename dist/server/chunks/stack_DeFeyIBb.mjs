import { d as db, u as users, e as enrollments, b as attendance } from './schema_CuVt3FVI.mjs';
import { eq, and } from 'drizzle-orm';
import { l as logAction } from './auditLog_Ddj_dmE3.mjs';

async function validateStackSession(accessToken) {
  {
    console.error("Stack Auth environment variables are not configured");
    return null;
  }
}
async function getOrCreateLocalUser(stackUser, clientIp) {
  const email = stackUser.primary_email;
  if (!email) {
    throw new Error("Stack user email is required for database synchronization");
  }
  const existingUsers = await db.select().from(users).where(eq(users.email, email)).limit(1);
  let localUser = existingUsers[0];
  if (!localUser) {
    const role = (stackUser.metadata?.role || "STUDENT").toUpperCase();
    const phone = stackUser.metadata?.phone || null;
    const insertedUsers = await db.insert(users).values({
      name: stackUser.display_name || email.split("@")[0],
      email,
      password_hash: "external_stack_auth",
      role,
      phone
    }).returning();
    localUser = insertedUsers[0];
    logAction(localUser.id, "register", "session", void 0, { ip: clientIp, source: "stack_auth_sync" });
  }
  if (localUser.role === "STUDENT") {
    try {
      const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
      const userEnrollments = await db.select().from(enrollments).where(eq(enrollments.student_id, localUser.id));
      for (const enr of userEnrollments) {
        const existing = await db.select().from(attendance).where(and(
          eq(attendance.student_id, localUser.id),
          eq(attendance.course_id, enr.course_id),
          eq(attendance.date, today)
        )).limit(1);
        if (existing.length === 0) {
          await db.insert(attendance).values({
            student_id: localUser.id,
            course_id: enr.course_id,
            date: today
          });
        }
      }
    } catch (attendanceErr) {
      console.error("[STACK AUTH SYNC] Failed to auto-mark attendance:", attendanceErr);
    }
  }
  return localUser;
}

export { getOrCreateLocalUser as g, validateStackSession as v };
