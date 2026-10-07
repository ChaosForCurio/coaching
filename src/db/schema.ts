import { pgTable, serial, text, timestamp, boolean } from 'drizzle-orm/pg-core';

export const enquiries = pgTable('enquiries', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email'),
  phone: text('phone').notNull(),
  secondaryPhone: text('secondary_phone'),
  branch: text('branch').default('Mahaveer Nagar Extn (Main Campus)'),
  course: text('course').notNull(),
  batch: text('batch').default('Flexible'),
  message: text('message'),
  consent: boolean('consent').default(true),
  status: text('status').default('UNCLAIMED').notNull(),
  claimedBy: text('claimed_by'),
  claimedAt: timestamp('claimed_at'),
  telegramMessageId: text('telegram_message_id'),
  telegramChatId: text('telegram_chat_id'),
  source: text('source').default('Bhavya Computer Classes Website'),
  utmSource: text('utm_source'),
  utmMedium: text('utm_medium'),
  utmCampaign: text('utm_campaign'),
  utmTerm: text('utm_term'),
  utmContent: text('utm_content'),
  gclid: text('gclid'),
  fbclid: text('fbclid'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export type Enquiry = typeof enquiries.$inferSelect;
export type NewEnquiry = typeof enquiries.$inferInsert;
