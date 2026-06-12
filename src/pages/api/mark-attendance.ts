import type { APIRoute } from 'astro';
import { db } from '../../db';
import { attendance } from '../../db/schema';
import { and, eq, inArray } from 'drizzle-orm';
import { requireAuth } from '../../utils/auth';
import { redis } from '../../utils/redis';
import { rateLimit, rateLimitKey } from '../../utils/rateLimit';
import { logAction } from '../../utils/auditLog';
import { eventBus } from '../../utils/eventBus';

export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    // ── Auth Guard ────────────────────────────────────────────────────────
    const currentUser = await requireAuth(cookies);
    if (!currentUser || currentUser.role !== 'TEACHER') {
      return new Response(JSON.stringify({ error: 'Unauthorized. Teachers only.' }), {
        status: 403,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // ── Rate Limiting: 30 submissions per teacher per minute ──────────────
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    const { allowed } = await rateLimit(
      redis,
      rateLimitKey('mark_attendance', `${currentUser.id}`),
      30,
      60
    );

    if (!allowed) {
      return new Response(JSON.stringify({ error: 'Rate limit exceeded. Please wait a moment.' }), {
        status: 429,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const body = await request.json();
    const { date, attendanceList, courseId } = body as {
      date: string;
      attendanceList: Array<{ studentId: number; status: 'P' | 'A' }>;
      courseId?: number;
    };

    if (!date || !courseId || !Array.isArray(attendanceList)) {
      return new Response(JSON.stringify({ error: 'Missing date, courseId, or attendance list' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const presentStudents: number[] = [];
    const absentStudents: number[] = [];

    const toInsert: { student_id: number; course_id: number; date: string }[] = [];

    for (const item of attendanceList) {
      const { studentId, status } = item;
      if (status === 'P') {
        toInsert.push({ student_id: studentId, course_id: courseId, date });
        presentStudents.push(studentId);
      } else if (status === 'A') {
        absentStudents.push(studentId);
      }
    }

    // Bulk Insert for present students
    if (toInsert.length > 0) {
      await db.insert(attendance)
        .values(toInsert)
        .onConflictDoNothing({ target: [attendance.student_id, attendance.course_id, attendance.date] });
    }

    // Bulk Delete for absent students
    if (absentStudents.length > 0) {
      await db.delete(attendance)
        .where(
          and(
            inArray(attendance.student_id, absentStudents),
            eq(attendance.course_id, courseId),
            eq(attendance.date, date)
          )
        );
    }

    // Cache Invalidation
    try {
      const cacheKey = `dashboard_stats_${currentUser.id}`;
      await redis?.del(cacheKey);
    } catch (cacheErr) {
      console.error('Failed to invalidate cache:', cacheErr);
    }

    // ── Audit Log ─────────────────────────────────────────────────────────
    logAction(currentUser.id, 'mark_attendance', 'attendance', undefined, {
      date,
      courseId,
      presentCount: presentStudents.length,
      absentCount: absentStudents.length,
      ip,
    });

    // ── Emit events for attendance ─────────────────────────────────────────
    for (const studentId of presentStudents) {
      eventBus.emit('attendance.marked', { studentId, date, status: 'P', teacherId: currentUser.id, courseId });
    }
    for (const studentId of absentStudents) {
      eventBus.emit('attendance.marked', { studentId, date, status: 'A', teacherId: currentUser.id, courseId });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
