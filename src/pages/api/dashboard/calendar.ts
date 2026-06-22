import type { APIRoute } from 'astro';
import { db } from '../../../db';
import { attendance } from '../../../db/schema';
import { eq, and, gte, lte } from 'drizzle-orm';
import { requireAuth } from '../../../utils/auth';

export const GET: APIRoute = async ({ request, cookies }) => {
  try {
    const user = await requireAuth(cookies);
    if (!user || user.role !== 'STUDENT') {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
      });
    }

    const url = new URL(request.url);
    const yearStr = url.searchParams.get('year');
    const monthStr = url.searchParams.get('month');

    if (!yearStr || !monthStr) {
      return new Response(JSON.stringify({ error: 'Missing year or month' }), {
        status: 400,
      });
    }

    const year = parseInt(yearStr);
    const month = parseInt(monthStr);

    // Get the first and last day of the requested month
    const firstDay = new Date(year, month, 1).toISOString().split('T')[0];
    const lastDay = new Date(year, month + 1, 0).toISOString().split('T')[0];

    const monthAttendance = await db
      .select()
      .from(attendance)
      .where(
        and(
          eq(attendance.student_id, user.id),
          gte(attendance.date, firstDay),
          lte(attendance.date, lastDay)
        )
      );

    return new Response(
      JSON.stringify({ attendance: monthAttendance.map((a) => a.date) }),
      { status: 200 }
    );
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
};
