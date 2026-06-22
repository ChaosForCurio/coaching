import type { APIRoute } from 'astro';
import { db } from '../../../db';
import { attendance, enrollments } from '../../../db/schema';
import { and, eq, inArray } from 'drizzle-orm';
import { requireAuth } from '../../../utils/auth';
import { redis } from '../../../utils/redis';
import { rateLimit, rateLimitKey } from '../../../utils/rateLimit';
import { logAction } from '../../../utils/auditLog';
import { eventBus } from '../../../utils/eventBus';

export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    const currentUser = await requireAuth(cookies);
    if (!currentUser || currentUser.role !== 'TEACHER') {
      return new Response(
        JSON.stringify({ error: 'Unauthorized. Teachers only.' }),
        { status: 403 }
      );
    }

    // Rate Limit: 5 bulk imports per minute per teacher
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      'unknown';
    const { allowed, resetInSeconds } = await rateLimit(
      redis,
      rateLimitKey('bulk_attendance', `${currentUser.id}`),
      5,
      60
    );

    if (!allowed) {
      return new Response(
        JSON.stringify({
          error: `Rate limit exceeded. Try again in ${Math.ceil(resetInSeconds / 60)} min.`,
        }),
        { status: 429 }
      );
    }

    const body = await request.json();
    const { courseId, date, entries } = body as {
      courseId: number;
      date: string;
      entries: Array<{ student_id: number; status: 'P' | 'A' }>;
    };

    if (!courseId || !date || !Array.isArray(entries)) {
      return new Response(
        JSON.stringify({ error: 'Missing courseId, date, or entries array' }),
        { status: 400 }
      );
    }

    // Verify all submitted students are actually enrolled in the course
    const submittedStudentIds = entries.map((e) => e.student_id);
    if (submittedStudentIds.length === 0) {
      return new Response(JSON.stringify({ error: 'No entries provided' }), {
        status: 400,
      });
    }

    const enrolledRows = await db
      .select({ student_id: enrollments.student_id })
      .from(enrollments)
      .where(
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
          error: `Some students are not enrolled in this course: ${invalidIds.join(', ')}`,
        }),
        { status: 400 }
      );
    }

    const presentIds: number[] = [];
    const absentIds: number[] = [];

    // Process attendance
    for (const entry of entries) {
      if (entry.status === 'P') {
        presentIds.push(entry.student_id);
      } else if (entry.status === 'A') {
        absentIds.push(entry.student_id);
      }
    }

    // Insert present records (ignoring if they already exist for that date)
    if (presentIds.length > 0) {
      for (const studentId of presentIds) {
        const existing = await db
          .select()
          .from(attendance)
          .where(
            and(
              eq(attendance.student_id, studentId),
              eq(attendance.date, date),
              eq(attendance.course_id, courseId)
            )
          )
          .limit(1);

        if (existing.length === 0) {
          await db
            .insert(attendance)
            .values({ student_id: studentId, course_id: courseId, date });
        }
      }
    }

    // Delete absent records (if they were previously marked present)
    if (absentIds.length > 0) {
      await db
        .delete(attendance)
        .where(
          and(
            eq(attendance.date, date),
            eq(attendance.course_id, courseId),
            inArray(attendance.student_id, absentIds)
          )
        );
    }

    // Fire events (handles notifications and cache invalidation)
    for (const studentId of presentIds) {
      eventBus.emit('attendance.marked', {
        studentId,
        date,
        status: 'P',
        teacherId: currentUser.id,
        courseId,
      });
    }
    for (const studentId of absentIds) {
      eventBus.emit('attendance.marked', {
        studentId,
        date,
        status: 'A',
        teacherId: currentUser.id,
        courseId,
      });
    }

    // Audit log
    logAction(currentUser.id, 'bulk_attendance', 'attendance', courseId, {
      date,
      presentCount: presentIds.length,
      absentCount: absentIds.length,
      ip,
    });

    return new Response(
      JSON.stringify({
        success: true,
        present: presentIds.length,
        absent: absentIds.length,
      }),
      { status: 200 }
    );
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
};
