import { c as createComponent } from './astro-component_CSujqvA2.mjs';
import 'piccolore';
import { c as renderComponent, b as renderHead, r as renderTemplate } from './server_DlCF4DwY.mjs';
import { r as renderScript } from './script_DgUpCSqV.mjs';
import { $ as $$Navbar } from './global_Co-RNAAp.mjs';
import { $ as $$SEOHead } from './SEOHead_C4d_8l9q.mjs';
import { $ as $$Cursor } from './Cursor_Dg-DS7AT.mjs';
import { $ as $$Footer } from './Footer_C45aK47Z.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const contactSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": "https://bhavyacareerinstitute.com/contact",
        name: "Contact Bhavya Career Institute",
        url: "https://bhavyacareerinstitute.com/contact",
        description: "Get in touch with Bhavya Career Institute in Kota for course enquiries, admissions, and support.",
        mainEntity: {
          "@type": "LocalBusiness",
          name: "Bhavya Career Institute",
          telephone: ["+919694932391", "+919694025249"],
          address: {
            "@type": "PostalAddress",
            streetAddress: "3-N-25, Mahaveer Nagar Extension, Near Ganesh Ji Mandir",
            addressLocality: "Kota",
            addressRegion: "Rajasthan",
            postalCode: "324005",
            addressCountry: "IN"
          }
        }
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://bhavyacareerinstitute.com/"
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Contact",
            item: "https://bhavyacareerinstitute.com/contact"
          }
        ]
      }
    ]
  };
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "SEOHead", $$SEOHead, { "title": "Contact Us | Bhavya Career Institute — Kota, Rajasthan", "description": "Get in touch with Bhavya Career Institute in Kota. Call +91 96949 32391, WhatsApp us, or fill out our form to enquire about DCA, Tally, Python, Web Development, RSCIT courses and free demo classes.", "canonical": "https://bhavyacareerinstitute.com/contact", "schema": contactSchema })}${renderHead()}</head> <body class="bg-[#0a0a0a] text-white overflow-x-hidden selection:bg-white/20"> ${renderComponent($$result, "Cursor", $$Cursor, {})} ${renderComponent($$result, "Navbar", $$Navbar, {})} <main class="w-full pt-24"> ${renderComponent($$result, "Contact", Contact, {})} </main> ${renderComponent($$result, "Footer", $$Footer, {})} ${renderScript($$result, "D:/Coding Projects/coaching/src/pages/contact.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "D:/Coding Projects/coaching/src/pages/contact.astro", void 0);

const $$file = "D:/Coding Projects/coaching/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
