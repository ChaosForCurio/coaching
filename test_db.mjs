import { neon } from '@neondatabase/serverless';
import 'dotenv/config';

const sql = neon(process.env.DATABASE_URL);

async function check() {
  const res = await sql`SELECT * FROM neon_auth.user LIMIT 1;`;
  console.log(res);
}
check();
