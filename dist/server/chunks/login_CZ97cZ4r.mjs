import { c as createComponent } from './astro-component_DJPswS2K.mjs';
import 'piccolore';
import { aR as renderHead, _ as addAttribute, I as renderTemplate } from './sequence_Suik_5Ze.mjs';
import { r as renderComponent } from './server_XJySStNO.mjs';
import { r as renderScript } from './script_BBdc2VQP.mjs';
/* empty css                 */
import { $ as $$SEOHead } from './SEOHead_D2qu1SZm.mjs';

const $$Login = createComponent(($$result, $$props, $$slots) => {
  const googleAuthUrl = "/api/auth/google-signin";
  return renderTemplate`<html lang="en" data-astro-cid-sgpqyurt> <head>${renderComponent($$result, "SEOHead", $$SEOHead, { "title": "Sign in — Bhavya Computer Classes", "description": "Sign in to your student or teacher portal at Bhavya Computer Classes.", "canonical": "https://www.bhavyacomputerclasses.com/login", "data-astro-cid-sgpqyurt": true })}<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;800&display=swap" rel="stylesheet">${renderHead()}</head> <body data-astro-cid-sgpqyurt> <main class="signin-page" data-astro-cid-sgpqyurt> <h1 data-astro-cid-sgpqyurt>Sign in to your portal</h1> <p class="subtitle" data-astro-cid-sgpqyurt>
Select your role and sign in with Google.
</p> <div class="role-group" role="group" aria-label="Select role" data-astro-cid-sgpqyurt> <button id="btn-student" class="role-tab role-tab--active" data-role="STUDENT" type="button" aria-pressed="true" data-astro-cid-sgpqyurt>
Student
</button> <button id="btn-teacher" class="role-tab" data-role="TEACHER" type="button" aria-pressed="false" data-astro-cid-sgpqyurt>
Teacher
</button> </div> <div class="signin-buttons" data-astro-cid-sgpqyurt> <a id="google-btn"${addAttribute(googleAuthUrl, "href")} class="signin-button" aria-label="Sign in with Google" data-astro-cid-sgpqyurt> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" data-astro-cid-sgpqyurt> <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" data-astro-cid-sgpqyurt></path> <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" data-astro-cid-sgpqyurt></path> <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" data-astro-cid-sgpqyurt></path> <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" data-astro-cid-sgpqyurt></path> </svg> <span class="oauth-label" data-astro-cid-sgpqyurt>Sign in with Google</span> </a> </div> </main>  ${renderScript($$result, "D:/Coding Projects/coaching/src/pages/login.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
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
