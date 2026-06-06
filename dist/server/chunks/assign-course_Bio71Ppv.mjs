import { d as db, e as enrollments } from './schema_Hqu5BfNF.mjs';

const POST = async ({ request, cookies, redirect }) => {
  const data = await request.formData();
  const student_id = parseInt(data.get("student_id"));
  const course_id = parseInt(data.get("course_id"));
  if (student_id && course_id) {
    await db.insert(enrollments).values({
      student_id,
      course_id
    });
  }
  return redirect("/dashboard");
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
