import { g as getOrCreateLocalUser } from './stack_DeFeyIBb.mjs';

const POST = async ({ request }) => {
  try {
    const payload = await request.json();
    const eventType = payload.type;
    const eventData = payload.data;
    if (!eventType || !eventData) {
      return new Response(JSON.stringify({ error: "Invalid payload structure" }), { status: 400 });
    }
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    if (eventType === "user.created" || eventType === "user.updated") {
      const stackUser = {
        id: eventData.id,
        primary_email: eventData.primary_email,
        display_name: eventData.display_name,
        metadata: eventData.metadata || {}
      };
      if (!stackUser.primary_email) {
        return new Response(JSON.stringify({ error: "Primary email is missing" }), { status: 400 });
      }
      await getOrCreateLocalUser(stackUser, ip);
      return new Response(JSON.stringify({ success: true, message: "User synchronized successfully" }), { status: 200 });
    }
    return new Response(JSON.stringify({ success: true, message: "Event ignored" }), { status: 200 });
  } catch (err) {
    console.error("[STACK WEBHOOK ERROR]", err?.message || err);
    return new Response(JSON.stringify({ error: err?.message || "Internal server error" }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
