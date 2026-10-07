export const prerender = false;

import type { APIRoute } from 'astro';
import { db } from '../../db/client';
import { enquiries } from '../../db/schema';
import { sendTelegramLeadAlert } from '../../utils/telegram';
import { eq } from 'drizzle-orm';

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      secondaryPhone,
      branch,
      course,
      batch,
      message,
      consent,
      source,
      utmSource,
      utmMedium,
      utmCampaign,
      utmTerm,
      utmContent,
      gclid,
      fbclid,
    } = body;

    // Basic validation
    if (!name || !phone || !course) {
      return new Response(
        JSON.stringify({
          error: 'Missing required fields (name, phone, course)',
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Format enquiry details
    const enquiryDetails = {
      name: String(name).trim(),
      email: email ? String(email).trim() : '',
      phone: String(phone).trim(),
      secondaryPhone: secondaryPhone ? String(secondaryPhone).trim() : '',
      branch: branch
        ? String(branch).trim()
        : 'Mahaveer Nagar Extn (Main Campus)',
      course: String(course).trim(),
      batch: String(batch || 'Flexible').trim(),
      message: String(message || '').trim(),
      consent: Boolean(consent !== false),
      status: 'UNCLAIMED',
      source: source || 'Bhavya Computer Classes Website',
      utmSource: utmSource ? String(utmSource).trim() : null,
      utmMedium: utmMedium ? String(utmMedium).trim() : null,
      utmCampaign: utmCampaign ? String(utmCampaign).trim() : null,
      utmTerm: utmTerm ? String(utmTerm).trim() : null,
      utmContent: utmContent ? String(utmContent).trim() : null,
      gclid: gclid ? String(gclid).trim() : null,
      fbclid: fbclid ? String(fbclid).trim() : null,
    };

    let leadId: number | null = null;
    let createdAt = new Date();

    // 1. Save lead to Neon Postgres Database
    if (db) {
      try {
        const [inserted] = await db
          .insert(enquiries)
          .values(enquiryDetails)
          .returning({
            id: enquiries.id,
            createdAt: enquiries.createdAt,
          });

        if (inserted) {
          leadId = inserted.id;
          if (inserted.createdAt) {
            createdAt = inserted.createdAt;
          }
        }
        console.log(
          '[ENQUIRY DB] Lead saved successfully to Neon Database. Lead ID:',
          leadId
        );
      } catch (dbErr) {
        console.error('[ENQUIRY DB ERROR]', dbErr);
      }
    }

    // 2. Trigger Telegram Staff Group Interactive Alert
    if (leadId) {
      try {
        const tgResult = await sendTelegramLeadAlert({
          id: leadId,
          name: enquiryDetails.name,
          phone: enquiryDetails.phone,
          secondaryPhone: enquiryDetails.secondaryPhone,
          course: enquiryDetails.course,
          branch: enquiryDetails.branch,
          batch: enquiryDetails.batch,
          message: enquiryDetails.message,
          createdAt,
          status: 'UNCLAIMED',
        });

        if (tgResult && db) {
          await db
            .update(enquiries)
            .set({
              telegramMessageId: tgResult.messageId,
              telegramChatId: tgResult.chatId,
            })
            .where(eq(enquiries.id, leadId));
        }
      } catch (tgErr) {
        console.error('[TELEGRAM ALERT ERROR]', tgErr);
      }
    }

    // 3. Forward lead directly to Google Sheet via Google Apps Script Web App
    const googleScriptUrl =
      process.env.GOOGLE_SCRIPT_URL || process.env.GOOGLE_SHEETS_URL;
    if (
      googleScriptUrl &&
      !googleScriptUrl.includes('SAMPLE') &&
      !googleScriptUrl.includes('YOUR_')
    ) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 4000);
        await fetch(googleScriptUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...enquiryDetails,
            id: leadId,
            timestamp: createdAt.toISOString(),
          }),
          signal: controller.signal,
          redirect: 'follow',
        });
        clearTimeout(timeoutId);
        console.log(
          '[GOOGLE SHEETS] Lead synced to Google Sheets successfully'
        );
      } catch (sheetErr) {
        console.error('[GOOGLE SHEETS FORWARD ERROR]', sheetErr);
      }
    }

    // Construct WhatsApp message URL for direct confirmation
    let waMessage = `🎓 *NEW APPLICATION — Bhavya Computer Classes*\n\n`;
    waMessage += `*Student Name:* ${enquiryDetails.name}\n`;
    if (enquiryDetails.email) waMessage += `*Email:* ${enquiryDetails.email}\n`;
    waMessage += `*Mobile:* +91 ${enquiryDetails.phone}\n`;
    if (enquiryDetails.secondaryPhone)
      waMessage += `*Alt Mobile:* +91 ${enquiryDetails.secondaryPhone}\n`;
    waMessage += `*Branch:* ${enquiryDetails.branch}\n`;
    waMessage += `*Course:* ${enquiryDetails.course}\n`;
    if (enquiryDetails.message)
      waMessage += `\n*Query / Details:*\n> ${enquiryDetails.message}\n`;
    waMessage += `\n_Sent via bhavyacomputerclasses.com_`;

    const waUrl = `https://wa.me/919694932391?text=${encodeURIComponent(waMessage)}`;

    console.log(
      '[ENQUIRY RECEIVED]',
      JSON.stringify({ ...enquiryDetails, id: leadId }, null, 2)
    );

    return new Response(
      JSON.stringify({
        success: true,
        leadId,
        waUrl,
        data: enquiryDetails,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (err) {
    console.error('[ENQUIRY ERROR]', err);
    return new Response(
      JSON.stringify({ error: 'Server error processing enquiry' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
