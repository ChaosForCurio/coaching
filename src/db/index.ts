import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import dotenv from 'dotenv';
import ws from 'ws';

neonConfig.webSocketConstructor = ws;
dotenv.config();

const connectionString = import.meta.env?.DATABASE_URL || process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error('DATABASE_URL environment variable is missing.');
}

const readConnectionString = import.meta.env?.DATABASE_READ_URL || process.env.DATABASE_READ_URL || connectionString;

// Re-add pooler if missing to use connection pooling
const getPooledUrl = (url: string) => url.replace('.c-7.us-east-1', '-pooler.c-7.us-east-1');

const pool = new Pool({ connectionString: getPooledUrl(connectionString) });
export const db = drizzle(pool);

const readPool = new Pool({ connectionString: getPooledUrl(readConnectionString) });
export const readDb = drizzle(readPool);

import { eq, sql as drizzleSql } from 'drizzle-orm';
import { users } from './schema';

// Prepared statements for frequent queries
export const preparedUserById = readDb.select()
  .from(users)
  .where(eq(users.id, drizzleSql.placeholder('id')))
  .prepare("prepared_user_by_id");
