import 'dotenv/config';
import { db } from './src/db/index.js';
import { users, attendance } from './src/db/schema.js';
import { eq, and } from 'drizzle-orm';

const email = 'test@example.com';
const password = 'password123';

console.log('\n=== TESTING LOGIN LOGIC ===');
console.log('DATABASE_URL set:', !!process.env.DATABASE_URL);

try {
  // Step 1: Check DB connection
  const result = await db.execute('SELECT 1 as connected');
  console.log('✅ DB connection OK:', result.rows[0]);

  // Step 2: Try fetching users table
  const userList = await db.select().from(users).limit(5);
  console.log(`✅ Users table OK. Found ${userList.length} user(s).`);
  if (userList.length > 0) {
    console.log('Sample user (no password):', {
      id: userList[0].id,
      email: userList[0].email,
      role: userList[0].role,
      name: userList[0].name
    });
  } else {
    console.log('⚠️  No users in the database yet!');
  }

  // Step 3: Try querying specific test user
  const testUserList = await db.select().from(users).where(eq(users.email, email)).limit(1);
  const testUser = testUserList[0];
  if (!testUser) {
    console.log(`⚠️  No user with email "${email}" found.`);
    console.log('To test login, insert a user first. Example SQL:');
    console.log(`INSERT INTO users (name, email, password_hash, role) VALUES ('Test Student', '${email}', '${password}', 'STUDENT');`);
  } else {
    console.log('✅ Found test user:', { id: testUser.id, email: testUser.email, role: testUser.role });
    if (testUser.password_hash === password) {
      console.log('✅ Password matches!');
    } else {
      console.log('❌ Password does NOT match. Stored hash:', testUser.password_hash);
    }
  }

  // Step 4: Check attendance table
  const attendanceCount = await db.select().from(attendance).limit(3);
  console.log(`✅ Attendance table OK. Found ${attendanceCount.length} recent record(s).`);

} catch (e) {
  console.error('❌ ERROR:', e);
}
