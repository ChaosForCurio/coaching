import { c as createComponent } from './astro-component_CSujqvA2.mjs';
import 'piccolore';
import { c as renderComponent, b as renderHead, r as renderTemplate } from './server_DlCF4DwY.mjs';
import { $ as $$Navbar } from './global_Co-RNAAp.mjs';
import { $ as $$SEOHead } from './SEOHead_C4d_8l9q.mjs';
import { $ as $$Cursor } from './Cursor_Dg-DS7AT.mjs';
import { $ as $$Footer } from './Footer_C45aK47Z.mjs';

const $$WebDesigningCourseCity = createComponent(($$result, $$props, $$slots) => {
  const webSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Web Designing Course in Kota",
    "description": "Learn HTML, CSS, JavaScript and modern web design at Bhavya Career Institute, Kota. Build professional websites and launch a career in web development. Government-certified with placement assistance.",
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
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "SEOHead", $$SEOHead, { "title": "Web Designing Course in Kota | HTML CSS JavaScript Classes — Bhavya Career Institute", "description": "Learn Web Designing & Development at Bhavya Career Institute, Kota. Master HTML, CSS, JavaScript and build professional websites. Government-certified course with placement assistance. Free demo class available.", "canonical": "https://bhavyacareerinstitute.com/courses/web-designing-course-city", "schema": webSchema })}${renderHead()}</head> <body class="bg-[#0a0a0a] text-white overflow-x-hidden selection:bg-white/20"> ${renderComponent($$result, "Cursor", $$Cursor, {})} ${renderComponent($$result, "Navbar", $$Navbar, {})} <main class="w-full pt-40 px-8 min-h-screen container mx-auto"> <h1 class="text-5xl md:text-7xl font-bold mb-6">Web Designing Course in Kota</h1> <p class="text-xl text-white/70 max-w-2xl">HTML, CSS, JavaScript & modern web design — Government-certified at Bhavya Career Institute, Kota.</p> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "D:/Coding Projects/coaching/src/pages/courses/web-designing-course-city.astro", void 0);

const $$file = "D:/Coding Projects/coaching/src/pages/courses/web-designing-course-city.astro";
const $$url = "/courses/web-designing-course-city";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$WebDesigningCourseCity,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
