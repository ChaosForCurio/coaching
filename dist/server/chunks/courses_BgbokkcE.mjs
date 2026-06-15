import { c as createComponent } from './astro-component_CKnNcFM3.mjs';
import 'piccolore';
import { I as renderTemplate, u as maybeRenderHead, _ as addAttribute } from './sequence_EATudvVE.mjs';
import { r as renderComponent } from './server_C-x_hX_2.mjs';
import { r as renderScript } from './script_BKnuRLFM.mjs';
import { $ as $$DashboardLayout } from './DashboardLayout_hOh4PaRu.mjs';
import { d as db, e as enrollments, c as courses, b as attendance } from './schema_CuVt3FVI.mjs';
import { eq } from 'drizzle-orm';
import { r as requireAuth } from './auth_CFMQny9D.mjs';

const $$Courses = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Courses;
  const currentUser = await requireAuth(Astro2.cookies);
  if (!currentUser) {
    Astro2.cookies.delete("userSession");
    return Astro2.redirect("/login");
  }
  const userId = currentUser.id;
  const role = currentUser.role;
  let studentCourses = [];
  let studentAttendance = [];
  let teacherCourses = [];
  let allEnrollments = [];
  if (role === "STUDENT") {
    const myEnrollments = await db.select().from(enrollments).where(eq(enrollments.student_id, userId));
    const allCourses = await db.select().from(courses);
    studentCourses = allCourses.filter((c) => myEnrollments.some((e) => e.course_id === c.id));
    studentAttendance = await db.select().from(attendance).where(eq(attendance.student_id, userId));
  } else {
    const API_URL = "";
    try {
      const response = await fetch(`${API_URL}/api/courses`, {
        headers: {
          cookie: Astro2.request.headers.get("cookie") || ""
        }
      });
      if (response.ok) {
        teacherCourses = await response.json();
      } else {
        console.error(`API response error: ${response.status}`);
        teacherCourses = [];
      }
    } catch (err) {
      console.error("Failed to fetch courses from API:", err);
      teacherCourses = [];
    }
    allEnrollments = await db.select().from(enrollments);
  }
  const dbPayload = { currentUser, studentCourses, studentAttendance, teacherCourses, allEnrollments };
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "Courses — BCI Dashboard", "description": "Course-wise attendance breakdown at Bhavya Career Institute.", "currentUser": currentUser, "activePage": "courses", "data-astro-cid-lp3qo72s": true }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div id="dashboard-payload"${addAttribute(JSON.stringify(dbPayload), "data-payload")} class="hidden" data-astro-cid-lp3qo72s></div>  <div class="page-header" data-astro-cid-lp3qo72s> <div class="header-text" data-astro-cid-lp3qo72s> <h2 class="page-title" id="page-title" data-astro-cid-lp3qo72s>Courses</h2> <p class="page-subtitle" id="page-subtitle" data-astro-cid-lp3qo72s>Your enrolled courses and attendance overview</p> </div> <button class="download-btn" id="download-btn" data-astro-cid-lp3qo72s> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-lp3qo72s><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" data-astro-cid-lp3qo72s></path><polyline points="7 10 12 15 17 10" data-astro-cid-lp3qo72s></polyline><line x1="12" y1="15" x2="12" y2="3" data-astro-cid-lp3qo72s></line></svg>
Download Report
</button> </div>  <section class="section" id="courses-container" data-astro-cid-lp3qo72s> <div class="courses-grid" id="courses-grid" data-astro-cid-lp3qo72s> <!-- Loading State --> <div class="course-card skeleton" data-astro-cid-lp3qo72s> <div class="skeleton-header" data-astro-cid-lp3qo72s></div> <div class="skeleton-body" data-astro-cid-lp3qo72s></div> </div> <div class="course-card skeleton" data-astro-cid-lp3qo72s> <div class="skeleton-header" data-astro-cid-lp3qo72s></div> <div class="skeleton-body" data-astro-cid-lp3qo72s></div> </div> </div> </section>  ${renderScript($$result2, "D:/Coding Projects/coaching/src/pages/dashboard/courses.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "D:/Coding Projects/coaching/src/pages/dashboard/courses.astro", void 0);

const $$file = "D:/Coding Projects/coaching/src/pages/dashboard/courses.astro";
const $$url = "/dashboard/courses";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Courses,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
