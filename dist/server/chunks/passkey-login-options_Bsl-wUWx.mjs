import { d as db, u as users, g as passkeys } from './schema_CuVt3FVI.mjs';
import { eq } from 'drizzle-orm';
import { r as redis } from './redis_CUoFhAj3.mjs';
import crypto from 'node:crypto';

function getRpId(request) {
  const host = request.headers.get("host") ?? "localhost";
  return host.split(":")[0];
}
const POST = async ({ request }) => {
  try {
    const body = await request.json().catch(() => ({}));
    const email = body?.email;
    const rpId = getRpId(request);
    let allowCredentials = [];
    if (email) {
      const userList = await db.select().from(users).where(eq(users.email, email)).limit(1);
      if (userList.length > 0) {
        const userPasskeys = await db.select().from(passkeys).where(eq(passkeys.user_id, userList[0].id));
        allowCredentials = userPasskeys.map((pk) => ({
          type: "public-key",
          id: pk.credential_id,
          transports: ["internal"]
        }));
      }
    }
    const challenge = crypto.randomBytes(32).toString("base64url");
    const handle = crypto.randomBytes(16).toString("hex");
    if (!redis) {
      return new Response(JSON.stringify({ error: "Passkey login is temporarily unavailable. Please sign in with your password." }), {
        status: 503,
        headers: { "Content-Type": "application/json" }
      });
    }
    await redis.set(`passkey_login_challenge:${handle}`, challenge, { ex: 90 });
    const options = {
      challenge,
      rpId,
      allowCredentials,
      userVerification: "required",
      timeout: 6e4
    };
    return new Response(JSON.stringify({ options, handle }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    console.error("[PASSKEY-LOGIN-OPTIONS]", err);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
