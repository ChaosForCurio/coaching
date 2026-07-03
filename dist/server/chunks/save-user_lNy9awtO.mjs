import { d as db, u as users } from './schema_UQndYuIj.mjs';
import { eq } from 'drizzle-orm';
import { Resend } from 'resend';
import { v as verifyIdToken } from './firebaseAdmin_O4i9_lne.mjs';

const POST = async ({ request }) => {
  try {
    const authHeader = request.headers.get("Authorization");
    if (!authHeader?.startsWith("Bearer ")) {
      return new Response(JSON.stringify({ error: "Missing or invalid Authorization header" }), { status: 401 });
    }
    const idToken = authHeader.split("Bearer ")[1];
    const decoded = await verifyIdToken(idToken);
    if (!decoded) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }
    const uid = decoded.uid;
    const body = await request.json();
    const { email, role, name } = body;
    if (!email || !role) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
    }
    const userName = name || email.split("@")[0];
    const existingUser = await db.select().from(users).where(eq(users.email, email)).limit(1);
    if (existingUser.length > 0) {
      await db.update(users).set({ firebase_uid: uid }).where(eq(users.id, existingUser[0].id));
      return new Response(JSON.stringify({ success: true, message: "User linked" }), { status: 200 });
    }
    await db.insert(users).values({
      firebase_uid: uid,
      email,
      name: userName,
      role: role.toUpperCase()
      // Schema enum is 'STUDENT' or 'TEACHER'
      // password_hash is now optional in schema, so we don't need to provide it
    });
    try {
      const resend = new Resend("re_UxV6cUtG_9xcgcuevx9FSiuK5ermhBmW4");
      const fromEmail = "bhavyacomputerclasses.com"?.includes("@") ? "bhavyacomputerclasses.com" : `noreply@${"bhavyacomputerclasses.com"}`;
      await resend.emails.send({
        from: `Bhavya Computer Classes <${fromEmail}>`,
        to: [email],
        subject: "Welcome to Bhavya Computer Classes!",
        html: `
          <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f9fafb; border-radius: 8px; overflow: hidden; border: 1px solid #e5e7eb;">
            <div style="background-color: #2563eb; padding: 30px; text-align: center;">
              <!-- Using ui-avatars as a placeholder logo. Replace the src with your actual logo image URL when you host one! -->
              <img src="https://ui-avatars.com/api/?name=Bhavya+Classes&background=ffffff&color=2563eb&rounded=true&size=80" alt="Bhavya Computer Classes Logo" style="display: block; margin: 0 auto; margin-bottom: 15px; border-radius: 50%;" width="80" height="80">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Welcome to Bhavya Computer Classes!</h1>
            </div>
            
            <div style="padding: 30px; background-color: #ffffff;">
              <h2 style="color: #1f2937; margin-top: 0;">Hi ${userName}, 🎉</h2>
              <p style="color: #4b5563; font-size: 16px; line-height: 1.6;">
                We are absolutely thrilled to have you join our coaching platform as a <strong>${role}</strong>!
              </p>
              
              <div style="background-color: #eff6ff; border-left: 4px solid #3b82f6; padding: 15px; margin: 25px 0;">
                <p style="color: #1e3a8a; margin: 0; font-size: 15px;">
                  <strong>Next Steps:</strong> Head over to your dashboard to complete your profile and explore the latest courses and materials we have for you.
                </p>
              </div>

              <p style="color: #4b5563; font-size: 16px; line-height: 1.6;">
                Get ready to start your learning journey with us. If you ever have any questions or need help, just reply to this email!
              </p>
              
              <div style="text-align: center; margin-top: 30px; margin-bottom: 10px;">
                <a href="${"https://www.bhavyacomputerclasses.com"}/firebase-login-demo" style="display: inline-block; background-color: #2563eb; color: #ffffff; text-decoration: none; padding: 14px 28px; border-radius: 6px; font-weight: bold; font-size: 16px;">Go to Dashboard</a>
              </div>
            </div>
            
            <div style="background-color: #f3f4f6; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="color: #6b7280; font-size: 14px; margin: 0;">
                Best Regards,<br>
                <strong>The Bhavya Computer Classes Team</strong>
              </p>
            </div>
          </div>
        `
      });
      console.log("Welcome email sent to:", email);
    } catch (emailError) {
      console.error("Failed to send welcome email:", emailError);
    }
    return new Response(JSON.stringify({ success: true, message: "User saved" }), { status: 200 });
  } catch (error) {
    console.error("Error saving user:", error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
