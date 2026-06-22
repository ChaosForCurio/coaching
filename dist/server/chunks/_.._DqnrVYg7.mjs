const ALL = async ({ request, url }) => {
  const targetUrl = new URL(
    url.pathname + url.search,
    "https://app.hexclave.com"
  );
  const reqHeaders = new Headers(request.headers);
  reqHeaders.set("host", "app.hexclave.com");
  reqHeaders.delete("origin");
  reqHeaders.delete("referer");
  reqHeaders.delete("accept-encoding");
  const response = await fetch(targetUrl.toString(), {
    method: request.method,
    headers: reqHeaders,
    body: request.method !== "GET" && request.method !== "HEAD" ? await request.arrayBuffer() : void 0,
    redirect: "manual",
    // @ts-ignore — undici supports this, prevents auto-decompression
    decompress: false
  });
  const resHeaders = new Headers();
  for (const [key, value] of response.headers.entries()) {
    const lower = key.toLowerCase();
    if (lower === "content-encoding") continue;
    if (lower === "transfer-encoding") continue;
    resHeaders.set(key, value);
  }
  const location = resHeaders.get("location");
  if (location) {
    resHeaders.set(
      "location",
      location.replace("https://app.hexclave.com", "")
    );
  }
  const rawCookies = [];
  if (typeof response.headers.getSetCookie === "function") {
    rawCookies.push(...response.headers.getSetCookie());
  } else {
    const c = response.headers.get("set-cookie");
    if (c) rawCookies.push(c);
  }
  resHeaders.delete("set-cookie");
  for (const cookie of rawCookies) {
    resHeaders.append(
      "set-cookie",
      cookie.replace(/;\s*Domain=[^;]+/i, "").replace(/;\s*Secure/i, "")
    );
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: resHeaders
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  ALL
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
