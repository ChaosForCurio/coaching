import { r as readDb, e as enrollments, c as courses, b as attendance, u as users } from './schema_CuVt3FVI.mjs';
import { eq, inArray, and, gte, lte, desc } from 'drizzle-orm';
import { r as requireAuth } from './auth_IRlGwh__.mjs';
import { g as getCache, s as setCache } from './redis_CUoFhAj3.mjs';

const GET = async ({ cookies }) => {
  try {
    const user = await requireAuth(cookies);
    if (!user) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }
    const today = /* @__PURE__ */ new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).toISOString().split("T")[0];
    const todayStr = today.toISOString().split("T")[0];
    const cacheKey = `dashboard_stats_${user.id}_${todayStr}`;
    const cachedData = await getCache(cacheKey);
    if (cachedData) {
      return new Response(JSON.stringify(cachedData), {
        status: 200,
        headers: {
          "X-Cache": "HIT",
          "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300"
        }
      });
    }
    if (user.role === "STUDENT") {
      const myEnrollments = await readDb.select().from(enrollments).where(eq(enrollments.student_id, user.id));
      const myCourseIds = myEnrollments.map((e) => e.course_id);
      let enrolledCourses = 0;
      let firstCourseName = "No active courses";
      let trackingStartStr = firstDayOfMonth;
      if (myEnrollments.length > 0) {
        const sorted = [...myEnrollments].sort(
          (a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
        );
        const enrollmentDate = new Date(sorted[0].created_at);
        enrollmentDate.setHours(0, 0, 0, 0);
        const enrollmentStr = enrollmentDate.toISOString().split("T")[0];
        trackingStartStr = enrollmentStr > firstDayOfMonth ? enrollmentStr : firstDayOfMonth;
      }
      if (myCourseIds.length > 0) {
        const myCourses = await readDb.select().from(courses).where(inArray(courses.id, myCourseIds));
        enrolledCourses = myCourses.length;
        if (myCourses.length > 0) firstCourseName = myCourses[0].title;
      }
      const periodAttendance = await readDb.select().from(attendance).where(
        and(
          eq(attendance.student_id, user.id),
          gte(attendance.date, trackingStartStr),
          lte(attendance.date, todayStr)
        )
      );
      const presentDates = new Set(periodAttendance.map((a) => a.date));
      let present = 0;
      let absent = 0;
      let holiday = 0;
      const startDate = /* @__PURE__ */ new Date(trackingStartStr + "T00:00:00");
      const endDate = /* @__PURE__ */ new Date(todayStr + "T00:00:00");
      for (let cur = new Date(startDate); cur <= endDate; cur.setDate(cur.getDate() + 1)) {
        const ds = cur.toISOString().split("T")[0];
        if (cur.getDay() === 0) {
          holiday++;
        } else if (presentDates.has(ds)) {
          present++;
        } else {
          absent++;
        }
      }
      const total = present + absent;
      const percentage = total > 0 ? Math.round(present / total * 100) : 100;
      const streakStart = trackingStartStr;
      const recentAttendance = await readDb.select().from(attendance).where(
        and(
          eq(attendance.student_id, user.id),
          gte(attendance.date, streakStart)
        )
      );
      const recentPresentSet = new Set(recentAttendance.map((a) => a.date));
      let streak = 0;
      let checkDate = /* @__PURE__ */ new Date();
      checkDate.setHours(0, 0, 0, 0);
      for (let i = 0; i < 90; i++) {
        const ds = checkDate.toISOString().split("T")[0];
        if (ds < streakStart) break;
        if (checkDate.getDay() === 0) {
          checkDate.setDate(checkDate.getDate() - 1);
          continue;
        }
        if (recentPresentSet.has(ds)) {
          streak++;
        } else if (i > 0) {
          break;
        }
        checkDate.setDate(checkDate.getDate() - 1);
      }
      const recentEnrollments = await readDb.select({
        id: enrollments.id,
        courseTitle: courses.title,
        teacherName: users.name,
        createdAt: enrollments.created_at
      }).from(enrollments).innerJoin(courses, eq(enrollments.course_id, courses.id)).innerJoin(users, eq(courses.teacher_id, users.id)).where(eq(enrollments.student_id, user.id)).orderBy(desc(enrollments.created_at)).limit(3);
      const responseData = {
        role: "STUDENT",
        name: user.name,
        stats: {
          present,
          absent,
          holiday,
          total,
          percentage,
          streak,
          enrolledCourses,
          firstCourseName,
          recentEnrollments,
          trackingStartStr
          // expose so UI can show "tracking since" label
        }
      };
      await setCache(cacheKey, responseData, 300);
      return new Response(JSON.stringify(responseData), {
        status: 200,
        headers: { "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300" }
      });
    } else {
      const teacherCourses = await readDb.select().from(courses).where(eq(courses.teacher_id, user.id));
      const courseIds = teacherCourses.map((c) => c.id);
      let totalStudents = 0;
      let presentToday = 0;
      let chartData = { labels: [], data: [] };
      let studentsAtRisk = [];
      let recentActivity = [];
      if (courseIds.length > 0) {
        const teacherEnrollments = await readDb.select().from(enrollments).where(inArray(enrollments.course_id, courseIds));
        const enrolledStudentIds = Array.from(new Set(teacherEnrollments.map((e) => e.student_id)));
        totalStudents = enrolledStudentIds.length;
        const studentEnrollDateMap = {};
        for (const e of teacherEnrollments) {
          const eDateStr = new Date(e.created_at).toISOString().split("T")[0];
          if (!studentEnrollDateMap[e.student_id] || eDateStr < studentEnrollDateMap[e.student_id]) {
            studentEnrollDateMap[e.student_id] = eDateStr;
          }
        }
        if (totalStudents > 0) {
          const todaysAttendance = await readDb.select().from(attendance).where(
            and(
              inArray(attendance.student_id, enrolledStudentIds),
              eq(attendance.date, todayStr)
            )
          );
          presentToday = todaysAttendance.length;
          const thirtyDaysAgo = /* @__PURE__ */ new Date();
          thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 29);
          const thirtyDaysAgoStr = thirtyDaysAgo.toISOString().split("T")[0];
          const monthAttendance = await readDb.select().from(attendance).where(
            and(
              inArray(attendance.student_id, enrolledStudentIds),
              gte(attendance.date, thirtyDaysAgoStr),
              lte(attendance.date, todayStr)
            )
          );
          const attByDate = {};
          for (let i = 29; i >= 0; i--) {
            const d = /* @__PURE__ */ new Date();
            d.setDate(d.getDate() - i);
            const dStr = d.toISOString().split("T")[0];
            attByDate[dStr] = 0;
            chartData.labels.push(d.toLocaleDateString("en-IN", { month: "short", day: "numeric" }));
          }
          monthAttendance.forEach((a) => {
            if (attByDate[a.date] !== void 0) attByDate[a.date]++;
          });
          chartData.data = Object.values(attByDate);
          const attByStudent = {};
          monthAttendance.forEach((a) => {
            attByStudent[a.student_id] = (attByStudent[a.student_id] || 0) + 1;
          });
          const studentsQuery = await readDb.select().from(users).where(inArray(users.id, enrolledStudentIds));
          const sevenDaysAgoStr = (() => {
            const d = /* @__PURE__ */ new Date();
            d.setDate(d.getDate() - 7);
            return d.toISOString().split("T")[0];
          })();
          studentsQuery.forEach((student) => {
            const enrollDateStr = studentEnrollDateMap[student.id] || thirtyDaysAgoStr;
            const isNewStudent = enrollDateStr >= sevenDaysAgoStr;
            const effectiveStart = enrollDateStr > thirtyDaysAgoStr ? enrollDateStr : thirtyDaysAgoStr;
            let schoolDaysForStudent = 0;
            const startD = /* @__PURE__ */ new Date(effectiveStart + "T00:00:00");
            const endD = /* @__PURE__ */ new Date(todayStr + "T00:00:00");
            for (let cur = new Date(startD); cur <= endD; cur.setDate(cur.getDate() + 1)) {
              if (cur.getDay() !== 0) schoolDaysForStudent++;
            }
            if (schoolDaysForStudent === 0) return;
            const studentAtt = attByStudent[student.id] || 0;
            const percentage2 = Math.round(studentAtt / schoolDaysForStudent * 100);
            if (percentage2 < 70) {
              studentsAtRisk.push({
                name: student.name,
                percentage: percentage2,
                isNew: isNewStudent,
                enrolledOn: enrollDateStr
              });
            }
          });
          studentsAtRisk.sort((a, b) => a.percentage - b.percentage);
          studentsAtRisk = studentsAtRisk.slice(0, 5);
          const recEnr = await readDb.select({
            studentName: users.name,
            courseTitle: courses.title,
            createdAt: enrollments.created_at
          }).from(enrollments).innerJoin(users, eq(enrollments.student_id, users.id)).innerJoin(courses, eq(enrollments.course_id, courses.id)).where(inArray(enrollments.course_id, courseIds)).orderBy(desc(enrollments.created_at)).limit(5);
          recentActivity = recEnr.map((r) => ({
            type: "enrollment",
            message: `${r.studentName} enrolled in ${r.courseTitle}`,
            date: r.createdAt
          }));
        }
      }
      const absentToday = Math.max(0, totalStudents - presentToday);
      const percentage = totalStudents > 0 ? Math.round(presentToday / totalStudents * 100) : 100;
      let allLogsCount = 0;
      if (courseIds.length > 0) {
        const teacherEnrollments = await readDb.select().from(enrollments).where(inArray(enrollments.course_id, courseIds));
        const studentIds = Array.from(new Set(teacherEnrollments.map((e) => e.student_id)));
        if (studentIds.length > 0) {
          const logs = await readDb.select().from(attendance).where(inArray(attendance.student_id, studentIds));
          allLogsCount = logs.length;
        }
      }
      const responseData = {
        role: "TEACHER",
        name: user.name,
        stats: {
          activeCourses: teacherCourses.length,
          totalStudents,
          presentToday,
          absentToday,
          percentage,
          allLogsCount,
          chartData,
          studentsAtRisk,
          recentActivity
        }
      };
      await setCache(cacheKey, responseData, 300);
      return new Response(JSON.stringify(responseData), {
        status: 200,
        headers: { "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300" }
      });
    }
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
