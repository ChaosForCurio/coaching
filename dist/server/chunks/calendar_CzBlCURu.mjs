import { d as db, b as attendance } from './index_DJ2IURco.mjs';
import { and, eq, gte, lte } from 'drizzle-orm';
import { r as requireAuth } from './auth_B1QfE5tq.mjs';

const GET = async ({ request, cookies }) => {
  try {
    const user = await requireAuth(cookies);
    if (!user || user.role !== "STUDENT") {
      return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }
    const url = new URL(request.url);
    const yearStr = url.searchParams.get("year");
    const monthStr = url.searchParams.get("month");
    if (!yearStr || !monthStr) {
      return new Response(JSON.stringify({ error: "Missing year or month" }), { status: 400 });
    }
    const year = parseInt(yearStr);
    const month = parseInt(monthStr);
    const firstDay = new Date(year, month, 1).toISOString().split("T")[0];
    const lastDay = new Date(year, month + 1, 0).toISOString().split("T")[0];
    const monthAttendance = await db.select().from(attendance).where(
      and(
        eq(attendance.student_id, user.id),
        gte(attendance.date, firstDay),
        lte(attendance.date, lastDay)
      )
    );
    return new Response(JSON.stringify({ attendance: monthAttendance.map((a) => a.date) }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
