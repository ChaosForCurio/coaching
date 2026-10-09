export const prerender = false;

import type { APIRoute } from 'astro';
import { db } from '../../db/client';
import { enquiries } from '../../db/schema';
import { sendTelegramLeadAlert } from '../../utils/telegram';
import { eq } from 'drizzle-orm';

// In-memory IP rate limiter: max 5 requests per 10 minutes (600,000ms)
interface RateLimitRecord {
  count: number;
  resetAt: number;
}
const rateLimitMap = new Map<string, RateLimitRecord>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;

// Periodically clean up expired records
setInterval(
  () => {
    const now = Date.now();
    for (const [ip, record] of rateLimitMap.entries()) {
      if (now > record.resetAt) {
        rateLimitMap.delete(ip);
      }
    }
  },
  5 * 60 * 1000
);

export const POST: APIRoute = async ({ request, clientAddress }) => {
  try {
    // 1. IP Rate Limiting
    const forwarded = request.headers.get('x-forwarded-for');
    const realIp = request.headers.get('x-real-ip');
    const clientIp =
      (forwarded ? forwarded.split(',')[0].trim() : null) ||
      realIp ||
      clientAddress ||
      'unknown';

    const now = Date.now();
    const clientRecord = rateLimitMap.get(clientIp);

    if (clientRecord) {
      if (now > clientRecord.resetAt) {
        rateLimitMap.set(clientIp, {
          count: 1,
          resetAt: now + RATE_LIMIT_WINDOW_MS,
        });
      } else if (clientRecord.count >= RATE_LIMIT_MAX) {
        return new Response(
          JSON.stringify({
            error:
              'Too many submissions. Please wait a few minutes before trying again.',
          }),
          {
            status: 429,
            headers: {
              'Content-Type': 'application/json',
              'Retry-After': '600',
            },
          }
        );
      } else {
        clientRecord.count += 1;
      }
    } else {
      rateLimitMap.set(clientIp, {
        count: 1,
        resetAt: now + RATE_LIMIT_WINDOW_MS,
      });
    }

    const body = await request.json();

    // 2. Invisible Honeypot check (bots fill it, humans don't)
    if (body.website_url || body.honeypot || body._gotcha) {
      console.warn(
        '[ENQUIRY ANTI-SPAM] Honeypot triggered by submission from IP:',
        clientIp
      );
      // Return 200 silently so bots believe submission was successful
      return new Response(
        JSON.stringify({
          success: true,
          message: 'Enquiry received successfully',
          spam: true,
        }),
        {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    const name = body.name;
    const email = body.email;
    const phone = body.phone || body.mobile;
    const secondaryPhone = body.secondaryPhone || body.secondaryMobile;
    const branch = body.branch || body.nearestBranch;
    const course = body.course || body.preferredCourse;
    const batch = body.batch;
    const message = body.message;
    const consent = body.consent;
    const source = body.source || body.sourcePage;
    const {
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

    // 2 & 3. Trigger Telegram Alert AND Google Sheets Forward simultaneously (in parallel)
    const googleScriptUrl =
      process.env.GOOGLE_SCRIPT_URL || process.env.GOOGLE_SHEETS_URL;

    const telegramPromise = (async () => {
      try {
        const tgResult = await sendTelegramLeadAlert({
          id: leadId || Date.now(),
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

        if (tgResult && db && leadId) {
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
    })();

    const googleSheetsPromise = (async () => {
      if (
        googleScriptUrl &&
        !googleScriptUrl.includes('SAMPLE') &&
        !googleScriptUrl.includes('YOUR_')
      ) {
        try {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 6000);

          const istDateString = new Intl.DateTimeFormat('en-IN', {
            timeZone: 'Asia/Kolkata',
            dateStyle: 'medium',
            timeStyle: 'short',
          }).format(createdAt);

          await fetch(googleScriptUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              ...enquiryDetails,
              // Backwards-compatible aliases for Google Sheets columns
              mobile: enquiryDetails.phone,
              secondaryMobile: enquiryDetails.secondaryPhone,
              nearestBranch: enquiryDetails.branch,
              preferredCourse: enquiryDetails.course,
              sourcePage: enquiryDetails.source,
              id: leadId,
              timestamp: createdAt.toISOString(),
              formattedDate: istDateString,
              device: body.device || 'Desktop',
              pagePath: body.pagePath || '/',
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
    })();

    // Run both at the exact same time
    await Promise.allSettled([telegramPromise, googleSheetsPromise]);

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
