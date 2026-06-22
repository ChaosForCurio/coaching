import { d as db, c as courses } from './schema_B5qW88Nb.mjs';
import { eq } from 'drizzle-orm';
import { r as requireAuth } from './auth_CpEEQcq3.mjs';
import { g as getCache, s as setCache } from './redis_CUoFhAj3.mjs';

const GET = async ({ cookies }) => {
  try {
    const user = await requireAuth(cookies);
    if (!user || user.role !== "TEACHER") {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 403
      });
    }
    const cacheKey = `courses_teacher_${user.id}`;
    const cached = await getCache(cacheKey);
    if (cached) {
      return new Response(JSON.stringify(cached), {
        status: 200,
        headers: { "Content-Type": "application/json", "X-Cache": "HIT" }
      });
    }
    const teacherCourses = await db.select({
      id: courses.id,
      title: courses.title,
      description: courses.description
    }).from(courses).where(eq(courses.teacher_id, user.id));
    await setCache(cacheKey, teacherCourses, 300);
    return new Response(JSON.stringify(teacherCourses), {
      status: 200,
      headers: { "Content-Type": "application/json", "X-Cache": "MISS" }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
