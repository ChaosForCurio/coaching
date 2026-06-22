import { d as db, b as attendance } from './schema_B5qW88Nb.mjs';
import { and, inArray, eq } from 'drizzle-orm';
import { r as requireAuth } from './auth_CpEEQcq3.mjs';
import { r as redis } from './redis_CUoFhAj3.mjs';
import { r as rateLimit, a as rateLimitKey } from './rateLimit_DmjG1M_w.mjs';
import { l as logAction, e as eventBus } from './auditLog_DaDoynyP.mjs';

const POST = async ({ request, cookies }) => {
  try {
    const currentUser = await requireAuth(cookies);
    if (!currentUser || currentUser.role !== "TEACHER") {
      return new Response(
        JSON.stringify({ error: "Unauthorized. Teachers only." }),
        {
          status: 403,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    const { allowed } = await rateLimit(
      redis,
      rateLimitKey("mark_attendance", `${currentUser.id}`),
      30,
      60
    );
    if (!allowed) {
      return new Response(
        JSON.stringify({ error: "Rate limit exceeded. Please wait a moment." }),
        {
          status: 429,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const body = await request.json();
    const { date, attendanceList, courseId } = body;
    if (!date || !courseId || !Array.isArray(attendanceList)) {
      return new Response(
        JSON.stringify({ error: "Missing date, courseId, or attendance list" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const presentStudents = [];
    const absentStudents = [];
    const toInsert = [];
    for (const item of attendanceList) {
      const { studentId, status } = item;
      if (status === "P") {
        toInsert.push({ student_id: studentId, course_id: courseId, date });
        presentStudents.push(studentId);
      } else if (status === "A") {
        absentStudents.push(studentId);
      }
    }
    if (toInsert.length > 0) {
      await db.insert(attendance).values(toInsert).onConflictDoNothing({
        target: [
          attendance.student_id,
          attendance.course_id,
          attendance.date
        ]
      });
    }
    if (absentStudents.length > 0) {
      await db.delete(attendance).where(
        and(
          inArray(attendance.student_id, absentStudents),
          eq(attendance.course_id, courseId),
          eq(attendance.date, date)
        )
      );
    }
    try {
      const cacheKey = `dashboard_stats_${currentUser.id}`;
      await redis?.del(cacheKey);
    } catch (cacheErr) {
      console.error("Failed to invalidate cache:", cacheErr);
    }
    logAction(currentUser.id, "mark_attendance", "attendance", void 0, {
      date,
      courseId,
      presentCount: presentStudents.length,
      absentCount: absentStudents.length,
      ip
    });
    for (const studentId of presentStudents) {
      eventBus.emit("attendance.marked", {
        studentId,
        date,
        status: "P",
        teacherId: currentUser.id,
        courseId
      });
    }
    for (const studentId of absentStudents) {
      eventBus.emit("attendance.marked", {
        studentId,
        date,
        status: "A",
        teacherId: currentUser.id,
        courseId
      });
    }
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
