import type { APIRoute } from 'astro';
import { db } from '../../db';
import { users } from '../../db/schema';
import { eq } from 'drizzle-orm';

export const POST: APIRoute = async ({ request, cookies }) => {
  const data = await request.formData();
  const name = data.get('name');
  const email = data.get('email');
  const password = data.get('password');
  const role = data.get('role'); // e.g., 'STUDENT' or 'TEACHER'

  if (typeof name !== 'string' || typeof email !== 'string' || typeof password !== 'string' || typeof role !== 'string') {
    return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
  }

  // Check if user already exists
  const existingUser = await db.select().from(users).where(eq(users.email, email)).limit(1);
  if (existingUser.length > 0) {
    return new Response(JSON.stringify({ error: 'Email already registered' }), { status: 409 });
  }

  // Insert new user
  const newUserList = await db.insert(users).values({
    name,
    email,
    password_hash: password, // In production, hash this password!
    role: role.toUpperCase() as 'STUDENT' | 'TEACHER',
  }).returning();

  const user = newUserList[0];

  // Set secure cookie
  cookies.set('userSession', user.id.toString(), {
    path: '/',
    httpOnly: true,
    secure: true,
    maxAge: 60 * 60 * 24 * 7, // 1 week
  });

  // Return the UUID (which is just the ID here) to show in the success screen
  return new Response(JSON.stringify({ uuid: user.id }), { status: 200 });
};
