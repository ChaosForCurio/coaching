import { neon } from '@neondatabase/serverless';
import dotenv from 'dotenv';

dotenv.config();

const connectionString = process.env.DATABASE_URL?.replace('-pooler', '');
if (!connectionString) {
  console.error('DATABASE_URL is missing in .env');
  process.exit(1);
}

const sql = neon(connectionString);

async function setup() {
  console.log('Ensuring enquiries table exists in Neon Database...');
  await sql`
    CREATE TABLE IF NOT EXISTS enquiries (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      phone TEXT NOT NULL,
      course TEXT NOT NULL,
      batch TEXT DEFAULT 'Flexible',
      message TEXT,
      status TEXT DEFAULT 'NEW' NOT NULL,
      source TEXT DEFAULT 'Bhavya Computer Classes Website',
      created_at TIMESTAMP DEFAULT NOW() NOT NULL
    );
  `;
  console.log('✅ Enquiries table is ready in Neon Database!');
}

setup().catch((err) => {
  console.error('Setup failed:', err);
  process.exit(1);
});
