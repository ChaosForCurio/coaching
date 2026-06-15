import { c as createComponent } from './astro-component_BEZRvB6d.mjs';
import 'piccolore';
import { u as maybeRenderHead, _ as addAttribute, I as renderTemplate, bk as renderHead } from './sequence_Dp-Tbm17.mjs';
import { r as renderComponent } from './server_DcQuEEIJ.mjs';
import { $ as $$Navbar } from './global_CSwFHvEO.mjs';
import { $ as $$SEOHead, a as $$Cursor } from './Cursor_BSpRdSDE.mjs';
import 'clsx';
import { r as renderScript } from './script_BByak__J.mjs';
import { $ as $$Footer } from './Footer_BsiqfYXn.mjs';

const faqsData = [
	{
		question: "What is the admission process at Bhavya Career Institute?",
		answer: "You can enroll by visiting our campus in Mahaveer Nagar Extension, Kota, or by calling/WhatsApp-ing us at +91 96949 32391. We also offer an online inquiry form on our Contact page. Our team will guide you through course selection, documentation, and fee payment."
	},
	{
		question: "Do you provide placement assistance after course completion?",
		answer: "Yes! We provide 100% placement assistance to all our students. We have tie-ups with local businesses, accounting firms, and IT companies in Kota and nearby cities. Our dedicated placement team helps with resume building, mock interviews, and job referrals."
	},
	{
		question: "Are the courses certified by a recognized authority?",
		answer: "Yes. All our courses come with government-recognized certificates. The DCA and computer courses are affiliated with reputed certification bodies, making your qualification valid for government jobs, private sector roles, and higher education admissions."
	},
	{
		question: "Can I attend a free demo class before enrolling?",
		answer: "Absolutely! We offer 2 free demo classes for all our courses — no payment or commitment required. This lets you experience our teaching style and decide if the course is the right fit for you. Just call or WhatsApp us to schedule your demo."
	},
	{
		question: "What is the fee structure for the courses?",
		answer: "Course fees vary depending on the program. As a general range, short-term courses like Tally and basic computer start from ₹3,000, while comprehensive programs like DCA and Python are priced higher. Please visit the individual course page or contact us directly for the latest fee details and instalment options."
	},
	{
		question: "What courses does Bhavya Career Institute offer?",
		answer: "We offer a wide range of computer and digital courses including: DCA (Diploma in Computer Applications), Tally with GST, Python Programming, Web Designing, Digital Marketing, RSCIT, MS Office, and more. Visit our All Courses page for the complete list."
	},
	{
		question: "What are your institute timings and working days?",
		answer: "Our institute is open Monday to Saturday from 9:00 AM to 7:00 PM. We are closed on Sundays. Batches are available in the morning, afternoon, and evening to suit different schedules — including working professionals and students."
	},
	{
		question: "Is there an EMI or instalment option for fees?",
		answer: "Yes, we understand that lump-sum payment may be difficult for some students. We offer flexible instalment plans for most courses. Please speak with our admissions team to discuss a payment schedule that works for you."
	}
];

const $$FAQ = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="faq-section" class="relative min-h-screen bg-[#0a0a0a] overflow-hidden py-28 px-5 sm:px-8 md:px-16" data-astro-cid-al2ca2vr> <!-- Background glows --> <div class="pointer-events-none absolute inset-0 z-0" data-astro-cid-al2ca2vr> <div class="absolute top-[-8%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[#7c3aed]/10 blur-[130px]" data-astro-cid-al2ca2vr></div> <div class="absolute bottom-[-8%] left-[-5%] w-[450px] h-[450px] rounded-full bg-[#06b6d4]/8 blur-[120px]" data-astro-cid-al2ca2vr></div> <!-- Grid texture --> <div class="absolute inset-0 opacity-[0.022]" style="background-image: linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px); background-size: 60px 60px;" data-astro-cid-al2ca2vr></div> </div> <div class="relative z-10 max-w-4xl mx-auto" data-astro-cid-al2ca2vr> <!-- Header --> <div class="mb-16 faq-reveal" data-astro-cid-al2ca2vr> <span class="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.55em] text-white/30 mb-5 font-medium" data-astro-cid-al2ca2vr> <span class="w-5 h-px bg-white/20" data-astro-cid-al2ca2vr></span>
Have Questions?
<span class="w-5 h-px bg-white/20" data-astro-cid-al2ca2vr></span> </span> <h2 class="text-5xl sm:text-6xl md:text-7xl font-black leading-none tracking-tight mb-5" style="font-family: 'Syne', sans-serif;" data-astro-cid-al2ca2vr>
Frequently<br data-astro-cid-al2ca2vr><span class="faq-gradient-text" data-astro-cid-al2ca2vr>Asked</span> Questions
</h2> <p class="text-white/40 text-base leading-relaxed max-w-xl" style="font-family: 'Inter', sans-serif;" data-astro-cid-al2ca2vr>
Got questions? We've got answers. If you don't see what you're looking for,
<a href="/contact" class="text-[#a78bfa]/70 hover:text-[#a78bfa] transition-colors underline underline-offset-3" data-astro-cid-al2ca2vr>contact us directly</a>.
</p> <!-- Divider --> <div class="mt-10 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" data-astro-cid-al2ca2vr></div> </div> <!-- FAQ Accordion --> <div class="space-y-3" id="faq-list" data-astro-cid-al2ca2vr> ${faqsData.map((faq, index) => renderTemplate`<div class="faq-item faq-reveal"${addAttribute(`transition-delay: ${index * 60}ms`, "style")} data-astro-cid-al2ca2vr> <button class="faq-trigger w-full text-left" aria-expanded="false"${addAttribute(index, "data-faq-index")} data-astro-cid-al2ca2vr> <div class="faq-trigger-inner flex justify-between items-center gap-4 p-5 sm:p-6" data-astro-cid-al2ca2vr> <div class="flex items-center gap-4" data-astro-cid-al2ca2vr> <span class="faq-number" data-astro-cid-al2ca2vr>${String(index + 1).padStart(2, "0")}</span> <span class="text-white/85 text-sm sm:text-base font-medium leading-snug" style="font-family: 'Inter', sans-serif;" data-astro-cid-al2ca2vr> ${faq.question} </span> </div> <div class="faq-icon flex-shrink-0" data-astro-cid-al2ca2vr> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="faq-chevron transition-transform duration-400 text-white/30" data-astro-cid-al2ca2vr> <path d="M6 9l6 6 6-6" data-astro-cid-al2ca2vr></path> </svg> </div> </div> </button> <div class="faq-answer overflow-hidden" style="max-height: 0; transition: max-height 0.4s cubic-bezier(0.16,1,0.3,1);" data-astro-cid-al2ca2vr> <div class="px-5 sm:px-6 pb-5 sm:pb-6 pt-0" data-astro-cid-al2ca2vr> <div class="pl-10 sm:pl-[52px] text-white/50 text-sm leading-relaxed" style="font-family: 'Inter', sans-serif;" data-astro-cid-al2ca2vr> ${faq.answer} </div> </div> </div> </div>`)} </div> <!-- Bottom CTA --> <div class="mt-16 faq-reveal" data-astro-cid-al2ca2vr> <div class="faq-cta-card flex flex-col sm:flex-row items-center justify-between gap-6 p-6 sm:p-8 rounded-2xl" data-astro-cid-al2ca2vr> <div class="text-center sm:text-left" data-astro-cid-al2ca2vr> <p class="text-white font-bold text-lg" style="font-family: 'Syne', sans-serif;" data-astro-cid-al2ca2vr>Still have questions?</p> <p class="text-white/40 text-sm mt-1" style="font-family: 'Inter', sans-serif;" data-astro-cid-al2ca2vr>Our team is happy to help. Reach out anytime.</p> </div> <div class="flex items-center gap-3" data-astro-cid-al2ca2vr> <a href="https://wa.me/919694932391" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-sm font-semibold transition-all duration-250 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(37,211,102,0.35)]" style="font-family: 'Outfit', sans-serif;" data-astro-cid-al2ca2vr> <svg viewBox="0 0 24 24" fill="white" class="w-4 h-4" data-astro-cid-al2ca2vr> <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 2.01 14.069.987 11.48.987 6.045.987 1.62 5.357 1.616 10.787c-.001 1.748.47 3.447 1.36 4.966l-1.001 3.655 3.748-.973l.334.218z" data-astro-cid-al2ca2vr></path> </svg>
WhatsApp
</a> <a href="/contact" class="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] text-white text-sm font-semibold transition-all duration-250 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(124,58,237,0.4)]" style="font-family: 'Outfit', sans-serif;" data-astro-cid-al2ca2vr> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-al2ca2vr><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" data-astro-cid-al2ca2vr></path></svg>
Contact Us
</a> </div> </div> </div> </div> </section>  ${renderScript($$result, "D:/Coding Projects/coaching/src/components/FAQ.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Coding Projects/coaching/src/components/FAQ.astro", void 0);

const $$Faq = createComponent(($$result, $$props, $$slots) => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the admission process at Bhavya Career Institute?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can enroll by visiting our campus in Mahaveer Nagar Extension, Kota, or by calling/WhatsApp-ing us at +91 96949 32391. We also offer an online inquiry form on our Contact page. Our team will guide you through course selection, documentation, and fee payment."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide placement assistance after course completion?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! We provide 100% placement assistance to all our students. We have tie-ups with local businesses, accounting firms, and IT companies in Kota and nearby cities. Our dedicated placement team helps with resume building, mock interviews, and job referrals."
            }
          },
          {
            "@type": "Question",
            "name": "Are the courses certified by a recognized authority?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. All our courses come with government-recognized certificates. The DCA and computer courses are affiliated with reputed certification bodies, making your qualification valid for government jobs, private sector roles, and higher education admissions."
            }
          },
          {
            "@type": "Question",
            "name": "Can I attend a free demo class before enrolling?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely! We offer 2 free demo classes for all our courses — no payment or commitment required. This lets you experience our teaching style and decide if the course is the right fit for you. Just call or WhatsApp us to schedule your demo."
            }
          },
          {
            "@type": "Question",
            "name": "What is the fee structure for the courses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Course fees vary depending on the program. Short-term courses like Tally and basic computer start from ₹3,000, while comprehensive programs like DCA and Python are priced higher. Please visit the individual course page or contact us directly for the latest fee details and instalment options."
            }
          },
          {
            "@type": "Question",
            "name": "What courses does Bhavya Career Institute offer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We offer a wide range of computer and digital courses including: DCA (Diploma in Computer Applications), Tally with GST, Python Programming, Web Designing, Digital Marketing, RSCIT, MS Office, and more."
            }
          },
          {
            "@type": "Question",
            "name": "What are your institute timings and working days?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our institute is open Monday to Saturday from 9:00 AM to 7:00 PM. We are closed on Sundays. Batches are available in the morning, afternoon, and evening to suit different schedules."
            }
          },
          {
            "@type": "Question",
            "name": "Is there an EMI or instalment option for fees?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we offer flexible instalment plans for most courses. Please speak with our admissions team to discuss a payment schedule that works for you."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://coaching-ts8v.onrender.com/" },
          { "@type": "ListItem", "position": 2, "name": "FAQ", "item": "https://coaching-ts8v.onrender.com/faq" }
        ]
      }
    ]
  };
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "SEOHead", $$SEOHead, { "title": "FAQ | Bhavya Career Institute — Computer Courses in Kota", "description": "Find answers to common questions about our computer courses, admissions, fees, placement assistance, and certification at Bhavya Career Institute, Kota. Free demo classes available.", "canonical": "https://coaching-ts8v.onrender.com/faq", "schema": faqSchema })}${renderHead()}</head> <body class="bg-[#0a0a0a] text-white overflow-x-hidden selection:bg-white/20"> ${renderComponent($$result, "Cursor", $$Cursor, {})} ${renderComponent($$result, "Navbar", $$Navbar, {})} <main class="w-full min-h-screen pt-24"> ${renderComponent($$result, "FAQComponent", $$FAQ, {})} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "D:/Coding Projects/coaching/src/pages/faq.astro", void 0);

const $$file = "D:/Coding Projects/coaching/src/pages/faq.astro";
const $$url = "/faq";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Faq,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
