export const prerender = false;

import type { APIRoute } from 'astro';
import { db } from '../../db/client';
import { enquiries } from '../../db/schema';
import { eq, and } from 'drizzle-orm';
import {
  answerCallbackQuery,
  editTelegramLeadAlert,
} from '../../utils/telegram';

export const POST: APIRoute = async ({ request }) => {
  try {
    // 1. Verify Secret Token if set
    const secretHeader = request.headers.get('x-telegram-bot-api-secret-token');
    const configuredSecret = process.env.TELEGRAM_WEBHOOK_SECRET;

    if (configuredSecret && secretHeader !== configuredSecret) {
      console.warn('[TELEGRAM WEBHOOK] Unauthorized request received.');
      return new Response('Unauthorized', { status: 401 });
    }

    const update = await request.json();

    // 2. Handle Interactive Callback Queries (Button Clicks)
    if (update.callback_query) {
      const {
        id: callbackQueryId,
        data,
        from,
        message,
      } = update.callback_query;
      const [action, idStr] = (data || '').split(':');
      const leadId = parseInt(idStr, 10);

      // Determine Counselor identity
      const counselorName = from.username
        ? `@${from.username}`
        : `${from.first_name || ''} ${from.last_name || ''}`.trim() ||
          'Counselor';

      if (!db || !leadId || isNaN(leadId)) {
        await answerCallbackQuery(
          callbackQueryId,
          'Invalid lead request.',
          true
        );
        return new Response('OK', { status: 200 });
      }

      // Fetch current lead state from database
      const [lead] = await db
        .select()
        .from(enquiries)
        .where(eq(enquiries.id, leadId))
        .limit(1);

      if (!lead) {
        await answerCallbackQuery(
          callbackQueryId,
          '⚠️ Lead not found in database.',
          true
        );
        return new Response('OK', { status: 200 });
      }

      const chatId =
        message?.chat?.id ||
        lead.telegramChatId ||
        process.env.TELEGRAM_CHAT_ID;
      const messageId = message?.message_id || lead.telegramMessageId;

      // Click on an already locked button
      if (action === 'locked') {
        const lockedText =
          lead.status === 'CLAIMED'
            ? `🔒 Already claimed by ${lead.claimedBy || 'another counselor'}!`
            : `🚫 This lead has been marked as invalid.`;
        await answerCallbackQuery(callbackQueryId, lockedText, true);
        return new Response('OK', { status: 200 });
      }

      // CLAIM Lead Action
      if (action === 'claim') {
        if (lead.status === 'CLAIMED') {
          await answerCallbackQuery(
            callbackQueryId,
            `⚠️ Already claimed by ${lead.claimedBy || 'another counselor'}!`,
            true
          );
          return new Response('OK', { status: 200 });
        }

        const now = new Date();

        // Atomic update only if lead is still UNCLAIMED or NEW
        const result = await db
          .update(enquiries)
          .set({
            status: 'CLAIMED',
            claimedBy: counselorName,
            claimedAt: now,
          })
          .where(
            and(
              eq(enquiries.id, leadId),
              eq(enquiries.status, lead.status) // Concurrency check
            )
          )
          .returning();

        if (result.length === 0) {
          await answerCallbackQuery(
            callbackQueryId,
            '⚠️ Action conflict: lead just claimed by someone else!',
            true
          );
          return new Response('OK', { status: 200 });
        }

        const updatedLead = result[0];

        // Edit Telegram message in group to show CLAIMED state
        if (chatId && messageId) {
          await editTelegramLeadAlert(chatId, messageId, updatedLead);
        }

        // Asynchronously sync claim status to Google Sheet
        syncLeadStatusToGoogleSheet({
          id: leadId,
          phone: updatedLead.phone,
          status: 'Contacted',
          claimedBy: counselorName,
        }).catch((e) => console.error('[GOOGLE SHEET SYNC ERROR]', e));

        await answerCallbackQuery(
          callbackQueryId,
          `🎉 Success! You claimed lead #${leadId}`
        );
        return new Response('OK', { status: 200 });
      }

      // MARK INVALID Action
      if (action === 'invalid') {
        const now = new Date();
        const [updatedLead] = await db
          .update(enquiries)
          .set({
            status: 'INVALID',
            claimedBy: counselorName,
            claimedAt: now,
          })
          .where(eq(enquiries.id, leadId))
          .returning();

        if (chatId && messageId && updatedLead) {
          await editTelegramLeadAlert(chatId, messageId, updatedLead);
        }

        // Asynchronously sync invalid status to Google Sheet
        if (updatedLead) {
          syncLeadStatusToGoogleSheet({
            id: leadId,
            phone: updatedLead.phone,
            status: 'Lost',
            claimedBy: counselorName,
          }).catch((e) => console.error('[GOOGLE SHEET SYNC ERROR]', e));
        }

        await answerCallbackQuery(
          callbackQueryId,
          `❌ Lead #${leadId} marked invalid.`
        );
        return new Response('OK', { status: 200 });
      }
    }

    return new Response('OK', { status: 200 });
  } catch (err) {
    console.error('[TELEGRAM WEBHOOK ERROR]', err);
    return new Response('Internal Server Error', { status: 500 });
  }
};

/**
 * Asynchronously notify Google Apps Script Webhook to update Google Sheet row color and status
 */
async function syncLeadStatusToGoogleSheet(payload: {
  id: number;
  phone?: string | null;
  status: 'Contacted' | 'Lost' | 'Enrolled' | 'New';
  claimedBy: string;
}) {
  const googleScriptUrl =
    process.env.GOOGLE_SCRIPT_URL || process.env.GOOGLE_SHEETS_URL;

  if (
    !googleScriptUrl ||
    googleScriptUrl.includes('SAMPLE') ||
    googleScriptUrl.includes('YOUR_')
  ) {
    return;
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    const res = await fetch(googleScriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        action: 'updateLeadStatus',
        id: payload.id,
        phone: payload.phone,
        status: payload.status,
        claimedBy: payload.claimedBy,
        timestamp: new Date().toISOString(),
      }),
      signal: controller.signal,
      redirect: 'follow',
    });

    clearTimeout(timeoutId);
    if (!res.ok) {
      console.warn('[GOOGLE SHEET SYNC] Server returned status:', res.status);
    }
  } catch (err) {
    console.error('[GOOGLE SHEET SYNC EXCEPTION]', err);
  }
}
