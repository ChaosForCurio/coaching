import type { APIRoute } from 'astro';
import { db } from '../../db';
import { courses, enrollments } from '../../db/schema';
import { and, eq } from 'drizzle-orm';
import { requireAuth } from '../../utils/auth';
import { redis } from '../../utils/redis';

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const currentUser = await requireAuth(cookies);
  if (!currentUser || currentUser.role === 'STUDENT') return redirect('/login');

  // Rate Limiting with Redis
  if (redis) {
    const ip = request.headers.get('x-forwarded-for') || 'unknown-ip';
    const rateLimitKey = `rate_limit_assign_${ip}`;
    
    // Increment counter
    const current = await redis.incr(rateLimitKey);
    if (current === 1) {
      await redis.expire(rateLimitKey, 60); // 60 seconds window
    }
    
    // Max 10 requests per minute
    if (current > 10) {
      return redirect('/dashboard/assign?error=rate_limited');
    }
  }

  const data = await request.formData();
  const student_ids = data.getAll('student_ids[]');
  const course_name = (data.get('course_name') as string)?.trim();

  if (student_ids.length > 0 && course_name) {
    // Check if course exists
    let course = (await db.select().from(courses).where(eq(courses.title, course_name)))[0];
    
    // If not, create it
    if (!course) {
      const inserted = await db.insert(courses).values({
        title: course_name,
        teacher_id: currentUser.id
      }).returning();
      course = inserted[0];
    }

    const courseId = course.id;
    let anyInserted = false;

    for (const sid of student_ids) {
      const student_id = parseInt(sid as string);
      if (isNaN(student_id)) continue;

      const existing = await db.select().from(enrollments).where(
        and(eq(enrollments.student_id, student_id), eq(enrollments.course_id, courseId))
      );
      
      if (existing.length === 0) {
        await db.insert(enrollments).values({
          student_id,
          course_id: courseId,
        });
        anyInserted = true;
        
        // Invalidate cached stats for this student
        if (redis) {
           const todayStr = new Date().toISOString().split('T')[0];
           await redis.del(`dashboard_stats_${student_id}_${todayStr}`);
        }
      }
    }
    
    // Invalidate cached stats for teacher
    if (anyInserted && redis) {
       const todayStr = new Date().toISOString().split('T')[0];
       await redis.del(`dashboard_stats_${currentUser.id}_${todayStr}`);
    }

    return redirect('/dashboard/assign?success=true');
  }

  return redirect('/dashboard/assign?error=invalid_data');
};
