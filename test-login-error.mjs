import http from 'http';

const postData = 'email=test@example.com&password=password123';

const options = {
  hostname: 'localhost',
  port: 4321,
  path: '/api/login',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': Buffer.byteLength(postData)
  }
};

const req = http.request(options, (res) => {
  let body = '';
  res.on('data', (chunk) => body += chunk);
  res.on('end', () => {
    console.log('Status:', res.statusCode);
    // Strip HTML tags for readability
    const clean = body.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
                      .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
                      .replace(/<[^>]+>/g, ' ')
                      .replace(/\s+/g, ' ')
                      .trim();
    console.log('Error details:\n', clean.substring(0, 3000));
  });
});

req.on('error', (e) => console.error('Request error:', e.message));
req.write(postData);
req.end();
