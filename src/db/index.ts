import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import dotenv from 'dotenv';

dotenv.config();

const connectionString = import.meta.env?.DATABASE_URL || process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error('DATABASE_URL environment variable is missing.');
}

const readConnectionString = import.meta.env?.DATABASE_READ_URL || process.env.DATABASE_READ_URL || connectionString;

const sql = neon(connectionString);
export const db = drizzle(sql);

const readSql = neon(readConnectionString);
export const readDb = drizzle(readSql);
