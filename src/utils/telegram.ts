export interface TelegramLeadPayload {
  id: number;
  name: string;
  phone: string;
  secondaryPhone?: string | null;
  course: string;
  branch?: string | null;
  batch?: string | null;
  message?: string | null;
  createdAt: Date | string;
  status: string;
  claimedBy?: string | null;
  claimedAt?: Date | string | null;
}

function cleanPhoneNumber(phone: string): string {
  const digits = phone.replace(/\D/g, '');
  return digits.length === 10 ? `91${digits}` : digits;
}

function formatISTTime(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleTimeString('en-IN', {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
}

function formatISTDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('en-IN', {
    timeZone: 'Asia/Kolkata',
    day: '2-digit',
    month: 'short',
  });
}

/**
 * Builds formatted HTML text and inline keyboard depending on lead state
 */
export function buildLeadAlert(lead: TelegramLeadPayload) {
  const formattedPhone = cleanPhoneNumber(lead.phone);
  const timeStr = `${formatISTTime(lead.createdAt)}, ${formatISTDate(lead.createdAt)}`;

  const waPreFilled = encodeURIComponent(
    `Hello ${lead.name}, thank you for contacting Bhavya Computer Classes regarding *${lead.course}*. How can we assist you today?`
  );
  const waUrl = `https://wa.me/${formattedPhone}?text=${waPreFilled}`;
  const callUrl = `tel:+${formattedPhone}`;

  let statusText = `⏳ <b>Status:</b> 🟡 <i>Unclaimed (Pending Action)</i>`;
  if (lead.status === 'CLAIMED') {
    const claimTimeStr = lead.claimedAt ? formatISTTime(lead.claimedAt) : '';
    statusText = `✅ <b>Status:</b> 🟢 <b>CLAIMED by ${lead.claimedBy || 'Counselor'}</b> (${claimTimeStr})`;
  } else if (lead.status === 'INVALID') {
    statusText = `❌ <b>Status:</b> 🔴 <b>Marked INVALID by ${lead.claimedBy || 'Counselor'}</b>`;
  }

  const lines = [
    `🚀 <b>NEW LEAD RECEIVED</b> <i>(#${lead.id})</i>`,
    `━━━━━━━━━━━━━━━━━━━━━━━`,
    `👤 <b>Name:</b> ${escapeHtml(lead.name)}`,
    `📞 <b>Phone:</b> +${formattedPhone}`,
  ];

  if (lead.secondaryPhone) {
    lines.push(
      `📱 <b>Alt Phone:</b> +${cleanPhoneNumber(lead.secondaryPhone)}`
    );
  }

  lines.push(`📚 <b>Course:</b> ${escapeHtml(lead.course)}`);
  if (lead.branch) {
    lines.push(`🏫 <b>Branch:</b> ${escapeHtml(lead.branch)}`);
  }
  if (lead.batch && lead.batch !== 'Flexible') {
    lines.push(`⏰ <b>Batch:</b> ${escapeHtml(lead.batch)}`);
  }
  if (lead.message) {
    lines.push(`💬 <b>Note:</b> <i>${escapeHtml(lead.message)}</i>`);
  }

  lines.push(`🕒 <b>Time:</b> ${timeStr}`);
  lines.push(`━━━━━━━━━━━━━━━━━━━━━━━`);
  lines.push(statusText);

  const text = lines.join('\n');

  // Interactive buttons (Telegram inline keyboard URLs must use http/https/tg)
  const reply_markup = {
    inline_keyboard: [
      [{ text: '💬 WhatsApp Student', url: waUrl }],
      lead.status === 'UNCLAIMED' || lead.status === 'NEW'
        ? [
            { text: '✋ Claim Lead', callback_data: `claim:${lead.id}` },
            { text: '❌ Mark Invalid', callback_data: `invalid:${lead.id}` },
          ]
        : [
            {
              text:
                lead.status === 'CLAIMED'
                  ? `🔒 Claimed by ${lead.claimedBy}`
                  : `🚫 Marked Invalid`,
              callback_data: `locked:${lead.id}`,
            },
          ],
    ],
  };

  return { text, reply_markup };
}

function escapeHtml(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/**
 * Send interactive Telegram Alert to Staff Group
 */
export async function sendTelegramLeadAlert(lead: TelegramLeadPayload) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.warn('[TELEGRAM] TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID missing.');
    return null;
  }

  const { text, reply_markup } = buildLeadAlert(lead);

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: 'HTML',
          reply_markup,
        }),
      }
    );

    const data = (await response.json()) as {
      ok: boolean;
      result?: { message_id: number; chat: { id: number | string } };
      description?: string;
    };

    if (!data.ok || !data.result) {
      console.error('[TELEGRAM SEND ERROR]', data);
      return null;
    }

    return {
      messageId: String(data.result.message_id),
      chatId: String(data.result.chat.id),
    };
  } catch (err) {
    console.error('[TELEGRAM FETCH ERROR]', err);
    return null;
  }
}

/**
 * Update existing Telegram Message (Live State on Claim / Invalidation)
 */
export async function editTelegramLeadAlert(
  chatId: string | number,
  messageId: string | number,
  lead: TelegramLeadPayload
) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  if (!botToken) return false;

  const { text, reply_markup } = buildLeadAlert(lead);

  try {
    const res = await fetch(
      `https://api.telegram.org/bot${botToken}/editMessageText`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          message_id: Number(messageId),
          text,
          parse_mode: 'HTML',
          reply_markup,
        }),
      }
    );

    return res.ok;
  } catch (err) {
    console.error('[TELEGRAM EDIT ERROR]', err);
    return false;
  }
}

/**
 * Answer Telegram callback query (shows popup alert or brief toast to counselor)
 */
export async function answerCallbackQuery(
  callbackQueryId: string,
  text: string,
  showAlert = false
) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  if (!botToken) return;

  try {
    await fetch(`https://api.telegram.org/bot${botToken}/answerCallbackQuery`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        callback_query_id: callbackQueryId,
        text,
        show_alert: showAlert,
      }),
    });
  } catch (err) {
    console.error('[TELEGRAM CALLBACK ERROR]', err);
  }
}
