import http from 'http';

async function testLogin(email, password, label) {
  return new Promise((resolve) => {
    const boundary = '----FormBoundary' + Math.random().toString(36).slice(2);
    const body = [
      `--${boundary}`,
      'Content-Disposition: form-data; name="email"',
      '',
      email,
      `--${boundary}`,
      'Content-Disposition: form-data; name="password"',
      '',
      password,
      `--${boundary}--`,
    ].join('\r\n');

    const req = http.request({
      hostname: 'localhost',
      port: 4321,
      path: '/api/login',
      method: 'POST',
      headers: {
        'Content-Type': `multipart/form-data; boundary=${boundary}`,
        'Content-Length': Buffer.byteLength(body),
      }
    }, (res) => {
      let b = '';
      res.on('data', c => b += c);
      res.on('end', () => {
        const statusIcon = res.statusCode === 200 ? '✅' : res.statusCode === 401 ? '🔒' : '❌';
        console.log(`\n${statusIcon} [${label}] Status: ${res.statusCode}`);
        try {
          console.log('   Response:', JSON.stringify(JSON.parse(b), null, 2));
        } catch {
          const clean = b.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
          console.log('   Body:', clean.substring(0, 300));
        }
        resolve();
      });
    });
    req.on('error', e => { console.error('Request error:', e.message); resolve(); });
    req.write(body);
    req.end();
  });
}

console.log('=== FINAL LOGIN API TESTS (multipart/form-data) ===\n');

await testLogin('teacher@bhavya.com', 'teacher123', 'Teacher - correct credentials');
await testLogin('student@bhavya.com', 'student123', 'Student - correct credentials');
await testLogin('student@bhavya.com', 'wrongpass', 'Student - wrong password');
await testLogin('nobody@bhavya.com', 'pass', 'Non-existent user');

console.log('\n=== DONE ===');
