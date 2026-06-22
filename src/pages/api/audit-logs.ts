import type { APIRoute } from 'astro';
import { db } from '../../db';
import { auditLogs, users } from '../../db/schema';
import { eq, desc } from 'drizzle-orm';
import { requireAuth } from '../../utils/auth';

/**
 * GET /api/audit-logs
 * Returns recent audit log entries.
 * - Teachers see logs they themselves generated.
 * - (Future: admins could see all logs.)
 */
export const GET: APIRoute = async ({ request, cookies }) => {
  const user = await requireAuth(cookies);
  if (!user) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (user.role !== 'TEACHER') {
    return new Response(
      JSON.stringify({ error: 'Forbidden. Teachers only.' }),
      {
        status: 403,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  const url = new URL(request.url);
  const limit = Math.min(parseInt(url.searchParams.get('limit') ?? '50'), 100);

  const logs = await db
    .select({
      id: auditLogs.id,
      action: auditLogs.action,
      entity_type: auditLogs.entity_type,
      entity_id: auditLogs.entity_id,
      metadata: auditLogs.metadata,
      created_at: auditLogs.created_at,
    })
    .from(auditLogs)
    .where(eq(auditLogs.user_id, user.id))
    .orderBy(desc(auditLogs.created_at))
    .limit(limit);

  return new Response(JSON.stringify({ logs }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
