import type { APIRoute } from 'astro';
import { db } from '../../db';
import { users } from '../../db/schema';
import { eq } from 'drizzle-orm';
import bcrypt from 'bcryptjs';
import { createSession } from '../../utils/auth';
import { redis } from '../../utils/redis';
import { rateLimit, rateLimitKey } from '../../utils/rateLimit';

export const POST: APIRoute = async ({ request, cookies }) => {
  // ── Rate Limiting: 5 registrations per IP per hour ──────────────────────
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  const { allowed, resetInSeconds } = await rateLimit(
    redis,
    rateLimitKey('register', ip),
    5,    // 5 registrations
    3600  // per hour
  );

  if (!allowed) {
    return new Response(
      JSON.stringify({ error: `Too many registrations from this IP. Try again in ${Math.ceil(resetInSeconds / 60)} minutes.` }),
      { status: 429, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const data = await request.formData();
  const name = data.get('name');
  const email = data.get('email');
  const password = data.get('password');
  const role = data.get('role');

  if (
    typeof name !== 'string' ||
    typeof email !== 'string' ||
    typeof password !== 'string' ||
    typeof role !== 'string'
  ) {
    return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
  }

  // Check if user already exists
  const existingUser = await db.select().from(users).where(eq(users.email, email)).limit(1);
  if (existingUser.length > 0) {
    return new Response(JSON.stringify({ error: 'Email already registered' }), { status: 409 });
  }

  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(password, salt);

  const newUserList = await db.insert(users).values({
    name,
    email,
    password_hash: passwordHash,
    role: role.toUpperCase() as 'STUDENT' | 'TEACHER',
  }).returning();

  const user = newUserList[0];

  const token = await createSession(user.id, ip, request.headers.get('user-agent') ?? undefined);

  cookies.set('userSession', token, {
    path: '/',
    httpOnly: true,
    secure: import.meta.env.PROD,
    maxAge: 60 * 60 * 24 * 7, // 1 week
  });

  return new Response(JSON.stringify({ uuid: user.id }), { status: 200 });
};
