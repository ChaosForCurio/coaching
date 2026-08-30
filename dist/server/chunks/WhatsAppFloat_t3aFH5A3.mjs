globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_BlHCHKq7.mjs";
import { K as renderTemplate, b6 as unescapeHTML, w as maybeRenderHead, a0 as addAttribute } from "./sequence_DmJMvBqm.mjs";
import { r as renderScript } from "./global_CxnhDMbw.mjs";
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a, _b;
const $$SEOHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$SEOHead;
  const {
    title,
    description,
    canonical,
    ogImage = "https://www.bhavyacomputerclasses.com/images/og-banner.jpg",
    schema,
    keywords
  } = Astro2.props;
  const schemaString = schema ? JSON.stringify(schema) : null;
  return renderTemplate(_b || (_b = __template(['<!-- Core --><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="theme-color" content="#0a0a0a"><!-- SEO --><title>', '</title><meta name="description"', ">", '<link rel="canonical"', '><!-- Geo tags (local SEO) --><meta name="geo.region" content="IN-RJ"><meta name="geo.placename" content="Kota, Rajasthan"><meta name="geo.position" content="25.2138;75.8648"><meta name="ICBM" content="25.2138, 75.8648"><!-- Open Graph --><meta property="og:type" content="website"><meta property="og:site_name" content="Bhavya Computer Classes"><meta property="og:title"', '><meta property="og:description"', '><meta property="og:url"', '><meta property="og:image"', '><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt" content="Bhavya Computer Classes — Best Computer Classes in Kota, Rajasthan"><meta property="og:locale" content="en_IN"><!-- Twitter / X Card --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', `><meta name="twitter:image:alt" content="Bhavya Computer Classes — Best Computer Classes in Kota"><!-- Preconnect to fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,700;1,400;1,700&family=Inter:wght@300;400;500;600&family=Outfit:wght@300;400;500;600;700&family=Syne:wght@400;500;600;700;800&display=swap"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,700;1,400;1,700&family=Inter:wght@300;400;500;600&family=Outfit:wght@300;400;500;600;700&family=Syne:wght@400;500;600;700;800&display=swap" media="print" onload="this.media='all'">`, '<noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,700;1,400;1,700&family=Inter:wght@300;400;500;600&family=Outfit:wght@300;400;500;600;700&family=Syne:wght@400;500;600;700;800&display=swap"></noscript><!-- Favicon --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><!-- JSON-LD Structured Data -->', `<!-- Microsoft Clarity Analytics --><script type="text/javascript">
  (function (c, l, a, r, i, t, y) {
    c[a] =
      c[a] ||
      function () {
        (c[a].q = c[a].q || []).push(arguments);
      };
    t = l.createElement(r);
    t.async = 1;
    t.src = 'https://www.clarity.ms/tag/' + i;
    y = l.getElementsByTagName(r)[0];
    y.parentNode.insertBefore(t, y);
  })(window, document, 'clarity', 'script', 'x6pcbe390c');
<\/script>`])), title, addAttribute(description, "content"), keywords && renderTemplate`<meta name="keywords"${addAttribute(keywords, "content")}>`, addAttribute(canonical, "href"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(canonical, "content"), addAttribute(ogImage, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(ogImage, "content"), maybeRenderHead(), schemaString && renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(schemaString)));
}, "D:/Coding Projects/coaching/src/components/SEOHead.astro", void 0);
const $$WhatsAppFloat = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Floating WhatsApp Button -->${maybeRenderHead()}<a id="whatsapp-fab" href="https://wa.me/919694932391?text=Hi%2C%20I%27m%20interested%20in%20your%20computer%20courses%20at%20Bhavya%20Computer%20Classes%2C%20Kota." target="_blank" rel="noopener noreferrer" aria-label="Chat with us on WhatsApp" class="whatsapp-fab" data-astro-cid-y4hhiakm> <!-- Pulse rings --> <span class="fab-ring fab-ring-1" data-astro-cid-y4hhiakm></span> <span class="fab-ring fab-ring-2" data-astro-cid-y4hhiakm></span> <!-- Icon --> <span class="fab-icon" data-astro-cid-y4hhiakm> <svg viewBox="0 0 24 24" fill="white" width="26" height="26" aria-hidden="true" data-astro-cid-y4hhiakm> <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 2.01 14.069.987 11.48.987 6.045.987 1.62 5.357 1.616 10.787c-.001 1.748.47 3.447 1.36 4.966l-1.001 3.655 3.748-.973.334.218zM18.82 15.111c-.37-.185-2.18-.897-2.52-1.021-.34-.124-.588-.185-.836.186-.248.37-.958 1.206-1.17 1.454-.216.247-.433.279-.803.093-.37-.185-1.56-.57-2.971-1.829-1.09-.973-1.826-2.176-2.04-2.547-.217-.37-.023-.57.162-.754.166-.165.37-.432.556-.65.186-.216.248-.37.372-.617.124-.247.062-.463-.03-.649-.093-.185-.837-2.006-1.146-2.748-.3-.721-.606-.624-.836-.636-.216-.011-.463-.014-.71-.014-.248 0-.65.093-.99.463-.34.37-1.3 1.266-1.3 3.087 0 1.82 1.33 3.582 1.516 3.829.186.247 2.612 3.987 6.326 5.586.883.38 1.572.607 2.11.779.887.282 1.696.242 2.335.146.711-.107 2.18-.89 2.49-1.752.31-.862.31-1.603.217-1.752-.093-.149-.34-.241-.71-.426z" data-astro-cid-y4hhiakm></path> </svg> </span> <!-- Tooltip label --> <span class="fab-tooltip" aria-hidden="true" data-astro-cid-y4hhiakm>Chat with us!</span> </a>  ${renderScript($$result, "D:/Coding Projects/coaching/src/components/WhatsAppFloat.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Coding Projects/coaching/src/components/WhatsAppFloat.astro", void 0);
export {
  $$SEOHead as $,
  $$WhatsAppFloat as a
};
