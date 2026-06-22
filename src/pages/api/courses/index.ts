import type { APIRoute } from 'astro';
import { db } from '../../../db';
import { courses } from '../../../db/schema';
import { eq } from 'drizzle-orm';
import { requireAuth } from '../../../utils/auth';
import { getCache, setCache } from '../../../utils/redis';

export const GET: APIRoute = async ({ cookies }) => {
  try {
    const user = await requireAuth(cookies);
    if (!user || user.role !== 'TEACHER') {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 403,
      });
    }

    const cacheKey = `courses_teacher_${user.id}`;
    const cached = await getCache<object[]>(cacheKey);
    if (cached) {
      return new Response(JSON.stringify(cached), {
        status: 200,
        headers: { 'Content-Type': 'application/json', 'X-Cache': 'HIT' },
      });
    }

    const teacherCourses = await db
      .select({
        id: courses.id,
        title: courses.title,
        description: courses.description,
      })
      .from(courses)
      .where(eq(courses.teacher_id, user.id));

    await setCache(cacheKey, teacherCourses, 300); // 5 min

    return new Response(JSON.stringify(teacherCourses), {
      status: 200,
      headers: { 'Content-Type': 'application/json', 'X-Cache': 'MISS' },
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
};
