import { d as defineMiddleware, s as sequence } from './prerender_DwZ5v2Mm.mjs';
import 'piccolore';
import 'clsx';

const ALLOWED_ORIGINS = [
  "https://bhavyacomputerclasses.com",
  "https://www.bhavyacomputerclasses.com"
];
function isOriginAllowed(origin) {
  if (!origin) return false;
  if (ALLOWED_ORIGINS.includes(origin)) return true;
  if (origin.startsWith("http://localhost:") || origin.startsWith("http://127.0.0.1:"))
    return true;
  return false;
}
const onRequest$1 = defineMiddleware(async (context, next) => {
  const request = context.request;
  const origin = request.headers.get("origin");
  if (request.method === "OPTIONS") {
    const headers = new Headers();
    if (isOriginAllowed(origin)) {
      headers.set("Access-Control-Allow-Origin", origin);
      headers.set("Access-Control-Allow-Credentials", "true");
    }
    headers.set(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS"
    );
    headers.set(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization, Cookie, Accept, Origin"
    );
    headers.set("Access-Control-Max-Age", "86400");
    return new Response(null, { status: 204, headers });
  }
  const response = await next();
  if (isOriginAllowed(origin)) {
    response.headers.set("Access-Control-Allow-Origin", origin);
    response.headers.set("Access-Control-Allow-Credentials", "true");
    response.headers.set(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS"
    );
    response.headers.set(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization, Cookie, Accept, Origin"
    );
  }
  return response;
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
