import { SignJWT, jwtVerify } from 'jose';
import type { AstroCookies } from 'astro';
import { db } from '../db';
import { users } from '../db/schema';
import { eq } from 'drizzle-orm';

const SECRET = new TextEncoder().encode(import.meta.env.JWT_SECRET || process.env.JWT_SECRET || 'super-secret-jwt-key-change-me');

export async function createSession(userId: number): Promise<string> {
  const jwt = await new SignJWT({ userId })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(SECRET);
  return jwt;
}

export async function getSessionUserId(cookies: AstroCookies): Promise<number | null> {
  const token = cookies.get('userSession')?.value;
  if (!token) return null;

  try {
    const { payload } = await jwtVerify(token, SECRET);
    if (typeof payload.userId === 'number') {
      return payload.userId;
    }
    return null;
  } catch (err) {
    return null;
  }
}

export async function requireAuth(cookies: AstroCookies) {
  const userId = await getSessionUserId(cookies);
  if (!userId) return null;

  const userList = await db.select().from(users).where(eq(users.id, userId)).limit(1);
  return userList[0] || null;
}
