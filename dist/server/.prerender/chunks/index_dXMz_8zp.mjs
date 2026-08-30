globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent, r as renderScript, $ as $$SEOHead, a as $$Navbar, b as $$Footer } from "./Footer_DY66i9Gu.mjs";
import { m as maybeRenderHead, r as renderComponent, b as renderTemplate, a as addAttribute, u as unescapeHTML, c as renderHead } from "./worker-entry_C595MgLD.mjs";
import { a as $$Image, h as heroBgImg, $ as $$Courses } from "./Courses_-l_ZzQhh.mjs";
import { $ as $$WhatsAppFloat } from "./WhatsAppFloat_PRyjgAvU.mjs";
import { c as generateLocalBusinessSchema } from "./schemaGenerator_DnzrJxDL.mjs";
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="hero-section" class="relative w-full bg-[#0a0a0a] overflow-hidden flex flex-col items-center justify-center select-none pt-28 pb-20 md:pt-36 md:pb-28" style="min-height: clamp(650px, 92svh, 92svh);"> <!-- Visual Background Image with Atmospheric Lighting & Mesh Gradient --> <div class="absolute inset-0 z-0"> <!-- Background Image --> <div class="absolute inset-0 opacity-40 hero-bg-parallax" style="transform: scale(1.05); transform-origin: center center; will-change: transform;"> ${renderComponent($$result, "Image", $$Image, { "src": heroBgImg, "alt": "Bhavya Computer Classes Lab", "loading": "eager", "class": "w-full h-full object-cover object-center filter saturate-150 contrast-125" })} </div> <!-- Dark gradient overlays for readability and luxury depth --> <div class="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/80 to-[#0a0a0a]"></div> <!-- Ambient Neon Mesh Glows --> <div class="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-purple-600/20 to-indigo-500/10 rounded-full blur-[140px] pointer-events-none animate-pulse"></div> <div class="absolute bottom-1/3 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-cyan-500/15 to-blue-600/10 rounded-full blur-[150px] pointer-events-none"></div> <!-- Subtle Grid Pattern --> <div class="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div> </div> <!-- Main Content Container --> <div class="relative z-10 flex flex-col items-center justify-center w-full text-center px-4 sm:px-6 md:px-8 max-w-5xl mx-auto my-auto"> <!-- Live Status Pill Badge --> <div class="hero-badge inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-xl mb-8 shadow-[0_0_20px_rgba(255,255,255,0.03)] hover:border-white/20 transition-all duration-300 cursor-default" style="opacity: 0; transform: translateY(20px);"> <span class="relative flex h-2.5 w-2.5"> <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span> <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span> </span> <span class="text-xs font-semibold tracking-wider text-white/90 uppercase" style="font-family: 'Outfit', sans-serif;">
Admissions Open 2025–26 <span class="text-white/40 font-normal">| Kota's #1 Institute</span> </span> </div> <!-- Main Headline with Modern Typography --> <h1 class="hero-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.04] tracking-tight mb-6 text-white" style="font-family: 'Syne', sans-serif; opacity: 0; transform: translateY(30px);">
Master In-Demand <br class="hidden sm:inline"> <span class="bg-gradient-to-r from-white via-white/90 to-white/60 bg-clip-text text-transparent">
Computer & Tech Skills
</span> </h1> <!-- Subheadline --> <p class="hero-sub text-white/65 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed mb-10 font-normal" style="font-family: 'Inter', sans-serif; opacity: 0; transform: translateY(24px);">
Government-certified training in <span class="text-white font-medium">DCA, Tally Prime, Python, Advanced Excel, Web Dev & RSCIT</span>. 100% practical learning with dedicated job placement support.
</p> <!-- Call to Action Buttons --> <div class="hero-ctas flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto mb-14" style="opacity: 0; transform: translateY(20px);"> <!-- Primary Action --> <a href="/all-courses" id="hero-courses-btn" class="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white text-black font-bold text-sm tracking-wide transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] active:scale-[0.98]" style="font-family: 'Outfit', sans-serif;"> <span>Explore All Courses</span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="transition-transform duration-300 group-hover:translate-x-1"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg> </a> <!-- Secondary Action --> <a href="/contact" id="hero-contact-btn" class="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 hover:border-white/30 text-white font-bold text-sm tracking-wide transition-all duration-300 hover:scale-[1.02] backdrop-blur-xl active:scale-[0.98]" style="font-family: 'Outfit', sans-serif;"> <span>Book Free Demo Class</span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.77 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path></svg> </a> </div> <!-- Trust Badges Bar --> <div class="hero-trust flex flex-wrap items-center justify-center gap-4 sm:gap-6 py-3 px-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-md" style="opacity: 0; transform: translateY(20px);"> <div class="flex items-center gap-2 text-xs text-white/70 font-medium" style="font-family: 'Outfit', sans-serif;"> <span class="text-amber-400 text-sm">★ 4.9</span> <span>Google Rating (500+ Reviews)</span> </div> <div class="hidden sm:block w-px h-3 bg-white/10"></div> <div class="flex items-center gap-2 text-xs text-white/70 font-medium" style="font-family: 'Outfit', sans-serif;"> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-emerald-400"><polyline points="20 6 9 17 4 12"></polyline></svg> <span>5,000+ Alumni</span> </div> <div class="hidden sm:block w-px h-3 bg-white/10"></div> <div class="flex items-center gap-2 text-xs text-white/70 font-medium" style="font-family: 'Outfit', sans-serif;"> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-400"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg> <span>Govt. Certified Institute</span> </div> </div> </div> <!-- Scroll hint --> <div class="hero-scroll absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-none opacity-40"> <span class="text-white/40 text-[9px] uppercase tracking-[0.3em]" style="font-family: 'Outfit', sans-serif;">Scroll Down</span> <div class="w-4 h-7 rounded-full border border-white/20 flex justify-center pt-1.5"> <div class="w-1 h-2 rounded-full bg-white animate-bounce"></div> </div> </div> </section> ${renderScript($$result, "D:/Coding Projects/coaching/src/components/Hero.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Coding Projects/coaching/src/components/Hero.astro", void 0);
const $$MarqueeBanner = createComponent(($$result, $$props, $$slots) => {
  const techItems = [
    { label: "DCA DIPLOMA", category: "Certification" },
    { label: "TALLY PRIME GST", category: "Accounting" },
    { label: "PYTHON PROGRAMMING", category: "Development" },
    { label: "ADVANCED EXCEL", category: "Analytics" },
    { label: "WEB DEVELOPMENT", category: "Full Stack" },
    { label: "RSCIT CERTIFIED", category: "Govt Exam" },
    { label: "DIGITAL MARKETING", category: "Growth" },
    { label: "GRAPHIC DESIGN", category: "Creative" },
    { label: "C & C++ BASICS", category: "Programming" },
    { label: "100% PLACEMENT", category: "Career Support" }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="relative bg-[#070707] border-y border-white/10 py-5 overflow-hidden select-none" data-astro-cid-l4ndpyk3> <div class="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#070707] to-transparent z-10" data-astro-cid-l4ndpyk3></div> <div class="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#070707] to-transparent z-10" data-astro-cid-l4ndpyk3></div> <div class="marquee-track flex whitespace-nowrap gap-8 items-center" data-astro-cid-l4ndpyk3> ${[...techItems, ...techItems, ...techItems].map((item, idx) => renderTemplate`<div class="flex items-center gap-3 px-5 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md hover:border-white/20 transition-colors" data-astro-cid-l4ndpyk3> <span class="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500" data-astro-cid-l4ndpyk3></span> <span class="text-xs font-bold text-white uppercase tracking-widest" style="font-family: 'Syne', sans-serif;" data-astro-cid-l4ndpyk3> ${item.label} </span> <span class="text-[10px] text-white/40 font-medium px-2 py-0.5 rounded bg-white/5 uppercase" style="font-family: 'Outfit', sans-serif;" data-astro-cid-l4ndpyk3> ${item.category} </span> </div>`)} </div> </section>`;
}, "D:/Coding Projects/coaching/src/components/MarqueeBanner.astro", void 0);
const $$StatsCounter = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="stats-section" class="relative bg-[#0a0a0a] py-24 px-4 sm:px-8 border-b border-white/10 overflow-hidden" data-astro-cid-6ddnnveg> <!-- Background Glow Effects --> <div class="pointer-events-none absolute inset-0 z-0" data-astro-cid-6ddnnveg> <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-600/10 rounded-full blur-[160px]" data-astro-cid-6ddnnveg></div> <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02)_0%,transparent_70%)]" data-astro-cid-6ddnnveg></div> </div> <div class="relative z-10 max-w-7xl mx-auto" data-astro-cid-6ddnnveg> <!-- Header --> <div class="text-center mb-16 stats-reveal" data-astro-cid-6ddnnveg> <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-semibold uppercase tracking-widest mb-4" style="font-family: 'Outfit', sans-serif;" data-astro-cid-6ddnnveg>
Track Record Of Excellence
</span> <h2 class="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight" style="font-family: 'Syne', sans-serif;" data-astro-cid-6ddnnveg>
Proven Numbers. Real Career Outcomes.
</h2> </div> <!-- Stats Grid --> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8" data-astro-cid-6ddnnveg> <!-- Card 1: Students Trained --> <div class="stat-card stats-reveal group relative p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl hover:bg-white/[0.05] hover:border-white/20 transition-all duration-500 hover:-translate-y-1 shadow-[0_10px_30px_rgba(0,0,0,0.5)]" data-astro-cid-6ddnnveg> <div class="flex items-center justify-between mb-6" data-astro-cid-6ddnnveg> <div class="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform" data-astro-cid-6ddnnveg> <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-6ddnnveg><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" data-astro-cid-6ddnnveg></path><circle cx="9" cy="7" r="4" data-astro-cid-6ddnnveg></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87" data-astro-cid-6ddnnveg></path><path d="M16 3.13a4 4 0 0 1 0 7.75" data-astro-cid-6ddnnveg></path></svg> </div> <span class="text-xs font-mono text-white/30" data-astro-cid-6ddnnveg>01 // IMPACT</span> </div> <div class="stat-number text-4xl sm:text-5xl font-black text-white tracking-tight mb-2" style="font-family: 'Syne', sans-serif;" data-target="5000" data-suffix="+" data-duration="2000" data-astro-cid-6ddnnveg>0+</div> <div class="text-white/80 font-bold text-base mb-1" style="font-family: 'Outfit', sans-serif;" data-astro-cid-6ddnnveg>Students Trained</div> <div class="text-white/40 text-xs leading-relaxed" style="font-family: 'Inter', sans-serif;" data-astro-cid-6ddnnveg>Certified computer professionals trained across Kota & Rajasthan.</div> </div> <!-- Card 2: Years Experience --> <div class="stat-card stats-reveal group relative p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl hover:bg-white/[0.05] hover:border-white/20 transition-all duration-500 hover:-translate-y-1 shadow-[0_10px_30px_rgba(0,0,0,0.5)]" data-astro-cid-6ddnnveg> <div class="flex items-center justify-between mb-6" data-astro-cid-6ddnnveg> <div class="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform" data-astro-cid-6ddnnveg> <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-6ddnnveg><rect x="3" y="4" width="18" height="18" rx="2" ry="2" data-astro-cid-6ddnnveg></rect><line x1="16" y1="2" x2="16" y2="6" data-astro-cid-6ddnnveg></line><line x1="8" y1="2" x2="8" y2="6" data-astro-cid-6ddnnveg></line><line x1="3" y1="10" x2="21" y2="10" data-astro-cid-6ddnnveg></line></svg> </div> <span class="text-xs font-mono text-white/30" data-astro-cid-6ddnnveg>02 // LEGACY</span> </div> <div class="stat-number text-4xl sm:text-5xl font-black text-white tracking-tight mb-2" style="font-family: 'Syne', sans-serif;" data-target="15" data-suffix="+" data-duration="1400" data-astro-cid-6ddnnveg>0+</div> <div class="text-white/80 font-bold text-base mb-1" style="font-family: 'Outfit', sans-serif;" data-astro-cid-6ddnnveg>Years of Leadership</div> <div class="text-white/40 text-xs leading-relaxed" style="font-family: 'Inter', sans-serif;" data-astro-cid-6ddnnveg>Established in 2010 with continuous curriculum updates.</div> </div> <!-- Card 3: Placement Rate --> <div class="stat-card stats-reveal group relative p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl hover:bg-white/[0.05] hover:border-white/20 transition-all duration-500 hover:-translate-y-1 shadow-[0_10px_30px_rgba(0,0,0,0.5)]" data-astro-cid-6ddnnveg> <div class="flex items-center justify-between mb-6" data-astro-cid-6ddnnveg> <div class="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform" data-astro-cid-6ddnnveg> <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-6ddnnveg><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" data-astro-cid-6ddnnveg></path><polyline points="22 4 12 14.01 9 11.01" data-astro-cid-6ddnnveg></polyline></svg> </div> <span class="text-xs font-mono text-white/30" data-astro-cid-6ddnnveg>03 // CAREERS</span> </div> <div class="stat-number text-4xl sm:text-5xl font-black text-white tracking-tight mb-2" style="font-family: 'Syne', sans-serif;" data-target="100" data-suffix="%" data-duration="1800" data-astro-cid-6ddnnveg>0%</div> <div class="text-white/80 font-bold text-base mb-1" style="font-family: 'Outfit', sans-serif;" data-astro-cid-6ddnnveg>Placement Assistance</div> <div class="text-white/40 text-xs leading-relaxed" style="font-family: 'Inter', sans-serif;" data-astro-cid-6ddnnveg>Resume building, mock interviews, and local employer referrals.</div> </div> <!-- Card 4: Verified Rating --> <div class="stat-card stats-reveal group relative p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl hover:bg-white/[0.05] hover:border-white/20 transition-all duration-500 hover:-translate-y-1 shadow-[0_10px_30px_rgba(0,0,0,0.5)]" data-astro-cid-6ddnnveg> <div class="flex items-center justify-between mb-6" data-astro-cid-6ddnnveg> <div class="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform" data-astro-cid-6ddnnveg> <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-6ddnnveg><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" data-astro-cid-6ddnnveg></polygon></svg> </div> <span class="text-xs font-mono text-white/30" data-astro-cid-6ddnnveg>04 // RATING</span> </div> <div class="stat-number text-4xl sm:text-5xl font-black text-white tracking-tight mb-2" style="font-family: 'Syne', sans-serif;" data-target="49" data-suffix="/5" data-is-decimal="true" data-duration="1600" data-astro-cid-6ddnnveg>0/5</div> <div class="text-white/80 font-bold text-base mb-1" style="font-family: 'Outfit', sans-serif;" data-astro-cid-6ddnnveg>Top Google Rating</div> <div class="text-white/40 text-xs leading-relaxed" style="font-family: 'Inter', sans-serif;" data-astro-cid-6ddnnveg>Highest rated computer training institute in Kota, Rajasthan.</div> </div> </div> </div> </section>  ${renderScript($$result, "D:/Coding Projects/coaching/src/components/StatsCounter.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Coding Projects/coaching/src/components/StatsCounter.astro", void 0);
const $$BentoGrid = createComponent(($$result, $$props, $$slots) => {
  const features = [
    {
      tag: "PRACTICAL LABS",
      title: "1:1 Computer Allocation in Air-Conditioned Labs",
      description: "No sharing screens. Every student gets dedicated PC time during practical sessions with high-speed computers and updated software.",
      icon: "💻",
      colSpan: "lg:col-span-2",
      accentColor: "from-blue-500/20 to-indigo-500/5",
      borderColor: "hover:border-blue-500/40"
    },
    {
      tag: "GOVT CERTIFICATION",
      title: "100% Recognized Government Certificates",
      description: "Certificates valid nationwide for government job applications, private employment, and higher studies.",
      icon: "📜",
      colSpan: "lg:col-span-1",
      accentColor: "from-emerald-500/20 to-teal-500/5",
      borderColor: "hover:border-emerald-500/40"
    },
    {
      tag: "CAREER SUPPORT",
      title: "Dedicated Job & Placement Cell",
      description: "We connect you directly with local businesses, accounting firms, and IT agencies in Kota.",
      icon: "💼",
      colSpan: "lg:col-span-1",
      accentColor: "from-amber-500/20 to-orange-500/5",
      borderColor: "hover:border-amber-500/40"
    },
    {
      tag: "FLEXIBLE BATCHES",
      title: "Morning, Afternoon & Evening Schedules",
      description: "Multiple batch options designed for students, working professionals, and homemakers + 2 Free Demo Classes.",
      icon: "⏰",
      colSpan: "lg:col-span-2",
      accentColor: "from-purple-500/20 to-pink-500/5",
      borderColor: "hover:border-purple-500/40"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="why-us" class="relative bg-[#0a0a0a] py-28 px-4 sm:px-8 border-b border-white/10 overflow-hidden" data-astro-cid-f44o672t> <!-- Subtle Background Gradients --> <div class="pointer-events-none absolute inset-0 z-0" data-astro-cid-f44o672t> <div class="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px]" data-astro-cid-f44o672t></div> </div> <div class="relative z-10 max-w-7xl mx-auto" data-astro-cid-f44o672t> <!-- Header --> <div class="max-w-3xl mb-16 bento-reveal" data-astro-cid-f44o672t> <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-semibold uppercase tracking-widest mb-4" style="font-family: 'Outfit', sans-serif;" data-astro-cid-f44o672t>
Why Choose Bhavya Computer Classes
</span> <h2 class="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-6" style="font-family: 'Syne', sans-serif;" data-astro-cid-f44o672t>
Designed for Practical Mastery & Immediate Job Readiness
</h2> <p class="text-white/60 text-lg leading-relaxed" style="font-family: 'Inter', sans-serif;" data-astro-cid-f44o672t>
We combine hands-on practice, updated industry software, and personal attention to ensure you graduate with skills that employers actively seek.
</p> </div> <!-- Bento Grid --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-astro-cid-f44o672t> ${features.map((f, idx) => renderTemplate`<div${addAttribute(`bento-card bento-reveal group relative p-8 sm:p-10 rounded-3xl bg-gradient-to-br ${f.accentColor} border border-white/10 backdrop-blur-xl transition-all duration-500 ${f.borderColor} hover:-translate-y-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col justify-between ${f.colSpan}`, "class")}${addAttribute(`transition-delay: ${idx * 100}ms;`, "style")} data-astro-cid-f44o672t> <div data-astro-cid-f44o672t> <div class="flex items-center justify-between mb-8" data-astro-cid-f44o672t> <span class="text-3xl p-3 rounded-2xl bg-white/5 border border-white/10" data-astro-cid-f44o672t>${f.icon}</span> <span class="text-[10px] font-bold uppercase tracking-widest text-white/40 px-3 py-1 rounded-full bg-white/5 border border-white/10" style="font-family: 'Outfit', sans-serif;" data-astro-cid-f44o672t> ${f.tag} </span> </div> <h3 class="text-2xl sm:text-3xl font-bold text-white mb-4 leading-snug" style="font-family: 'Syne', sans-serif;" data-astro-cid-f44o672t> ${f.title} </h3> <p class="text-white/60 text-base leading-relaxed" style="font-family: 'Inter', sans-serif;" data-astro-cid-f44o672t> ${f.description} </p> </div> <div class="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-xs text-white/40 font-medium uppercase tracking-wider" style="font-family: 'Outfit', sans-serif;" data-astro-cid-f44o672t> <span data-astro-cid-f44o672t>Bhavya Advantage</span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:translate-x-1 transition-transform text-white/70" data-astro-cid-f44o672t><path d="M5 12h14" data-astro-cid-f44o672t></path><path d="m12 5 7 7-7 7" data-astro-cid-f44o672t></path></svg> </div> </div>`)} </div> </div> </section>  ${renderScript($$result, "D:/Coding Projects/coaching/src/components/BentoGrid.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Coding Projects/coaching/src/components/BentoGrid.astro", void 0);
const $$EnquiryForm = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="enquiry-section" class="relative bg-[#0a0a0a] py-24 px-4 sm:px-8 overflow-hidden" data-astro-cid-qzba3gmr> <!-- Background glow --> <div class="pointer-events-none absolute inset-0 z-0" data-astro-cid-qzba3gmr> <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-white/5 blur-[120px]" data-astro-cid-qzba3gmr></div> <div class="absolute inset-0 opacity-[0.018]" style="background-image: linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px); background-size: 50px 50px;" data-astro-cid-qzba3gmr></div> </div> <div class="relative z-10 max-w-5xl mx-auto" data-astro-cid-qzba3gmr> <!-- Header --> <div class="text-center mb-14 enquiry-reveal" data-astro-cid-qzba3gmr> <span class="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.55em] text-white/30 mb-5 font-medium" style="font-family: 'Outfit', sans-serif;" data-astro-cid-qzba3gmr> <span class="w-5 h-px bg-white/20" data-astro-cid-qzba3gmr></span>
Free Admission Enquiry
<span class="w-5 h-px bg-white/20" data-astro-cid-qzba3gmr></span> </span> <h2 class="text-4xl sm:text-5xl font-black leading-tight mb-4" style="font-family: 'Syne', sans-serif;" data-astro-cid-qzba3gmr>
Start Your <span class="enquiry-gradient" data-astro-cid-qzba3gmr>Journey Today</span> </h2> <p class="text-white/40 text-base max-w-lg mx-auto" style="font-family: 'Inter', sans-serif;" data-astro-cid-qzba3gmr>
Fill out the form below — we'll reach out within 2 hours to help you pick the right course.
</p> </div> <div class="grid md:grid-cols-5 gap-8 items-start" data-astro-cid-qzba3gmr> <!-- Form (3/5) --> <div class="md:col-span-3 enquiry-reveal" style="transition-delay: 100ms;" data-astro-cid-qzba3gmr> <form id="enquiry-form" class="enquiry-card space-y-4" novalidate data-astro-cid-qzba3gmr> <div class="grid sm:grid-cols-2 gap-4" data-astro-cid-qzba3gmr> <!-- Name --> <div class="form-group" data-astro-cid-qzba3gmr> <label for="eq-name" class="form-label" data-astro-cid-qzba3gmr>Full Name <span class="text-white/70" data-astro-cid-qzba3gmr>*</span></label> <input type="text" id="eq-name" name="name" placeholder="e.g. Priya Sharma" class="form-input" required autocomplete="name" data-astro-cid-qzba3gmr> </div> <!-- Phone --> <div class="form-group" data-astro-cid-qzba3gmr> <label for="eq-phone" class="form-label" data-astro-cid-qzba3gmr>Phone Number <span class="text-white/70" data-astro-cid-qzba3gmr>*</span></label> <input type="tel" id="eq-phone" name="phone" placeholder="+91 98765 43210" class="form-input" required pattern="[0-9+\s-]{10,15}" autocomplete="tel" data-astro-cid-qzba3gmr> </div> </div> <!-- Course --> <div class="form-group" data-astro-cid-qzba3gmr> <label for="eq-course" class="form-label" data-astro-cid-qzba3gmr>Course Interested In <span class="text-white/70" data-astro-cid-qzba3gmr>*</span></label> <select id="eq-course" name="course" class="form-input form-select" required data-astro-cid-qzba3gmr> <option value="" disabled selected data-astro-cid-qzba3gmr>— Select a course —</option> <option value="DCA" data-astro-cid-qzba3gmr>DCA — Diploma in Computer Applications</option> <option value="Tally Prime" data-astro-cid-qzba3gmr>Tally Prime with GST</option> <option value="RSCIT" data-astro-cid-qzba3gmr>RSCIT (Rajasthan State Certificate IT)</option> <option value="Python" data-astro-cid-qzba3gmr>Python Programming</option> <option value="Web Development" data-astro-cid-qzba3gmr>Web Development (HTML/CSS/JS)</option> <option value="Digital Marketing" data-astro-cid-qzba3gmr>Digital Marketing</option> <option value="Advanced Excel" data-astro-cid-qzba3gmr>Advanced Excel</option> <option value="MS Office" data-astro-cid-qzba3gmr>MS Office (Basic/Advanced)</option> <option value="Not sure" data-astro-cid-qzba3gmr>Not sure — need guidance</option> </select> </div> <!-- Message --> <div class="form-group" data-astro-cid-qzba3gmr> <label for="eq-message" class="form-label" data-astro-cid-qzba3gmr>Message (optional)</label> <textarea id="eq-message" name="message" rows="3" placeholder="Any questions, preferred batch timing, or other info..." class="form-input resize-none" data-astro-cid-qzba3gmr></textarea> </div> <!-- Submit --> <button type="submit" id="eq-submit" class="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl font-semibold text-sm text-black transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(255,255,255,0.2)] active:scale-[0.98]" style="font-family: 'Outfit', sans-serif; background: #ffffff;" data-astro-cid-qzba3gmr> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-qzba3gmr><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.77 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" data-astro-cid-qzba3gmr></path></svg> <span id="eq-btn-label" data-astro-cid-qzba3gmr>Send Free Enquiry</span> </button> <!-- Status message --> <div id="eq-status" class="hidden text-center text-sm rounded-xl p-4" style="font-family: 'Inter', sans-serif;" data-astro-cid-qzba3gmr></div> <p class="text-center text-white/25 text-xs" style="font-family: 'Inter', sans-serif;" data-astro-cid-qzba3gmr>
🔒 Your info is safe. We never share your details.
</p> </form> </div> <!-- Sidebar info (2/5) --> <div class="md:col-span-2 space-y-4 enquiry-reveal" style="transition-delay: 200ms;" data-astro-cid-qzba3gmr> <!-- Quick Contact --> <div class="enquiry-info-card" data-astro-cid-qzba3gmr> <p class="text-white/30 text-[10px] uppercase tracking-widest mb-4" style="font-family: 'Outfit', sans-serif;" data-astro-cid-qzba3gmr>Or contact directly</p> <a href="https://wa.me/919694932391" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 p-3 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 hover:border-[#25D366]/40 transition-all duration-200 group mb-3" data-astro-cid-qzba3gmr> <div class="w-9 h-9 rounded-lg bg-[#25D366] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform" data-astro-cid-qzba3gmr> <svg viewBox="0 0 24 24" fill="white" class="w-4 h-4" data-astro-cid-qzba3gmr><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24z" data-astro-cid-qzba3gmr></path></svg> </div> <div data-astro-cid-qzba3gmr> <p class="text-white text-sm font-medium" style="font-family: 'Outfit', sans-serif;" data-astro-cid-qzba3gmr>WhatsApp Us</p> <p class="text-white/40 text-xs" data-astro-cid-qzba3gmr>+91 96949 32391</p> </div> </a> <a href="tel:+919694025249" class="flex items-center gap-3 p-3 rounded-xl bg-white/4 border border-white/8 hover:border-white/16 transition-all duration-200 group" data-astro-cid-qzba3gmr> <div class="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform" data-astro-cid-qzba3gmr> <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white/60" data-astro-cid-qzba3gmr><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.77 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" data-astro-cid-qzba3gmr></path></svg> </div> <div data-astro-cid-qzba3gmr> <p class="text-white text-sm font-medium" style="font-family: 'Outfit', sans-serif;" data-astro-cid-qzba3gmr>Call Us</p> <p class="text-white/40 text-xs" data-astro-cid-qzba3gmr>+91 96940 25249</p> </div> </a> </div> <!-- Free Demo Offer --> <div class="enquiry-info-card border-[#10b981]/20 bg-gradient-to-br from-[#10b981]/5 to-transparent" data-astro-cid-qzba3gmr> <div class="flex items-start gap-3" data-astro-cid-qzba3gmr> <span class="text-2xl mt-0.5" data-astro-cid-qzba3gmr>🎁</span> <div data-astro-cid-qzba3gmr> <p class="text-white font-semibold text-sm mb-1" style="font-family: 'Outfit', sans-serif;" data-astro-cid-qzba3gmr>2 Free Demo Classes</p> <p class="text-white/45 text-xs leading-relaxed" style="font-family: 'Inter', sans-serif;" data-astro-cid-qzba3gmr>Try any course free — no payment, no commitment. See our teaching style and decide.</p> </div> </div> </div> <!-- Why Bhavya --> <div class="enquiry-info-card" data-astro-cid-qzba3gmr> <p class="text-white/30 text-[10px] uppercase tracking-widest mb-3" style="font-family: 'Outfit', sans-serif;" data-astro-cid-qzba3gmr>Why choose us?</p> <ul class="space-y-2.5" data-astro-cid-qzba3gmr> ${[
    "✅ Govt. recognised certificates",
    "📍 Prime location in Mahaveer Nagar",
    "💼 100% placement assistance",
    "📚 Comprehensive study material & digital notes",
    "💰 Flexible fee instalments"
  ].map((item) => renderTemplate`<li class="text-white/55 text-xs flex items-center gap-2" style="font-family: 'Inter', sans-serif;" data-astro-cid-qzba3gmr>${item}</li>`)} </ul> </div> </div> </div> </div> </section>  ${renderScript($$result, "D:/Coding Projects/coaching/src/components/EnquiryForm.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Coding Projects/coaching/src/components/EnquiryForm.astro", void 0);
const ankitImg = new Proxy({ "src": "/_astro/ankit.Ci-ndYeN.png", "width": 1024, "height": 1024, "format": "jpg" }, {
  get(target, name, receiver) {
    if (name === "clone") {
      return structuredClone(target);
    }
    if (name === "fsPath") {
      return "D:/Coding Projects/coaching/public/avatars/ankit.png";
    }
    if (target[name] !== void 0 && globalThis.astroAsset) globalThis.astroAsset?.referencedImages?.add("D:/Coding Projects/coaching/public/avatars/ankit.png");
    return target[name];
  }
});
const poojaImg = new Proxy({ "src": "/_astro/pooja.DgNdI4g2.png", "width": 1024, "height": 1024, "format": "jpg" }, {
  get(target, name, receiver) {
    if (name === "clone") {
      return structuredClone(target);
    }
    if (name === "fsPath") {
      return "D:/Coding Projects/coaching/public/avatars/pooja.png";
    }
    if (target[name] !== void 0 && globalThis.astroAsset) globalThis.astroAsset?.referencedImages?.add("D:/Coding Projects/coaching/public/avatars/pooja.png");
    return target[name];
  }
});
const rahulImg = new Proxy({ "src": "/_astro/rahul.EdlokxwE.png", "width": 1024, "height": 1024, "format": "jpg" }, {
  get(target, name, receiver) {
    if (name === "clone") {
      return structuredClone(target);
    }
    if (name === "fsPath") {
      return "D:/Coding Projects/coaching/public/avatars/rahul.png";
    }
    if (target[name] !== void 0 && globalThis.astroAsset) globalThis.astroAsset?.referencedImages?.add("D:/Coding Projects/coaching/public/avatars/rahul.png");
    return target[name];
  }
});
const sumanImg = new Proxy({ "src": "/_astro/suman.BV98F86g.png", "width": 1024, "height": 1024, "format": "jpg" }, {
  get(target, name, receiver) {
    if (name === "clone") {
      return structuredClone(target);
    }
    if (name === "fsPath") {
      return "D:/Coding Projects/coaching/public/avatars/suman.png";
    }
    if (target[name] !== void 0 && globalThis.astroAsset) globalThis.astroAsset?.referencedImages?.add("D:/Coding Projects/coaching/public/avatars/suman.png");
    return target[name];
  }
});
const deepakImg = new Proxy({ "src": "/_astro/deepak.DuyFAZ3c.png", "width": 1024, "height": 1024, "format": "jpg" }, {
  get(target, name, receiver) {
    if (name === "clone") {
      return structuredClone(target);
    }
    if (name === "fsPath") {
      return "D:/Coding Projects/coaching/public/avatars/deepak.png";
    }
    if (target[name] !== void 0 && globalThis.astroAsset) globalThis.astroAsset?.referencedImages?.add("D:/Coding Projects/coaching/public/avatars/deepak.png");
    return target[name];
  }
});
const nehaImg = new Proxy({ "src": "/_astro/neha.TdOcsqss.png", "width": 1024, "height": 1024, "format": "jpg" }, {
  get(target, name, receiver) {
    if (name === "clone") {
      return structuredClone(target);
    }
    if (name === "fsPath") {
      return "D:/Coding Projects/coaching/public/avatars/neha.png";
    }
    if (target[name] !== void 0 && globalThis.astroAsset) globalThis.astroAsset?.referencedImages?.add("D:/Coding Projects/coaching/public/avatars/neha.png");
    return target[name];
  }
});
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Reviews = createComponent(($$result, $$props, $$slots) => {
  const reviews = [
    {
      name: "Ankit Sharma",
      course: "RSCIT + Digital Marketing",
      rating: 5,
      text: "Bhavya Computer Classes changed my career path completely. After completing RSCIT and Digital Marketing, I got placed in a digital agency in Kota within 2 months. The faculty is extremely supportive and the content is very practical.",
      year: "2024",
      initials: "AS",
      avatar: ankitImg
    },
    {
      name: "Pooja Meena",
      course: "Tally with Accounting",
      rating: 5,
      text: "The Tally course here is absolutely top notch. Sir explains every concept with real business examples. I cleared my CA Foundation exam alongside this course and it helped me a lot in understanding accounts practically.",
      year: "2024",
      initials: "PM",
      avatar: poojaImg
    },
    {
      name: "Rahul Kumawat",
      course: "Web Development (PHP & React)",
      rating: 5,
      text: "I had zero coding knowledge when I joined. Within 6 months of the Web Development course I built my own project and got a freelance client. The step-by-step teaching style makes even complex topics easy.",
      year: "2023",
      initials: "RK",
      avatar: rahulImg
    },
    {
      name: "Suman Yadav",
      course: "Graphic Designing",
      rating: 5,
      text: "The graphic design batch is wonderful. We learned Photoshop, CorelDRAW, and DTP with live projects. Library facility is a bonus — I used to sit and practice for hours. Highly recommend this institute!",
      year: "2024",
      initials: "SY",
      avatar: sumanImg
    },
    {
      name: "Deepak Gupta",
      course: "Python Programming",
      rating: 5,
      text: "From basic to advanced Python — everything was covered with real-world mini projects. The institute environment is very focused and disciplined. Best decision I made for my career after graduation.",
      year: "2023",
      initials: "DG",
      avatar: deepakImg
    },
    {
      name: "Neha Jain",
      course: "NIOS 12th + Spoken English",
      rating: 5,
      text: "I completed my 12th through NIOS with the guidance of Bhavya Computer Classes. The faculty helped with every doubt patiently. The Spoken English classes gave me the confidence to crack interviews. Truly grateful!",
      year: "2024",
      initials: "NJ",
      avatar: nehaImg
    }
  ];
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.bhavyacomputerclasses.com/#organization",
    review: reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: "5" },
      reviewBody: r.text
    }))
  };
  return renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script> ", '<section id="reviews" class="py-32 bg-white text-black relative overflow-hidden"> <!-- Ghost background text --> <div class="absolute bottom-0 right-0 opacity-[0.04] pointer-events-none select-none"> <span class="text-[18vw] font-black italic leading-none">Reviews</span> </div> <div class="container mx-auto px-8 relative z-10"> <!-- Header --> <div class="flex flex-col md:flex-row justify-between items-start mb-20"> <div> <span data-reveal="up" class="text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.6em] text-black/30 opacity-0 translate-y-4 transition-all duration-800 ease-out inline-block break-words">\nStudent Stories\n</span> <h2 data-reveal="up" style="transition-delay: 100ms;" class="text-4xl md:text-7xl lg:text-8xl italic mt-3 text-black opacity-0 translate-y-8 transition-all duration-800 ease-out break-words">\nWhat They Say\n</h2> </div> <p data-reveal="up" style="transition-delay: 300ms;" class="max-w-xs text-black/40 mt-8 md:mt-0 text-sm font-light leading-relaxed opacity-0 translate-y-6 transition-all duration-800 ease-out">\nReal feedback from real students who transformed their careers at Bhavya Computer Classes.\n</p> </div> <!-- Featured Review Container --> <div class="relative w-full overflow-hidden mb-6 min-h-[400px]"> ', ' </div> <!-- Controls + Dots --> <div class="flex items-center justify-between"> <!-- Dot indicators --> <div class="flex gap-2"> ', ' </div> <!-- Prev / Next --> <div class="flex gap-3"> <button id="review-prev" class="w-12 h-12 border border-black/20 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 group cursor-pointer" aria-label="Previous review"> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 19l-7-7 7-7"></path> </svg> </button> <button id="review-next" class="w-12 h-12 border border-black/20 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 group cursor-pointer" aria-label="Next review"> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7"></path> </svg> </button> </div> </div> <!-- All reviews grid (mini cards) --> <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mt-12"> ', " </div> </div> </section> ", ""])), unescapeHTML(JSON.stringify(reviewSchema)), maybeRenderHead(), reviews.map((review, i) => renderTemplate`<div${addAttribute(`review-slide absolute inset-0 w-full h-full border border-black/10 p-10 md:p-16 bg-white transition-all duration-500 ease-in-out ${i === 0 ? "opacity-100 translate-y-0 z-10" : "opacity-0 translate-y-8 z-0 pointer-events-none"}`, "class")}${addAttribute(i, "data-index")}>  <span class="absolute top-8 left-10 text-8xl leading-none text-black/5 font-black select-none">"</span>  <div class="flex gap-1 mb-8"> ${Array.from({ length: review.rating }).map(() => renderTemplate`<svg class="w-4 h-4 fill-black" viewBox="0 0 20 20"> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path> </svg>`)} </div> <p class="text-xl md:text-2xl font-light leading-relaxed text-black/70 max-w-4xl mb-12 relative z-10">
"${review.text}"
</p> <div class="flex items-center gap-5"> <div class="w-12 h-12 rounded-full bg-black flex items-center justify-center overflow-hidden"> ${review.avatar ? renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": review.avatar, "alt": review.name, "class": "w-full h-full object-cover" })}` : renderTemplate`<span class="text-white text-sm font-bold">${review.initials}</span>`} </div> <div> <p class="font-semibold text-black">${review.name}</p> <p class="text-xs text-black/40 uppercase tracking-widest mt-0.5">${review.course} · ${review.year}</p> </div> </div> </div>`), reviews.map((_, i) => renderTemplate`<button${addAttribute(`review-dot h-px transition-all duration-300 ${i === 0 ? "w-10 bg-black" : "w-4 bg-black/20"}`, "class")}${addAttribute(i, "data-index")}${addAttribute(`Go to review ${i + 1}`, "aria-label")}></button>`), reviews.map((r, i) => renderTemplate`<button${addAttribute(`review-card text-left p-4 border transition-all duration-300 cursor-pointer ${i === 0 ? "border-black bg-black text-white" : "border-black/10 hover:border-black/40 text-black"}`, "class")}${addAttribute(i, "data-index")}> <div${addAttribute(`review-card-avatar overflow-hidden w-8 h-8 rounded-full flex items-center justify-center mb-3 text-xs font-bold transition-colors ${i === 0 ? "bg-white text-black" : "bg-black/10 text-black"}`, "class")}> ${r.avatar ? renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": r.avatar, "alt": r.name, "class": "w-full h-full object-cover" })}` : r.initials} </div> <p${addAttribute(`review-card-name text-[10px] font-semibold truncate transition-colors ${i === 0 ? "text-white" : "text-black"}`, "class")}>${r.name}</p> <p${addAttribute(`review-card-course text-[9px] uppercase tracking-wider truncate mt-0.5 transition-colors ${i === 0 ? "text-white/60" : "text-black/40"}`, "class")}>${r.course}</p> </button>`), renderScript($$result, "D:/Coding Projects/coaching/src/components/Reviews.astro?astro&type=script&index=0&lang.ts"));
}, "D:/Coding Projects/coaching/src/components/Reviews.astro", void 0);
const prerender = true;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const organizationSchema = generateLocalBusinessSchema();
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "SEOHead", $$SEOHead, { "title": "Bhavya Computer Classes — Best Computer Classes in Kota, Rajasthan", "description": "Bhavya Computer Classes — Kota's top government-certified computer training institute. Learn DCA, Tally Prime, Advanced Excel, Python, Web Development, RSCIT & Digital Marketing. 100% placement assistance. Est. 2010.", "canonical": "https://www.bhavyacomputerclasses.com/", "schema": organizationSchema })}<!-- Preload hero image for LCP performance --><link rel="preload" as="image" href="/images/hero-bg.jpg">${renderHead()}</head> <body class="bg-[#0a0a0a] text-white overflow-x-hidden selection:bg-white/20"> ${renderComponent($$result, "Navbar", $$Navbar, {})} <main class="w-full"> ${renderComponent($$result, "Hero", $$Hero, {})} ${renderComponent($$result, "MarqueeBanner", $$MarqueeBanner, {})} ${renderComponent($$result, "StatsCounter", $$StatsCounter, {})} ${renderComponent($$result, "BentoGrid", $$BentoGrid, {})} ${renderComponent($$result, "Courses", $$Courses, {})} ${renderComponent($$result, "EnquiryForm", $$EnquiryForm, {})} ${renderComponent($$result, "Reviews", $$Reviews, {})} </main> ${renderComponent($$result, "Footer", $$Footer, {})} ${renderComponent($$result, "WhatsAppFloat", $$WhatsAppFloat, {})} ${renderScript($$result, "D:/Coding Projects/coaching/src/pages/index.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "D:/Coding Projects/coaching/src/pages/index.astro", void 0);
const $$file = "D:/Coding Projects/coaching/src/pages/index.astro";
const $$url = "";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
