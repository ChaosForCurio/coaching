import { c as createComponent } from './astro-component_CSujqvA2.mjs';
import 'piccolore';
import { c as renderComponent, b as renderHead, r as renderTemplate } from './server_DlCF4DwY.mjs';
import { $ as $$Navbar } from './global_Co-RNAAp.mjs';
import { $ as $$SEOHead } from './SEOHead_C4d_8l9q.mjs';
import { $ as $$Cursor } from './Cursor_Dg-DS7AT.mjs';
import { $ as $$Footer } from './Footer_C45aK47Z.mjs';

const $$DcaCourseCity = createComponent(($$result, $$props, $$slots) => {
  const dcaSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "DCA – Diploma in Computer Applications in Kota",
    "description": "Government-certified 1-year diploma in computer applications covering MS Office, Internet, HTML, Tally, and more. Offered at Bhavya Career Institute, Kota, Rajasthan with placement assistance.",
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
          "streetAddress": "3-N-25, Mahaveer Nagar Extension",
          "addressLocality": "Kota",
          "addressRegion": "Rajasthan",
          "postalCode": "324005",
          "addressCountry": "IN"
        }
      }
    }
  };
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "SEOHead", $$SEOHead, { "title": "DCA Course in Kota | Diploma in Computer Applications — Bhavya Career Institute", "description": "Join DCA (Diploma in Computer Applications) at Bhavya Career Institute, Kota. Government-certified 1-year program covering MS Office, Tally, Internet, HTML & more. 100% placement assistance. Free demo class available.", "canonical": "https://bhavyacareerinstitute.com/courses/dca-course-city", "schema": dcaSchema })}${renderHead()}</head> <body class="bg-[#0a0a0a] text-white overflow-x-hidden selection:bg-white/20"> ${renderComponent($$result, "Cursor", $$Cursor, {})} ${renderComponent($$result, "Navbar", $$Navbar, {})} <main class="w-full pt-40 px-8 min-h-screen container mx-auto"> <h1 class="text-5xl md:text-7xl font-bold mb-6">DCA Course in Kota</h1> <p class="text-xl text-white/70 max-w-2xl">Diploma in Computer Applications — Government-certified, job-ready. Enroll at Bhavya Career Institute, Kota.</p> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "D:/Coding Projects/coaching/src/pages/courses/dca-course-city.astro", void 0);

const $$file = "D:/Coding Projects/coaching/src/pages/courses/dca-course-city.astro";
const $$url = "/courses/dca-course-city";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$DcaCourseCity,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
