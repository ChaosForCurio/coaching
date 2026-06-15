import { d as db, g as passkeys, u as users } from './schema_CuVt3FVI.mjs';
import { eq } from 'drizzle-orm';
import { r as redis } from './redis_CUoFhAj3.mjs';
import { c as createSession } from './auth_CFMQny9D.mjs';
import { l as logAction } from './auditLog_Ddj_dmE3.mjs';
import crypto from 'node:crypto';

function getRpId(request) {
  const host = request.headers.get("host") ?? "localhost";
  return host.split(":")[0];
}
function fromB64url(s) {
  return Buffer.from(s, "base64url");
}
function parseAssertionAuthData(authData) {
  const rpIdHash = authData.subarray(0, 32);
  const flags = authData[32];
  const counter = authData.readUInt32BE(33);
  return { rpIdHash, flags, counter };
}
function importCOSEPublicKey(coseBytes) {
  const map = decodeCBORMap(coseBytes);
  const kty = map[1];
  if (kty === 2) {
    const x = map[-2];
    const y = map[-3];
    Buffer.concat([Buffer.from([4]), x, y]);
    return crypto.createPublicKey({
      key: {
        kty: "EC",
        crv: "P-256",
        x: x.toString("base64url"),
        y: y.toString("base64url")
      },
      format: "jwk"
    });
  } else if (kty === 3) {
    const n = map[-1];
    const e = map[-2];
    return crypto.createPublicKey({
      key: {
        kty: "RSA",
        n: n.toString("base64url"),
        e: e.toString("base64url")
      },
      format: "jwk"
    });
  }
  throw new Error(`Unsupported COSE kty: ${kty}`);
}
const POST = async ({ request, cookies }) => {
  try {
    const body = await request.json();
    const { credential, handle } = body;
    if (!redis) {
      return new Response(JSON.stringify({ error: "Passkey login is temporarily unavailable. Please sign in with your password." }), {
        status: 503,
        headers: { "Content-Type": "application/json" }
      });
    }
    const storedChallenge = await redis.get(`passkey_login_challenge:${handle}`);
    if (!storedChallenge) {
      return new Response(JSON.stringify({ error: "Challenge expired. Please try again." }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    await redis.del(`passkey_login_challenge:${handle}`);
    const clientData = JSON.parse(
      fromB64url(credential.response.clientDataJSON).toString("utf8")
    );
    if (clientData.type !== "webauthn.get") {
      return new Response(JSON.stringify({ error: "Invalid client data type" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    if (clientData.challenge !== storedChallenge) {
      return new Response(JSON.stringify({ error: "Challenge mismatch" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const rpId = getRpId(request);
    const origin = request.headers.get("origin") ?? `https://${rpId}`;
    if (clientData.origin !== origin) {
      return new Response(JSON.stringify({ error: "Origin mismatch" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const credentialId = credential.id;
    const passkeyList = await db.select().from(passkeys).where(eq(passkeys.credential_id, credentialId)).limit(1);
    if (passkeyList.length === 0) {
      return new Response(JSON.stringify({ error: "Passkey not found" }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }
    const passkey = passkeyList[0];
    const authDataBuf = fromB64url(credential.response.authenticatorData);
    const { rpIdHash, flags, counter } = parseAssertionAuthData(authDataBuf);
    const expectedRpIdHash = crypto.createHash("sha256").update(rpId).digest();
    if (!expectedRpIdHash.equals(rpIdHash)) {
      return new Response(JSON.stringify({ error: "RP ID hash mismatch" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    if (!(flags & 4)) {
      return new Response(JSON.stringify({ error: "User verification required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    if (passkey.counter > 0 && counter <= passkey.counter) {
      return new Response(JSON.stringify({ error: "Signature counter invalid (possible replay attack)" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const clientDataHash = crypto.createHash("sha256").update(fromB64url(credential.response.clientDataJSON)).digest();
    const verificationData = Buffer.concat([authDataBuf, clientDataHash]);
    const signature = fromB64url(credential.response.signature);
    const coseKey = fromB64url(passkey.public_key);
    const publicKey = importCOSEPublicKey(coseKey);
    const isValid = crypto.verify("sha256", verificationData, publicKey, signature);
    if (!isValid) {
      return new Response(JSON.stringify({ error: "Signature verification failed" }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }
    await db.update(passkeys).set({ counter }).where(eq(passkeys.id, passkey.id));
    const userList = await db.select().from(users).where(eq(users.id, passkey.user_id)).limit(1);
    if (userList.length === 0) {
      return new Response(JSON.stringify({ error: "User not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" }
      });
    }
    const user = userList[0];
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    const token = await createSession(user.id, ip, request.headers.get("user-agent") ?? void 0);
    cookies.set("userSession", token, {
      path: "/",
      httpOnly: true,
      secure: true,
      maxAge: 60 * 60 * 24 * 30
      // 30 days for passkey login
    });
    logAction(user.id, "passkey_login", "session", void 0, { ip, role: user.role });
    return new Response(JSON.stringify({ url: "/dashboard" }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    console.error("[PASSKEY-LOGIN-VERIFY]", err);
    return new Response(JSON.stringify({ error: "Server error: " + err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};
function decodeCBORMap(buf) {
  const [val] = decodeCBORValue(buf, 0);
  return val;
}
function decodeCBORValue(buf, offset) {
  const initial = buf[offset++];
  const majorType = initial >> 5 & 7;
  const addInfo = initial & 31;
  let length = 0;
  if (addInfo < 24) {
    length = addInfo;
  } else if (addInfo === 24) {
    length = buf[offset++];
  } else if (addInfo === 25) {
    length = buf.readUInt16BE(offset);
    offset += 2;
  } else if (addInfo === 26) {
    length = buf.readUInt32BE(offset);
    offset += 4;
  }
  if (majorType === 1) return [-(length + 1), offset];
  switch (majorType) {
    case 0:
      return [length, offset];
    case 2: {
      const bytes = buf.subarray(offset, offset + length);
      return [Buffer.from(bytes), offset + length];
    }
    case 3: {
      const text = buf.subarray(offset, offset + length).toString("utf8");
      return [text, offset + length];
    }
    case 4: {
      const arr = [];
      for (let i = 0; i < length; i++) {
        const [val, next] = decodeCBORValue(buf, offset);
        arr.push(val);
        offset = next;
      }
      return [arr, offset];
    }
    case 5: {
      const map = {};
      for (let i = 0; i < length; i++) {
        const [key, next1] = decodeCBORValue(buf, offset);
        const [val, next2] = decodeCBORValue(buf, next1);
        map[key] = val;
        offset = next2;
      }
      return [map, offset];
    }
    default:
      throw new Error(`Unsupported CBOR major type: ${majorType}`);
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
