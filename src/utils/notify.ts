import { db } from '../db';
import { notifications } from '../db/schema';

export type NotificationType =
  | 'enrollment'
  | 'attendance'
  | 'grade'
  | 'system'
  | 'announcement';

/**
 * Fire-and-forget notification creator.
 * Call without await at action sites.
 *
 * @param userId  - The recipient user's ID
 * @param message - Human-readable notification text
 * @param type    - Notification category
 */
export function createNotification(
  userId: number,
  message: string,
  type: NotificationType
): void {
  // Intentionally NOT awaited
  db.insert(notifications)
    .values({
      user_id: userId,
      message,
      type,
    })
    .catch((err) => {
      console.error('[Notification Error]', err?.message ?? err);
    });
}

/**
 * Awaitable version — use when notification must be confirmed before redirect.
 */
export async function createNotificationAsync(
  userId: number,
  message: string,
  type: NotificationType
): Promise<void> {
  await db.insert(notifications).values({
    user_id: userId,
    message,
    type,
  });
}
