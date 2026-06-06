import http from 'http';

async function testLogin(email, password, label) {
  return new Promise((resolve) => {
    const body = JSON.stringify({ email, password });
    const req = http.request({
      hostname: 'localhost',
      port: 4321,
      path: '/api/login',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(body),
      }
    }, (res) => {
      let b = '';
      res.on('data', c => b += c);
      res.on('end', () => {
        const statusIcon = res.statusCode === 200 ? '✅' : res.statusCode === 401 ? '🔒' : '❌';
        console.log(`\n${statusIcon} [${label}] Status: ${res.statusCode}`);
        try { console.log('   Response:', JSON.parse(b)); }
        catch { console.log('   Body:', b.substring(0, 300)); }
        resolve();
      });
    });
    req.on('error', e => { console.error('Error:', e.message); resolve(); });
    req.write(body);
    req.end();
  });
}

console.log('=== FINAL LOGIN API TESTS (JSON) ===\n');
await testLogin('teacher@bhavya.com', 'teacher123', 'Teacher - correct credentials');
await testLogin('student@bhavya.com', 'student123', 'Student - correct credentials');
await testLogin('student@bhavya.com', 'wrongpass', 'Student - wrong password');
await testLogin('nobody@bhavya.com', 'pass', 'Non-existent user');
console.log('\n=== DONE ===');
