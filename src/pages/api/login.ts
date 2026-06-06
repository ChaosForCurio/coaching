import type { APIRoute } from 'astro';
import { db } from '../../db';
import { users, attendance } from '../../db/schema';
import { eq, and } from 'drizzle-orm';

export const POST: APIRoute = async ({ request, cookies }) => {
  try {
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
      // Fallback: try to parse body as text and detect format
      const bodyText = await request.text();
      try {
        // Try JSON first
        const json = JSON.parse(bodyText);
        email = json.email ?? null;
        password = json.password ?? null;
      } catch {
        // Try URL-encoded
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

    // Find user by email
    const userList = await db.select().from(users).where(eq(users.email, email)).limit(1);
    const user = userList[0];

    if (!user || user.password_hash !== password) {
      return new Response(JSON.stringify({ error: 'Invalid credentials' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Set session cookie
    cookies.set('userSession', user.id.toString(), {
      path: '/',
      httpOnly: true,
      secure: false, // true in production (HTTPS)
      maxAge: 60 * 60 * 24 * 7, // 1 week
    });

    // ATTENDANCE: auto-mark student as present on login
    if (user.role === 'STUDENT') {
      const today = new Date().toISOString().split('T')[0];
      const existing = await db.select().from(attendance)
        .where(and(eq(attendance.student_id, user.id), eq(attendance.date, today)))
        .limit(1);
      if (existing.length === 0) {
        await db.insert(attendance).values({ student_id: user.id, date: today });
      }
    }

    // Return dashboard URL based on role
    const url = '/dashboard';
    return new Response(JSON.stringify({ url }), {
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
