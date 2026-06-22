import { c as createComponent } from './astro-component_EmTaXPWV.mjs';
import 'piccolore';
import { b5 as renderHead, I as renderTemplate } from './sequence_DI9gLznW.mjs';
import 'clsx';
import { r as renderScript } from './script_BITFEDOq.mjs';

const $$FirebaseLoginDemo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$FirebaseLoginDemo;
  return renderTemplate`<html lang="en" data-astro-cid-jnkdadpa> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>Firebase Auth Demo - Login</title>${renderHead()}</head> <body data-astro-cid-jnkdadpa> <div class="card" data-astro-cid-jnkdadpa> <h1 data-astro-cid-jnkdadpa>Welcome</h1> <div id="error-message" data-astro-cid-jnkdadpa></div> <div class="form-group" data-astro-cid-jnkdadpa> <label for="email" data-astro-cid-jnkdadpa>Email</label> <input type="email" id="email" placeholder="you@example.com" data-astro-cid-jnkdadpa> </div> <div class="form-group" data-astro-cid-jnkdadpa> <label for="password" data-astro-cid-jnkdadpa>Password</label> <input type="password" id="password" placeholder="••••••••" data-astro-cid-jnkdadpa> </div> <div class="form-group" data-astro-cid-jnkdadpa> <label for="role" data-astro-cid-jnkdadpa>I am a...</label> <select id="role" data-astro-cid-jnkdadpa> <option value="student" data-astro-cid-jnkdadpa>Student</option> <option value="teacher" data-astro-cid-jnkdadpa>Teacher</option> </select> </div> <button id="login-btn" class="btn-primary" data-astro-cid-jnkdadpa>Log In</button> <button id="signup-btn" class="btn-secondary" data-astro-cid-jnkdadpa>Create Account</button> </div> ${renderScript($$result, "D:/Coding Projects/coaching/src/pages/firebase-login-demo.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "D:/Coding Projects/coaching/src/pages/firebase-login-demo.astro", void 0);

const $$file = "D:/Coding Projects/coaching/src/pages/firebase-login-demo.astro";
const $$url = "/firebase-login-demo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$FirebaseLoginDemo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
