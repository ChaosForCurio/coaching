import { c as createComponent } from './astro-component_CKnNcFM3.mjs';
import 'piccolore';
import { b5 as renderHead, F as Fragment, I as renderTemplate, _ as addAttribute } from './sequence_EATudvVE.mjs';
import { r as renderComponent } from './server_C-x_hX_2.mjs';
import { r as renderScript } from './script_BKnuRLFM.mjs';
import { r as requireAuth } from './auth_CFMQny9D.mjs';

const $$ResetPassword = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ResetPassword;
  const user = await requireAuth(Astro2.cookies);
  if (user) return Astro2.redirect("/dashboard");
  const token = Astro2.url.searchParams.get("token");
  const isValidToken = !!token;
  return renderTemplate`<html lang="en" data-astro-cid-oiuorpsm> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Reset Password · Coaching Platform</title><meta name="description" content="Set a new password for your Coaching Platform account."><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">${renderHead()}</head> <body data-astro-cid-oiuorpsm> <div class="card" data-astro-cid-oiuorpsm> <div class="icon" data-astro-cid-oiuorpsm>🔐</div> <h1 data-astro-cid-oiuorpsm>Reset Password</h1> ${isValidToken ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-oiuorpsm": true }, { "default": async ($$result2) => renderTemplate` <p class="subtitle" data-astro-cid-oiuorpsm>Choose a strong new password for your account.</p> <div id="successAlert" class="alert success" data-astro-cid-oiuorpsm></div> <div id="errorAlert" class="alert error" data-astro-cid-oiuorpsm></div> <form id="resetForm" data-astro-cid-oiuorpsm> <input type="hidden" id="token"${addAttribute(token, "value")} data-astro-cid-oiuorpsm> <div class="field" data-astro-cid-oiuorpsm> <label for="password" data-astro-cid-oiuorpsm>New Password</label> <div class="input-wrap" data-astro-cid-oiuorpsm> <input type="password" id="password" name="password" placeholder="Min. 8 characters" required minlength="8" autocomplete="new-password" data-astro-cid-oiuorpsm> </div> <div class="strength-bar" data-astro-cid-oiuorpsm><div class="strength-fill" id="strengthFill" data-astro-cid-oiuorpsm></div></div> </div> <div class="field" data-astro-cid-oiuorpsm> <label for="confirm" data-astro-cid-oiuorpsm>Confirm Password</label> <input type="password" id="confirm" name="confirm" placeholder="Repeat password" required autocomplete="new-password" data-astro-cid-oiuorpsm> </div> <button type="submit" id="submitBtn" data-astro-cid-oiuorpsm>Set New Password</button> </form> ` })}` : renderTemplate`<div class="invalid-token" data-astro-cid-oiuorpsm> <p data-astro-cid-oiuorpsm>⚠️ This reset link is missing or invalid.</p> <a href="/forgot-password" class="back-link" data-astro-cid-oiuorpsm>Request a new reset link →</a> </div>`} ${isValidToken && renderTemplate`<a href="/login" class="back-link" data-astro-cid-oiuorpsm>← Back to Login</a>`} </div> ${isValidToken && renderTemplate`${renderScript($$result, "D:/Coding Projects/coaching/src/pages/reset-password.astro?astro&type=script&index=0&lang.ts")}`} </body> </html>`;
}, "D:/Coding Projects/coaching/src/pages/reset-password.astro", void 0);

const $$file = "D:/Coding Projects/coaching/src/pages/reset-password.astro";
const $$url = "/reset-password";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ResetPassword,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
