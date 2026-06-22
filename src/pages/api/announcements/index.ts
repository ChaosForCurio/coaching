import type { APIRoute } from 'astro';
import { db } from '../../../db';
import { announcements, courses, enrollments, users } from '../../../db/schema';
import { eq, desc, and } from 'drizzle-orm';
import { requireAuth } from '../../../utils/auth';
import { redis } from '../../../utils/redis';
import { getCache, setCache } from '../../../utils/redis';
import { rateLimit, rateLimitKey } from '../../../utils/rateLimit';
import { eventBus } from '../../../utils/eventBus';
import { logAction } from '../../../utils/auditLog';

// ── GET /api/announcements?courseId=X ─────────────────────────────────────────
export const GET: APIRoute = async ({ request, cookies }) => {
  try {
    const user = await requireAuth(cookies);
    if (!user) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const url = new URL(request.url);
    const courseIdParam = url.searchParams.get('courseId');
    if (!courseIdParam) {
      return new Response(
        JSON.stringify({ error: 'courseId query param is required' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    const courseId = parseInt(courseIdParam);
    if (isNaN(courseId)) {
      return new Response(JSON.stringify({ error: 'Invalid courseId' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // ── Redis cache check (5-min TTL) ──────────────────────────────────────
    const cacheKey = `announcements_${courseId}`;
    const cached = await getCache<object[]>(cacheKey);
    if (cached) {
      return new Response(JSON.stringify(cached), {
        status: 200,
        headers: { 'Content-Type': 'application/json', 'X-Cache': 'HIT' },
      });
    }

    // ── Fetch pinned first, then chronological ─────────────────────────────
    const rows = await db
      .select({
        id: announcements.id,
        title: announcements.title,
        body: announcements.body,
        pinned: announcements.pinned,
        createdAt: announcements.created_at,
        teacherName: users.name,
      })
      .from(announcements)
      .innerJoin(users, eq(announcements.teacher_id, users.id))
      .where(eq(announcements.course_id, courseId))
      .orderBy(desc(announcements.pinned), desc(announcements.created_at));

    await setCache(cacheKey, rows, 300); // 5-min TTL

    return new Response(JSON.stringify(rows), {
      status: 200,
      headers: { 'Content-Type': 'application/json', 'X-Cache': 'MISS' },
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

// ── POST /api/announcements ────────────────────────────────────────────────────
export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    const user = await requireAuth(cookies);
    if (!user || user.role !== 'TEACHER') {
      return new Response(
        JSON.stringify({ error: 'Unauthorized. Teachers only.' }),
        {
          status: 403,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // ── Rate limit: 20 announcements per teacher per hour ──────────────────
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      'unknown';
    const { allowed, resetInSeconds } = await rateLimit(
      redis,
      rateLimitKey('announcements', `${user.id}`),
      20,
      3600
    );
    if (!allowed) {
      return new Response(
        JSON.stringify({
          error: `Rate limit exceeded. Try again in ${Math.ceil(resetInSeconds / 60)} min.`,
        }),
        { status: 429, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // ── Parse body ─────────────────────────────────────────────────────────
    const body = await request.json();
    const {
      courseId,
      title,
      body: text,
      pinned = false,
    } = body as {
      courseId: number;
      title: string;
      body: string;
      pinned?: boolean;
    };

    if (!courseId || !title?.trim() || !text?.trim()) {
      return new Response(
        JSON.stringify({ error: 'courseId, title, and body are required' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    if (title.length > 200) {
      return new Response(
        JSON.stringify({ error: 'Title must be 200 characters or fewer' }),
        {
          status: 422,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    if (text.length > 5000) {
      return new Response(
        JSON.stringify({ error: 'Body must be 5000 characters or fewer' }),
        {
          status: 422,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // ── Verify teacher owns this course ────────────────────────────────────
    const courseRows = await db
      .select()
      .from(courses)
      .where(and(eq(courses.id, courseId), eq(courses.teacher_id, user.id)))
      .limit(1);

    if (courseRows.length === 0) {
      return new Response(
        JSON.stringify({ error: 'Course not found or access denied' }),
        {
          status: 404,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    const course = courseRows[0];

    // ── Insert announcement ────────────────────────────────────────────────
    const inserted = await db
      .insert(announcements)
      .values({
        course_id: courseId,
        teacher_id: user.id,
        title: title.trim(),
        body: text.trim(),
        pinned: Boolean(pinned),
      })
      .returning();

    const announcement = inserted[0];

    // ── Fetch all enrolled student IDs ─────────────────────────────────────
    const enrolledRows = await db
      .select({ student_id: enrollments.student_id })
      .from(enrollments)
      .where(eq(enrollments.course_id, courseId));

    const enrolledStudentIds = enrolledRows.map((r) => r.student_id);

    // ── Emit event (notifies all students + invalidates cache) ─────────────
    eventBus.emit('announcement.posted', {
      announcementId: announcement.id,
      courseId,
      courseTitle: course.title,
      teacherName: user.name,
      title: announcement.title,
      enrolledStudentIds,
    });

    // ── Audit log ──────────────────────────────────────────────────────────
    logAction(user.id, 'post_announcement', 'announcement', announcement.id, {
      courseId,
      title: announcement.title,
      notifiedStudents: enrolledStudentIds.length,
      ip,
    });

    return new Response(JSON.stringify({ success: true, announcement }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
