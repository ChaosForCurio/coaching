import { c as createComponent } from './astro-component_CcqMMwb0.mjs';
import 'piccolore';
import { c as renderComponent, b as renderHead, r as renderTemplate } from './server_CbJrX1FR.mjs';
import { g as getCollection, r as renderEntry } from './_astro_content_CwYufosC.mjs';
import { $ as $$SEOHead } from './SEOHead_CX8K_Fef.mjs';
import { $ as $$Navbar } from './global_DzgTv7pz.mjs';
import { $ as $$Footer } from './Footer_CRyMzkYy.mjs';

async function getStaticPaths() {
  const courseEntries = await getCollection("courses");
  return courseEntries.map((entry) => ({
    params: { slug: entry.id },
    props: { entry }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$;
  const { entry } = Astro2.props;
  const { Content } = await renderEntry(entry);
  const canonical = `https://bhavyacareerinstitute.com/courses/${entry.id}`;
  const courseSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        "name": entry.data.title,
        "description": entry.data.description,
        "provider": {
          "@type": "Organization",
          "name": "Bhavya Career Institute",
          "url": "https://bhavyacareerinstitute.com"
        },
        "hasCourseInstance": {
          "@type": "CourseInstance",
          "courseMode": "Onsite",
          "location": {
            "@type": "Place",
            "name": "Bhavya Career Institute",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "3-N-25, Mahaveer Nagar Extension",
              "addressLocality": "Kota",
              "addressRegion": "Rajasthan",
              "postalCode": "324005",
              "addressCountry": "IN"
            }
          }
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bhavyacareerinstitute.com/" },
          { "@type": "ListItem", "position": 2, "name": "All Courses", "item": "https://bhavyacareerinstitute.com/all-courses" },
          { "@type": "ListItem", "position": 3, "name": entry.data.title, "item": canonical }
        ]
      }
    ]
  };
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "SEOHead", $$SEOHead, { "title": `${entry.data.title} in Kota | Bhavya Career Institute`, "description": entry.data.description ?? `Learn ${entry.data.title} at Bhavya Career Institute, Kota. Government-certified course with placement assistance. Enroll today.`, "canonical": canonical, "schema": courseSchema })}${renderHead()}</head> <body class="bg-[#0a0a0a] text-white overflow-x-hidden selection:bg-white/20"> ${renderComponent($$result, "Navbar", $$Navbar, {})} <main class="w-full max-w-4xl mx-auto px-4 py-24 min-h-screen"> <div class="prose prose-invert prose-lg max-w-none"> <h1 class="text-4xl font-bold mb-4">${entry.data.title}</h1> <div class="flex gap-4 text-gray-400 mb-8"> ${entry.data.duration && renderTemplate`<span>⏱️ ${entry.data.duration}</span>`} ${entry.data.level && renderTemplate`<span>📊 ${entry.data.level}</span>`} </div> <div class="bg-gray-900/50 p-6 rounded-lg border border-gray-800 mb-8"> ${renderComponent($$result, "Content", Content, {})} </div> </div> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "D:/Coding Projects/coaching/src/pages/courses/[...slug].astro", void 0);

const $$file = "D:/Coding Projects/coaching/src/pages/courses/[...slug].astro";
const $$url = "/courses/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
