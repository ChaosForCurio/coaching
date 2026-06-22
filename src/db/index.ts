import postgres from 'postgres';
import { drizzle } from 'drizzle-orm/postgres-js';

const connectionString =
  import.meta.env?.DATABASE_URL || process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error('DATABASE_URL environment variable is missing.');
}

// postgres-js driver — reliable persistent connection, works great with Supabase
const client = postgres(connectionString, { max: 10, ssl: 'require' });
export const db = drizzle(client);

// readDb is the same connection on Supabase (no separate read replica needed)
export const readDb = db;
