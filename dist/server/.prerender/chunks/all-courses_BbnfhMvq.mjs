import { c as createComponent, r as renderScript, $ as $$SEOHead, a as $$Navbar, b as $$Footer } from './Footer_Cx4TwuOa.mjs';
import 'piccolore';
import { m as maybeRenderHead, a as addAttribute, r as renderComponent, F as Fragment, b as renderTemplate, u as unescapeHTML, c as renderHead } from './prerender_DwZ5v2Mm.mjs';
import { g as getCollection } from './_astro_content_DsHj1pGf.mjs';
import { $ as $$Cursor } from './Cursor_Bf4joTKF.mjs';
import { $ as $$Courses } from './Courses_CSYTNYsA.mjs';
import 'clsx';

const $$DigitalCourses = createComponent(($$result, $$props, $$slots) => {
  const digitalCourses = [
    { name: "Advanced Excel", domain: "Office Skills" },
    { name: "Microsoft Office Specialist", domain: "Office Skills" },
    { name: "Basic Digital Marketing", domain: "Digital Marketing" },
    { name: "Advanced Digital Marketing", domain: "Digital Marketing" },
    { name: "DTP (Desktop Publishing)", domain: "Graphic Designing" },
    { name: "Basic Graphic Designing", domain: "Graphic Designing" },
    { name: "Advanced Graphic Designing", domain: "Graphic Designing" },
    { name: "Web Development using PHP", domain: "Web Dev & Programming" },
    { name: "Web Design using React", domain: "Web Dev & Programming" },
    { name: "Basic Python Programming", domain: "Web Dev & Programming" },
    { name: "Advanced Python Programming", domain: "Web Dev & Programming" },
    { name: "Spoken English", domain: "Spoken English" }
  ];
  const domainIcons = {
    "Office Skills": '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7h10"/><path d="M7 12h10"/><path d="M7 17h10"/></svg>',
    "Digital Marketing": '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>',
    "Graphic Designing": '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"/><path d="m14 7 3 3"/><path d="M5 6v4"/><path d="M19 14v4"/><path d="M10 2v2"/><path d="M7 8H3"/><path d="M21 16h-4"/><path d="M11 3H9"/></svg>',
    "Web Dev & Programming": '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
    "Spoken English": '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>'
  };
  const domainGradients = {
    "Office Skills": "from-white/10 to-white/5",
    "Digital Marketing": "from-white/10 to-white/5",
    "Graphic Designing": "from-white/10 to-white/5",
    "Web Dev & Programming": "from-white/10 to-white/5",
    "Spoken English": "from-white/10 to-white/5"
  };
  const domainColors = {
    "Office Skills": "text-gray-300 bg-white/10",
    "Digital Marketing": "text-gray-300 bg-white/10",
    "Graphic Designing": "text-gray-300 bg-white/10",
    "Web Dev & Programming": "text-gray-300 bg-white/10",
    "Spoken English": "text-gray-300 bg-white/10"
  };
  return renderTemplate`${maybeRenderHead()}<section id="digital-courses" class="py-32 bg-[#0a0a0a] border-t border-white/20 relative overflow-hidden"> <!-- Subtle background glow --> <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/[0.02] blur-[120px] rounded-full pointer-events-none"></div> <div class="container mx-auto px-8 relative z-10"> <div class="flex flex-col md:flex-row justify-between items-start mb-16"> <div> <span class="text-[10px] uppercase tracking-[0.5em] text-white/30">Bhavya Computer Classes</span> <h2 class="text-5xl md:text-8xl italic mt-2">Digital<br>Courses</h2> </div> <p class="max-w-md text-white/40 mt-8 md:mt-0 font-light leading-relaxed">
Industry-ready digital skills for the modern workplace. On RSCIT admission — get <span class="text-white font-semibold">2 Digital Courses FREE</span>.
</p> </div> <!-- NIOS/Distance Courses Banner --> <div data-reveal="up" class="mb-16 p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md opacity-0 translate-y-8 transition-all duration-800 ease-out hover:border-white/20 hover:bg-white/[0.04]"> <div class="flex items-center gap-3 mb-4"> <div class="w-2 h-2 rounded-full bg-white animate-pulse"></div> <p class="text-[11px] font-bold uppercase tracking-[0.4em] text-white/50">After 12th / Graduation — Distance Education</p> </div> <p class="text-white/90 text-base md:text-lg leading-relaxed font-medium mb-6">
B.A., B.COM, B.Sc, M.A., M.Sc., MBA, BCA, MCA, PGDCA, ECCE, MSW, D.LIS, B.LIS, NTT
</p> <div class="h-px w-full bg-gradient-to-r from-white/20 to-transparent mb-6"></div> <p class="text-[10px] uppercase tracking-[0.4em] text-white/40 mb-2">Also available</p> <p class="text-white/70 text-sm font-semibold">NIOS / BOSSE — 10th & 12th</p> </div> <!-- Digital Courses Grid --> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" id="digital-courses-grid"> ${digitalCourses.map((course, idx) => renderTemplate`<div data-reveal="zoom"${addAttribute(`transition-delay: ${idx % 4 * 100}ms;`, "style")}${addAttribute(`digital-course-card relative p-6 rounded-2xl border border-white/5 bg-gradient-to-br ${domainGradients[course.domain]} backdrop-blur-sm hover:border-white/20 transition-all duration-500 group opacity-0 scale-95 duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,255,255,0.03)] cursor-pointer flex flex-col justify-between min-h-[140px]`, "class")}${addAttribute(course.domain, "data-domain")}> <!-- Domain Icon & Badge --> <div class="flex justify-between items-start mb-4"> <div${addAttribute(`p-2 rounded-lg bg-white/5 border border-white/10 text-white/60 group-hover:text-white transition-colors`, "class")}> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(domainIcons[course.domain])}` })} </div> <span${addAttribute(`text-[9px] uppercase tracking-wider px-2.5 py-1 rounded-full font-bold ${domainColors[course.domain]}`, "class")}> ${course.domain} </span> </div> <!-- Course Name --> <div> <h3 class="text-lg font-semibold text-white/80 group-hover:text-white transition-colors leading-tight"> ${course.name} </h3> </div> <!-- Hover arrow indicator --> <div class="absolute bottom-6 right-6 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"> <svg class="w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg> </div> </div>`)} </div> </div> </section>`;
}, "D:/Coding Projects/coaching/src/components/DigitalCourses.astro", void 0);

const $$Syllabus = createComponent(($$result, $$props, $$slots) => {
  const PATH = "M 200 80 C 350 80, 650 200, 720 380 C 790 560, 300 560, 280 740 C 260 920, 720 920, 760 1100 C 800 1280, 420 1330, 500 1450";
  const milestones = [
    {
      id: "01",
      stage: "Foundation",
      title: "Computer Basics & RSCIT",
      desc: "Start your journey with government-certified RSCIT — digital literacy, MS Office, internet, and e-governance tools.",
      cx: 200,
      cy: 80,
      side: "right",
      threshold: 0
    },
    {
      id: "02",
      stage: "Skills",
      title: "Tally & Accounting",
      desc: "Master Tally ERP with practical accounting — GST, invoicing, ledgers, and financial reporting for business readiness.",
      cx: 720,
      cy: 380,
      side: "left",
      threshold: 0.22
    },
    {
      id: "03",
      stage: "Digital",
      title: "Graphic Design & Marketing",
      desc: "Learn Photoshop, CorelDRAW, DTP, and digital marketing strategies including SEO, social media, and paid campaigns.",
      cx: 280,
      cy: 740,
      side: "right",
      threshold: 0.46
    },
    {
      id: "04",
      stage: "Advanced",
      title: "Web Dev & Python",
      desc: "Build dynamic websites with PHP and React. Write automation scripts with Basic and Advanced Python programming.",
      cx: 760,
      cy: 1100,
      side: "left",
      threshold: 0.68
    },
    {
      id: "05",
      stage: "Career Ready",
      title: "Distance Diploma & Typing",
      desc: "Enroll in UGC-recognized online degrees (BA, BCom, MBA, BCA…) and master Hindi/English typing for government jobs.",
      cx: 500,
      cy: 1450,
      side: "right",
      threshold: 0.9
    }
  ];
  const CONTAINER_H = 1600;
  return renderTemplate`${maybeRenderHead()}<section id="syllabus-container" class="py-60 bg-[#050505] relative overflow-hidden"> <!-- Ghost watermark --> <div class="absolute top-20 left-10 opacity-[0.02] select-none pointer-events-none"> <h2 class="text-[20vw] leading-none font-black italic">GROW</h2> </div> <div class="container mx-auto px-8 relative z-10"> <!-- Section header --> <div class="max-w-4xl mb-32"> <span data-reveal="up" class="text-xs uppercase tracking-[0.8em] text-white/30 inline-block opacity-0 translate-y-4 transition-all duration-600 ease-out">
Your Learning Journey
</span> <h2 data-reveal="up" style="transition-delay: 100ms;" class="text-6xl md:text-9xl italic mt-4 opacity-0 translate-y-6 transition-all duration-800 ease-out">
The Path to
<br>
Career Success
</h2> </div> <!-- Desktop interactive curved timeline --> <div class="hidden md:block relative w-full"${addAttribute(`height: ${CONTAINER_H}px;`, "style")}> <!-- SVG layer --> <svg class="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 1500" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg"> <defs> <filter id="dotGlow" x="-150%" y="-150%" width="400%" height="400%"> <feGaussianBlur stdDeviation="5" result="blur"></feGaussianBlur> <feMerge> <feMergeNode in="blur"></feMergeNode> <feMergeNode in="SourceGraphic"></feMergeNode> </feMerge> </filter> <filter id="strokeGlow" x="-10%" y="-10%" width="120%" height="120%"> <feGaussianBlur stdDeviation="2.5" result="blur"></feGaussianBlur> <feMerge> <feMergeNode in="blur"></feMergeNode> <feMergeNode in="SourceGraphic"></feMergeNode> </feMerge> </filter> <linearGradient id="strokeGrad" x1="0" y1="0" x2="0" y2="1"> <stop offset="0%" stop-color="rgba(255,255,255,0.35)"></stop> <stop offset="60%" stop-color="rgba(255,255,255,0.75)"></stop> <stop offset="100%" stop-color="rgba(255,255,255,1)"></stop> </linearGradient> </defs> <!-- Ghost track --> <path${addAttribute(PATH, "d")} stroke="rgba(255,255,255,0.06)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <!-- Animated draw stroke --> <path id="animated-path"${addAttribute(PATH, "d")} stroke="url(#strokeGrad)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" filter="url(#strokeGlow)" class="transition-opacity duration-300"${addAttribute({ opacity: 0 }, "style")}></path> ${milestones.map((m) => renderTemplate`<g class="milestone-dot"${addAttribute(m.threshold, "data-threshold")}${addAttribute({ opacity: 0, transition: "opacity 0.5s" }, "style")}> <circle${addAttribute(m.cx, "cx")}${addAttribute(m.cy, "cy")} r="22" fill="none" stroke="white" stroke-width="0.8" class="milestone-ring"></circle> <circle${addAttribute(m.cx, "cx")}${addAttribute(m.cy, "cy")} r="7" fill="white" filter="url(#dotGlow)"></circle> </g>`)} </svg> <!-- Milestone cards --> ${milestones.map((m) => renderTemplate`<div class="milestone-card absolute pointer-events-none"${addAttribute(m.threshold, "data-threshold")}${addAttribute(m.side, "data-side")}${addAttribute(`left: ${m.cx / 1e3 * 100}%; top: ${m.cy / 1500 * CONTAINER_H}px; transform: ${m.side === "right" ? "translate(24px, -50%)" : "translate(calc(-100% - 24px), -50%)"};`, "style")}> <div${addAttribute(`milestone-card-inner w-[300px] p-6 border border-white/10 bg-black/70 backdrop-blur-2xl shadow-2xl transition-all duration-700 ease-out ${m.side === "left" ? "text-right" : "text-left"}`, "class")}${addAttribute(`opacity: 0; transform: translateX(${m.side === "right" ? "-28px" : "28px"});`, "style")}> <div${addAttribute(`flex items-center gap-3 mb-2 ${m.side === "left" ? "flex-row-reverse" : "flex-row"}`, "class")}> <span class="text-[10px] font-black px-2 py-0.5 bg-white text-black"> ${m.id} </span> <span class="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold"> ${m.stage} </span> </div> <h4 class="text-xl md:text-2xl font-bold mb-3">${m.title}</h4> <p class="text-[11px] md:text-xs text-white/60 leading-relaxed font-light"> ${m.desc} </p> </div> </div>`)} </div> <!-- Mobile linear vertical timeline --> <div class="block md:hidden relative border-l border-white/10 pl-6 ml-2 space-y-12 mt-12"> ${milestones.map((m) => renderTemplate`<div data-reveal="left" class="relative opacity-0 -translate-x-5 transition-all duration-500 ease-out"> <div class="absolute -left-[31px] top-1.5 w-4 h-4 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div> <div class="p-6 border border-white/10 bg-black/40 backdrop-blur-md"> <div class="flex items-center gap-3 mb-2"> <span class="text-[10px] font-black px-2 py-0.5 bg-white text-black"> ${m.id} </span> <span class="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold"> ${m.stage} </span> </div> <h4 class="text-xl font-bold mb-3">${m.title}</h4> <p class="text-xs text-white/60 leading-relaxed font-light"> ${m.desc} </p> </div> </div>`)} </div> </div> <div class="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white/5 to-transparent pointer-events-none"></div> </section> ${renderScript($$result, "D:/Coding Projects/coaching/src/components/Syllabus.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Coding Projects/coaching/src/components/Syllabus.astro", void 0);

const prerender = true;
const $$AllCourses = createComponent(async ($$result, $$props, $$slots) => {
  const allCourses = await getCollection("courses");
  const coursesSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemList",
        name: "All Computer Courses at Bhavya Computer Classes, Kota",
        url: "https://www.bhavyacomputerclasses.com/all-courses",
        itemListElement: allCourses.map((course, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "Course",
            name: course.data.title,
            description: course.data.description,
            provider: {
              "@type": "Organization",
              name: "Bhavya Computer Classes",
              url: "https://www.bhavyacomputerclasses.com"
            },
            hasCourseInstance: {
              "@type": "CourseInstance",
              courseMode: "Onsite",
              location: {
                "@type": "Place",
                name: "Bhavya Computer Classes, Kota, Rajasthan"
              }
            }
          }
        }))
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.bhavyacomputerclasses.com/"
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "All Courses",
            item: "https://www.bhavyacomputerclasses.com/all-courses"
          }
        ]
      }
    ]
  };
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "SEOHead", $$SEOHead, { "title": "All Computer Courses in Kota | Bhavya Computer Classes", "description": "Explore all government-certified computer courses in Kota at Bhavya Computer Classes — DCA, Tally Prime with GST, Python, Web Development, RSCIT, Digital Marketing, Graphic Design & Advanced Excel. Placement assistance provided.", "canonical": "https://www.bhavyacomputerclasses.com/all-courses", "schema": coursesSchema })}${renderHead()}</head> <body class="bg-[#0a0a0a] text-white overflow-x-hidden selection:bg-white/20"> ${renderComponent($$result, "Cursor", $$Cursor, {})} ${renderComponent($$result, "Navbar", $$Navbar, {})} <main class="w-full pt-24 relative"> ${renderComponent($$result, "Courses", $$Courses, {})} ${renderComponent($$result, "DigitalCourses", $$DigitalCourses, {})} ${renderComponent($$result, "Syllabus", $$Syllabus, {})} </main> ${renderComponent($$result, "Footer", $$Footer, {})} ${renderScript($$result, "D:/Coding Projects/coaching/src/pages/all-courses.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "D:/Coding Projects/coaching/src/pages/all-courses.astro", void 0);

const $$file = "D:/Coding Projects/coaching/src/pages/all-courses.astro";
const $$url = "/all-courses";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AllCourses,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
