import type { APIRoute } from 'astro';
import { db } from '../../../db';
import { enrollments, users } from '../../../db/schema';
import { eq, gt, and } from 'drizzle-orm';
import { requireAuth } from '../../../utils/auth';
import { getCache, setCache } from '../../../utils/redis';

export const GET: APIRoute = async ({ request, cookies }) => {
  try {
    const user = await requireAuth(cookies);
    if (!user || user.role !== 'TEACHER') {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 403 });
    }

    const url = new URL(request.url);
    const courseIdParam = url.searchParams.get('courseId');
    if (!courseIdParam) {
      return new Response(JSON.stringify({ error: 'courseId required' }), { status: 400 });
    }

    const courseId = parseInt(courseIdParam);
    const cursorParam = url.searchParams.get('cursor');
    const limitParam = url.searchParams.get('limit') || '50';
    
    const limit = parseInt(limitParam) || 50;
    const cursor = cursorParam ? parseInt(cursorParam) : undefined;

    const cacheKey = `course_students_${courseId}_${cursor || 0}_${limit}`;
    const cached = await getCache<any>(cacheKey);
    if (cached) {
      return new Response(JSON.stringify(cached), {
        status: 200,
        headers: { 
          'Content-Type': 'application/json', 
          'X-Cache': 'HIT',
          'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300'
        }
      });
    }

    const studentsResult = await db.select({
      id: users.id,
      name: users.name,
      email: users.email,
    })
    .from(enrollments)
    .innerJoin(users, eq(enrollments.student_id, users.id))
    .where(
       cursor 
         ? and(eq(enrollments.course_id, courseId), gt(users.id, cursor))
         : eq(enrollments.course_id, courseId)
    )
    .orderBy(users.id)
    .limit(limit + 1); // fetch one extra to see if there's a next page

    let nextCursor: number | null = null;
    if (studentsResult.length > limit) {
       const nextItem = studentsResult.pop(); // remove the extra item
       nextCursor = studentsResult[studentsResult.length - 1].id;
    }

    const responsePayload = { students: studentsResult, nextCursor };

    await setCache(cacheKey, responsePayload, 300); // 5 min

    return new Response(JSON.stringify(responsePayload), {
      status: 200,
      headers: { 
        'Content-Type': 'application/json', 
        'X-Cache': 'MISS',
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300'
      }
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
};
