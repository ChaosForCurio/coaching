import { c as createComponent } from './astro-component_EmTaXPWV.mjs';
import 'piccolore';
import { b5 as renderHead, _ as addAttribute, bk as unescapeHTML, F as Fragment, I as renderTemplate } from './sequence_DI9gLznW.mjs';
import { r as renderComponent } from './server_CAbLtFaR.mjs';
import { getCollection } from './_astro_content_B2GJ7ABX.mjs';
/* empty css                 */
import { $ as $$SEOHead } from './SEOHead_DTc4m2NQ.mjs';
import { $ as $$Cursor } from './Cursor_BfTN__ot.mjs';
import { $ as $$Navbar } from './Navbar_llFJWaWA.mjs';
import { $ as $$Footer } from './Footer_Bxtrk-LB.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allPosts = await getCollection("blog");
  const sortedPosts = allPosts.sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );
  const blogSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "@id": "https://www.bhavyacomputerclasses.com/blog",
        name: "Bhavya Computer Classes Blog",
        url: "https://www.bhavyacomputerclasses.com/blog",
        description: "Insights, guides, and career tips for students learning computer skills, programming, and digital marketing in Kota, Rajasthan.",
        publisher: {
          "@type": "Organization",
          name: "Bhavya Computer Classes",
          url: "https://www.bhavyacomputerclasses.com"
        },
        blogPost: sortedPosts.map((post) => ({
          "@type": "BlogPosting",
          headline: post.data.title,
          datePublished: post.data.date.toISOString().split("T")[0],
          author: {
            "@type": "Organization",
            name: post.data.author || "Bhavya Computer Classes"
          }
        }))
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.bhavyacomputerclasses.com/"
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: "https://www.bhavyacomputerclasses.com/blog"
          }
        ]
      }
    ]
  };
  const gradients = [
    "from-blue-500/20 to-purple-600/20",
    "from-emerald-500/20 to-teal-600/20",
    "from-orange-500/20 to-pink-600/20"
  ];
  const icons = [
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-blue-300" aria-hidden="true"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-emerald-300" aria-hidden="true"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-orange-300" aria-hidden="true"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>'
  ];
  const hoverColors = [
    "group-hover:text-blue-400",
    "group-hover:text-emerald-400",
    "group-hover:text-orange-400"
  ];
  const badgeColors = [
    "bg-blue-500/10 border-blue-500/20 text-blue-300",
    "bg-emerald-500/10 border-emerald-500/20 text-emerald-300",
    "bg-orange-500/10 border-orange-500/20 text-orange-300"
  ];
  const tags = ["Technology", "Insight", "Guide"];
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "SEOHead", $$SEOHead, { "title": "Blog | Bhavya Computer Classes — Computer Career Tips & Guides", "description": "Career tips, course guides, and programming tutorials from Bhavya Computer Classes in Kota. Read about Python, Tally, Web Design, DCA, and digital marketing courses.", "canonical": "https://www.bhavyacomputerclasses.com/blog", "schema": blogSchema })}${renderHead()}</head> <body class="bg-[#0a0a0a] text-white overflow-x-hidden selection:bg-white/20"> ${renderComponent($$result, "Cursor", $$Cursor, {})} ${renderComponent($$result, "Navbar", $$Navbar, {})} <main class="w-full pt-40 px-8 min-h-screen container mx-auto mb-20"> <div class="max-w-7xl mx-auto"> <h1 class="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Blog</h1> <p class="text-xl text-white/70 mb-16 max-w-2xl">
Insights, guides, and updates from the Bhavya Computer Classes team to
          help you navigate your career journey.
</p> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${sortedPosts.map((post, index) => {
    const styleIdx = index % 3;
    const gradient = gradients[styleIdx];
    const icon = icons[styleIdx];
    const hoverColor = hoverColors[styleIdx];
    const badgeColor = badgeColors[styleIdx];
    const tag = tags[styleIdx];
    return renderTemplate`<article class="group bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-1"> <div${addAttribute(`h-52 bg-gradient-to-br ${gradient} w-full relative`, "class")}> <div class="absolute inset-0 flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity">${unescapeHTML(icon)}</div> </div> <div class="p-8"> <div class="flex items-center gap-3 mb-4"> <span${addAttribute(`text-xs font-medium px-3 py-1 border rounded-full ${badgeColor}`, "class")}> ${tag} </span> <time${addAttribute(post.data.date.toISOString().split("T")[0], "datetime")} class="text-xs text-white/50"> ${post.data.date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric"
    })} </time> </div> <h2${addAttribute(`text-2xl font-semibold mb-3 transition-colors leading-tight ${hoverColor}`, "class")}> ${post.data.title} </h2> <p class="text-white/60 text-sm leading-relaxed mb-8 line-clamp-3"> ${post.data.excerpt || post.data.title} </p> <a${addAttribute(`/blog/${post.id}`, "href")}${addAttribute(`inline-flex items-center text-sm font-medium text-white transition-colors gap-2 ${hoverColor}`, "class")}>
Read Article
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:translate-x-1 transition-transform" aria-hidden="true"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate` <path d="M5 12h14"></path> <path d="m12 5 7 7-7 7"></path> ` })} </svg> </a> </div> </article>`;
  })} </div> </div> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
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
