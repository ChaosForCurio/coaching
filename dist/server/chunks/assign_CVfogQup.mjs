globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_FVi2OYOm.mjs";
import { K as renderTemplate, bn as defineScriptVars, a0 as addAttribute, F as Fragment, w as maybeRenderHead } from "./sequence_CMysm0T6.mjs";
import { r as renderComponent } from "./worker-entry_BXKqGpOE.mjs";
import { $ as $$DashboardLayout } from "./DashboardLayout_W9lOwAa4.mjs";
import { d as db, c as courses, u as users, e as eq, g as enrollments } from "./schema_AfQQoxGU.mjs";
import { r as requireAuth } from "./auth_B_F03Kif.mjs";
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Assign = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Assign;
  const currentUser = await requireAuth(Astro2.cookies);
  if (!currentUser) {
    Astro2.cookies.delete("userSession");
    return Astro2.redirect("/login");
  }
  const userId = currentUser.id;
  if (currentUser.role === "STUDENT") return Astro2.redirect("/dashboard/");
  const allCourses = await db.select().from(courses);
  allCourses.filter((c) => c.teacher_id === userId);
  const allStudents = await db.select().from(users).where(eq(users.role, "STUDENT"));
  const allEnrollments = await db.select().from(enrollments);
  const successMsg = Astro2.url.searchParams.get("success");
  const errorMsg = Astro2.url.searchParams.get("error");
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "Assign Course — BCI Dashboard", "description": "Assign students to courses at Bhavya Computer Classes.", "currentUser": currentUser, "activePage": "assign", "data-astro-cid-j6rybmju": true }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template(["  ", '<div class="page-header" data-astro-cid-j6rybmju> <div data-astro-cid-j6rybmju> <h2 class="page-title" data-astro-cid-j6rybmju>Assign Course</h2> <p class="page-subtitle" data-astro-cid-j6rybmju>Enroll a student to one of your courses</p> </div> </div> ', "", "", ' <section class="section" data-astro-cid-j6rybmju> <!-- Skeleton State --> <div id="assign-skeleton" class="form-card" data-astro-cid-j6rybmju> <div class="form-grid" data-astro-cid-j6rybmju> <div class="form-group" data-astro-cid-j6rybmju> <div class="skeleton-box" style="width: 100px; height: 14px; margin-bottom: 10px;" data-astro-cid-j6rybmju></div> <div class="skeleton-box" style="width: 100%; height: 200px; border-radius: 14px;" data-astro-cid-j6rybmju></div> </div> <div class="form-group" data-astro-cid-j6rybmju> <div class="skeleton-box" style="width: 150px; height: 14px; margin-bottom: 10px;" data-astro-cid-j6rybmju></div> <div class="skeleton-box" style="width: 100%; height: 48px; border-radius: 14px;" data-astro-cid-j6rybmju></div> </div> </div> <div style="display: flex; justify-content: flex-end; margin-top: 24px;" data-astro-cid-j6rybmju> <div class="skeleton-box" style="width: 160px; height: 44px; border-radius: 14px;" data-astro-cid-j6rybmju></div> </div> </div> <div class="form-card hidden" id="assign-actual" data-astro-cid-j6rybmju> <form action="/api/assign-course" method="POST" id="assign-form" data-astro-cid-j6rybmju> <div class="form-grid" data-astro-cid-j6rybmju> <!-- Student Select --> <div class="form-group" data-astro-cid-j6rybmju> <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;" data-astro-cid-j6rybmju> <label class="form-label" data-astro-cid-j6rybmju> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-j6rybmju><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" data-astro-cid-j6rybmju></path><circle cx="12" cy="7" r="4" data-astro-cid-j6rybmju></circle></svg>\nSelect Students\n</label> <input type="text" id="student-search" class="form-select search-mini" placeholder="Search students..." autocomplete="off" data-astro-cid-j6rybmju> </div> <div class="checkbox-list" id="student-checkboxes" data-astro-cid-j6rybmju> ', " </div> ", ' </div> <!-- Course Select --> <div class="form-group" data-astro-cid-j6rybmju> <label class="form-label" for="course-select" data-astro-cid-j6rybmju> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-j6rybmju><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" data-astro-cid-j6rybmju></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" data-astro-cid-j6rybmju></path></svg>\nSelect or Create Course\n</label> <div class="course-input-wrapper" data-astro-cid-j6rybmju> <select id="course-select" class="form-select" data-astro-cid-j6rybmju> <option value="" disabled selected data-astro-cid-j6rybmju>Choose a course from the list…</option> ', ' <option value="__NEW__" style="color: #22d3ee; font-weight: bold;" data-astro-cid-j6rybmju>+ Create a new course...</option> </select> <div id="new-course-container" class="hidden" style="margin-top: 12px;" data-astro-cid-j6rybmju> <div style="display: flex; gap: 12px; align-items: center;" data-astro-cid-j6rybmju> <input type="text" id="course-input-text" class="form-select" placeholder="Type new course name…" style="flex: 1;" autocomplete="off" data-astro-cid-j6rybmju> <button type="button" id="cancel-new-course" class="cancel-btn" title="Cancel and select from list" data-astro-cid-j6rybmju> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-j6rybmju><line x1="18" y1="6" x2="6" y2="18" data-astro-cid-j6rybmju></line><line x1="6" y1="6" x2="18" y2="18" data-astro-cid-j6rybmju></line></svg> </button> </div> </div> <input type="hidden" name="course_name" id="actual-course-input" required data-astro-cid-j6rybmju> </div> ', ' </div> </div> <!-- Preview card (shows after selection) --> <div id="preview-card" class="preview-card hidden" data-astro-cid-j6rybmju> <div class="preview-icon" data-astro-cid-j6rybmju> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-j6rybmju><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" data-astro-cid-j6rybmju></path><polyline points="22 4 12 14.01 9 11.01" data-astro-cid-j6rybmju></polyline></svg> </div> <p class="preview-text" data-astro-cid-j6rybmju>\nAssigning <strong id="preview-student" data-astro-cid-j6rybmju>—</strong> to <strong id="preview-course" data-astro-cid-j6rybmju>—</strong> </p> </div> <div class="form-submit-row" data-astro-cid-j6rybmju> <button type="submit" class="submit-btn" id="submit-btn" data-astro-cid-j6rybmju> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-astro-cid-j6rybmju><line x1="12" y1="5" x2="12" y2="19" data-astro-cid-j6rybmju></line><line x1="5" y1="12" x2="19" y2="12" data-astro-cid-j6rybmju></line></svg>\nAssign Course\n</button> </div> </form> </div> </section>  <section class="section" data-astro-cid-j6rybmju> <div class="section-header" data-astro-cid-j6rybmju> <h3 class="section-title" data-astro-cid-j6rybmju>How it works</h3> </div> <div class="info-grid" data-astro-cid-j6rybmju> <div class="info-card" data-astro-cid-j6rybmju> <div class="info-step" data-astro-cid-j6rybmju>01</div> <div data-astro-cid-j6rybmju> <p class="info-title" data-astro-cid-j6rybmju>Select Student</p> <p class="info-desc" data-astro-cid-j6rybmju>\nChoose the student you want to enroll from the dropdown list.\n</p> </div> </div> <div class="info-card" data-astro-cid-j6rybmju> <div class="info-step" data-astro-cid-j6rybmju>02</div> <div data-astro-cid-j6rybmju> <p class="info-title" data-astro-cid-j6rybmju>Select Course</p> <p class="info-desc" data-astro-cid-j6rybmju>\nPick one of your courses to assign the student to.\n</p> </div> </div> <div class="info-card" data-astro-cid-j6rybmju> <div class="info-step" data-astro-cid-j6rybmju>03</div> <div data-astro-cid-j6rybmju> <p class="info-title" data-astro-cid-j6rybmju>Confirm & Assign</p> <p class="info-desc" data-astro-cid-j6rybmju>\nClick Assign Course to instantly enroll the student.\n</p> </div> </div> </div> </section>  <script>(function(){', `
    // Skeleton Removal
    setTimeout(() => {
      document.getElementById('assign-skeleton')?.remove();
      document.getElementById('assign-actual')?.classList.remove('hidden');
    }, 150);

    const actualCourseInput = document.getElementById('actual-course-input');
    const courseSelect = document.getElementById('course-select');
    const newCourseContainer = document.getElementById('new-course-container');
    const courseInputText = document.getElementById('course-input-text');
    const cancelNewCourse = document.getElementById('cancel-new-course');

    const previewCard = document.getElementById('preview-card');
    const previewStudent = document.getElementById('preview-student');
    const previewCourse = document.getElementById('preview-course');
    const checkboxes = document.querySelectorAll(
      '#student-checkboxes .student-option'
    );
    const studentSearch = document.getElementById('student-search');
    const assignForm = document.getElementById('assign-form');
    const submitBtn = document.getElementById('submit-btn');

    studentSearch.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase();
      checkboxes.forEach((label) => {
        const name = label.getAttribute('data-name');
        const email = label.getAttribute('data-email');
        if (name.includes(term) || email.includes(term)) {
          label.classList.remove('hidden');
        } else {
          label.classList.add('hidden');
        }
      });
    });

    assignForm.addEventListener('submit', (e) => {
      const selectedCount = document.querySelectorAll(
        '#student-checkboxes input:checked'
      ).length;
      const courseName = actualCourseInput.value.trim();

      if (selectedCount === 0 || !courseName) {
        e.preventDefault();
        alert('Please select at least one student and a course.');
        return;
      }

      submitBtn.disabled = true;
      submitBtn.innerHTML = \`<svg class="animate-spin" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Assigning...\`;
      submitBtn.style.opacity = '0.7';
      submitBtn.style.cursor = 'not-allowed';
    });

    function syncCourseValue() {
      if (courseSelect.value === '__NEW__') {
        actualCourseInput.value = courseInputText.value.trim();
      } else {
        actualCourseInput.value = courseSelect.value || '';
      }
      updateStudentOptions();
      updatePreview();
    }

    courseSelect.addEventListener('change', (e) => {
      if (e.target.value === '__NEW__') {
        newCourseContainer.classList.remove('hidden');
        courseSelect.classList.add('hidden');
        courseInputText.focus();
      }
      syncCourseValue();
    });

    courseInputText.addEventListener('input', syncCourseValue);

    cancelNewCourse.addEventListener('click', () => {
      newCourseContainer.classList.add('hidden');
      courseSelect.classList.remove('hidden');
      courseSelect.value = '';
      courseInputText.value = '';
      syncCourseValue();
    });

    function updateStudentOptions() {
      const selectedCourseName = actualCourseInput.value.trim();
      const course = allCourses.find(
        (c) => c.title.toLowerCase() === selectedCourseName.toLowerCase()
      );

      if (!course) {
        // Enable all
        checkboxes.forEach((label) => {
          const cb = label.querySelector('input');
          const badge = label.querySelector('.already-enrolled-badge');
          cb.disabled = false;
          label.classList.remove('disabled');
          badge.classList.add('hidden');
        });
        return;
      }

      // Find enrolled student IDs for this course
      const enrolledStudentIds = allEnrollments
        .filter((e) => e.course_id === course.id)
        .map((e) => e.student_id);

      checkboxes.forEach((label) => {
        const studentId = parseInt(label.getAttribute('data-id'));
        const cb = label.querySelector('input');
        const badge = label.querySelector('.already-enrolled-badge');

        if (enrolledStudentIds.includes(studentId)) {
          cb.disabled = true;
          cb.checked = false;
          label.classList.add('disabled');
          badge.classList.remove('hidden');
        } else {
          cb.disabled = false;
          label.classList.remove('disabled');
          badge.classList.add('hidden');
        }
      });
    }

    function updatePreview() {
      const selectedCount = document.querySelectorAll(
        '#student-checkboxes input:checked'
      ).length;
      const courseName = actualCourseInput.value.trim();
      if (selectedCount > 0 && courseName) {
        previewStudent.textContent = \`\${selectedCount} student(s)\`;
        previewCourse.textContent = courseName;
        previewCard.classList.remove('hidden');
      } else {
        previewCard.classList.add('hidden');
      }
    }

    document
      .getElementById('student-checkboxes')
      .addEventListener('change', updatePreview);

    // Initial run
    syncCourseValue();
  })();<\/script> `], ["  ", '<div class="page-header" data-astro-cid-j6rybmju> <div data-astro-cid-j6rybmju> <h2 class="page-title" data-astro-cid-j6rybmju>Assign Course</h2> <p class="page-subtitle" data-astro-cid-j6rybmju>Enroll a student to one of your courses</p> </div> </div> ', "", "", ' <section class="section" data-astro-cid-j6rybmju> <!-- Skeleton State --> <div id="assign-skeleton" class="form-card" data-astro-cid-j6rybmju> <div class="form-grid" data-astro-cid-j6rybmju> <div class="form-group" data-astro-cid-j6rybmju> <div class="skeleton-box" style="width: 100px; height: 14px; margin-bottom: 10px;" data-astro-cid-j6rybmju></div> <div class="skeleton-box" style="width: 100%; height: 200px; border-radius: 14px;" data-astro-cid-j6rybmju></div> </div> <div class="form-group" data-astro-cid-j6rybmju> <div class="skeleton-box" style="width: 150px; height: 14px; margin-bottom: 10px;" data-astro-cid-j6rybmju></div> <div class="skeleton-box" style="width: 100%; height: 48px; border-radius: 14px;" data-astro-cid-j6rybmju></div> </div> </div> <div style="display: flex; justify-content: flex-end; margin-top: 24px;" data-astro-cid-j6rybmju> <div class="skeleton-box" style="width: 160px; height: 44px; border-radius: 14px;" data-astro-cid-j6rybmju></div> </div> </div> <div class="form-card hidden" id="assign-actual" data-astro-cid-j6rybmju> <form action="/api/assign-course" method="POST" id="assign-form" data-astro-cid-j6rybmju> <div class="form-grid" data-astro-cid-j6rybmju> <!-- Student Select --> <div class="form-group" data-astro-cid-j6rybmju> <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;" data-astro-cid-j6rybmju> <label class="form-label" data-astro-cid-j6rybmju> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-j6rybmju><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" data-astro-cid-j6rybmju></path><circle cx="12" cy="7" r="4" data-astro-cid-j6rybmju></circle></svg>\nSelect Students\n</label> <input type="text" id="student-search" class="form-select search-mini" placeholder="Search students..." autocomplete="off" data-astro-cid-j6rybmju> </div> <div class="checkbox-list" id="student-checkboxes" data-astro-cid-j6rybmju> ', " </div> ", ' </div> <!-- Course Select --> <div class="form-group" data-astro-cid-j6rybmju> <label class="form-label" for="course-select" data-astro-cid-j6rybmju> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-j6rybmju><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" data-astro-cid-j6rybmju></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" data-astro-cid-j6rybmju></path></svg>\nSelect or Create Course\n</label> <div class="course-input-wrapper" data-astro-cid-j6rybmju> <select id="course-select" class="form-select" data-astro-cid-j6rybmju> <option value="" disabled selected data-astro-cid-j6rybmju>Choose a course from the list…</option> ', ' <option value="__NEW__" style="color: #22d3ee; font-weight: bold;" data-astro-cid-j6rybmju>+ Create a new course...</option> </select> <div id="new-course-container" class="hidden" style="margin-top: 12px;" data-astro-cid-j6rybmju> <div style="display: flex; gap: 12px; align-items: center;" data-astro-cid-j6rybmju> <input type="text" id="course-input-text" class="form-select" placeholder="Type new course name…" style="flex: 1;" autocomplete="off" data-astro-cid-j6rybmju> <button type="button" id="cancel-new-course" class="cancel-btn" title="Cancel and select from list" data-astro-cid-j6rybmju> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-j6rybmju><line x1="18" y1="6" x2="6" y2="18" data-astro-cid-j6rybmju></line><line x1="6" y1="6" x2="18" y2="18" data-astro-cid-j6rybmju></line></svg> </button> </div> </div> <input type="hidden" name="course_name" id="actual-course-input" required data-astro-cid-j6rybmju> </div> ', ' </div> </div> <!-- Preview card (shows after selection) --> <div id="preview-card" class="preview-card hidden" data-astro-cid-j6rybmju> <div class="preview-icon" data-astro-cid-j6rybmju> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-j6rybmju><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" data-astro-cid-j6rybmju></path><polyline points="22 4 12 14.01 9 11.01" data-astro-cid-j6rybmju></polyline></svg> </div> <p class="preview-text" data-astro-cid-j6rybmju>\nAssigning <strong id="preview-student" data-astro-cid-j6rybmju>—</strong> to <strong id="preview-course" data-astro-cid-j6rybmju>—</strong> </p> </div> <div class="form-submit-row" data-astro-cid-j6rybmju> <button type="submit" class="submit-btn" id="submit-btn" data-astro-cid-j6rybmju> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-astro-cid-j6rybmju><line x1="12" y1="5" x2="12" y2="19" data-astro-cid-j6rybmju></line><line x1="5" y1="12" x2="19" y2="12" data-astro-cid-j6rybmju></line></svg>\nAssign Course\n</button> </div> </form> </div> </section>  <section class="section" data-astro-cid-j6rybmju> <div class="section-header" data-astro-cid-j6rybmju> <h3 class="section-title" data-astro-cid-j6rybmju>How it works</h3> </div> <div class="info-grid" data-astro-cid-j6rybmju> <div class="info-card" data-astro-cid-j6rybmju> <div class="info-step" data-astro-cid-j6rybmju>01</div> <div data-astro-cid-j6rybmju> <p class="info-title" data-astro-cid-j6rybmju>Select Student</p> <p class="info-desc" data-astro-cid-j6rybmju>\nChoose the student you want to enroll from the dropdown list.\n</p> </div> </div> <div class="info-card" data-astro-cid-j6rybmju> <div class="info-step" data-astro-cid-j6rybmju>02</div> <div data-astro-cid-j6rybmju> <p class="info-title" data-astro-cid-j6rybmju>Select Course</p> <p class="info-desc" data-astro-cid-j6rybmju>\nPick one of your courses to assign the student to.\n</p> </div> </div> <div class="info-card" data-astro-cid-j6rybmju> <div class="info-step" data-astro-cid-j6rybmju>03</div> <div data-astro-cid-j6rybmju> <p class="info-title" data-astro-cid-j6rybmju>Confirm & Assign</p> <p class="info-desc" data-astro-cid-j6rybmju>\nClick Assign Course to instantly enroll the student.\n</p> </div> </div> </div> </section>  <script>(function(){', `
    // Skeleton Removal
    setTimeout(() => {
      document.getElementById('assign-skeleton')?.remove();
      document.getElementById('assign-actual')?.classList.remove('hidden');
    }, 150);

    const actualCourseInput = document.getElementById('actual-course-input');
    const courseSelect = document.getElementById('course-select');
    const newCourseContainer = document.getElementById('new-course-container');
    const courseInputText = document.getElementById('course-input-text');
    const cancelNewCourse = document.getElementById('cancel-new-course');

    const previewCard = document.getElementById('preview-card');
    const previewStudent = document.getElementById('preview-student');
    const previewCourse = document.getElementById('preview-course');
    const checkboxes = document.querySelectorAll(
      '#student-checkboxes .student-option'
    );
    const studentSearch = document.getElementById('student-search');
    const assignForm = document.getElementById('assign-form');
    const submitBtn = document.getElementById('submit-btn');

    studentSearch.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase();
      checkboxes.forEach((label) => {
        const name = label.getAttribute('data-name');
        const email = label.getAttribute('data-email');
        if (name.includes(term) || email.includes(term)) {
          label.classList.remove('hidden');
        } else {
          label.classList.add('hidden');
        }
      });
    });

    assignForm.addEventListener('submit', (e) => {
      const selectedCount = document.querySelectorAll(
        '#student-checkboxes input:checked'
      ).length;
      const courseName = actualCourseInput.value.trim();

      if (selectedCount === 0 || !courseName) {
        e.preventDefault();
        alert('Please select at least one student and a course.');
        return;
      }

      submitBtn.disabled = true;
      submitBtn.innerHTML = \\\`<svg class="animate-spin" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Assigning...\\\`;
      submitBtn.style.opacity = '0.7';
      submitBtn.style.cursor = 'not-allowed';
    });

    function syncCourseValue() {
      if (courseSelect.value === '__NEW__') {
        actualCourseInput.value = courseInputText.value.trim();
      } else {
        actualCourseInput.value = courseSelect.value || '';
      }
      updateStudentOptions();
      updatePreview();
    }

    courseSelect.addEventListener('change', (e) => {
      if (e.target.value === '__NEW__') {
        newCourseContainer.classList.remove('hidden');
        courseSelect.classList.add('hidden');
        courseInputText.focus();
      }
      syncCourseValue();
    });

    courseInputText.addEventListener('input', syncCourseValue);

    cancelNewCourse.addEventListener('click', () => {
      newCourseContainer.classList.add('hidden');
      courseSelect.classList.remove('hidden');
      courseSelect.value = '';
      courseInputText.value = '';
      syncCourseValue();
    });

    function updateStudentOptions() {
      const selectedCourseName = actualCourseInput.value.trim();
      const course = allCourses.find(
        (c) => c.title.toLowerCase() === selectedCourseName.toLowerCase()
      );

      if (!course) {
        // Enable all
        checkboxes.forEach((label) => {
          const cb = label.querySelector('input');
          const badge = label.querySelector('.already-enrolled-badge');
          cb.disabled = false;
          label.classList.remove('disabled');
          badge.classList.add('hidden');
        });
        return;
      }

      // Find enrolled student IDs for this course
      const enrolledStudentIds = allEnrollments
        .filter((e) => e.course_id === course.id)
        .map((e) => e.student_id);

      checkboxes.forEach((label) => {
        const studentId = parseInt(label.getAttribute('data-id'));
        const cb = label.querySelector('input');
        const badge = label.querySelector('.already-enrolled-badge');

        if (enrolledStudentIds.includes(studentId)) {
          cb.disabled = true;
          cb.checked = false;
          label.classList.add('disabled');
          badge.classList.remove('hidden');
        } else {
          cb.disabled = false;
          label.classList.remove('disabled');
          badge.classList.add('hidden');
        }
      });
    }

    function updatePreview() {
      const selectedCount = document.querySelectorAll(
        '#student-checkboxes input:checked'
      ).length;
      const courseName = actualCourseInput.value.trim();
      if (selectedCount > 0 && courseName) {
        previewStudent.textContent = \\\`\\\${selectedCount} student(s)\\\`;
        previewCourse.textContent = courseName;
        previewCard.classList.remove('hidden');
      } else {
        previewCard.classList.add('hidden');
      }
    }

    document
      .getElementById('student-checkboxes')
      .addEventListener('change', updatePreview);

    // Initial run
    syncCourseValue();
  })();<\/script> `])), maybeRenderHead(), successMsg && renderTemplate`<div class="alert alert-success" data-astro-cid-j6rybmju> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-j6rybmju> ${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-j6rybmju": true }, { "default": async ($$result3) => renderTemplate` <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" data-astro-cid-j6rybmju></path> <polyline points="22 4 12 14.01 9 11.01" data-astro-cid-j6rybmju></polyline> ` })} </svg>
Student successfully enrolled!
</div>`, errorMsg === "already_enrolled" && renderTemplate`<div class="alert alert-error" data-astro-cid-j6rybmju> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-j6rybmju> ${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-j6rybmju": true }, { "default": async ($$result3) => renderTemplate` <circle cx="12" cy="12" r="10" data-astro-cid-j6rybmju></circle> <line x1="12" y1="8" x2="12" y2="12" data-astro-cid-j6rybmju></line> <line x1="12" y1="16" x2="12.01" y2="16" data-astro-cid-j6rybmju></line> ` })} </svg>
Failed: The student is already enrolled in this course.
</div>`, errorMsg === "invalid_data" && renderTemplate`<div class="alert alert-error" data-astro-cid-j6rybmju> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-j6rybmju> ${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-j6rybmju": true }, { "default": async ($$result3) => renderTemplate` <circle cx="12" cy="12" r="10" data-astro-cid-j6rybmju></circle> <line x1="12" y1="8" x2="12" y2="12" data-astro-cid-j6rybmju></line> <line x1="12" y1="16" x2="12.01" y2="16" data-astro-cid-j6rybmju></line> ` })} </svg>
Failed: Invalid student or course selection.
</div>`, allStudents.map((s) => renderTemplate`<label class="checkbox-item student-option"${addAttribute(s.id, "data-id")}${addAttribute(s.name.toLowerCase(), "data-name")}${addAttribute(s.email.toLowerCase(), "data-email")} data-astro-cid-j6rybmju> <input type="checkbox" name="student_ids[]"${addAttribute(s.id, "value")} data-astro-cid-j6rybmju> <span class="student-name" data-astro-cid-j6rybmju> ${s.name} <span class="student-email" data-astro-cid-j6rybmju>— ${s.email}</span> </span> <span class="already-enrolled-badge hidden text-xs text-red-400 ml-2 font-medium" data-astro-cid-j6rybmju>
(Enrolled)
</span> </label>`), allStudents.length === 0 && renderTemplate`<p class="form-hint warn" data-astro-cid-j6rybmju>No students registered yet.</p>`, allCourses.map((c) => renderTemplate`<option${addAttribute(c.title, "value")} data-astro-cid-j6rybmju>${c.title}</option>`), allCourses.length === 0 && renderTemplate`<p class="form-hint warn" data-astro-cid-j6rybmju>
No courses created yet. Select "+ Create a new course..." to
                  add one!
</p>`, defineScriptVars({ allEnrollments, allCourses })) })}`;
}, "D:/Coding Projects/coaching/src/pages/dashboard/assign.astro", void 0);
const $$file = "D:/Coding Projects/coaching/src/pages/dashboard/assign.astro";
const $$url = "/dashboard/assign";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Assign,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
