import { c as createComponent } from './astro-component_DJPswS2K.mjs';
import 'piccolore';
import { aR as renderHead, _ as addAttribute, I as renderTemplate } from './sequence_Suik_5Ze.mjs';
import { r as renderComponent } from './server_BvtLT4zN.mjs';
import { r as renderScript } from './script_BBdc2VQP.mjs';
/* empty css                 */
import { $ as $$SEOHead } from './SEOHead_D2qu1SZm.mjs';

const $$SsoCallback = createComponent(async ($$result, $$props, $$slots) => {
  const NEON_AUTH_BASE_URL = "https://ep-wispy-truth-ap7kmm96.neonauth.c-7.us-east-1.aws.neon.tech/neondb/auth";
  return renderTemplate`<html lang="en" data-astro-cid-nzotbiwo> <head>${renderComponent($$result, "SEOHead", $$SEOHead, { "title": "Completing Login...", "description": "Completing your sign in to Bhavya Computer Classes.", "canonical": "https://www.bhavyacomputerclasses.com/sso-callback", "data-astro-cid-nzotbiwo": true })}<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;800&display=swap" rel="stylesheet">${renderHead()}</head> <body${addAttribute(NEON_AUTH_BASE_URL, "data-auth-url")} data-astro-cid-nzotbiwo> <div class="text-center" data-astro-cid-nzotbiwo> <div class="spinner" data-astro-cid-nzotbiwo></div> <p style="color: var(--text-dim);" id="status-text" data-astro-cid-nzotbiwo>Completing your sign in...</p> </div> ${renderScript($$result, "D:/Coding Projects/coaching/src/pages/sso-callback.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "D:/Coding Projects/coaching/src/pages/sso-callback.astro", void 0);
const $$file = "D:/Coding Projects/coaching/src/pages/sso-callback.astro";
const $$url = "/sso-callback";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$SsoCallback,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
