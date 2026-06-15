import { c as createComponent } from './astro-component_CKnNcFM3.mjs';
import 'piccolore';
import { b5 as renderHead, I as renderTemplate } from './sequence_EATudvVE.mjs';
import 'clsx';
import { r as renderScript } from './script_BKnuRLFM.mjs';
import { r as requireAuth } from './auth_IRlGwh__.mjs';

const $$ForgotPassword = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ForgotPassword;
  const user = await requireAuth(Astro2.cookies);
  if (user) return Astro2.redirect("/dashboard");
  return renderTemplate`<html lang="en" data-astro-cid-sjxci7tl> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Forgot Password · Coaching Platform</title><meta name="description" content="Reset your Coaching Platform password via email."><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">${renderHead()}</head> <body data-astro-cid-sjxci7tl> <div class="card" data-astro-cid-sjxci7tl> <div class="icon" data-astro-cid-sjxci7tl>🔑</div> <h1 data-astro-cid-sjxci7tl>Forgot Password?</h1> <p class="subtitle" data-astro-cid-sjxci7tl>Enter your email and we'll send you a secure link to reset your password.</p> <div id="successAlert" class="alert success" data-astro-cid-sjxci7tl></div> <div id="errorAlert" class="alert error" data-astro-cid-sjxci7tl></div> <form id="forgotForm" data-astro-cid-sjxci7tl> <label for="email" data-astro-cid-sjxci7tl>Email address</label> <input type="email" id="email" name="email" placeholder="you@example.com" required autocomplete="email" data-astro-cid-sjxci7tl> <button type="submit" id="submitBtn" data-astro-cid-sjxci7tl>Send Reset Link</button> </form> <a href="/login" class="back-link" data-astro-cid-sjxci7tl>← Back to Login</a> </div> ${renderScript($$result, "D:/Coding Projects/coaching/src/pages/forgot-password.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "D:/Coding Projects/coaching/src/pages/forgot-password.astro", void 0);

const $$file = "D:/Coding Projects/coaching/src/pages/forgot-password.astro";
const $$url = "/forgot-password";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ForgotPassword,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
