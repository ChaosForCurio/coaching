globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent, $ as $$SEOHead, a as $$Navbar, b as $$Footer } from "./Footer_DY66i9Gu.mjs";
import { r as renderComponent, c as renderHead, b as renderTemplate, a as addAttribute } from "./worker-entry_C595MgLD.mjs";
import { g as getCollection, r as renderEntry } from "./_astro_content_CvcBbLnl.mjs";
import { $ as $$WhatsAppFloat } from "./WhatsAppFloat_PRyjgAvU.mjs";
import { g as generateBlogPostSchema } from "./schemaGenerator_DnzrJxDL.mjs";
const prerender = true;
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
  const canonical = `https://www.bhavyacomputerclasses.com/blog/${entry.id}`;
  const dateStr = new Date(entry.data.date).toISOString().split("T")[0];
  const articleSchema = generateBlogPostSchema(
    entry.data.title,
    entry.data.excerpt || entry.data.title,
    dateStr,
    entry.data.author || "Bhavya Computer Classes",
    canonical
  );
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "SEOHead", $$SEOHead, { "title": `${entry.data.title} | Bhavya Computer Classes Blog`, "description": entry.data.excerpt || entry.data.title, "canonical": canonical, "schema": articleSchema, "ogImage": entry.data.image ? `https://www.bhavyacomputerclasses.com${entry.data.image}` : void 0 })}${renderHead()}</head> <body class="bg-[#0a0a0a] text-white overflow-x-hidden selection:bg-white/20"> ${renderComponent($$result, "Navbar", $$Navbar, {})} <main class="w-full min-h-screen pt-28 pb-24"> <!-- Article container --> <div class="max-w-3xl mx-auto px-4 sm:px-6"> <!-- Back link --> <a href="/blog" class="inline-flex items-center gap-2 text-white/35 hover:text-white/70 text-sm mb-10 transition-colors" style="font-family: 'Outfit', sans-serif;"> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5"></path><path d="m12 19-7-7 7-7"></path></svg>
Back to Blog
</a> <article> <!-- Header --> <header class="mb-12"> <!-- Tags / Category --> ${entry.data.category && renderTemplate`<span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mb-5 border" style="font-family: 'Outfit', sans-serif; background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.25); color: #ffffff;"> ${entry.data.category} </span>`} <h1 class="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-6" style="font-family: 'Syne', sans-serif;"> ${entry.data.title} </h1> ${entry.data.excerpt && renderTemplate`<p class="text-white/50 text-lg leading-relaxed mb-6" style="font-family: 'Inter', sans-serif;"> ${entry.data.excerpt} </p>`} <!-- Meta row --> <div class="flex flex-wrap items-center gap-4 text-white/30 text-sm border-b border-white/8 pb-8" style="font-family: 'Inter', sans-serif;"> <span class="flex items-center gap-1.5"> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg> <time${addAttribute(dateStr, "datetime")}> ${new Date(entry.data.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })} </time> </span> ${entry.data.author && renderTemplate`<span class="flex items-center gap-1.5"> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg> ${entry.data.author} </span>`} <!-- Tags --> ${entry.data.tags && entry.data.tags.length > 0 && renderTemplate`<span class="flex flex-wrap gap-2"> ${entry.data.tags.slice(0, 3).map((tag) => renderTemplate`<span class="px-2 py-0.5 rounded bg-white/5 border border-white/8 text-xs text-white/30">${tag}</span>`)} </span>`} </div> </header> <!-- Content body --> <div class="article-prose"> ${renderComponent($$result, "Content", Content, {})} </div> <!-- Bottom CTA --> <div class="mt-16 p-8 rounded-2xl border border-white/20 bg-gradient-to-br from-white/5 to-transparent"> <p class="text-white/30 text-xs uppercase tracking-widest mb-3" style="font-family: 'Outfit', sans-serif;">Bhavya Computer Classes · Kota</p> <h3 class="text-2xl font-black mb-2" style="font-family: 'Syne', sans-serif;">
Ready to start learning?
</h3> <p class="text-white/45 text-sm mb-6" style="font-family: 'Inter', sans-serif;">
Join 5,000+ students who have built their careers with us. Government-certified courses, 100% placement assistance, free demo classes.
</p> <div class="flex flex-wrap gap-3"> <a href="https://wa.me/919694932391?text=Hi%2C%20I%20read%20your%20blog%20and%20want%20to%20know%20more%20about%20courses." target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-sm font-semibold transition-all duration-250 hover:-translate-y-0.5" style="font-family: 'Outfit', sans-serif;"> <svg viewBox="0 0 24 24" fill="white" class="w-4 h-4"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24z"></path></svg>
Enquire on WhatsApp
</a> <a href="/all-courses" class="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/8 hover:bg-white/14 border border-white/12 text-white text-sm font-semibold transition-all duration-250 hover:-translate-y-0.5" style="font-family: 'Outfit', sans-serif;">
View All Courses →
</a> </div> </div> </article> </div> </main> ${renderComponent($$result, "Footer", $$Footer, {})} ${renderComponent($$result, "WhatsAppFloat", $$WhatsAppFloat, {})}</body></html>`;
}, "D:/Coding Projects/coaching/src/pages/blog/[...slug].astro", void 0);
const $$file = "D:/Coding Projects/coaching/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
