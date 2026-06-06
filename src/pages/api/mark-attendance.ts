import type { APIRoute } from 'astro';
import { db } from '../../db';
import { attendance } from '../../db/schema';
import { and, eq } from 'drizzle-orm';

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { date, attendanceList } = body as {
      date: string;
      attendanceList: Array<{ studentId: number; status: 'P' | 'A' }>;
    };

    if (!date || !Array.isArray(attendanceList)) {
      return new Response(JSON.stringify({ error: 'Missing date or attendance list' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    for (const item of attendanceList) {
      const { studentId, status } = item;
      if (status === 'P') {
        // Check if already present
        const existing = await db.select().from(attendance)
          .where(and(eq(attendance.student_id, studentId), eq(attendance.date, date)))
          .limit(1);
        if (existing.length === 0) {
          await db.insert(attendance).values({
            student_id: studentId,
            date: date,
          });
        }
      } else if (status === 'A') {
        // Delete if exists
        await db.delete(attendance)
          .where(and(eq(attendance.student_id, studentId), eq(attendance.date, date)));
      }
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
