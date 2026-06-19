import type { APIRoute } from 'astro';

/**
 * GET /api/auth/google-signin
 *
 * Intermediary route that initiates the Neon Auth (Better Auth) Google OAuth flow.
 *
 * Better Auth's social sign-in is POST-based — you POST to /sign-in/social,
 * receive the Google OAuth URL, then redirect the browser there.
 * We can't do this from a plain <a href> on the login page, so this server
 * route acts as the bridge.
 *
 * Flow:
 *   Login page → /api/auth/google-signin
 *     → POST {NEON_AUTH_BASE_URL}/sign-in/social { provider: "google", callbackURL }
 *     → Receive Google OAuth URL from Neon Auth
 *     → 302 redirect to Google OAuth URL
 *     → Google → Neon Auth → /api/auth/sso-callback
 */
export const GET: APIRoute = async ({ request, url, redirect }) => {
  const NEON_AUTH_BASE_URL = import.meta.env.NEON_AUTH_BASE_URL;

  if (!NEON_AUTH_BASE_URL) {
    return redirect('/login?error=auth_not_configured');
  }

  // The callback URL is where Neon Auth will redirect after Google OAuth
  const callbackURL = `${url.origin}/sso-callback`;

  try {
    const res = await fetch(`${NEON_AUTH_BASE_URL}/sign-in/social`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Better Auth uses the origin for CORS and cookie scoping
        Origin: url.origin,
      },
      body: JSON.stringify({
        provider: 'google',
        callbackURL,
        errorCallbackURL: `${url.origin}/login?error=oauth_failed`,
      }),
      // Don't follow redirects — we want to capture the Location header
      redirect: 'manual',
    });

    const responseHeaders = new Headers();
    
    // Forward any Set-Cookie headers from Better Auth (e.g., OAuth state cookies)
    const setCookies = res.headers.getSetCookie ? res.headers.getSetCookie() : [];
    for (const cookie of setCookies) {
      responseHeaders.append('Set-Cookie', cookie);
    }

    // Better Auth returns a 302 redirect to Google's OAuth URL directly,
    // or a 200 JSON response with { url, redirect: true }.
    if (res.status === 302 || res.status === 301) {
      const location = res.headers.get('location');
      if (location) {
        responseHeaders.set('Location', location);
        return new Response(null, { status: 302, headers: responseHeaders });
      }
    }

    if (res.ok) {
      const data = await res.json();
      if (data?.url) {
        responseHeaders.set('Location', data.url);
        return new Response(null, { status: 302, headers: responseHeaders });
      }
    }

    console.error('[NEON AUTH] sign-in/social returned unexpected response:', res.status);
    return redirect('/login?error=oauth_init_failed');
  } catch (err) {
    console.error('[NEON AUTH] Failed to initiate Google OAuth:', err);
    return redirect('/login?error=oauth_init_failed');
  }
};
