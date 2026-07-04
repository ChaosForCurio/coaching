globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_FVi2OYOm.mjs";
import { b5 as renderHead, a0 as addAttribute, K as renderTemplate } from "./sequence_CMysm0T6.mjs";
import { r as renderScript } from "./script_CEZsg4QJ.mjs";
const $$SsoCallback = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$SsoCallback;
  const NEON_AUTH_BASE_URL = "";
  const callbackURL = Astro2.url.searchParams.get("callbackURL") || "/dashboard";
  return renderTemplate`<html lang="en" data-astro-cid-nzotbiwo> <head><meta charset="UTF-8"><title>Signing you in…</title>${renderHead()}</head> <body${addAttribute(NEON_AUTH_BASE_URL, "data-auth-url")}${addAttribute(callbackURL, "data-callback-url")} data-astro-cid-nzotbiwo> <div class="spinner" data-astro-cid-nzotbiwo></div> <p data-astro-cid-nzotbiwo>Signing you in…</p> ${renderScript($$result, "D:/Coding Projects/coaching/src/pages/sso-callback.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "D:/Coding Projects/coaching/src/pages/sso-callback.astro", void 0);
const $$file = "D:/Coding Projects/coaching/src/pages/sso-callback.astro";
const $$url = "/sso-callback";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$SsoCallback,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
