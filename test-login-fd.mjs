import http from 'http';
import { FormData } from 'formdata-node';

// Use Node's built-in FormData if available (Node 18+)
const fd = new FormData();
fd.set('email', 'teacher@bhavya.com');
fd.set('password', 'teacher123');

// Encode as proper multipart like browser does
function encodeFormData(data) {
  const boundary = '---------------------------' + Date.now().toString(16);
  const crlf = '\r\n';
  let body = '';
  for (const [key, value] of data) {
    body += `--${boundary}${crlf}`;
    body += `Content-Disposition: form-data; name="${key}"${crlf}`;
    body += crlf;
    body += `${value}${crlf}`;
  }
  body += `--${boundary}--${crlf}`;
  return { body, boundary };
}

const { body, boundary } = encodeFormData(fd);
console.log('Boundary:', boundary);
console.log('Body preview:', body.substring(0, 200));

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
    console.log('\nStatus:', res.statusCode);
    try { console.log('Response:', JSON.stringify(JSON.parse(b), null, 2)); }
    catch { console.log('Body:', b.replace(/<[^>]+>/g, '').trim().substring(0, 500)); }
  });
});
req.on('error', e => console.error('Error:', e.message));
req.write(body);
req.end();
