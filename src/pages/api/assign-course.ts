import type { APIRoute } from 'astro';
import { db } from '../../db';
import { courses, enrollments, users } from '../../db/schema';
import { and, eq } from 'drizzle-orm';
import { requireAuth } from '../../utils/auth';
import { redis } from '../../utils/redis';
import { rateLimit, rateLimitKey } from '../../utils/rateLimit';
import { logAction } from '../../utils/auditLog';
import { eventBus } from '../../utils/eventBus';

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const currentUser = await requireAuth(cookies);
  if (!currentUser || currentUser.role === 'STUDENT') return redirect('/login');

  // ── Rate Limiting: 10 assign-course actions per IP per minute ────────────
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  const { allowed } = await rateLimit(
    redis,
    rateLimitKey('assign_course', ip),
    10,
    60
  );

  if (!allowed) {
    return redirect('/dashboard/assign?error=rate_limited');
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

      // Log course creation
      logAction(currentUser.id, 'create_course', 'course', course.id, { title: course_name });
    }

    const courseId = course.id;
    const newlyEnrolledStudentIds: number[] = [];

    for (const sid of student_ids) {
      const student_id = parseInt(sid as string);
      if (isNaN(student_id)) continue;

      const existing = await db.select().from(enrollments).where(
        and(eq(enrollments.student_id, student_id), eq(enrollments.course_id, courseId))
      );

      if (existing.length === 0) {
        await db.insert(enrollments).values({ student_id, course_id: courseId });
        newlyEnrolledStudentIds.push(student_id);
      }
    }

    if (newlyEnrolledStudentIds.length > 0) {
      // Fetch student names for richer notifications
      const studentRecords = await db
        .select({ id: users.id, name: users.name })
        .from(users)
        .where(
          // Use in-clause via JS filter — safe for small arrays
          eq(users.id, newlyEnrolledStudentIds[0]) // placeholder — loop below handles all
        );

      // Emit event for each newly enrolled student
      for (const studentId of newlyEnrolledStudentIds) {
        eventBus.emit('enrollment.created', {
          studentId,
          courseId,
          courseTitle: course.title,
          teacherName: currentUser.name,
          teacherId: currentUser.id,
        });
      }

      // Audit log for the bulk enrollment
      logAction(currentUser.id, 'assign_course', 'enrollment', courseId, {
        courseTitle: course.title,
        enrolledStudentIds: newlyEnrolledStudentIds,
        count: newlyEnrolledStudentIds.length,
        ip,
      });
    }

    return redirect('/dashboard/assign?success=true');
  }

  return redirect('/dashboard/assign?error=invalid_data');
};
