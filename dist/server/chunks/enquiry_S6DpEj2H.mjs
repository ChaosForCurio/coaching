globalThis.process ??= {};
globalThis.process.env ??= {};
const POST = async ({ request }) => {
  try {
    const body = await request.json();
    const { name, phone, course, message } = body;
    if (!name || !phone || !course) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const enquiryDetails = {
      name: String(name).trim(),
      phone: String(phone).trim(),
      course: String(course).trim(),
      message: String(message || "").trim(),
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      source: "Bhavya Computer Classes Website"
    };
    console.log("[ENQUIRY]", JSON.stringify(enquiryDetails, null, 2));
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    console.error("[ENQUIRY ERROR]", err);
    return new Response(JSON.stringify({ error: "Server error" }), {
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
