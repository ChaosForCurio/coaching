import { d as db, a as attendance } from './schema_Hqu5BfNF.mjs';
import { and, eq } from 'drizzle-orm';

const POST = async ({ request }) => {
  try {
    const body = await request.json();
    const { date, attendanceList } = body;
    if (!date || !Array.isArray(attendanceList)) {
      return new Response(JSON.stringify({ error: "Missing date or attendance list" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    for (const item of attendanceList) {
      const { studentId, status } = item;
      if (status === "P") {
        const existing = await db.select().from(attendance).where(and(eq(attendance.student_id, studentId), eq(attendance.date, date))).limit(1);
        if (existing.length === 0) {
          await db.insert(attendance).values({
            student_id: studentId,
            date
          });
        }
      } else if (status === "A") {
        await db.delete(attendance).where(and(eq(attendance.student_id, studentId), eq(attendance.date, date)));
      }
    }
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
