import type { APIRoute } from 'astro';

export const ALL: APIRoute = async ({ request, url }) => {
  const targetUrl = new URL(url.pathname + url.search, 'https://app.hexclave.com');

  const reqHeaders = new Headers(request.headers);
  reqHeaders.set('host', 'app.hexclave.com');
  reqHeaders.delete('origin');
  reqHeaders.delete('referer');
  // Strip Accept-Encoding so Node fetch gives us a plain (non-compressed) body.
  // If we forward the compressed body + original Content-Encoding header the
  // browser tries to decompress something that's already been decompressed by
  // Node, causing ERR_CONTENT_DECODING_FAILED.
  reqHeaders.delete('accept-encoding');

  const response = await fetch(targetUrl.toString(), {
    method: request.method,
    headers: reqHeaders,
    body: request.method !== 'GET' && request.method !== 'HEAD'
      ? await request.arrayBuffer()
      : undefined,
    redirect: 'manual',
  });

  const resHeaders = new Headers();

  for (const [key, value] of response.headers.entries()) {
    const lower = key.toLowerCase();
    if (lower === 'content-encoding') continue; // already decompressed by fetch
    if (lower === 'transfer-encoding') continue; // chunked encoding handled by Node
    resHeaders.set(key, value);
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: resHeaders,
  });
};
