import type { APIRoute } from 'astro';
import { requireAuth } from '../../../utils/auth';
import { db } from '../../../db';
import { passkeys } from '../../../db/schema';
import { eq, and } from 'drizzle-orm';
import { logAction } from '../../../utils/auditLog';

export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    const user = await requireAuth(cookies);
    if (!user) {
      return new Response(JSON.stringify({ error: 'Not authenticated' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const body = await request.json();
    const { credentialId } = body as { credentialId?: string };

    if (!credentialId) {
      return new Response(JSON.stringify({ error: 'Missing credential ID' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Delete the passkey belonging to this user
    await db
      .delete(passkeys)
      .where(and(eq(passkeys.credential_id, credentialId), eq(passkeys.user_id, user.id)));

    // Optionally log the action
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    logAction(user.id, 'passkey_revoke', 'user', user.id, { credentialId, ip });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err: any) {
    console.error('[PASSKEY-DELETE]', err);
    return new Response(JSON.stringify({ error: 'Server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
