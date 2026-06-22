// Test Neon HTTP endpoint directly using Node's built-in https module
// This bypasses undici entirely to isolate the issue
import https from 'https';

const host = 'ep-wispy-truth-ap7kmm96.c-7.us-east-1.aws.neon.tech';

function testHttps() {
  return new Promise((resolve, reject) => {
    const req = https.get({
      hostname: host,
      port: 443,
      path: '/',
      timeout: 10000,
      family: 4, // force IPv4
    }, (res) => {
      resolve(`HTTP ${res.statusCode}`);
      res.resume();
    });
    req.on('timeout', () => { req.destroy(); reject(new Error('Timeout')); });
    req.on('error', reject);
  });
}

console.log(`Testing HTTPS to ${host}...`);
try {
  const result = await testHttps();
  console.log('✅ HTTPS reachable:', result);
} catch (e) {
  console.error('❌ HTTPS failed:', e.message, e.code);
}

// Also test using fetch (undici) with a shorter timeout to see exact error
console.log('\nTesting via fetch...');
try {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 8000);
  const res = await fetch(`https://${host}/`, { signal: ctrl.signal });
  clearTimeout(timer);
  console.log('✅ fetch reachable: HTTP', res.status);
} catch (e) {
  console.error('❌ fetch failed:', e.name, e.message, e.cause?.code);
}
