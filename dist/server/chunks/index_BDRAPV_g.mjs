globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_BlHCHKq7.mjs";
import { b5 as renderHead, a0 as addAttribute, F as Fragment, K as renderTemplate } from "./sequence_DmJMvBqm.mjs";
import { r as renderComponent } from "./worker-entry_BzkTZFce.mjs";
import { getCollection } from "./_astro_content_BM5-7Htj.mjs";
import { $ as $$Navbar, a as $$Footer } from "./global_BzReaJUq.mjs";
import { $ as $$SEOHead, a as $$WhatsAppFloat } from "./WhatsAppFloat_CC5LtSjp.mjs";
import { $ as $$Image } from "./_astro_assets_DO21Wi5_.mjs";
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
  const blogImages = [
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    // Code workspace
    "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&w=800",
    // Laptop and code
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    // Monitor with code
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
    // Workspace
    "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&q=80&w=800",
    // Typing
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800"
    // Team tech
  ];
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "SEOHead", $$SEOHead, { "title": "Blog | Bhavya Computer Classes — Computer Career Tips & Guides", "description": "Career tips, course guides, and programming tutorials from Bhavya Computer Classes in Kota. Read about Python, Tally, Web Design, DCA, and digital marketing courses.", "canonical": "https://www.bhavyacomputerclasses.com/blog", "schema": blogSchema })}${renderHead()}</head> <body class="bg-[#0a0a0a] text-white overflow-x-hidden selection:bg-white/20"> ${renderComponent($$result, "Navbar", $$Navbar, {})} <main class="w-full pt-40 px-8 min-h-screen container mx-auto mb-20"> <div class="max-w-7xl mx-auto"> <h1 class="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Blog</h1> <p class="text-xl text-white/70 mb-16 max-w-2xl">
Insights, guides, and updates from the Bhavya Computer Classes team to
          help you navigate your career journey.
</p> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${sortedPosts.map((post, index) => {
    const styleIdx = index % 3;
    const hoverColor = hoverColors[styleIdx];
    const badgeColor = badgeColors[styleIdx];
    const tag = tags[styleIdx];
    const imageSrc = blogImages[index % blogImages.length];
    return renderTemplate`<a${addAttribute(`/blog/${post.id}`, "href")} class="block group outline-none"> <article class="bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden hover:bg-white/[0.06] transition-all duration-300 group-hover:-translate-y-1 group-focus-visible:ring-2 group-focus-visible:ring-white/50 h-full flex flex-col"> <div class="h-52 w-full relative overflow-hidden bg-gray-900"> ${renderComponent($$result, "Image", $$Image, { "src": imageSrc, "inferSize": true, "alt": post.data.title, "class": "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105", "loading": "lazy" })} <div class="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 to-transparent"></div> </div> <div class="p-8 flex flex-col flex-grow"> <div class="flex items-center gap-3 mb-4"> <span${addAttribute(`text-xs font-medium px-3 py-1 border rounded-full ${badgeColor}`, "class")}> ${tag} </span> <time${addAttribute(post.data.date.toISOString().split("T")[0], "datetime")} class="text-xs text-white/50"> ${post.data.date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric"
    })} </time> </div> <h2${addAttribute(`text-2xl font-semibold mb-3 transition-colors leading-tight ${hoverColor}`, "class")}> ${post.data.title} </h2> <p class="text-white/60 text-sm leading-relaxed mb-8 line-clamp-3 flex-grow"> ${post.data.excerpt || post.data.title} </p> <div${addAttribute(`inline-flex items-center text-sm font-medium text-white transition-colors gap-2 mt-auto ${hoverColor}`, "class")}>
Read Article
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:translate-x-1 transition-transform" aria-hidden="true"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate` <path d="M5 12h14"></path> <path d="m12 5 7 7-7 7"></path> ` })} </svg> </div> </div> </article> </a>`;
  })} </div> </div> </main> ${renderComponent($$result, "Footer", $$Footer, {})} ${renderComponent($$result, "WhatsAppFloat", $$WhatsAppFloat, {})} </body></html>`;
}, "D:/Coding Projects/coaching/src/pages/blog/index.astro", void 0);
const $$file = "D:/Coding Projects/coaching/src/pages/blog/index.astro";
const $$url = "/blog";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
