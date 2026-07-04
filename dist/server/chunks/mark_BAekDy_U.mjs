globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_FVi2OYOm.mjs";
import { K as renderTemplate, w as maybeRenderHead, a0 as addAttribute } from "./sequence_CMysm0T6.mjs";
import { r as renderComponent } from "./worker-entry_BXKqGpOE.mjs";
import { r as renderScript } from "./script_CEZsg4QJ.mjs";
import { $ as $$DashboardLayout } from "./DashboardLayout_W9lOwAa4.mjs";
import { d as db, c as courses, e as eq, u as users, g as enrollments, h as attendance } from "./schema_AfQQoxGU.mjs";
import { r as requireAuth } from "./auth_B_F03Kif.mjs";
const $$Mark = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Mark;
  const currentUser = await requireAuth(Astro2.cookies);
  if (!currentUser) {
    Astro2.cookies.delete("userSession");
    return Astro2.redirect("/login");
  }
  const userId = currentUser.id;
  if (currentUser.role === "STUDENT") return Astro2.redirect("/dashboard/");
  const teacherCourses = await db.select().from(courses).where(eq(courses.teacher_id, userId));
  const allStudents = await db.select().from(users).where(eq(users.role, "STUDENT"));
  const allEnrollments = await db.select().from(enrollments);
  const allAttendance = await db.select().from(attendance);
  const dbPayload = {
    currentUser,
    teacherCourses,
    allStudents,
    allEnrollments,
    allAttendance
  };
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "Mark Attendance — BCI Dashboard", "description": "Mark student attendance for your courses at Bhavya Computer Classes.", "currentUser": currentUser, "activePage": "mark", "data-astro-cid-zjuwn7xy": true }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div id="dashboard-payload"${addAttribute(JSON.stringify(dbPayload), "data-payload")} class="hidden" data-astro-cid-zjuwn7xy></div>  <div class="page-header" data-astro-cid-zjuwn7xy> <div data-astro-cid-zjuwn7xy> <h2 class="page-title" data-astro-cid-zjuwn7xy>Mark Attendance</h2> <p class="page-subtitle" data-astro-cid-zjuwn7xy>Record attendance for your students</p> </div> <div class="header-controls" data-astro-cid-zjuwn7xy> <select class="section-select" id="mark-course" data-astro-cid-zjuwn7xy> <option value="" data-astro-cid-zjuwn7xy>Select Course…</option> </select> <input type="date" class="section-select" id="mark-date" data-astro-cid-zjuwn7xy> </div> </div>  <section class="section" data-astro-cid-zjuwn7xy> <div class="section-header" data-astro-cid-zjuwn7xy> <h3 class="section-title" id="table-label" data-astro-cid-zjuwn7xy>Select a course and date</h3> <div id="attendance-summary" class="attendance-summary hidden" data-astro-cid-zjuwn7xy> <span class="sum-chip sum-present" id="chip-present" data-astro-cid-zjuwn7xy>0 Present</span> <span class="sum-chip sum-absent" id="chip-absent" data-astro-cid-zjuwn7xy>0 Absent</span> </div> </div> <!-- Skeleton State --> <div id="mark-skeleton" class="mark-table-wrap" style="padding: 24px;" data-astro-cid-zjuwn7xy> <div class="skeleton-box" style="width: 100%; height: 40px; margin-bottom: 16px; border-radius: 8px;" data-astro-cid-zjuwn7xy></div> <div class="skeleton-box" style="width: 100%; height: 60px; margin-bottom: 8px; border-radius: 8px;" data-astro-cid-zjuwn7xy></div> <div class="skeleton-box" style="width: 100%; height: 60px; margin-bottom: 8px; border-radius: 8px;" data-astro-cid-zjuwn7xy></div> <div class="skeleton-box" style="width: 100%; height: 60px; margin-bottom: 8px; border-radius: 8px;" data-astro-cid-zjuwn7xy></div> </div> <!-- Actual Content --> <div class="mark-table-wrap hidden" id="mark-actual" data-astro-cid-zjuwn7xy> <table class="courses-table" data-astro-cid-zjuwn7xy> <thead data-astro-cid-zjuwn7xy> <tr data-astro-cid-zjuwn7xy> <th data-astro-cid-zjuwn7xy>Roll No.</th> <th data-astro-cid-zjuwn7xy>Student Name</th> <th data-astro-cid-zjuwn7xy> <div style="display:flex; align-items:center; gap:8px;" data-astro-cid-zjuwn7xy>
Status
<button class="bulk-btn bulk-p" id="bulk-mark-p" title="Mark All Present" data-astro-cid-zjuwn7xy>All P</button> <button class="bulk-btn bulk-a" id="bulk-mark-a" title="Mark All Absent" data-astro-cid-zjuwn7xy>All A</button> </div> </th> <th data-astro-cid-zjuwn7xy>Remarks</th> </tr> </thead> <tbody id="mark-tbody" data-astro-cid-zjuwn7xy> <tr data-astro-cid-zjuwn7xy><td colspan="4" class="empty-cell" data-astro-cid-zjuwn7xy>Please select a course and date to load students.</td></tr> </tbody> </table> </div> <div class="save-row" id="save-row" style="display:none;" data-astro-cid-zjuwn7xy> <button class="save-btn" id="save-attendance" data-astro-cid-zjuwn7xy> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-zjuwn7xy><polyline points="20 6 9 17 4 12" data-astro-cid-zjuwn7xy></polyline></svg>
Save Attendance
</button> </div> </section>  ${renderScript($$result2, "D:/Coding Projects/coaching/src/pages/dashboard/mark.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "D:/Coding Projects/coaching/src/pages/dashboard/mark.astro", void 0);
const $$file = "D:/Coding Projects/coaching/src/pages/dashboard/mark.astro";
const $$url = "/dashboard/mark";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Mark,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
