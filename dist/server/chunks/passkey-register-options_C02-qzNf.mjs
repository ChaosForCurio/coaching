import { r as requireAuth } from './auth_CFMQny9D.mjs';
import { r as redis } from './redis_CUoFhAj3.mjs';
import crypto from 'node:crypto';

function getRpId(request) {
  const host = request.headers.get("host") ?? "localhost";
  return host.split(":")[0];
}
const POST = async ({ request, cookies }) => {
  try {
    const user = await requireAuth(cookies);
    if (!user) {
      return new Response(JSON.stringify({ error: "Not authenticated" }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }
    const rpId = getRpId(request);
    const origin = request.headers.get("origin") ?? `https://${rpId}`;
    const challengeBytes = crypto.randomBytes(32);
    const challengeB64 = challengeBytes.toString("base64url");
    if (!redis) {
      return new Response(JSON.stringify({ error: "Redis is not configured" }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
    await redis.set(`passkey_reg_challenge:${user.id}`, challengeB64, { ex: 90 });
    const userIdB64 = Buffer.from(String(user.id)).toString("base64url");
    const options = {
      challenge: challengeB64,
      rp: {
        name: "Bhavya Computer Classes",
        id: rpId
      },
      user: {
        id: userIdB64,
        name: user.email,
        displayName: user.name
      },
      pubKeyCredParams: [
        { type: "public-key", alg: -7 },
        // ES256 (ECDSA w/ SHA-256)
        { type: "public-key", alg: -257 }
        // RS256 (RSASSA-PKCS1-v1_5)
      ],
      authenticatorSelection: {
        authenticatorAttachment: "platform",
        // only built-in (Windows Hello, Touch ID)
        userVerification: "required",
        residentKey: "preferred"
      },
      timeout: 6e4,
      attestation: "none"
      // no attestation needed for this use case
    };
    return new Response(JSON.stringify({ options, origin }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    console.error("[PASSKEY-REG-OPTIONS]", err);
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
