import { c as createComponent } from './astro-component_CcqMMwb0.mjs';
import 'piccolore';
import { c as renderComponent, b as renderHead, r as renderTemplate } from './server_CbJrX1FR.mjs';
import { $ as $$Navbar } from './global_DzgTv7pz.mjs';
import { $ as $$SEOHead } from './SEOHead_CX8K_Fef.mjs';
import { $ as $$Cursor } from './Cursor_DKqi31Rs.mjs';
import { $ as $$Footer } from './Footer_CRyMzkYy.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const blogSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "@id": "https://bhavyacareerinstitute.com/blog",
        "name": "Bhavya Career Institute Blog",
        "url": "https://bhavyacareerinstitute.com/blog",
        "description": "Insights, guides, and career tips for students learning computer skills, programming, and digital marketing in Kota, Rajasthan.",
        "publisher": {
          "@type": "Organization",
          "name": "Bhavya Career Institute",
          "url": "https://bhavyacareerinstitute.com"
        },
        "blogPost": [
          {
            "@type": "BlogPosting",
            "headline": "Why Python is the Best Language for Beginners",
            "datePublished": "2026-06-05",
            "author": { "@type": "Organization", "name": "Bhavya Career Institute" }
          },
          {
            "@type": "BlogPosting",
            "headline": "Mastering Tally Prime: A Complete Guide",
            "datePublished": "2026-05-28",
            "author": { "@type": "Organization", "name": "Bhavya Career Institute" }
          },
          {
            "@type": "BlogPosting",
            "headline": "Web Design Trends You Can't Ignore",
            "datePublished": "2026-05-15",
            "author": { "@type": "Organization", "name": "Bhavya Career Institute" }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bhavyacareerinstitute.com/" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://bhavyacareerinstitute.com/blog" }
        ]
      }
    ]
  };
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "SEOHead", $$SEOHead, { "title": "Blog | Bhavya Career Institute — Computer Career Tips & Guides", "description": "Career tips, course guides, and programming tutorials from Bhavya Career Institute in Kota. Read about Python, Tally, Web Design, DCA, and digital marketing courses.", "canonical": "https://bhavyacareerinstitute.com/blog", "schema": blogSchema })}${renderHead()}</head> <body class="bg-[#0a0a0a] text-white overflow-x-hidden selection:bg-white/20"> ${renderComponent($$result, "Cursor", $$Cursor, {})} ${renderComponent($$result, "Navbar", $$Navbar, {})} <main class="w-full pt-40 px-8 min-h-screen container mx-auto mb-20"> <div class="max-w-7xl mx-auto"> <h1 class="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Blog</h1> <p class="text-xl text-white/70 mb-16 max-w-2xl">Insights, guides, and updates from the Bhavya Career Institute team to help you navigate your career journey.</p> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> <!-- Blog Card 1 --> <article class="group bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-1"> <div class="h-52 bg-gradient-to-br from-blue-500/20 to-purple-600/20 w-full relative"> <div class="absolute inset-0 flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity"> <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-blue-300" aria-hidden="true"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg> </div> </div> <div class="p-8"> <div class="flex items-center gap-3 mb-4"> <span class="text-xs font-medium px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300">Programming</span> <time datetime="2026-06-05" class="text-xs text-white/50">June 5, 2026</time> </div> <h2 class="text-2xl font-semibold mb-3 group-hover:text-blue-400 transition-colors leading-tight">Why Python is the Best Language for Beginners</h2> <p class="text-white/60 text-sm leading-relaxed mb-8 line-clamp-3">
Starting your coding journey? Discover why Python's simple syntax and massive ecosystem make it the perfect choice for first-time programmers and experienced developers alike.
</p> <a href="#" class="inline-flex items-center text-sm font-medium text-white hover:text-blue-400 transition-colors gap-2">
Read Article
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:translate-x-1 transition-transform" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg> </a> </div> </article> <!-- Blog Card 2 --> <article class="group bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-1"> <div class="h-52 bg-gradient-to-br from-emerald-500/20 to-teal-600/20 w-full relative"> <div class="absolute inset-0 flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity"> <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-emerald-300" aria-hidden="true"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path></svg> </div> </div> <div class="p-8"> <div class="flex items-center gap-3 mb-4"> <span class="text-xs font-medium px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-300">Accounting</span> <time datetime="2026-05-28" class="text-xs text-white/50">May 28, 2026</time> </div> <h2 class="text-2xl font-semibold mb-3 group-hover:text-emerald-400 transition-colors leading-tight">Mastering Tally Prime: A Complete Guide</h2> <p class="text-white/60 text-sm leading-relaxed mb-8 line-clamp-3">
Learn the essential features of Tally Prime, how it differs from Tally ERP 9, and why it's a crucial skill for modern accounting professionals in today's business landscape.
</p> <a href="#" class="inline-flex items-center text-sm font-medium text-white hover:text-emerald-400 transition-colors gap-2">
Read Article
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:translate-x-1 transition-transform" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg> </a> </div> </article> <!-- Blog Card 3 --> <article class="group bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-1"> <div class="h-52 bg-gradient-to-br from-orange-500/20 to-pink-600/20 w-full relative"> <div class="absolute inset-0 flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity"> <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-orange-300" aria-hidden="true"><path d="M12 20h9"></path><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path></svg> </div> </div> <div class="p-8"> <div class="flex items-center gap-3 mb-4"> <span class="text-xs font-medium px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-300">Design</span> <time datetime="2026-05-15" class="text-xs text-white/50">May 15, 2026</time> </div> <h2 class="text-2xl font-semibold mb-3 group-hover:text-orange-400 transition-colors leading-tight">Web Design Trends You Can't Ignore</h2> <p class="text-white/60 text-sm leading-relaxed mb-8 line-clamp-3">
From micro-interactions to dark mode supremacy, explore the UI/UX design trends that are shaping the web this year and how to implement them in your next project.
</p> <a href="#" class="inline-flex items-center text-sm font-medium text-white hover:text-orange-400 transition-colors gap-2">
Read Article
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:translate-x-1 transition-transform" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg> </a> </div> </article> </div> </div> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "D:/Coding Projects/coaching/src/pages/blog/index.astro", void 0);

const $$file = "D:/Coding Projects/coaching/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
