import { c as createComponent, $ as $$SEOHead, a as $$Navbar, b as $$Footer } from './Footer_Cx4TwuOa.mjs';
import 'piccolore';
import { r as renderComponent, c as renderHead, b as renderTemplate, a as addAttribute } from './prerender_DwZ5v2Mm.mjs';
import { g as getCollection, r as renderEntry } from './_astro_content_DsHj1pGf.mjs';
import { a as generateCourseSchema, b as generateFAQSchema } from './schemaGenerator_CSLNaekr.mjs';

const prerender = true;
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
  const canonical = `https://www.bhavyacomputerclasses.com/courses/${entry.id}`;
  const baseSchema = generateCourseSchema(
    entry.data.title,
    entry.data.description ?? `Learn ${entry.data.title} at Bhavya Computer Classes.`,
    canonical
  );
  const combinedSchema = entry.data.faqs ? [...baseSchema, generateFAQSchema(entry.data.faqs)] : baseSchema;
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "SEOHead", $$SEOHead, { "title": `${entry.data.title} in Kota | Bhavya Computer Classes`, "description": entry.data.description ?? `Learn ${entry.data.title} at Bhavya Computer Classes, Kota. Government-certified course with placement assistance. Enroll today.`, "canonical": canonical, "schema": combinedSchema })}${renderHead()}</head> <body class="bg-[#0a0a0a] text-white overflow-x-hidden selection:bg-white/20"> ${renderComponent($$result, "Navbar", $$Navbar, {})} <main class="w-full max-w-4xl mx-auto px-4 py-24 min-h-screen"> <div class="prose prose-invert prose-lg max-w-none"> <h1 class="text-4xl font-bold mb-4">${entry.data.title}</h1> <div class="flex gap-4 text-gray-400 mb-8"> ${entry.data.duration && renderTemplate`<span>⏱️ ${entry.data.duration}</span>`} ${entry.data.level && renderTemplate`<span>📊 ${entry.data.level}</span>`} </div> <div class="bg-gray-900/50 p-6 rounded-lg border border-gray-800 mb-12"> ${renderComponent($$result, "Content", Content, {})} </div> <!-- Dynamic Curriculum Table --> ${entry.data.curriculum && entry.data.curriculum.length > 0 && renderTemplate`<div class="mt-16 mb-12"> <h2 class="text-3xl font-bold mb-6 text-white border-b border-gray-800 pb-4">
Course Curriculum
</h2> <div class="overflow-hidden rounded-xl border border-gray-800 bg-gray-900/40"> <table class="w-full text-left border-collapse"> <thead class="bg-gray-800/80 text-gray-200"> <tr> <th scope="col" class="p-4 border-b border-gray-700 font-semibold w-1/3">
Module
</th> <th scope="col" class="p-4 border-b border-gray-700 font-semibold">
Topics Covered
</th> </tr> </thead> <tbody class="text-gray-300 divide-y divide-gray-800/50"> ${entry.data.curriculum.map((item, index) => renderTemplate`<tr${addAttribute(`hover:bg-gray-800/40 transition-colors ${index % 2 === 0 ? "" : "bg-gray-800/10"}`, "class")}> <td class="p-4 font-medium text-white align-top"> ${item.module} </td> <td class="p-4"> <ul class="list-disc list-inside space-y-1"> ${item.topics.map((topic) => renderTemplate`<li>${topic}</li>`)} </ul> </td> </tr>`)} </tbody> </table> </div> </div>`} <!-- Dynamic FAQ Section --> ${entry.data.faqs && entry.data.faqs.length > 0 && renderTemplate`<div class="mt-16 mb-8"> <h2 class="text-3xl font-bold mb-6 text-white border-b border-gray-800 pb-4">
Frequently Asked Questions
</h2> <dl class="space-y-6"> ${entry.data.faqs.map((faq) => renderTemplate`<div class="bg-gray-900/30 p-6 rounded-lg border border-gray-800/50 hover:border-emerald-500/30 transition-colors"> <dt class="text-lg font-semibold text-white mb-2"> ${faq.question} </dt> <dd class="text-gray-400">${faq.answer}</dd> </div>`)} </dl> </div>`} </div> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "D:/Coding Projects/coaching/src/pages/courses/[...slug].astro", void 0);

const $$file = "D:/Coding Projects/coaching/src/pages/courses/[...slug].astro";
const $$url = "/courses/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
