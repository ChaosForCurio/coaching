import { c as createComponent } from './astro-component_BEZRvB6d.mjs';
import 'piccolore';
import { I as renderTemplate, bh as unescapeHTML, _ as addAttribute } from './sequence_Dp-Tbm17.mjs';
import 'clsx';

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
    ogImage = "https://coaching-ts8v.onrender.com/images/og-banner.jpg",
    schema
  } = Astro2.props;
  const schemaString = schema ? JSON.stringify(schema) : null;
  return renderTemplate(_b || (_b = __template(['<!-- Core --><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="theme-color" content="#0a0a0a"><!-- SEO --><title>', '</title><meta name="description"', '><link rel="canonical"', '><!-- Geo tags (local SEO) --><meta name="geo.region" content="IN-RJ"><meta name="geo.placename" content="Kota, Rajasthan"><meta name="geo.position" content="25.2138;75.8648"><meta name="ICBM" content="25.2138, 75.8648"><!-- Open Graph --><meta property="og:type" content="website"><meta property="og:site_name" content="Bhavya Career Institute"><meta property="og:title"', '><meta property="og:description"', '><meta property="og:url"', '><meta property="og:image"', '><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt" content="Bhavya Career Institute — Best Computer Classes in Kota, Rajasthan"><meta property="og:locale" content="en_IN"><!-- Twitter / X Card --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><meta name="twitter:image:alt" content="Bhavya Career Institute — Best Computer Classes in Kota"><!-- Preconnect to fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,700;1,400;1,700&family=Inter:wght@300;400;500;600&family=Outfit:wght@300;400;500;600;700&family=Syne:wght@400;500;600;700;800&display=swap" rel="stylesheet"><!-- Favicon --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><!-- JSON-LD Structured Data -->', '<!-- Microsoft Clarity Analytics --><script type="text/javascript">\n    (function(c,l,a,r,i,t,y){\n        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};\n        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;\n        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);\n    })(window, document, "clarity", "script", "x6pcbe390c");\n<\/script>'])), title, addAttribute(description, "content"), addAttribute(canonical, "href"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(canonical, "content"), addAttribute(ogImage, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(ogImage, "content"), schemaString && renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(schemaString)));
}, "D:/Coding Projects/coaching/src/components/SEOHead.astro", void 0);

const $$Cursor = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "D:/Coding Projects/coaching/src/components/Cursor.astro", void 0);

export { $$SEOHead as $, $$Cursor as a };
