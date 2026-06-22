import { Resend } from 'resend';

const RESEND_API_KEY =
  (import.meta.env?.RESEND_API_KEY as string | undefined) ||
  process.env.RESEND_API_KEY;

/**
 * Sends a password reset email via Resend SDK.
 * Falls back to a console.log if the API key is not configured (dev mode).
 *
 * @param to       - Recipient email address
 * @param resetUrl - The full reset link (e.g. https://yoursite.com/reset-password?token=...)
 */
export async function sendPasswordResetEmail(
  to: string,
  resetUrl: string
): Promise<void> {
  if (!RESEND_API_KEY) {
    // Dev fallback
    console.warn(
      '[Email] RESEND_API_KEY not configured. Password reset URL:',
      resetUrl
    );
    return;
  }

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
                <p style="margin:0;color:#334155;font-size:12px;">© ${new Date().getFullYear()} Coaching Platform · Sent via Resend</p>
              </td>
            </tr>
          </table>
        </td></tr>
      </table>
    </body>
    </html>
  `;

  const fromAddress =
    (import.meta.env?.RESEND_FROM_EMAIL as string | undefined) ||
    process.env.RESEND_FROM_EMAIL ||
    'onboarding@resend.dev';

  const { data, error } = await resend.emails.send({
    from: fromAddress,
    to: [to],
    subject: 'Reset your password — Coaching Platform',
    html,
  });

  if (error) {
    console.error('[Email] Resend send error:', JSON.stringify(error));
    throw new Error(`[Email] Resend error: ${JSON.stringify(error)}`);
  }
}
