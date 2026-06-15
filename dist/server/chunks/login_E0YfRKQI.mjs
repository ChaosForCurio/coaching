import { c as createComponent } from './astro-component_CKnNcFM3.mjs';
import 'piccolore';
import { b5 as renderHead, _ as addAttribute, I as renderTemplate } from './sequence_EATudvVE.mjs';
import { r as renderComponent } from './server_XB33Q1Xm.mjs';
import { $ as $$Navbar } from './global_Cak1c7pH.mjs';
import { $ as $$SEOHead, a as $$Cursor } from './Cursor_DKud75N1.mjs';
import { $ as $$Footer } from './Footer_FinNQa-G.mjs';

const $$Login = createComponent(($$result, $$props, $$slots) => {
  const projectId = "";
  const redirectUrl = `${"https://www.bhavyacomputerclasses.com"}/dashboard`;
  const stackAuthUrl = `https://app.stack-auth.com/sign-in?project_id=${projectId}&redirect_url=${encodeURIComponent(redirectUrl)}`;
  return renderTemplate`<html lang="en" data-astro-cid-sgpqyurt> <head>${renderComponent($$result, "SEOHead", $$SEOHead, { "title": "Login / Register — Bhavya Career Institute", "description": "Access your student or teacher portal at Bhavya Career Institute via Stack Auth.", "canonical": "https://www.bhavyacomputerclasses.com/login", "data-astro-cid-sgpqyurt": true })}${renderHead()}</head> <body class="bg-[#000] text-white overflow-x-hidden selection:bg-white/20" data-astro-cid-sgpqyurt> ${renderComponent($$result, "Cursor", $$Cursor, { "data-astro-cid-sgpqyurt": true })} ${renderComponent($$result, "Navbar", $$Navbar, { "data-astro-cid-sgpqyurt": true })} <!-- Ambient noise overlay --> <div class="noise" data-astro-cid-sgpqyurt></div> <!-- Grid background overlay --> <div class="fixed inset-0 overflow-hidden pointer-events-none z-0" data-astro-cid-sgpqyurt> <div class="absolute inset-0 bg-grid opacity-20" data-astro-cid-sgpqyurt></div> </div> <main class="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 pt-32 pb-12" data-astro-cid-sgpqyurt> <!-- Logo / Brand --> <div class="text-center mb-8" data-astro-cid-sgpqyurt> <div class="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl mb-4 logo-pulse text-white" data-astro-cid-sgpqyurt> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-sgpqyurt> <path d="M22 10v6M2 10l10-5 10 5-10 5z" data-astro-cid-sgpqyurt></path><path d="M6 12v5c3 3 9 3 12 0v-5" data-astro-cid-sgpqyurt></path> </svg> </div> <p class="text-white/30 text-xs uppercase tracking-[0.3em]" style="font-family: 'Outfit', sans-serif;" data-astro-cid-sgpqyurt>Bhavya Career Institute</p> <h1 id="portal-heading" class="text-2xl font-bold mt-1 text-white" style="font-family: 'Syne', sans-serif; letter-spacing: -0.04em;" data-astro-cid-sgpqyurt>Student & Teacher Portal</h1> </div> <!-- Main Card --> <div class="login-card w-full max-w-md rounded-3xl p-8 relative overflow-hidden text-center" data-astro-cid-sgpqyurt> <!-- Card glow edge --> <div class="card-glow-edge" data-astro-cid-sgpqyurt></div> <h2 class="text-xl font-semibold mb-3" style="font-family: 'Syne', sans-serif;" data-astro-cid-sgpqyurt>Welcome Back</h2> <p class="text-white/40 text-sm mb-8 px-4" style="font-family: 'Outfit', sans-serif;" data-astro-cid-sgpqyurt>
Click the button below to sign in or register a new account using our secure Stack Auth portal.
</p> <!-- Stack Auth Button --> <a${addAttribute(stackAuthUrl, "href")} class="login-btn w-full inline-flex items-center justify-center gap-3 decoration-none" data-astro-cid-sgpqyurt> <span class="btn-text" data-astro-cid-sgpqyurt>Sign In / Register</span> <svg class="btn-arrow" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-sgpqyurt><path d="M5 12h14" data-astro-cid-sgpqyurt></path><path d="m12 5 7 7-7 7" data-astro-cid-sgpqyurt></path></svg> </a> <!-- Footer divider --> <div class="passkey-divider my-6" data-astro-cid-sgpqyurt> <span class="passkey-divider-line" data-astro-cid-sgpqyurt></span> <span class="passkey-divider-text" data-astro-cid-sgpqyurt>Secure Identity</span> <span class="passkey-divider-line" data-astro-cid-sgpqyurt></span> </div> <p class="text-white/30 text-[11px] leading-relaxed" style="font-family: 'Outfit', sans-serif;" data-astro-cid-sgpqyurt>
Stack Auth protects your credentials with industry-grade security, supporting passwordless passkeys, Google OAuth, and secure email verification.
</p> </div> <!-- Footer note --> <p class="mt-8 text-white/20 text-xs text-center" style="font-family: 'Outfit', sans-serif;" data-astro-cid-sgpqyurt>
Having trouble? Contact us at
<a href="https://wa.me/919694932391" class="text-white/40 hover:text-white/70 transition-colors underline underline-offset-2" data-astro-cid-sgpqyurt>+91 96949 32391</a> </p> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-sgpqyurt": true })} </body> </html>`;
}, "D:/Coding Projects/coaching/src/pages/login.astro", void 0);
const $$file = "D:/Coding Projects/coaching/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
