const GET = async ({ request, url, redirect }) => {
  const NEON_AUTH_BASE_URL = "https://ep-wispy-truth-ap7kmm96.neonauth.c-7.us-east-1.aws.neon.tech/neondb/auth";
  const callbackURL = `${url.origin}/sso-callback`;
  try {
    const res = await fetch(`${NEON_AUTH_BASE_URL}/sign-in/social`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Better Auth uses the origin for CORS and cookie scoping
        Origin: url.origin
      },
      body: JSON.stringify({
        provider: "google",
        callbackURL,
        errorCallbackURL: `${url.origin}/login?error=oauth_failed`
      }),
      // Don't follow redirects — we want to capture the Location header
      redirect: "manual"
    });
    const responseHeaders = new Headers();
    const setCookies = res.headers.getSetCookie ? res.headers.getSetCookie() : [];
    for (const cookie of setCookies) {
      responseHeaders.append("Set-Cookie", cookie);
    }
    if (res.status === 302 || res.status === 301) {
      const location = res.headers.get("location");
      if (location) {
        responseHeaders.set("Location", location);
        return new Response(null, { status: 302, headers: responseHeaders });
      }
    }
    if (res.ok) {
      const data = await res.json();
      if (data?.url) {
        responseHeaders.set("Location", data.url);
        return new Response(null, { status: 302, headers: responseHeaders });
      }
    }
    console.error("[NEON AUTH] sign-in/social returned unexpected response:", res.status);
    return redirect("/login?error=oauth_init_failed");
  } catch (err) {
    console.error("[NEON AUTH] Failed to initiate Google OAuth:", err);
    return redirect("/login?error=oauth_init_failed");
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
