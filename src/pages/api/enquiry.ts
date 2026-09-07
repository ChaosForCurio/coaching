export const prerender = false;

import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { name, phone, course, message } = body;

    // Basic validation
    if (!name || !phone || !course) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Format enquiry for logging / forwarding
    const enquiryDetails = {
      name: String(name).trim(),
      phone: String(phone).trim(),
      course: String(course).trim(),
      message: String(message || '').trim(),
      timestamp: new Date().toISOString(),
      source: 'Bhavya Computer Classes Website',
    };

    // --- Option 1: Log to console (works always) ---
    console.log('[ENQUIRY]', JSON.stringify(enquiryDetails, null, 2));

    // --- Option 2: Send via Email (if SMTP env vars set) ---
    // Uncomment and configure if you add nodemailer / resend / sendgrid
    // await sendEmail(enquiryDetails);

    // --- Option 3: Save to Neon DB (if DB configured) ---
    // await db.insert(enquiriesTable).values(enquiryDetails);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('[ENQUIRY ERROR]', err);
    return new Response(JSON.stringify({ error: 'Server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
