import { c as createComponent } from './astro-component_CcqMMwb0.mjs';
import 'piccolore';
import { a as addAttribute, b as renderHead, c as renderComponent, r as renderTemplate } from './server_CbJrX1FR.mjs';
import { g as getCollection, r as renderEntry } from './_astro_content_CwYufosC.mjs';
import { $ as $$Navbar } from './global_DzgTv7pz.mjs';
import { $ as $$Footer } from './Footer_CRyMzkYy.mjs';

async function getStaticPaths() {
  const blogEntries = await getCollection("blog");
  return blogEntries.map((entry) => ({
    params: { slug: entry.id },
    props: { entry }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$;
  const { entry } = Astro2.props;
  const { Content } = await renderEntry(entry);
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${entry.data.title} | Blog</title><meta name="description"${addAttribute(entry.data.excerpt || entry.data.title, "content")}>${renderHead()}</head> <body class="bg-[#0a0a0a] text-white overflow-x-hidden selection:bg-white/20"> ${renderComponent($$result, "Navbar", $$Navbar, {})} <main class="w-full max-w-3xl mx-auto px-4 py-24 min-h-screen"> <article class="prose prose-invert prose-lg max-w-none"> <header class="mb-8 border-b border-gray-800 pb-8"> <h1 class="text-4xl font-bold mb-4">${entry.data.title}</h1> <div class="flex gap-4 text-gray-400 text-sm"> <span>📅 ${new Date(entry.data.date).toLocaleDateString()}</span> ${entry.data.author && renderTemplate`<span>✍️ ${entry.data.author}</span>`} </div> </header> <div class="bg-gray-900/50 p-6 rounded-lg border border-gray-800 mb-8"> ${renderComponent($$result, "Content", Content, {})} </div> </article> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "D:/Coding Projects/coaching/src/pages/blog/[...slug].astro", void 0);

const $$file = "D:/Coding Projects/coaching/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
