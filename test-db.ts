import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import 'dotenv/config';

console.log("DATABASE_URL:", process.env.DATABASE_URL ? "Exists" : "Undefined");

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);

async function test() {
  try {
    const result = await db.execute('SELECT 1 as val');
    console.log("DB Connection successful:", result);
  } catch (e) {
    console.error("DB Connection failed:", e);
  }
}
test();
