globalThis.process ??= {};
globalThis.process.env ??= {};
import { d as db, u as users, e as eq } from "./schema_AfQQoxGU.mjs";
import { r as requireAuth } from "./auth_B_F03Kif.mjs";
const POST = async ({ request, cookies }) => {
  try {
    const currentUser = await requireAuth(cookies);
    if (!currentUser) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }
    const body = await request.json();
    const { avatarUrl } = body;
    if (!avatarUrl || typeof avatarUrl !== "string") {
      return new Response(JSON.stringify({ error: "Invalid avatar URL" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    await db.update(users).set({ avatar_url: avatarUrl }).where(eq(users.id, currentUser.id));
    return new Response(JSON.stringify({ success: true, avatarUrl }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Error updating avatar:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
