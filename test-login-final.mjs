import http from 'http';

async function testLogin(email, password, label) {
  return new Promise((resolve) => {
    const postData = `email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`;
    const req = http.request({
      hostname: 'localhost',
      port: 4321,
      path: '/api/login',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData)
      }
    }, (res) => {
      let body = '';
      res.on('data', c => body += c);
      res.on('end', () => {
        const statusIcon = res.statusCode === 200 ? '✅' : res.statusCode === 401 ? '🔒' : '❌';
        console.log(`\n${statusIcon} [${label}] Status: ${res.statusCode}`);
        // Try parse JSON
        try {
          const json = JSON.parse(body);
          console.log(`   Response:`, json);
        } catch {
          const clean = body.replace(/<[^>]+>/g, '').trim().substring(0, 200);
          console.log(`   Body:`, clean || body.substring(0, 200));
        }
        resolve();
      });
    });
    req.on('error', e => { console.error('Request error:', e.message); resolve(); });
    req.write(postData);
    req.end();
  });
}

console.log('=== LOGIN API TESTS ===\n');

await testLogin('teacher@bhavya.com', 'teacher123', 'Teacher login');
await testLogin('student@bhavya.com', 'student123', 'Student login');
await testLogin('student@bhavya.com', 'wrongpassword', 'Wrong password');
await testLogin('nobody@bhavya.com', 'test123', 'Non-existent user');

console.log('\n=== DONE ===');
