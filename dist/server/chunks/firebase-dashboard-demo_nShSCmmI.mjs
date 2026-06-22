import { c as createComponent } from './astro-component_EmTaXPWV.mjs';
import 'piccolore';
import { b5 as renderHead, I as renderTemplate } from './sequence_DI9gLznW.mjs';
import 'clsx';
import { r as renderScript } from './script_BITFEDOq.mjs';

const $$FirebaseDashboardDemo = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en" data-astro-cid-jkdrm3w4> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>Firebase Auth Demo - Dashboard</title>${renderHead()}</head> <body data-astro-cid-jkdrm3w4> <div class="container" data-astro-cid-jkdrm3w4> <div id="loading" data-astro-cid-jkdrm3w4>Loading user state...</div> <div id="content" data-astro-cid-jkdrm3w4> <div class="header" data-astro-cid-jkdrm3w4> <div data-astro-cid-jkdrm3w4> <h1 id="welcome-msg" data-astro-cid-jkdrm3w4>Dashboard</h1> <p data-astro-cid-jkdrm3w4>Logged in as: <span id="user-email" data-astro-cid-jkdrm3w4></span> <span id="user-role" class="badge" data-astro-cid-jkdrm3w4></span></p> </div> <button id="logout-btn" data-astro-cid-jkdrm3w4>Log Out</button> </div> <div id="student-content" style="display: none;" data-astro-cid-jkdrm3w4> <h2 data-astro-cid-jkdrm3w4>Student Area</h2> <p data-astro-cid-jkdrm3w4>This content is only visible to students.</p> <ul data-astro-cid-jkdrm3w4> <li data-astro-cid-jkdrm3w4>View My Courses</li> <li data-astro-cid-jkdrm3w4>Submit Assignments</li> <li data-astro-cid-jkdrm3w4>View Grades</li> </ul> </div> <div id="teacher-content" style="display: none;" data-astro-cid-jkdrm3w4> <h2 data-astro-cid-jkdrm3w4>Teacher Area</h2> <p data-astro-cid-jkdrm3w4>This content is only visible to teachers.</p> <ul data-astro-cid-jkdrm3w4> <li data-astro-cid-jkdrm3w4>Manage Courses</li> <li data-astro-cid-jkdrm3w4>Grade Assignments</li> <li data-astro-cid-jkdrm3w4>View Student Roster</li> </ul> </div> </div> </div> ${renderScript($$result, "D:/Coding Projects/coaching/src/pages/firebase-dashboard-demo.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "D:/Coding Projects/coaching/src/pages/firebase-dashboard-demo.astro", void 0);

const $$file = "D:/Coding Projects/coaching/src/pages/firebase-dashboard-demo.astro";
const $$url = "/firebase-dashboard-demo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$FirebaseDashboardDemo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
