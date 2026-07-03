import { d as db, e as enrollments, b as attendance } from './schema_UQndYuIj.mjs';
import { and, eq, inArray } from 'drizzle-orm';
import { r as requireAuth } from './auth_LP014y4c.mjs';
import { r as redis } from './redis_CUoFhAj3.mjs';
import { r as rateLimit, a as rateLimitKey } from './rateLimit_DmjG1M_w.mjs';
import { e as eventBus, l as logAction } from './auditLog_DRxVY4Bb.mjs';

const POST = async ({ request, cookies }) => {
  try {
    const currentUser = await requireAuth(cookies);
    if (!currentUser || currentUser.role !== "TEACHER") {
      return new Response(
        JSON.stringify({ error: "Unauthorized. Teachers only." }),
        { status: 403 }
      );
    }
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    const { allowed, resetInSeconds } = await rateLimit(
      redis,
      rateLimitKey("bulk_attendance", `${currentUser.id}`),
      5,
      60
    );
    if (!allowed) {
      return new Response(
        JSON.stringify({
          error: `Rate limit exceeded. Try again in ${Math.ceil(resetInSeconds / 60)} min.`
        }),
        { status: 429 }
      );
    }
    const body = await request.json();
    const { courseId, date, entries } = body;
    if (!courseId || !date || !Array.isArray(entries)) {
      return new Response(
        JSON.stringify({ error: "Missing courseId, date, or entries array" }),
        { status: 400 }
      );
    }
    const submittedStudentIds = entries.map((e) => e.student_id);
    if (submittedStudentIds.length === 0) {
      return new Response(JSON.stringify({ error: "No entries provided" }), {
        status: 400
      });
    }
    const enrolledRows = await db.select({ student_id: enrollments.student_id }).from(enrollments).where(
      and(
        eq(enrollments.course_id, courseId),
        inArray(enrollments.student_id, submittedStudentIds)
      )
    );
    const enrolledSet = new Set(enrolledRows.map((r) => r.student_id));
    const invalidIds = submittedStudentIds.filter((id) => !enrolledSet.has(id));
    if (invalidIds.length > 0) {
      return new Response(
        JSON.stringify({
          error: `Some students are not enrolled in this course: ${invalidIds.join(", ")}`
        }),
        { status: 400 }
      );
    }
    const presentIds = [];
    const absentIds = [];
    for (const entry of entries) {
      if (entry.status === "P") {
        presentIds.push(entry.student_id);
      } else if (entry.status === "A") {
        absentIds.push(entry.student_id);
      }
    }
    if (presentIds.length > 0) {
      for (const studentId of presentIds) {
        const existing = await db.select().from(attendance).where(
          and(
            eq(attendance.student_id, studentId),
            eq(attendance.date, date),
            eq(attendance.course_id, courseId)
          )
        ).limit(1);
        if (existing.length === 0) {
          await db.insert(attendance).values({ student_id: studentId, course_id: courseId, date });
        }
      }
    }
    if (absentIds.length > 0) {
      await db.delete(attendance).where(
        and(
          eq(attendance.date, date),
          eq(attendance.course_id, courseId),
          inArray(attendance.student_id, absentIds)
        )
      );
    }
    for (const studentId of presentIds) {
      eventBus.emit("attendance.marked", {
        studentId,
        date,
        status: "P",
        teacherId: currentUser.id,
        courseId
      });
    }
    for (const studentId of absentIds) {
      eventBus.emit("attendance.marked", {
        studentId,
        date,
        status: "A",
        teacherId: currentUser.id,
        courseId
      });
    }
    logAction(currentUser.id, "bulk_attendance", "attendance", courseId, {
      date,
      presentCount: presentIds.length,
      absentCount: absentIds.length,
      ip
    });
    return new Response(
      JSON.stringify({
        success: true,
        present: presentIds.length,
        absent: absentIds.length
      }),
      { status: 200 }
    );
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
