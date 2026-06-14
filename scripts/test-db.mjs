import 'dotenv/config';
import { neon } from '@neondatabase/serverless';

const url = process.env.DATABASE_URL;
console.log('URL prefix:', url?.substring(0, 50) + '...');

const sql = neon(url);

try {
  const result = await sql`SELECT current_database() as db, version() as ver`;
  console.log('✅ DB connected OK:', JSON.stringify(result));
} catch (e) {
  console.error('❌ DB error:', e.message);
  console.error('Error details:', e);
}
