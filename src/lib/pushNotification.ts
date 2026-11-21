import admin from 'firebase-admin';
import { db } from '../db/client';
import { pushSubscriptions } from '../db/schema';
import { eq, inArray } from 'drizzle-orm';

/**
 * Initialize Firebase Admin SDK lazily if not already initialized
 */
export function getFirebaseAdmin() {
  if (!admin.apps.length) {
    const serviceAccountKey = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
    if (serviceAccountKey) {
      try {
        const credentials = JSON.parse(serviceAccountKey);
        admin.initializeApp({
          credential: admin.credential.cert(credentials),
        });
      } catch (e) {
        console.warn(
          'Could not parse FIREBASE_SERVICE_ACCOUNT_KEY JSON. Trying default credentials.'
        );
        admin.initializeApp();
      }
    } else {
      admin.initializeApp();
    }
  }
  return admin;
}

export interface PushNotificationPayload {
  title: string;
  body: string;
  url?: string;
  icon?: string;
  badge?: string;
}

/**
 * Send push notification to all subscribers of a specific topic (or all)
 */
export async function sendBroadcastNotification(
  payload: PushNotificationPayload,
  topic: string = 'general'
) {
  try {
    const subs = await db
      .select({ token: pushSubscriptions.token })
      .from(pushSubscriptions)
      .where(topic === 'all' ? undefined : eq(pushSubscriptions.topic, topic));

    const tokens = subs.map((s) => s.token).filter(Boolean);
    if (tokens.length === 0) {
      return {
        success: true,
        sentCount: 0,
        message: 'No registered devices found',
      };
    }

    const firebaseAdmin = getFirebaseAdmin();
    const messaging = firebaseAdmin.messaging();

    const response = await messaging.sendEachForMulticast({
      tokens,
      notification: {
        title: payload.title,
        body: payload.body,
      },
      data: {
        url: payload.url || '/courses',
      },
      webpush: {
        fcmOptions: {
          link: payload.url || '/courses',
        },
        notification: {
          icon: payload.icon || '/favicon.svg',
          badge: payload.badge || '/favicon.svg',
        },
      },
    });

    // Cleanup stale or unregistered tokens
    const tokensToRemove: string[] = [];
    response.responses.forEach((res, idx) => {
      if (!res.success && res.error) {
        const code = res.error.code;
        if (
          code === 'messaging/registration-token-not-registered' ||
          code === 'messaging/invalid-registration-token'
        ) {
          tokensToRemove.push(tokens[idx]);
        }
      }
    });

    if (tokensToRemove.length > 0) {
      await db
        .delete(pushSubscriptions)
        .where(inArray(pushSubscriptions.token, tokensToRemove));
    }

    return {
      success: true,
      sentCount: response.successCount,
      failedCount: response.failureCount,
    };
  } catch (err: any) {
    console.error('Failed to send broadcast push notification:', err);
    return { success: false, error: err.message };
  }
}
