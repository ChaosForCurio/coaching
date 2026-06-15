import { d as db, u as users, p as passwordResetTokens } from './schema_CuVt3FVI.mjs';
import { eq } from 'drizzle-orm';
import crypto from 'node:crypto';
import { r as redis } from './redis_CUoFhAj3.mjs';
import { r as rateLimit, b as rateLimitKeyByEmail } from './rateLimit_BAVK40wj.mjs';
import { Resend } from 'resend';

const RESEND_API_KEY = "re_UxV6cUtG_9xcgcuevx9FSiuK5ermhBmW4";
async function sendPasswordResetEmail(to, resetUrl) {
  const resend = new Resend(RESEND_API_KEY);
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
    <body style="margin:0;padding:0;background:#0f172a;font-family:'Segoe UI',Helvetica,Arial,sans-serif;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background:#0f172a;min-height:100vh;">
        <tr><td align="center" style="padding:48px 16px;">
          <table width="560" cellpadding="0" cellspacing="0" style="background:linear-gradient(135deg,#1e293b,#0f172a);border:1px solid #334155;border-radius:16px;overflow:hidden;max-width:100%;">
            <tr>
              <td style="background:linear-gradient(135deg,#6366f1,#8b5cf6);padding:32px;text-align:center;">
                <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:700;letter-spacing:-0.5px;">🔐 Password Reset</h1>
                <p style="margin:8px 0 0;color:rgba(255,255,255,0.8);font-size:14px;">Coaching Platform</p>
              </td>
            </tr>
            <tr>
              <td style="padding:40px 32px;">
                <p style="margin:0 0 16px;color:#94a3b8;font-size:16px;line-height:1.6;">
                  You requested to reset your password. Click the button below to set a new one.
                </p>
                <p style="margin:0 0 32px;color:#64748b;font-size:14px;">
                  This link expires in <strong style="color:#a78bfa;">1 hour</strong>. If you didn't request this, you can safely ignore this email.
                </p>
                <div style="text-align:center;margin-bottom:32px;">
                  <a href="${resetUrl}"
                     style="display:inline-block;background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#ffffff;font-size:16px;font-weight:600;text-decoration:none;padding:14px 32px;border-radius:10px;letter-spacing:0.3px;">
                    Reset Password →
                  </a>
                </div>
                <p style="margin:0;color:#475569;font-size:12px;text-align:center;">
                  Or paste this URL into your browser:<br>
                  <span style="color:#6366f1;word-break:break-all;">${resetUrl}</span>
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 32px;border-top:1px solid #1e293b;text-align:center;">
                <p style="margin:0;color:#334155;font-size:12px;">© ${(/* @__PURE__ */ new Date()).getFullYear()} Coaching Platform · Sent via Resend</p>
              </td>
            </tr>
          </table>
        </td></tr>
      </table>
    </body>
    </html>
  `;
  const fromAddress = "bhavyacomputerclasses.com";
  const { data, error } = await resend.emails.send({
    from: fromAddress,
    to: [to],
    subject: "Reset your password — Coaching Platform",
    html
  });
  if (error) {
    console.error("[Email] Resend send error:", JSON.stringify(error));
    throw new Error(`[Email] Resend error: ${JSON.stringify(error)}`);
  }
}

const POST = async ({ request }) => {
  try {
    const contentType = request.headers.get("content-type") ?? "";
    let email = null;
    if (contentType.includes("application/json")) {
      const json = await request.json();
      email = json.email ?? null;
    } else {
      const data = await request.formData();
      email = data.get("email");
    }
    if (!email || typeof email !== "string") {
      return new Response(JSON.stringify({ error: "Email is required." }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const { allowed, resetInSeconds } = await rateLimit(
      redis,
      rateLimitKeyByEmail("forgot_password", email),
      3,
      3600
    );
    if (!allowed) {
      return new Response(
        JSON.stringify({ error: `Too many reset requests. Try again in ${Math.ceil(resetInSeconds / 60)} minutes.` }),
        { status: 429, headers: { "Content-Type": "application/json" } }
      );
    }
    const userList = await db.select().from(users).where(eq(users.email, email)).limit(1);
    const user = userList[0];
    if (!user) {
      return new Response(
        JSON.stringify({ success: true, message: "If that email exists, a reset link has been sent." }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }
    const token = crypto.randomBytes(32).toString("hex");
    const expiresAt = new Date(Date.now() + 60 * 60 * 1e3);
    await db.insert(passwordResetTokens).values({
      user_id: user.id,
      token,
      expires_at: expiresAt
    });
    const origin = request.headers.get("origin") || "http://localhost:4321";
    const resetUrl = `${origin}/reset-password?token=${token}`;
    console.log(`[ForgotPassword] Reset URL for ${user.email}:`, resetUrl);
    try {
      await sendPasswordResetEmail(user.email, resetUrl);
    } catch (emailErr) {
      console.error("[ForgotPassword] Failed to send email:", emailErr?.message ?? emailErr);
    }
    return new Response(
      JSON.stringify({ success: true, message: "If that email exists, a reset link has been sent." }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("[ForgotPassword Error]", err?.message ?? err);
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
