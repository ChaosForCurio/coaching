import { c as createComponent } from './astro-component_CcqMMwb0.mjs';
import 'piccolore';
import { c as renderComponent, b as renderHead, r as renderTemplate } from './server_CbJrX1FR.mjs';
import { $ as $$Navbar } from './global_DzgTv7pz.mjs';
import { $ as $$SEOHead } from './SEOHead_CX8K_Fef.mjs';
import { $ as $$Cursor } from './Cursor_DKqi31Rs.mjs';
import { $ as $$Footer } from './Footer_CRyMzkYy.mjs';

const $$TallyCourseCity = createComponent(($$result, $$props, $$slots) => {
  const tallySchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Tally Prime with GST Course in Kota",
    "description": "Learn Tally Prime accounting software with full GST billing, inventory management, and financial reporting at Bhavya Career Institute, Kota. Government-certified with placement assistance.",
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
        "name": "Bhavya Career Institute, Kota",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Kota",
          "addressRegion": "Rajasthan",
          "postalCode": "324005",
          "addressCountry": "IN"
        }
      }
    }
  };
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "SEOHead", $$SEOHead, { "title": "Tally Course in Kota | Tally Prime with GST Classes — Bhavya Career Institute", "description": "Learn Tally Prime with GST at Bhavya Career Institute, Kota. Master accounting, billing, inventory & payroll with government-certified Tally training. Free demo class available. Placement assistance provided.", "canonical": "https://bhavyacareerinstitute.com/courses/tally-course-city", "schema": tallySchema })}${renderHead()}</head> <body class="bg-[#0a0a0a] text-white overflow-x-hidden selection:bg-white/20"> ${renderComponent($$result, "Cursor", $$Cursor, {})} ${renderComponent($$result, "Navbar", $$Navbar, {})} <main class="w-full pt-40 px-8 min-h-screen container mx-auto"> <h1 class="text-5xl md:text-7xl font-bold mb-6">Tally Course in Kota</h1> <p class="text-xl text-white/70 max-w-2xl">Tally Prime with GST — Government-certified accounting course at Bhavya Career Institute, Kota.</p> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "D:/Coding Projects/coaching/src/pages/courses/tally-course-city.astro", void 0);

const $$file = "D:/Coding Projects/coaching/src/pages/courses/tally-course-city.astro";
const $$url = "/courses/tally-course-city";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$TallyCourseCity,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
