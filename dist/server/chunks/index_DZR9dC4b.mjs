import { c as createComponent } from './astro-component_BMLbfkfc.mjs';
import 'piccolore';
import { m as maybeRenderHead, r as renderTemplate, c as renderComponent, b as renderHead } from './server_DWfAt-kb.mjs';
import { r as renderScript } from './script_53GNC0s8.mjs';
import { $ as $$Navbar } from './global_BBTM17H_.mjs';
import { $ as $$SEOHead } from './SEOHead_DIZtxmOB.mjs';
import { $ as $$Cursor } from './Cursor_BGDkr27e.mjs';
import 'clsx';
import { $ as $$Footer } from './Footer_jJjY_bLQ.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="hero-section" class="relative w-full bg-[#0a0a0a] overflow-hidden flex flex-col items-center select-none" style="min-height: clamp(560px, 100svh, 100svh);" data-astro-cid-bbe6dxrz> <!-- Visual Background Image with Gradients & Grid Overlay --> <div class="absolute inset-0 z-0" data-astro-cid-bbe6dxrz> <!-- Background image — responsive position shifts focus on portrait/mobile --> <div class="absolute inset-0 opacity-90 hero-bg-parallax" style="
        background-image: url('/images/hero-bg.jpg');
        background-size: cover;
        background-position: center top;
        background-repeat: no-repeat;
        transform: scale(1.04);
        transform-origin: center center;
        will-change: transform;
      " data-astro-cid-bbe6dxrz></div> <!-- Top vignette — slightly stronger on mobile where the crop is tighter --> <div class="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/40 via-transparent to-[#0a0a0a]/60" data-astro-cid-bbe6dxrz></div> <!-- Bottom fade — shorter on mobile, taller on desktop --> <div class="absolute inset-x-0 bottom-0 h-24 md:h-40 bg-gradient-to-t from-[#0a0a0a] to-transparent" data-astro-cid-bbe6dxrz></div> <!-- Left & right edge vignettes for wide screens --> <div class="absolute inset-y-0 left-0 w-16 md:w-24 bg-gradient-to-r from-[#0a0a0a]/30 to-transparent hidden sm:block" data-astro-cid-bbe6dxrz></div> <div class="absolute inset-y-0 right-0 w-16 md:w-24 bg-gradient-to-l from-[#0a0a0a]/30 to-transparent hidden sm:block" data-astro-cid-bbe6dxrz></div> <!-- Soft, premium dynamic light orbs --> <div class="absolute inset-0 pointer-events-none hero-light-orbs" data-astro-cid-bbe6dxrz></div> </div> <!-- Hero Content --> <div class="relative z-10 flex flex-col items-center justify-center flex-1 w-full text-center px-4 sm:px-6 md:px-8 max-w-7xl mx-auto" style="min-height: inherit;" data-astro-cid-bbe6dxrz> <!-- All hero text, badges, and titles removed as requested --> </div> </section>  ${renderScript($$result, "D:/Coding Projects/coaching/src/components/Hero.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Coding Projects/coaching/src/components/Hero.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["EducationalOrganization", "LocalBusiness"],
        "@id": "https://bhavyacareerinstitute.com/#organization",
        "name": "Bhavya Career Institute",
        "alternateName": "BCI Kota",
        "url": "https://bhavyacareerinstitute.com",
        "logo": "https://bhavyacareerinstitute.com/images/logo.png",
        "image": "https://bhavyacareerinstitute.com/images/og-banner.jpg",
        "description": "Government-certified computer training institute in Kota, Rajasthan offering DCA, Tally Prime with GST, Python, Web Development, RSCIT, Digital Marketing, and Graphic Design courses with placement assistance.",
        "foundingDate": "2010",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "3-N-25, Mahaveer Nagar Extension, Near Ganesh Ji Mandir",
          "addressLocality": "Kota",
          "addressRegion": "Rajasthan",
          "postalCode": "324005",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "25.2138",
          "longitude": "75.8648"
        },
        "telephone": ["+919694932391", "+919694025249"],
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "09:00",
            "closes": "19:00"
          }
        ],
        "priceRange": "₹₹",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "200",
          "bestRating": "5"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Computer & Digital Skill Courses",
          "itemListElement": [
            { "@type": "Course", "name": "DCA – Diploma in Computer Applications", "provider": { "@type": "Organization", "name": "Bhavya Career Institute" } },
            { "@type": "Course", "name": "Tally Prime with GST", "provider": { "@type": "Organization", "name": "Bhavya Career Institute" } },
            { "@type": "Course", "name": "Advanced Excel", "provider": { "@type": "Organization", "name": "Bhavya Career Institute" } },
            { "@type": "Course", "name": "Python Programming", "provider": { "@type": "Organization", "name": "Bhavya Career Institute" } },
            { "@type": "Course", "name": "Web Designing & Development", "provider": { "@type": "Organization", "name": "Bhavya Career Institute" } },
            { "@type": "Course", "name": "RSCIT", "provider": { "@type": "Organization", "name": "Bhavya Career Institute" } },
            { "@type": "Course", "name": "Digital Marketing", "provider": { "@type": "Organization", "name": "Bhavya Career Institute" } },
            { "@type": "Course", "name": "Graphic Design", "provider": { "@type": "Organization", "name": "Bhavya Career Institute" } }
          ]
        },
        "sameAs": [
          "https://www.facebook.com/bhavyacareerinstitute",
          "https://www.instagram.com/bhavyacareerinstitute"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://bhavyacareerinstitute.com/#website",
        "url": "https://bhavyacareerinstitute.com",
        "name": "Bhavya Career Institute",
        "publisher": { "@id": "https://bhavyacareerinstitute.com/#organization" }
      }
    ]
  };
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "SEOHead", $$SEOHead, { "title": "Bhavya Career Institute — Best Computer Classes in Kota, Rajasthan", "description": "Bhavya Career Institute — Kota's top government-certified computer training institute. Learn DCA, Tally Prime, Advanced Excel, Python, Web Development, RSCIT & Digital Marketing. 100% placement assistance. Est. 2010.", "canonical": "https://bhavyacareerinstitute.com/", "schema": organizationSchema })}<!-- Preload hero image for LCP performance --><link rel="preload" as="image" href="/images/hero-bg.jpg">${renderHead()}</head> <body class="bg-[#0a0a0a] text-white overflow-x-hidden selection:bg-white/20"> ${renderComponent($$result, "Cursor", $$Cursor, {})} ${renderComponent($$result, "Navbar", $$Navbar, {})} <main class="w-full"> <!-- Visually hidden h1 for SEO — the hero image is the visual focus --> <h1 class="sr-only">Best Computer Classes in Kota — Bhavya Career Institute</h1> ${renderComponent($$result, "Hero", $$Hero, {})} </main> ${renderComponent($$result, "Footer", $$Footer, {})} ${renderScript($$result, "D:/Coding Projects/coaching/src/pages/index.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "D:/Coding Projects/coaching/src/pages/index.astro", void 0);

const $$file = "D:/Coding Projects/coaching/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
