import { c as createComponent } from './astro-component_CSujqvA2.mjs';
import 'piccolore';
import { c as renderComponent, b as renderHead, r as renderTemplate } from './server_DlCF4DwY.mjs';
import { $ as $$Navbar } from './global_Co-RNAAp.mjs';
import { $ as $$SEOHead } from './SEOHead_C4d_8l9q.mjs';
import { $ as $$Cursor } from './Cursor_Dg-DS7AT.mjs';
import { $ as $$Footer } from './Footer_C45aK47Z.mjs';

const $$PythonCourseCity = createComponent(($$result, $$props, $$slots) => {
  const pythonSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Python Programming Course in Kota",
    "description": "Learn Python programming from beginner to intermediate at Bhavya Career Institute, Kota. Covers syntax, data structures, file handling, and real-world projects. Government-certified with placement assistance.",
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
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "SEOHead", $$SEOHead, { "title": "Python Course in Kota | Python Programming Classes — Bhavya Career Institute", "description": "Learn Python programming at Bhavya Career Institute, Kota. Beginner-friendly Python course covering syntax, data structures, file handling & real-world projects. Government-certified. Free demo class available.", "canonical": "https://bhavyacareerinstitute.com/courses/python-course-city", "schema": pythonSchema })}${renderHead()}</head> <body class="bg-[#0a0a0a] text-white overflow-x-hidden selection:bg-white/20"> ${renderComponent($$result, "Cursor", $$Cursor, {})} ${renderComponent($$result, "Navbar", $$Navbar, {})} <main class="w-full pt-40 px-8 min-h-screen container mx-auto"> <h1 class="text-5xl md:text-7xl font-bold mb-6">Python Course in Kota</h1> <p class="text-xl text-white/70 max-w-2xl">Beginner to advanced Python programming — Government-certified at Bhavya Career Institute, Kota.</p> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "D:/Coding Projects/coaching/src/pages/courses/python-course-city.astro", void 0);

const $$file = "D:/Coding Projects/coaching/src/pages/courses/python-course-city.astro";
const $$url = "/courses/python-course-city";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PythonCourseCity,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
