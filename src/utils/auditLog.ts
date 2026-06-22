import { db } from '../db';
import { auditLogs } from '../db/schema';

/**
 * Fire-and-forget audit logger.
 * Call without await at action sites — failures are swallowed so they never
 * break the main request flow.
 *
 * @param userId      - The user performing the action
 * @param action      - Short verb describing the action (e.g. "mark_attendance")
 * @param entityType  - The domain object type (e.g. "attendance", "enrollment")
 * @param entityId    - Optional ID of the specific record affected
 * @param metadata    - Optional key-value object with extra context
 */
export function logAction(
  userId: number,
  action: string,
  entityType: string,
  entityId?: number,
  metadata?: Record<string, unknown>
): void {
  // Intentionally NOT awaited — best-effort logging
  db.insert(auditLogs)
    .values({
      user_id: userId,
      action,
      entity_type: entityType,
      entity_id: entityId ?? null,
      metadata: metadata ?? null,
    })
    .catch((err) => {
      console.error('[AuditLog Error]', err?.message ?? err);
    });
}

/**
 * Awaitable version — use when you need to ensure the log is written
 * before continuing (e.g. in cron cleanup jobs).
 */
export async function logActionAsync(
  userId: number,
  action: string,
  entityType: string,
  entityId?: number,
  metadata?: Record<string, unknown>
): Promise<void> {
  await db.insert(auditLogs).values({
    user_id: userId,
    action,
    entity_type: entityType,
    entity_id: entityId ?? null,
    metadata: metadata ?? null,
  });
}
