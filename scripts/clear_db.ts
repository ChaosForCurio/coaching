import { neon } from '@neondatabase/serverless';
import dotenv from 'dotenv';

dotenv.config();

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error('DATABASE_URL environment variable is missing.');
}

const sql = neon(connectionString);

async function clearDB() {
  console.log("Clearing database...");
  try {
    await sql`TRUNCATE users CASCADE;`;
    console.log("Successfully deleted all existing users and related data.");
  } catch (e) {
    console.error("Error clearing DB:", e);
  }
}

clearDB();
