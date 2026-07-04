globalThis.process ??= {};
globalThis.process.env ??= {};
import { d as db, c as courses, e as eq, g as enrollments, f as and, u as users } from "./schema_AfQQoxGU.mjs";
import { r as requireAuth } from "./auth_B_F03Kif.mjs";
import { r as redis } from "./redis_jy6A0ugT.mjs";
import { r as rateLimit, a as rateLimitKey } from "./rateLimit_B_nGf2xE.mjs";
import { l as logAction, e as eventBus } from "./auditLog_abBssP_t.mjs";
const POST = async ({ request, cookies, redirect }) => {
  const currentUser = await requireAuth(cookies);
  if (!currentUser || currentUser.role === "STUDENT") return redirect("/login");
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const { allowed } = await rateLimit(
    redis,
    rateLimitKey("assign_course", ip),
    10,
    60
  );
  if (!allowed) {
    return redirect("/dashboard/assign?error=rate_limited");
  }
  const data = await request.formData();
  const student_ids = data.getAll("student_ids[]");
  const course_name = data.get("course_name")?.trim();
  if (student_ids.length > 0 && course_name) {
    let course = (await db.select().from(courses).where(eq(courses.title, course_name)))[0];
    if (!course) {
      const inserted = await db.insert(courses).values({
        title: course_name,
        teacher_id: currentUser.id
      }).returning();
      course = inserted[0];
      logAction(currentUser.id, "create_course", "course", course.id, {
        title: course_name
      });
    }
    const courseId = course.id;
    const newlyEnrolledStudentIds = [];
    for (const sid of student_ids) {
      const student_id = parseInt(sid);
      if (isNaN(student_id)) continue;
      const existing = await db.select().from(enrollments).where(
        and(
          eq(enrollments.student_id, student_id),
          eq(enrollments.course_id, courseId)
        )
      );
      if (existing.length === 0) {
        await db.insert(enrollments).values({ student_id, course_id: courseId });
        newlyEnrolledStudentIds.push(student_id);
      }
    }
    if (newlyEnrolledStudentIds.length > 0) {
      await db.select({ id: users.id, name: users.name }).from(users).where(
        // Use in-clause via JS filter — safe for small arrays
        eq(users.id, newlyEnrolledStudentIds[0])
        // placeholder — loop below handles all
      );
      for (const studentId of newlyEnrolledStudentIds) {
        eventBus.emit("enrollment.created", {
          studentId,
          courseId,
          courseTitle: course.title,
          teacherName: currentUser.name,
          teacherId: currentUser.id
        });
      }
      logAction(currentUser.id, "assign_course", "enrollment", courseId, {
        courseTitle: course.title,
        enrolledStudentIds: newlyEnrolledStudentIds,
        count: newlyEnrolledStudentIds.length,
        ip
      });
    }
    return redirect("/dashboard/assign?success=true");
  }
  return redirect("/dashboard/assign?error=invalid_data");
};
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
