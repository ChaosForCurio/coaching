import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

const connectionString = import.meta.env?.DATABASE_URL || process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error('DATABASE_URL environment variable is missing.');
}

const readConnectionString =
  import.meta.env?.DATABASE_READ_URL ||
  process.env.DATABASE_READ_URL ||
  connectionString;

// HTTP-based driver — no WebSocket / ws package needed, works reliably on Vercel serverless
const sql = neon(connectionString);
export const db = drizzle(sql);

const readSql = neon(readConnectionString);
export const readDb = drizzle(readSql);
