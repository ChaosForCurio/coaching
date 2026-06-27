import postgres from 'postgres';
import { drizzle } from 'drizzle-orm/postgres-js';
import dotenv from 'dotenv';

// Load .env file in case dotenv hasn't been called yet
dotenv.config();

const connectionString =
  process.env.DATABASE_URL || import.meta.env?.DATABASE_URL;

if (!connectionString) {
  throw new Error('DATABASE_URL environment variable is missing. Check your Vercel dashboard or .env file.');
}

// Serverless-safe postgres-js configuration:
// - max: 1       → serverless functions are ephemeral; pooling across invocations doesn't work
// - prepare: false → REQUIRED for Supabase PgBouncer transaction-mode pooler (port 5432)
//                    Without this, prepared statements fail silently in serverless environments
// - idle_timeout  → release connections quickly so Vercel functions don't hang at shutdown
const client = postgres(connectionString, {
  max: 1,
  ssl: 'require',
  prepare: false,
  idle_timeout: 20,
  connect_timeout: 10,
});
export const db = drizzle(client);

// readDb is the same connection on Supabase (no separate read replica needed)
export const readDb = db;
