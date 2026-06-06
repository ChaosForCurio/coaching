import { c as createComponent } from './astro-component_CcqMMwb0.mjs';
import 'piccolore';
import { m as maybeRenderHead, a as addAttribute, r as renderTemplate, c as renderComponent, b as renderHead } from './server_CbJrX1FR.mjs';
import { r as renderScript, $ as $$Navbar } from './global_DzgTv7pz.mjs';
import { $ as $$SEOHead } from './SEOHead_CX8K_Fef.mjs';
import { $ as $$Cursor } from './Cursor_DKqi31Rs.mjs';
import 'clsx';
import { $ as $$Footer } from './Footer_CRyMzkYy.mjs';

const $$Methodology = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="methodology" class="py-20 md:py-40 bg-white text-black relative overflow-hidden"> <div class="absolute top-0 right-0 p-4 md:p-20 opacity-[0.03] pointer-events-none"> <h2 class="text-[8rem] sm:text-[12rem] md:text-[16rem] lg:text-[20rem] leading-none font-black italic">BCI</h2> <!-- BCI is the internal abbreviation for Bhavya Career Institute, used as a decorative watermark --> </div> <div class="container mx-auto px-4 md:px-8 relative z-10"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center"> <div> <div data-reveal="left" class="opacity-0 -translate-x-4 md:-translate-x-12 transition-all duration-1000 ease-out"> <h2 class="text-3xl sm:text-4xl md:text-6xl lg:text-8xl leading-[0.9] mb-8 md:mb-12 break-words tracking-tight">The<br>BHAVYA<br>Vision</h2> <p class="text-xl text-black/60 font-light leading-relaxed mb-8">
Bhavya Career Institute is dedicated to empowering students with practical, job-ready skills.
            Our library facility and expert faculty ensure every student succeeds.
</p> <div class="mt-6 border-l-4 border-black/80 pl-5"> <p class="text-sm text-black/50 uppercase tracking-widest">Library Available</p> <p class="text-black/70 mt-1 text-sm">Free access to our resource library for all enrolled students.</p> </div> </div> </div> <div class="space-y-16"> ${[
    {
      num: "01",
      title: "Government Certified Courses",
      desc: "RSCIT — Rajasthan State Certificate in IT. Recognized by the Government of Rajasthan for students and job-seekers."
    },
    {
      num: "02",
      title: "Distance & Online Education",
      desc: "Enroll in UGC-recognized degrees — BA, BCom, BSc, MBA, BCA, MCA, and more after 12th or graduation."
    },
    {
      num: "03",
      title: "Digital Skills for Today",
      desc: "From Excel to Python, Graphic Design to Web Development — build in-demand digital skills with hands-on training."
    }
  ].map((item, idx) => renderTemplate`<div data-reveal="up" class="opacity-0 translate-y-8 transition-all duration-800 ease-out group border-t border-black/10 pt-8"${addAttribute(`transition-delay: ${idx * 200}ms;`, "style")}> <div class="flex gap-8"> <span class="text-sm font-bold opacity-30">${item.num}</span> <div> <h4 class="text-2xl mb-4 group-hover:italic transition-all">${item.title}</h4> <p class="text-black/50 leading-relaxed">${item.desc}</p> </div> </div> </div>`)} </div> </div> </div> </section>`;
}, "D:/Coding Projects/coaching/src/components/Methodology.astro", void 0);

const $$FacultyTeam = createComponent(($$result, $$props, $$slots) => {
  const faculty = [
    {
      name: "Er. Rajesh Sharma",
      role: "Director & Lead Instructor",
      specialties: ["RSCIT", "Web Development", "Python Programming"],
      experience: "12+ Years",
      initials: "RS"
    },
    {
      name: "Ms. Priya Verma",
      role: "Digital Marketing Expert",
      specialties: ["SEO & SEM", "Social Media", "Advanced Digital Marketing"],
      experience: "8+ Years",
      initials: "PV"
    },
    {
      name: "Mr. Sunil Gupta",
      role: "Accounts & Tally Faculty",
      specialties: ["Tally ERP", "GST Accounting", "MS Excel"],
      experience: "10+ Years",
      initials: "SG"
    },
    {
      name: "Ms. Kavita Meena",
      role: "Graphic Design Faculty",
      specialties: ["Photoshop", "CorelDRAW", "DTP & Publishing"],
      experience: "7+ Years",
      initials: "KM"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="faculty" class="py-32 bg-[#0a0a0a] border-t border-white/5"> <div class="container mx-auto px-8"> <!-- Section Header --> <div class="flex flex-col md:flex-row justify-between items-start mb-20"> <div> <span data-reveal="up" class="text-[10px] uppercase tracking-[0.6em] text-white/30 opacity-0 translate-y-4 transition-all duration-800 ease-out inline-block">
Expert Mentors
</span> <h2 data-reveal="up" style="transition-delay: 100ms;" class="text-5xl md:text-8xl italic mt-3 opacity-0 translate-y-8 transition-all duration-800 ease-out">
Our Faculty
</h2> </div> <p data-reveal="up" style="transition-delay: 200ms;" class="max-w-sm text-white/40 mt-8 md:mt-0 font-light leading-relaxed text-sm opacity-0 translate-y-6 transition-all duration-800 ease-out">
Industry practitioners with years of hands-on experience — guiding every student toward a confident career.
</p> </div> <!-- Interactive Spaces Showcase --> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"> <!-- Card 1: Computer Lab / Classroom --> <div data-reveal="up" style="transition-delay: 100ms;" class="relative aspect-[4/3] overflow-hidden group border border-white/10 opacity-0 translate-y-8 transition-all duration-800 ease-out"> <div class="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10"></div> <img src="/images/faculty-classroom.jpg" alt="Bhavya Career Institute Classroom" class="w-full h-full object-cover object-[center_35%] opacity-80 group-hover:opacity-90 group-hover:scale-[1.03] transition-all duration-800"> <div class="absolute bottom-6 left-6 z-20"> <span class="text-[9px] uppercase tracking-[0.4em] text-white/50 block mb-1">Modern Computer Lab</span> <h3 class="text-xl md:text-2xl font-bold tracking-tight text-white">Interactive Classroom</h3> </div> </div> <!-- Card 2: Silent Library --> <div data-reveal="up" style="transition-delay: 200ms;" class="relative aspect-[4/3] overflow-hidden group border border-white/10 opacity-0 translate-y-8 transition-all duration-800 ease-out"> <div class="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10"></div> <img src="/images/library-classroom.jpg" alt="Bhavya Silent Library Room" class="w-full h-full object-cover object-center opacity-80 group-hover:opacity-90 group-hover:scale-[1.03] transition-all duration-800"> <div class="absolute bottom-6 left-6 z-20"> <span class="text-[9px] uppercase tracking-[0.4em] text-white/50 block mb-1">Silent Self-Study Zone</span> <h3 class="text-xl md:text-2xl font-bold tracking-tight text-white">Bhavya Library Room</h3> </div> </div> </div> <!-- Faculty Grid --> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/10"> ${faculty.map((member, idx) => renderTemplate`<div data-reveal="up"${addAttribute(`transition-delay: ${idx * 120}ms;`, "style")} class="group relative bg-[#0a0a0a] p-8 flex flex-col justify-between min-h-[360px] hover:bg-white/[0.04] transition-all duration-500 overflow-hidden opacity-0 translate-y-10 ease-out"> <!-- Background index number --> <span class="absolute top-6 right-6 text-[5rem] font-black text-white/[0.03] leading-none select-none group-hover:text-white/[0.06] transition-all duration-500">
0${idx + 1} </span> <!-- Avatar circle with initials --> <div class="relative z-10"> <div class="w-16 h-16 rounded-full border border-white/10 bg-white/5 flex items-center justify-center mb-6 group-hover:border-white/30 transition-all duration-500"> <span class="text-xl font-bold tracking-widest text-white/60 group-hover:text-white transition-colors"> ${member.initials} </span> </div> <span class="text-[9px] uppercase tracking-[0.35em] text-white/30 group-hover:text-white/60 transition-colors"> ${member.role} </span> <h3 class="text-xl font-semibold mt-2 mb-1 group-hover:translate-x-1 transition-transform duration-500"> ${member.name} </h3> <span class="text-[10px] text-white/25 uppercase tracking-widest"> ${member.experience} Experience
</span> </div> <!-- Specialties --> <div class="relative z-10 mt-8 space-y-2"> ${member.specialties.map((s) => renderTemplate`<div class="flex items-center gap-2"> <span class="w-1 h-1 rounded-full bg-white/30 group-hover:bg-white/70 transition-colors"></span> <span class="text-xs text-white/40 group-hover:text-white/70 transition-colors">${s}</span> </div>`)} </div> <!-- Bottom accent line --> <div class="absolute bottom-0 left-0 h-[2px] w-0 bg-white group-hover:w-full transition-all duration-700"></div> </div>`)} </div> </div> </section>`;
}, "D:/Coding Projects/coaching/src/components/FacultyTeam.astro", void 0);

const $$Reviews = createComponent(($$result, $$props, $$slots) => {
  const reviews = [
    {
      name: "Ankit Sharma",
      course: "RSCIT + Digital Marketing",
      rating: 5,
      text: "Bhavya Career Institute changed my career path completely. After completing RSCIT and Digital Marketing, I got placed in a digital agency in Kota within 2 months. The faculty is extremely supportive and the content is very practical.",
      year: "2024",
      initials: "AS"
    },
    {
      name: "Pooja Meena",
      course: "Tally with Accounting",
      rating: 5,
      text: "The Tally course here is absolutely top notch. Sir explains every concept with real business examples. I cleared my CA Foundation exam alongside this course and it helped me a lot in understanding accounts practically.",
      year: "2024",
      initials: "PM"
    },
    {
      name: "Rahul Kumawat",
      course: "Web Development (PHP & React)",
      rating: 5,
      text: "I had zero coding knowledge when I joined. Within 6 months of the Web Development course I built my own project and got a freelance client. The step-by-step teaching style makes even complex topics easy.",
      year: "2023",
      initials: "RK"
    },
    {
      name: "Suman Yadav",
      course: "Graphic Designing",
      rating: 5,
      text: "The graphic design batch is wonderful. We learned Photoshop, CorelDRAW, and DTP with live projects. Library facility is a bonus — I used to sit and practice for hours. Highly recommend this institute!",
      year: "2024",
      initials: "SY"
    },
    {
      name: "Deepak Gupta",
      course: "Python Programming",
      rating: 5,
      text: "From basic to advanced Python — everything was covered with real-world mini projects. The institute environment is very focused and disciplined. Best decision I made for my career after graduation.",
      year: "2023",
      initials: "DG"
    },
    {
      name: "Neha Jain",
      course: "NIOS 12th + Spoken English",
      rating: 5,
      text: "I completed my 12th through NIOS with the guidance of Bhavya Career Institute. The faculty helped with every doubt patiently. The Spoken English classes gave me the confidence to crack interviews. Truly grateful!",
      year: "2024",
      initials: "NJ"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="reviews" class="py-32 bg-white text-black relative overflow-hidden"> <!-- Ghost background text --> <div class="absolute bottom-0 right-0 opacity-[0.04] pointer-events-none select-none"> <span class="text-[18vw] font-black italic leading-none">Reviews</span> </div> <div class="container mx-auto px-8 relative z-10"> <!-- Header --> <div class="flex flex-col md:flex-row justify-between items-start mb-20"> <div> <span data-reveal="up" class="text-[10px] uppercase tracking-[0.6em] text-black/30 opacity-0 translate-y-4 transition-all duration-800 ease-out inline-block">
Student Stories
</span> <h2 data-reveal="up" style="transition-delay: 100ms;" class="text-5xl md:text-8xl italic mt-3 text-black opacity-0 translate-y-8 transition-all duration-800 ease-out">
What They Say
</h2> </div> <p data-reveal="up" style="transition-delay: 300ms;" class="max-w-xs text-black/40 mt-8 md:mt-0 text-sm font-light leading-relaxed opacity-0 translate-y-6 transition-all duration-800 ease-out">
Real feedback from real students who transformed their careers at Bhavya Career Institute.
</p> </div> <!-- Featured Review Container --> <div class="relative w-full overflow-hidden mb-6 min-h-[400px]"> ${reviews.map((review, i) => renderTemplate`<div${addAttribute(`review-slide absolute inset-0 w-full h-full border border-black/10 p-10 md:p-16 bg-white transition-all duration-500 ease-in-out ${i === 0 ? "opacity-100 translate-y-0 z-10" : "opacity-0 translate-y-8 z-0 pointer-events-none"}`, "class")}${addAttribute(i, "data-index")}> <!-- Quote mark --> <span class="absolute top-8 left-10 text-8xl leading-none text-black/5 font-black select-none">"</span> <!-- Stars --> <div class="flex gap-1 mb-8"> ${Array.from({ length: review.rating }).map(() => renderTemplate`<svg class="w-4 h-4 fill-black" viewBox="0 0 20 20"> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path> </svg>`)} </div> <p class="text-xl md:text-2xl font-light leading-relaxed text-black/70 max-w-4xl mb-12 relative z-10">
"${review.text}"
</p> <div class="flex items-center gap-5"> <div class="w-12 h-12 rounded-full bg-black flex items-center justify-center"> <span class="text-white text-sm font-bold">${review.initials}</span> </div> <div> <p class="font-semibold text-black">${review.name}</p> <p class="text-xs text-black/40 uppercase tracking-widest mt-0.5">${review.course} · ${review.year}</p> </div> </div> </div>`)} </div> <!-- Controls + Dots --> <div class="flex items-center justify-between"> <!-- Dot indicators --> <div class="flex gap-2"> ${reviews.map((_, i) => renderTemplate`<button${addAttribute(`review-dot h-px transition-all duration-300 ${i === 0 ? "w-10 bg-black" : "w-4 bg-black/20"}`, "class")}${addAttribute(i, "data-index")}${addAttribute(`Go to review ${i + 1}`, "aria-label")}></button>`)} </div> <!-- Prev / Next --> <div class="flex gap-3"> <button id="review-prev" class="w-12 h-12 border border-black/20 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 group cursor-pointer" aria-label="Previous review"> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 19l-7-7 7-7"></path> </svg> </button> <button id="review-next" class="w-12 h-12 border border-black/20 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 group cursor-pointer" aria-label="Next review"> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7"></path> </svg> </button> </div> </div> <!-- All reviews grid (mini cards) --> <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mt-12"> ${reviews.map((r, i) => renderTemplate`<button${addAttribute(`review-card text-left p-4 border transition-all duration-300 cursor-pointer ${i === 0 ? "border-black bg-black text-white" : "border-black/10 hover:border-black/40 text-black"}`, "class")}${addAttribute(i, "data-index")}> <div${addAttribute(`review-card-avatar w-8 h-8 rounded-full flex items-center justify-center mb-3 text-xs font-bold transition-colors ${i === 0 ? "bg-white text-black" : "bg-black/10 text-black"}`, "class")}> ${r.initials} </div> <p${addAttribute(`review-card-name text-[10px] font-semibold truncate transition-colors ${i === 0 ? "text-white" : "text-black"}`, "class")}>${r.name}</p> <p${addAttribute(`review-card-course text-[9px] uppercase tracking-wider truncate mt-0.5 transition-colors ${i === 0 ? "text-white/60" : "text-black/40"}`, "class")}>${r.course}</p> </button>`)} </div> </div> </section> ${renderScript($$result, "D:/Coding Projects/coaching/src/components/Reviews.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Coding Projects/coaching/src/components/Reviews.astro", void 0);

const $$AboutUs = createComponent(($$result, $$props, $$slots) => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bhavyacareerinstitute.com/" },
      { "@type": "ListItem", "position": 2, "name": "About Us", "item": "https://bhavyacareerinstitute.com/about-us" }
    ]
  };
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "SEOHead", $$SEOHead, { "title": "About Us | Bhavya Career Institute — Computer Training in Kota", "description": "Learn about Bhavya Career Institute — Kota's trusted computer training center since 2010. Meet our expert faculty, discover our teaching methodology, and read real student reviews.", "canonical": "https://bhavyacareerinstitute.com/about-us", "schema": breadcrumbSchema })}${renderHead()}</head> <body class="bg-[#0a0a0a] text-white overflow-x-hidden selection:bg-white/20"> ${renderComponent($$result, "Cursor", $$Cursor, {})} ${renderComponent($$result, "Navbar", $$Navbar, {})} <main class="w-full pt-24"> ${renderComponent($$result, "Methodology", $$Methodology, {})} ${renderComponent($$result, "FacultyTeam", $$FacultyTeam, {})} ${renderComponent($$result, "Reviews", $$Reviews, {})} </main> ${renderComponent($$result, "Footer", $$Footer, {})} ${renderScript($$result, "D:/Coding Projects/coaching/src/pages/about-us.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "D:/Coding Projects/coaching/src/pages/about-us.astro", void 0);

const $$file = "D:/Coding Projects/coaching/src/pages/about-us.astro";
const $$url = "/about-us";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AboutUs,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
