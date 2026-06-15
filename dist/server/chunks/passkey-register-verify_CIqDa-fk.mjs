import { r as requireAuth } from './auth_IRlGwh__.mjs';
import { d as db, g as passkeys } from './schema_CuVt3FVI.mjs';
import { r as redis } from './redis_CUoFhAj3.mjs';
import crypto from 'node:crypto';

function getRpId(request) {
  const host = request.headers.get("host") ?? "localhost";
  return host.split(":")[0];
}
function fromB64url(s) {
  return Buffer.from(s, "base64url");
}
function parseAuthData(authData) {
  const rpIdHash = authData.subarray(0, 32);
  const flags = authData[32];
  const counter = authData.readUInt32BE(33);
  if (!(flags & 64)) {
    throw new Error("Attested credential data flag not set");
  }
  const credIdLen = authData.readUInt16BE(53);
  const credentialId = authData.subarray(55, 55 + credIdLen);
  const cosePublicKey = authData.subarray(55 + credIdLen);
  return { rpIdHash, flags, counter, credentialId, cosePublicKey };
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
    const body = await request.json();
    const { credential, deviceName } = body;
    if (!redis) {
      return new Response(JSON.stringify({ error: "Redis is not configured" }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
    const storedChallenge = await redis.get(`passkey_reg_challenge:${user.id}`);
    if (!storedChallenge) {
      return new Response(JSON.stringify({ error: "Challenge expired or not found" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    await redis.del(`passkey_reg_challenge:${user.id}`);
    const clientDataJSON = JSON.parse(
      fromB64url(credential.response.clientDataJSON).toString("utf8")
    );
    if (clientDataJSON.type !== "webauthn.create") {
      return new Response(JSON.stringify({ error: "Invalid client data type" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    if (clientDataJSON.challenge !== storedChallenge) {
      return new Response(JSON.stringify({ error: "Challenge mismatch" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const rpId = getRpId(request);
    const origin = request.headers.get("origin") ?? `https://${rpId}`;
    if (clientDataJSON.origin !== origin) {
      return new Response(JSON.stringify({ error: "Origin mismatch" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const attObjBuf = fromB64url(credential.response.attestationObject);
    const attObj = decodeCBOR(attObjBuf);
    const authData = Buffer.from(attObj.authData);
    const expectedRpIdHash = crypto.createHash("sha256").update(rpId).digest();
    const { rpIdHash, flags, counter, credentialId, cosePublicKey } = parseAuthData(authData);
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
    const credentialIdB64 = credentialId.toString("base64url");
    const publicKeyB64 = cosePublicKey.toString("base64url");
    const name = deviceName ?? detectDeviceName(credential.response.clientDataJSON);
    await db.insert(passkeys).values({
      user_id: user.id,
      credential_id: credentialIdB64,
      public_key: publicKeyB64,
      counter,
      device_name: name
    }).onConflictDoNothing();
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    console.error("[PASSKEY-REG-VERIFY]", err);
    return new Response(JSON.stringify({ error: "Server error: " + err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};
function detectDeviceName(clientDataJSONB64) {
  try {
    const cd = JSON.parse(Buffer.from(clientDataJSONB64, "base64url").toString());
    const origin = cd.origin ?? "";
    if (origin.includes("localhost")) return "Local Device";
  } catch {
  }
  return "Passkey Device";
}
function decodeCBOR(buf) {
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
  switch (majorType) {
    case 0:
      return [length, offset];
    // unsigned int
    case 2: {
      const bytes = buf.subarray(offset, offset + length);
      return [bytes, offset + length];
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
