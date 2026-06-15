import { c as createComponent } from './astro-component_CKnNcFM3.mjs';
import 'piccolore';
import { I as renderTemplate, u as maybeRenderHead } from './sequence_EATudvVE.mjs';
import { r as renderComponent } from './server_C-x_hX_2.mjs';
import { r as renderScript } from './script_BKnuRLFM.mjs';
import { $ as $$DashboardLayout } from './DashboardLayout_hOh4PaRu.mjs';
import { r as requireAuth } from './auth_CFMQny9D.mjs';

const $$Calendar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Calendar;
  const currentUser = await requireAuth(Astro2.cookies);
  if (!currentUser) {
    Astro2.cookies.delete("userSession");
    return Astro2.redirect("/login");
  }
  if (currentUser.role === "TEACHER") return Astro2.redirect("/dashboard/");
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "Calendar — BCI Dashboard", "description": "Your monthly attendance calendar at Bhavya Career Institute.", "currentUser": currentUser, "activePage": "calendar", "data-astro-cid-daqjudws": true }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="page-header" data-astro-cid-daqjudws> <div data-astro-cid-daqjudws> <h2 class="page-title" data-astro-cid-daqjudws>Attendance Calendar</h2> <p class="page-subtitle" data-astro-cid-daqjudws>Your monthly attendance record</p> </div> <div class="cal-nav" data-astro-cid-daqjudws> <button class="cal-nav-btn" id="prev-month" aria-label="Previous month" data-astro-cid-daqjudws> <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-daqjudws><polyline points="15 18 9 12 15 6" data-astro-cid-daqjudws></polyline></svg> </button> <span class="cal-month-label" id="cal-month" data-astro-cid-daqjudws>—</span> <button class="cal-nav-btn" id="next-month" aria-label="Next month" data-astro-cid-daqjudws> <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-daqjudws><polyline points="9 18 15 12 9 6" data-astro-cid-daqjudws></polyline></svg> </button> </div> </div>  <div class="summary-strip" id="summary-strip" data-astro-cid-daqjudws> <div class="summary-item" data-astro-cid-daqjudws> <span class="dot dot-present" data-astro-cid-daqjudws></span> <span class="summary-label" data-astro-cid-daqjudws>Present</span> <span class="summary-val" id="sum-present" data-astro-cid-daqjudws>—</span> </div> <div class="summary-item" data-astro-cid-daqjudws> <span class="dot dot-absent" data-astro-cid-daqjudws></span> <span class="summary-label" data-astro-cid-daqjudws>Absent</span> <span class="summary-val" id="sum-absent" data-astro-cid-daqjudws>—</span> </div> <div class="summary-item" data-astro-cid-daqjudws> <span class="dot dot-holiday" data-astro-cid-daqjudws></span> <span class="summary-label" data-astro-cid-daqjudws>Holiday</span> <span class="summary-val" id="sum-holiday" data-astro-cid-daqjudws>—</span> </div> <div class="summary-divider" data-astro-cid-daqjudws></div> <div class="summary-item" data-astro-cid-daqjudws> <span class="summary-label" data-astro-cid-daqjudws>Attendance</span> <span class="summary-val" id="sum-pct" style="color: white; font-weight: 800;" data-astro-cid-daqjudws>—</span> </div> </div>  <section class="section" data-astro-cid-daqjudws> <div class="calendar-card" data-astro-cid-daqjudws> <!-- Legend --> <div class="cal-legend" data-astro-cid-daqjudws> <span class="legend-item" data-astro-cid-daqjudws><span class="dot dot-present" data-astro-cid-daqjudws></span>Present</span> <span class="legend-item" data-astro-cid-daqjudws><span class="dot dot-absent" data-astro-cid-daqjudws></span>Absent</span> <span class="legend-item" data-astro-cid-daqjudws><span class="dot dot-holiday" data-astro-cid-daqjudws></span>Holiday</span> <span class="legend-item" data-astro-cid-daqjudws><span class="dot dot-today" data-astro-cid-daqjudws></span>Today</span> </div> <div class="overflow-x-auto pb-4" data-astro-cid-daqjudws> <div style="min-width:500px;" data-astro-cid-daqjudws> <!-- Day headers --> <div class="cal-day-headers" data-astro-cid-daqjudws> <span data-astro-cid-daqjudws>Sun</span><span data-astro-cid-daqjudws>Mon</span><span data-astro-cid-daqjudws>Tue</span><span data-astro-cid-daqjudws>Wed</span><span data-astro-cid-daqjudws>Thu</span><span data-astro-cid-daqjudws>Fri</span><span data-astro-cid-daqjudws>Sat</span> </div> <!-- Grid --> <div class="cal-grid" id="cal-grid" data-astro-cid-daqjudws></div> </div> </div> </div> </section>  ${renderScript($$result2, "D:/Coding Projects/coaching/src/pages/dashboard/calendar.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "D:/Coding Projects/coaching/src/pages/dashboard/calendar.astro", void 0);

const $$file = "D:/Coding Projects/coaching/src/pages/dashboard/calendar.astro";
const $$url = "/dashboard/calendar";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Calendar,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
