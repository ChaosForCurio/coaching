import type { APIRoute } from 'astro';

export const ALL: APIRoute = async ({ request, url }) => {
  const targetUrl = new URL(
    url.pathname + url.search,
    'https://app.hexclave.com'
  );

  const reqHeaders = new Headers(request.headers);
  reqHeaders.set('host', 'app.hexclave.com');
  reqHeaders.delete('origin');
  reqHeaders.delete('referer');
  // Remove Accept-Encoding so we get uncompressed response — Node fetch
  // auto-decompresses, and if we forward the encoded body to the browser with
  // the original Content-Encoding header it causes a double-decode failure.
  reqHeaders.delete('accept-encoding');

  const response = await fetch(targetUrl.toString(), {
    method: request.method,
    headers: reqHeaders,
    body:
      request.method !== 'GET' && request.method !== 'HEAD'
        ? await request.arrayBuffer()
        : undefined,
    redirect: 'manual',
    // @ts-ignore — undici supports this, prevents auto-decompression
    decompress: false,
  });

  const resHeaders = new Headers();

  // Copy safe headers, but skip content-encoding since we stripped it on the request
  for (const [key, value] of response.headers.entries()) {
    const lower = key.toLowerCase();
    if (lower === 'content-encoding') continue; // Body is already decompressed by fetch
    if (lower === 'transfer-encoding') continue; // Node already decoded chunks
    resHeaders.set(key, value);
  }

  // Rewrite Location headers pointing back to app.hexclave.com → our local proxy
  const location = resHeaders.get('location');
  if (location) {
    resHeaders.set(
      'location',
      location.replace('https://app.hexclave.com', '')
    );
  }

  // Strip Domain= from cookies so they apply to localhost
  const rawCookies: string[] = [];
  if (typeof (response.headers as any).getSetCookie === 'function') {
    rawCookies.push(...(response.headers as any).getSetCookie());
  } else {
    const c = response.headers.get('set-cookie');
    if (c) rawCookies.push(c);
  }
  resHeaders.delete('set-cookie');
  for (const cookie of rawCookies) {
    resHeaders.append(
      'set-cookie',
      cookie.replace(/;\s*Domain=[^;]+/i, '').replace(/;\s*Secure/i, '')
    );
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: resHeaders,
  });
};
