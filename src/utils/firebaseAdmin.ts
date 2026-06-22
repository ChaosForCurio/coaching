import { initializeApp, getApps, cert, type App } from 'firebase-admin/app';
import { getAuth, type DecodedIdToken } from 'firebase-admin/auth';

let adminApp: App | null = null;

function getAdminApp(): App {
  if (adminApp) return adminApp;

  const existingApps = getApps();
  if (existingApps.length > 0) {
    adminApp = existingApps[0];
    return adminApp;
  }

  const projectId    = process.env.FIREBASE_PROJECT_ID    || import.meta.env?.FIREBASE_PROJECT_ID;
  const clientEmail  = process.env.FIREBASE_CLIENT_EMAIL  || import.meta.env?.FIREBASE_CLIENT_EMAIL;
  const privateKey   = process.env.FIREBASE_PRIVATE_KEY   || import.meta.env?.FIREBASE_PRIVATE_KEY;

  if (!projectId || !clientEmail || !privateKey) {
    throw new Error(
      'Firebase Admin credentials are missing. Set FIREBASE_PROJECT_ID, ' +
      'FIREBASE_CLIENT_EMAIL, and FIREBASE_PRIVATE_KEY in your environment.'
    );
  }

  adminApp = initializeApp({
    credential: cert({
      projectId,
      clientEmail,
      // Replace escaped newlines that can come from env var strings
      privateKey: privateKey.replace(/\\n/g, '\n'),
    }),
  });

  return adminApp;
}

/**
 * Verifies a Firebase ID Token from the client.
 * Returns the decoded token payload on success, or null on failure.
 */
export async function verifyIdToken(token: string): Promise<DecodedIdToken | null> {
  try {
    const auth = getAuth(getAdminApp());
    const decoded = await auth.verifyIdToken(token, true); // checkRevoked = true
    return decoded;
  } catch (err) {
    console.error('[firebaseAdmin] Token verification failed:', err);
    return null;
  }
}
