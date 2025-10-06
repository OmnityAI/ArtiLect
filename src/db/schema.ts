// Deprecated: Drizzle schema removed. Supabase is now the only database.
export {}
import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';

export const newsletterSubscribers = sqliteTable('newsletter_subscribers', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  subscribedAt: text('subscribed_at').notNull(),
  isActive: integer('is_active', { mode: 'boolean' }).default(true),
});