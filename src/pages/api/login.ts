import type { APIRoute } from 'astro';
import { db } from '../../db';
import { users, attendance, enrollments } from '../../db/schema';
import { eq, and } from 'drizzle-orm';
import bcrypt from 'bcryptjs';
import { createSession } from '../../utils/auth';
import { redis } from '../../utils/redis';
import { rateLimit, rateLimitKey } from '../../utils/rateLimit';
import { logAction } from '../../utils/auditLog';

export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    // ── Rate Limiting ──────────────────────────────────────────────────────
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    const { allowed, remaining, resetInSeconds } = await rateLimit(
      redis,
      rateLimitKey('login', ip),
      10,   // 10 attempts
      900   // per 15 minutes
    );

    if (!allowed) {
      return new Response(
        JSON.stringify({
          error: `Too many login attempts. Please wait ${Math.ceil(resetInSeconds / 60)} minutes before trying again.`,
        }),
        {
          status: 429,
          headers: {
            'Content-Type': 'application/json',
            'X-RateLimit-Remaining': String(remaining),
            'Retry-After': String(resetInSeconds),
          },
        }
      );
    }

    // ── Parse Body ─────────────────────────────────────────────────────────
    let email: string | null = null;
    let password: string | null = null;

    const contentType = request.headers.get('content-type') ?? '';

    if (contentType.includes('application/json')) {
      const json = await request.json();
      email = json.email ?? null;
      password = json.password ?? null;
    } else if (contentType.includes('multipart/form-data') || contentType.includes('application/x-www-form-urlencoded')) {
      const data = await request.formData();
      email = data.get('email') as string | null;
      password = data.get('password') as string | null;
    } else {
      const bodyText = await request.text();
      try {
        const json = JSON.parse(bodyText);
        email = json.email ?? null;
        password = json.password ?? null;
      } catch {
        const params = new URLSearchParams(bodyText);
        email = params.get('email');
        password = params.get('password');
      }
    }

    if (typeof email !== 'string' || typeof password !== 'string' || !email || !password) {
      return new Response(JSON.stringify({ error: 'Missing email or password' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // ── Authenticate ───────────────────────────────────────────────────────
    const userList = await db.select().from(users).where(eq(users.email, email)).limit(1);
    const user = userList[0];

    if (!user) {
      return new Response(JSON.stringify({ error: 'Invalid credentials' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const isValid = await bcrypt.compare(password, user.password_hash);
    if (!isValid) {
      return new Response(JSON.stringify({ error: 'Invalid credentials' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const token = await createSession(user.id, ip, request.headers.get('user-agent') ?? undefined);

    cookies.set('userSession', token, {
      path: '/',
      httpOnly: true,
      secure: import.meta.env.PROD,
      maxAge: 60 * 60 * 24, // 1 day
    });

    // ── Auto-mark attendance on student login ─────────────────────────────
    if (user.role === 'STUDENT') {
      const today = new Date().toISOString().split('T')[0];
      const userEnrollments = await db.select().from(enrollments).where(eq(enrollments.student_id, user.id));
      
      for (const enr of userEnrollments) {
        const existing = await db.select().from(attendance)
          .where(and(
            eq(attendance.student_id, user.id), 
            eq(attendance.course_id, enr.course_id),
            eq(attendance.date, today)
          ))
          .limit(1);
        if (existing.length === 0) {
          await db.insert(attendance).values({ 
            student_id: user.id, 
            course_id: enr.course_id,
            date: today 
          });
        }
      }
    }

    // ── Audit Log (fire-and-forget) ────────────────────────────────────────
    logAction(user.id, 'login', 'session', undefined, { ip, role: user.role });

    return new Response(JSON.stringify({ url: '/dashboard' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (err: any) {
    const message = err?.message ?? String(err);
    console.error('[LOGIN ERROR]', message, err?.stack ?? '');
    return new Response(
      JSON.stringify({ error: 'Server error: ' + message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
