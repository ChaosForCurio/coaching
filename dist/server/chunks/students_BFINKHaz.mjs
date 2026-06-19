import { d as db, u as users, e as enrollments } from './schema_CuVt3FVI.mjs';
import { eq, and, gt } from 'drizzle-orm';
import { r as requireAuth } from './auth_CFMQny9D.mjs';
import { g as getCache, s as setCache } from './redis_CUoFhAj3.mjs';

const GET = async ({ request, cookies }) => {
  try {
    const user = await requireAuth(cookies);
    if (!user || user.role !== "TEACHER") {
      return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 403 });
    }
    const url = new URL(request.url);
    const courseIdParam = url.searchParams.get("courseId");
    if (!courseIdParam) {
      return new Response(JSON.stringify({ error: "courseId required" }), { status: 400 });
    }
    const courseId = parseInt(courseIdParam);
    const cursorParam = url.searchParams.get("cursor");
    const limitParam = url.searchParams.get("limit") || "50";
    const limit = parseInt(limitParam) || 50;
    const cursor = cursorParam ? parseInt(cursorParam) : void 0;
    const cacheKey = `course_students_${courseId}_${cursor || 0}_${limit}`;
    const cached = await getCache(cacheKey);
    if (cached) {
      return new Response(JSON.stringify(cached), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "X-Cache": "HIT",
          "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300"
        }
      });
    }
    const studentsResult = await db.select({
      id: users.id,
      name: users.name,
      email: users.email
    }).from(enrollments).innerJoin(users, eq(enrollments.student_id, users.id)).where(
      cursor ? and(eq(enrollments.course_id, courseId), gt(users.id, cursor)) : eq(enrollments.course_id, courseId)
    ).orderBy(users.id).limit(limit + 1);
    let nextCursor = null;
    if (studentsResult.length > limit) {
      const nextItem = studentsResult.pop();
      nextCursor = studentsResult[studentsResult.length - 1].id;
    }
    const responsePayload = { students: studentsResult, nextCursor };
    await setCache(cacheKey, responsePayload, 300);
    return new Response(JSON.stringify(responsePayload), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "X-Cache": "MISS",
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300"
      }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
