import { c as createComponent } from './astro-component_CcqMMwb0.mjs';
import 'piccolore';
import { m as maybeRenderHead, a as addAttribute, c as renderComponent, d as Fragment, r as renderTemplate, u as unescapeHTML, b as renderHead } from './server_CbJrX1FR.mjs';
import { r as renderScript, $ as $$Navbar } from './global_DzgTv7pz.mjs';
import { $ as $$SEOHead } from './SEOHead_CX8K_Fef.mjs';
import { $ as $$Cursor } from './Cursor_DKqi31Rs.mjs';
import 'clsx';
import { $ as $$Footer } from './Footer_CRyMzkYy.mjs';

const $$Courses = createComponent(($$result, $$props, $$slots) => {
  const courses = [
    {
      num: "01",
      title: "RSCIT",
      category: "Government Certified",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-[18px] h-[18px]"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>',
      image: "/images/ai-course.jpg",
      description: "Rajasthan State Certificate in Information Technology. Recognized by Govt. of Rajasthan. Includes 2 Digital Courses FREE on admission.",
      badge: "2 Courses FREE",
      accent: "#f59e0b"
    },
    {
      num: "02",
      title: "Tally & Accounting",
      category: "Finance & Accounts",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-[18px] h-[18px]"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>',
      image: "/images/hero-bg.jpg",
      description: "Complete Tally ERP with practical GST, invoicing, ledgers, and financial reporting for business and commerce professionals.",
      accent: "#10b981"
    },
    {
      num: "03",
      title: "Typing",
      category: "Hindi & English",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-[18px] h-[18px]"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>',
      image: "/images/web-dev.jpg",
      description: "Professional Hindi and English typing courses built for government exam readiness and corporate job requirements.",
      accent: "#6366f1"
    },
    {
      num: "04",
      title: "Web Development",
      category: "Programming",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-[18px] h-[18px]"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>',
      image: "/images/ai-course.jpg",
      description: "Build dynamic websites with PHP and React. Includes Python Programming Basic & Advanced with live projects.",
      accent: "#ec4899"
    },
    {
      num: "05",
      title: "Graphic Design",
      category: "Creative Suite",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-[18px] h-[18px]"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>',
      image: "/images/hero-bg.jpg",
      description: "Photoshop, CorelDRAW, DTP and digital marketing — SEO, social media, and paid campaigns.",
      accent: "#f97316"
    },
    {
      num: "06",
      title: "Python & AI",
      category: "Advanced Tech",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-[18px] h-[18px]"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>',
      image: "/images/web-dev.jpg",
      description: "From basic syntax to ML fundamentals. Hands-on automation, data analysis, and real-world project building.",
      accent: "#22d3ee"
    }
  ];
  return renderTemplate`<!-- Outer wrapper for scroll budget -->${maybeRenderHead()}<div id="courses-wrapper" class="relative bg-[#0a0a0a]" style="height: 5000px;"> <!-- Sticky viewport --> <div class="sticky top-0 h-screen overflow-hidden flex flex-col justify-center"> <!-- Section header --> <div id="courses-header" class="absolute top-10 left-8 md:left-14 z-20 pointer-events-none select-none transition-all duration-300"> <span class="text-[10px] uppercase tracking-[0.65em] text-white/30 block mb-2">
Our Programs
</span> <h2 class="text-6xl md:text-[7rem] leading-none">Programs</h2> <div class="flex items-center gap-2 mt-3"> <div class="w-4 h-px bg-white/30"></div> <span class="text-[10px] uppercase tracking-[0.4em] text-white/30">
Scroll to explore
</span> </div> </div> <!-- Live card counter --> <div class="absolute top-10 right-8 md:right-14 z-20 pointer-events-none select-none text-right"> <span class="text-[10px] text-white/20 uppercase tracking-widest block mb-1">
Course
</span> <div class="flex items-end justify-end gap-1"> <span id="courses-counter" class="text-3xl font-black text-white/20 tabular-nums leading-none">
01
</span> <span class="text-white/10 text-base mb-0.5">/0${courses.length}</span> </div> </div> <!-- Progress bar --> <div class="absolute bottom-8 left-8 right-8 z-20"> <div class="relative h-px bg-white/10 overflow-hidden"> <div id="courses-progress-bar" class="absolute inset-y-0 left-0 bg-white/60 origin-left scale-x-0"></div> </div> <div class="flex justify-between mt-2"> <span class="text-[9px] uppercase tracking-[0.4em] text-white/20">
Bhavya Career Institute
</span> <span class="text-[9px] uppercase tracking-[0.4em] text-white/20"> ${courses.length} Programs
</span> </div> </div> <!-- Horizontal strip --> <div id="courses-strip" class="flex items-stretch gap-5 pl-[10vw]" style="will-change: transform; transform: translateZ(0);"> ${courses.map((course, idx) => renderTemplate`<div class="course-card group relative border bg-white/[0.025] overflow-hidden h-[68vh] max-h-[560px] flex flex-col justify-between p-9 hover:bg-white/[0.055] transition-colors duration-700 cursor-pointer rounded-[2px]"${addAttribute(`width: clamp(280px, 85vw, 400px); flex-shrink: 0; border-color: ${course.accent}28; opacity: 0.15; transform: translateY(50px); transition: opacity 0.5s, transform 0.5s;`, "style")}${addAttribute(idx, "data-index")}> <!-- Accent glow --> <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"${addAttribute(`background: radial-gradient(ellipse at 15% 85%, ${course.accent}1a 0%, transparent 55%);`, "style")}></div> <!-- Background image --> <div class="absolute inset-0 opacity-0 group-hover:opacity-[0.12] transition-opacity duration-700 pointer-events-none"> <img${addAttribute(course.image, "src")} alt="" loading="lazy" class="w-full h-full object-cover grayscale"> <div class="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"></div> </div> <!-- Top row: ghost number + icon --> <div class="relative z-10 flex justify-between items-start"> <span class="font-black select-none leading-none"${addAttribute(`font-size: clamp(64px, 15vw, 112px); color: ${course.accent}18; line-height: 0.85;`, "style")}> ${course.num} </span> <div class="w-11 h-11 mt-1 flex items-center justify-center border border-white/10 group-hover:border-white/25 transition-all duration-500 flex-shrink-0"${addAttribute(`background: ${course.accent}1a; color: rgba(255,255,255,0.45);`, "style")}> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(course.icon)}` })} </div> </div> <!-- Bottom content --> <div class="relative z-10"> <span class="text-[9px] uppercase tracking-[0.45em] mb-3 block transition-colors duration-500"${addAttribute(`color: ${course.accent}aa;`, "style")}> ${course.category} </span> <h3 class="text-[2rem] md:text-[2.25rem] leading-tight mb-2 group-hover:translate-x-1.5 transition-transform duration-500"> ${course.title} </h3> ${course.badge && renderTemplate`<span class="inline-block mb-4 text-[9px] uppercase tracking-[0.2em] px-2 py-[3px] font-bold"${addAttribute(`background: ${course.accent}; color: #0a0a0a;`, "style")}> ${course.badge} </span>`} <p class="text-[13px] text-white/40 leading-relaxed mb-6 max-w-[340px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"> ${course.description} </p> <!-- Animated reveal line --> <div class="flex items-center gap-3 overflow-hidden"> <div class="h-px w-0 group-hover:w-10 transition-all duration-500 ease-out"${addAttribute(`background: ${course.accent};`, "style")}></div> <span class="text-[9px] uppercase tracking-[0.3em] text-white/25 group-hover:text-white/55 transition-colors duration-500">
View Syllabus
</span> </div> </div> <!-- Bottom accent stroke --> <div class="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-700 ease-out"${addAttribute(`background: linear-gradient(90deg, ${course.accent} 0%, ${course.accent}00 100%);`, "style")}></div> </div>`)} <!-- End CTA panel --> <div class="flex-shrink-0 w-[85vw] max-w-[320px] flex flex-col justify-center items-start px-8 md:px-16"> <span class="text-[10px] uppercase tracking-[0.5em] text-white/25 mb-6">
Ready to start?
</span> <h3 class="text-5xl md:text-6xl leading-tight mb-8">
Enroll<br>Today
</h3> <a href="https://wa.me/919694932391" target="_blank" rel="noopener noreferrer" class="group flex items-center gap-4 border border-white/20 px-7 py-4 hover:bg-white hover:text-black transition-all duration-500"> <span class="text-[10px] uppercase tracking-[0.3em]">Chat on WhatsApp</span> <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </a> </div> <!-- Right breathing room so last card isn't flush to edge --> <div class="flex-shrink-0 w-[10vw]"></div> </div> </div> </div> ${renderScript($$result, "D:/Coding Projects/coaching/src/components/Courses.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Coding Projects/coaching/src/components/Courses.astro", void 0);

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
  const domainColors = {
    "Office Skills": "bg-blue-900/40 text-blue-300",
    "Digital Marketing": "bg-purple-900/40 text-purple-300",
    "Graphic Designing": "bg-pink-900/40 text-pink-300",
    "Web Dev & Programming": "bg-emerald-900/40 text-emerald-300",
    "Spoken English": "bg-yellow-900/40 text-yellow-300"
  };
  return renderTemplate`${maybeRenderHead()}<section id="digital-courses" class="py-32 bg-[#0a0a0a] border-t border-white/20"> <div class="container mx-auto px-8"> <div class="flex flex-col md:flex-row justify-between items-start mb-16"> <div> <span class="text-[10px] uppercase tracking-[0.5em] text-white/30">Bhavya Career Institute</span> <h2 class="text-5xl md:text-8xl italic mt-2">Digital<br>Courses</h2> </div> <p class="max-w-md text-white/40 mt-8 md:mt-0 font-light leading-relaxed">
Industry-ready digital skills for the modern workplace. On RSCIT admission — get <span class="text-white font-semibold">2 Digital Courses FREE</span>.
</p> </div> <!-- NIOS/Distance Courses Banner --> <div data-reveal="up" class="mb-12 p-6 border border-white/20 bg-white/10 backdrop-blur opacity-0 translate-y-8 transition-all duration-800 ease-out"> <p class="text-[10px] uppercase tracking-[0.4em] text-white/40 mb-2">After 12th / Graduation — Online / Distance Education</p> <p class="text-white/80 text-sm leading-relaxed font-light">
B.A., B.COM, B.Sc, M.A., M.Sc., MBA, BCA, MCA, PGDCA, ECCE, MSW, D.LIS, B.LIS, NTT
</p> <p class="text-[10px] uppercase tracking-[0.4em] text-white/40 mt-4 mb-1">Also available</p> <p class="text-white/60 text-sm">NIOS / BOSSE — 10th & 12th</p> </div> <!-- Digital Courses Grid --> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"> ${digitalCourses.map((course, idx) => renderTemplate`<div data-reveal="zoom"${addAttribute(`transition-delay: ${idx * 50}ms;`, "style")} class="flex items-center justify-between p-5 border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] transition-all duration-300 group opacity-0 scale-95 duration-500 ease-out"> <span class="text-sm font-light text-white/80 group-hover:text-white transition-colors">${course.name}</span> <span${addAttribute(`text-[9px] uppercase tracking-wider px-2 py-1 rounded-full font-semibold ${domainColors[course.domain]}`, "class")}> ${course.domain} </span> </div>`)} </div> </div> </section>`;
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

const $$AllCourses = createComponent(($$result, $$props, $$slots) => {
  const coursesSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemList",
        "name": "All Computer Courses at Bhavya Career Institute, Kota",
        "url": "https://bhavyacareerinstitute.com/all-courses",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@type": "Course",
              "name": "DCA – Diploma in Computer Applications",
              "description": "Comprehensive 1-year computer diploma covering MS Office, Internet, HTML, Tally, and more. Government-certified with placement assistance.",
              "provider": { "@type": "Organization", "name": "Bhavya Career Institute", "url": "https://bhavyacareerinstitute.com" },
              "hasCourseInstance": {
                "@type": "CourseInstance",
                "courseMode": "Onsite",
                "location": { "@type": "Place", "name": "Bhavya Career Institute, Kota, Rajasthan" }
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "Course",
              "name": "Tally Prime with GST",
              "description": "Learn Tally Prime accounting software with full GST billing, inventory management, and financial reporting for modern businesses.",
              "provider": { "@type": "Organization", "name": "Bhavya Career Institute", "url": "https://bhavyacareerinstitute.com" }
            }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": {
              "@type": "Course",
              "name": "Python Programming",
              "description": "Beginner to intermediate Python programming covering syntax, data structures, file handling, and real-world projects.",
              "provider": { "@type": "Organization", "name": "Bhavya Career Institute", "url": "https://bhavyacareerinstitute.com" }
            }
          },
          {
            "@type": "ListItem",
            "position": 4,
            "item": {
              "@type": "Course",
              "name": "Web Designing & Development",
              "description": "Learn HTML, CSS, JavaScript, and modern web frameworks to build professional websites and launch a career in web development.",
              "provider": { "@type": "Organization", "name": "Bhavya Career Institute", "url": "https://bhavyacareerinstitute.com" }
            }
          },
          {
            "@type": "ListItem",
            "position": 5,
            "item": {
              "@type": "Course",
              "name": "RSCIT – Rajasthan State Certificate in IT",
              "description": "Government-mandated IT literacy course required for many Rajasthan government jobs. Fully certified by RKCL.",
              "provider": { "@type": "Organization", "name": "Bhavya Career Institute", "url": "https://bhavyacareerinstitute.com" }
            }
          },
          {
            "@type": "ListItem",
            "position": 6,
            "item": {
              "@type": "Course",
              "name": "Digital Marketing",
              "description": "Master SEO, social media marketing, Google Ads, email campaigns, and content strategy to grow businesses online.",
              "provider": { "@type": "Organization", "name": "Bhavya Career Institute", "url": "https://bhavyacareerinstitute.com" }
            }
          },
          {
            "@type": "ListItem",
            "position": 7,
            "item": {
              "@type": "Course",
              "name": "Graphic Design",
              "description": "Learn Photoshop, Illustrator, CorelDRAW, Canva, and logo design for creative careers in print and digital media.",
              "provider": { "@type": "Organization", "name": "Bhavya Career Institute", "url": "https://bhavyacareerinstitute.com" }
            }
          },
          {
            "@type": "ListItem",
            "position": 8,
            "item": {
              "@type": "Course",
              "name": "Advanced Excel",
              "description": "Master Excel formulas, pivot tables, VLOOKUP, macros, and data analysis for business and accounting professionals.",
              "provider": { "@type": "Organization", "name": "Bhavya Career Institute", "url": "https://bhavyacareerinstitute.com" }
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bhavyacareerinstitute.com/" },
          { "@type": "ListItem", "position": 2, "name": "All Courses", "item": "https://bhavyacareerinstitute.com/all-courses" }
        ]
      }
    ]
  };
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "SEOHead", $$SEOHead, { "title": "All Computer Courses in Kota | Bhavya Career Institute", "description": "Explore all government-certified computer courses in Kota at Bhavya Career Institute — DCA, Tally Prime with GST, Python, Web Development, RSCIT, Digital Marketing, Graphic Design & Advanced Excel. Placement assistance provided.", "canonical": "https://bhavyacareerinstitute.com/all-courses", "schema": coursesSchema })}${renderHead()}</head> <body class="bg-[#0a0a0a] text-white overflow-x-hidden selection:bg-white/20"> ${renderComponent($$result, "Cursor", $$Cursor, {})} ${renderComponent($$result, "Navbar", $$Navbar, {})} <main class="w-full pt-24"> ${renderComponent($$result, "Courses", $$Courses, {})} ${renderComponent($$result, "DigitalCourses", $$DigitalCourses, {})} ${renderComponent($$result, "Syllabus", $$Syllabus, {})} </main> ${renderComponent($$result, "Footer", $$Footer, {})} ${renderScript($$result, "D:/Coding Projects/coaching/src/pages/all-courses.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "D:/Coding Projects/coaching/src/pages/all-courses.astro", void 0);

const $$file = "D:/Coding Projects/coaching/src/pages/all-courses.astro";
const $$url = "/all-courses";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AllCourses,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
