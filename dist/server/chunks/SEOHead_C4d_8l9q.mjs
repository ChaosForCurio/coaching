import { c as createComponent } from './astro-component_CSujqvA2.mjs';
import 'piccolore';
import { a as addAttribute, r as renderTemplate, u as unescapeHTML } from './server_DlCF4DwY.mjs';
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$SEOHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$SEOHead;
  const {
    title,
    description,
    canonical,
    ogImage = "https://bhavyacareerinstitute.com/images/og-banner.jpg",
    schema
  } = Astro2.props;
  const schemaString = schema ? JSON.stringify(schema) : null;
  return renderTemplate`<!-- Core --><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="theme-color" content="#0a0a0a"><!-- SEO --><title>${title}</title><meta name="description"${addAttribute(description, "content")}><link rel="canonical"${addAttribute(canonical, "href")}><!-- Geo tags (local SEO) --><meta name="geo.region" content="IN-RJ"><meta name="geo.placename" content="Kota, Rajasthan"><meta name="geo.position" content="25.2138;75.8648"><meta name="ICBM" content="25.2138, 75.8648"><!-- Open Graph --><meta property="og:type" content="website"><meta property="og:site_name" content="Bhavya Career Institute"><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:url"${addAttribute(canonical, "content")}><meta property="og:image"${addAttribute(ogImage, "content")}><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt" content="Bhavya Career Institute — Best Computer Classes in Kota, Rajasthan"><meta property="og:locale" content="en_IN"><!-- Twitter / X Card --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><meta name="twitter:image"${addAttribute(ogImage, "content")}><meta name="twitter:image:alt" content="Bhavya Career Institute — Best Computer Classes in Kota"><!-- Preconnect to fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,700;1,400;1,700&family=Inter:wght@300;400;500;600&family=Outfit:wght@300;400;500;600;700&family=Syne:wght@400;500;600;700;800&display=swap" rel="stylesheet"><!-- Favicon --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><!-- JSON-LD Structured Data -->${schemaString && renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(schemaString))}`;
}, "D:/Coding Projects/coaching/src/components/SEOHead.astro", void 0);

export { $$SEOHead as $ };
