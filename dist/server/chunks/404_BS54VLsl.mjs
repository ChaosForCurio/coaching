import { c as createComponent } from './astro-component_CcqMMwb0.mjs';
import 'piccolore';
import { b as renderHead, c as renderComponent, r as renderTemplate } from './server_CbJrX1FR.mjs';
import { $ as $$Navbar } from './global_DzgTv7pz.mjs';
import { $ as $$Footer } from './Footer_CRyMzkYy.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Page Not Found | Coaching Institute</title><meta name="description" content="The page you are looking for does not exist.">${renderHead()}</head> <body class="bg-[#0a0a0a] text-white overflow-x-hidden selection:bg-white/20"> ${renderComponent($$result, "Navbar", $$Navbar, {})} <main class="w-full min-h-screen flex flex-col items-center justify-center px-4"> <div class="text-center"> <h1 class="text-[8rem] md:text-[12rem] font-black leading-none text-transparent bg-clip-text bg-gradient-to-r from-blue-500/20 to-emerald-500/20 select-none">
404
</h1> <div class="relative z-10 -mt-10 md:-mt-16"> <h2 class="text-3xl md:text-5xl font-bold mb-4">Page Not Found</h2> <p class="text-gray-400 max-w-md mx-auto mb-8">
The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
</p> <a href="/" class="inline-block bg-white text-black font-semibold px-8 py-4 rounded hover:scale-105 transition-transform">
Return to Homepage
</a> </div> </div> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "D:/Coding Projects/coaching/src/pages/404.astro", void 0);

const $$file = "D:/Coding Projects/coaching/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
