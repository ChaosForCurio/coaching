import postgres from 'postgres';
import { drizzle } from 'drizzle-orm/postgres-js';
import dotenv from 'dotenv';

// Load .env file in case dotenv hasn't been called yet
dotenv.config();

const connectionString =
  process.env.DATABASE_URL || import.meta.env?.DATABASE_URL;

if (!connectionString) {
  throw new Error('DATABASE_URL environment variable is missing. Check your Render dashboard or .env file.');
}

// postgres-js driver — reliable persistent connection, works great with Supabase
const client = postgres(connectionString, { max: 10, ssl: 'require' });
export const db = drizzle(client);

// readDb is the same connection on Supabase (no separate read replica needed)
export const readDb = db;
