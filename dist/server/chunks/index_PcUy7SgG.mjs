import { d as db, u as users, a as announcements, c as courses, e as enrollments } from './index_DJ2IURco.mjs';
import { eq, desc, and } from 'drizzle-orm';
import { r as requireAuth } from './auth_B1QfE5tq.mjs';
import { g as getCache, s as setCache, r as redis } from './redis_CUoFhAj3.mjs';
import { r as rateLimit, a as rateLimitKey } from './rateLimit_BAVK40wj.mjs';
import { e as eventBus } from './eventBus_Dkw-Cwlo.mjs';
import { l as logAction } from './auditLog_B0vw1ueu.mjs';

const GET = async ({ request, cookies }) => {
  try {
    const user = await requireAuth(cookies);
    if (!user) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }
    const url = new URL(request.url);
    const courseIdParam = url.searchParams.get("courseId");
    if (!courseIdParam) {
      return new Response(JSON.stringify({ error: "courseId query param is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const courseId = parseInt(courseIdParam);
    if (isNaN(courseId)) {
      return new Response(JSON.stringify({ error: "Invalid courseId" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const cacheKey = `announcements_${courseId}`;
    const cached = await getCache(cacheKey);
    if (cached) {
      return new Response(JSON.stringify(cached), {
        status: 200,
        headers: { "Content-Type": "application/json", "X-Cache": "HIT" }
      });
    }
    const rows = await db.select({
      id: announcements.id,
      title: announcements.title,
      body: announcements.body,
      pinned: announcements.pinned,
      createdAt: announcements.created_at,
      teacherName: users.name
    }).from(announcements).innerJoin(users, eq(announcements.teacher_id, users.id)).where(eq(announcements.course_id, courseId)).orderBy(desc(announcements.pinned), desc(announcements.created_at));
    await setCache(cacheKey, rows, 300);
    return new Response(JSON.stringify(rows), {
      status: 200,
      headers: { "Content-Type": "application/json", "X-Cache": "MISS" }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};
const POST = async ({ request, cookies }) => {
  try {
    const user = await requireAuth(cookies);
    if (!user || user.role !== "TEACHER") {
      return new Response(JSON.stringify({ error: "Unauthorized. Teachers only." }), {
        status: 403,
        headers: { "Content-Type": "application/json" }
      });
    }
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    const { allowed, resetInSeconds } = await rateLimit(
      redis,
      rateLimitKey("announcements", `${user.id}`),
      20,
      3600
    );
    if (!allowed) {
      return new Response(
        JSON.stringify({ error: `Rate limit exceeded. Try again in ${Math.ceil(resetInSeconds / 60)} min.` }),
        { status: 429, headers: { "Content-Type": "application/json" } }
      );
    }
    const body = await request.json();
    const { courseId, title, body: text, pinned = false } = body;
    if (!courseId || !title?.trim() || !text?.trim()) {
      return new Response(JSON.stringify({ error: "courseId, title, and body are required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    if (title.length > 200) {
      return new Response(JSON.stringify({ error: "Title must be 200 characters or fewer" }), {
        status: 422,
        headers: { "Content-Type": "application/json" }
      });
    }
    if (text.length > 5e3) {
      return new Response(JSON.stringify({ error: "Body must be 5000 characters or fewer" }), {
        status: 422,
        headers: { "Content-Type": "application/json" }
      });
    }
    const courseRows = await db.select().from(courses).where(and(eq(courses.id, courseId), eq(courses.teacher_id, user.id))).limit(1);
    if (courseRows.length === 0) {
      return new Response(JSON.stringify({ error: "Course not found or access denied" }), {
        status: 404,
        headers: { "Content-Type": "application/json" }
      });
    }
    const course = courseRows[0];
    const inserted = await db.insert(announcements).values({
      course_id: courseId,
      teacher_id: user.id,
      title: title.trim(),
      body: text.trim(),
      pinned: Boolean(pinned)
    }).returning();
    const announcement = inserted[0];
    const enrolledRows = await db.select({ student_id: enrollments.student_id }).from(enrollments).where(eq(enrollments.course_id, courseId));
    const enrolledStudentIds = enrolledRows.map((r) => r.student_id);
    eventBus.emit("announcement.posted", {
      announcementId: announcement.id,
      courseId,
      courseTitle: course.title,
      teacherName: user.name,
      title: announcement.title,
      enrolledStudentIds
    });
    logAction(user.id, "post_announcement", "announcement", announcement.id, {
      courseId,
      title: announcement.title,
      notifiedStudents: enrolledStudentIds.length,
      ip
    });
    return new Response(JSON.stringify({ success: true, announcement }), {
      status: 201,
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
  GET,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
