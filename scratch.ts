import postgres from 'postgres';
import { drizzle } from 'drizzle-orm/postgres-js';
import { users } from './src/db/schema';
import * as dotenv from 'dotenv';
dotenv.config();

async function main() {
  console.log("DATABASE_URL:", process.env.DATABASE_URL?.slice(0, 30) + '...');
  try {
    const client = postgres(process.env.DATABASE_URL as string, { max: 1, ssl: 'require' });
    const db = drizzle(client);
    const result = await db.select().from(users).limit(1);
    console.log("Query success! Found users:", result.length);
    process.exit(0);
  } catch (error) {
    console.error("Query failed:", error);
    process.exit(1);
  }
}

main();
