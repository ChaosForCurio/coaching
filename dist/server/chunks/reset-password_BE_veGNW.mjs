import { d as db, p as passwordResetTokens, u as users } from './schema_CuVt3FVI.mjs';
import { and, eq, gt } from 'drizzle-orm';
import bcrypt from 'bcryptjs';
import { l as logAction } from './auditLog_Ddj_dmE3.mjs';

const POST = async ({ request }) => {
  try {
    const contentType = request.headers.get("content-type") ?? "";
    let token = null;
    let newPassword = null;
    if (contentType.includes("application/json")) {
      const json = await request.json();
      token = json.token ?? null;
      newPassword = json.password ?? null;
    } else {
      const data = await request.formData();
      token = data.get("token");
      newPassword = data.get("password");
    }
    if (!token || !newPassword) {
      return new Response(JSON.stringify({ error: "Token and new password are required." }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    if (newPassword.length < 8) {
      return new Response(JSON.stringify({ error: "Password must be at least 8 characters." }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const now = /* @__PURE__ */ new Date();
    const tokenRecord = await db.select().from(passwordResetTokens).where(
      and(
        eq(passwordResetTokens.token, token),
        eq(passwordResetTokens.used, false),
        gt(passwordResetTokens.expires_at, now)
      )
    ).limit(1);
    if (tokenRecord.length === 0) {
      return new Response(
        JSON.stringify({ error: "Invalid or expired reset link. Please request a new one." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const resetRecord = tokenRecord[0];
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(newPassword, salt);
    await db.update(users).set({ password_hash: passwordHash }).where(eq(users.id, resetRecord.user_id));
    await db.update(passwordResetTokens).set({ used: true }).where(eq(passwordResetTokens.id, resetRecord.id));
    logAction(resetRecord.user_id, "password_reset", "user", resetRecord.user_id);
    return new Response(
      JSON.stringify({ success: true, message: "Password reset successfully. You can now log in." }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("[ResetPassword Error]", err?.message ?? err);
    return new Response(JSON.stringify({ error: "Internal server error." }), {
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
