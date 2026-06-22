import type { APIRoute } from 'astro';
import { readDb as db } from '../../../db';
import { users, courses, enrollments, attendance } from '../../../db/schema';
import { eq, inArray, and, gte, lte, desc } from 'drizzle-orm';
import { requireAuth } from '../../../utils/auth';
import { getCache, setCache } from '../../../utils/redis';
export const GET: APIRoute = async ({ cookies }) => {
  try {
    const user = await requireAuth(cookies);
    if (!user) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
      });
    }

    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1)
      .toISOString()
      .split('T')[0];
    const todayStr = today.toISOString().split('T')[0];

    const cacheKey = `dashboard_stats_${user.id}_${todayStr}`;
    const cachedData = await getCache(cacheKey);
    if (cachedData) {
      return new Response(JSON.stringify(cachedData), {
        status: 200,
        headers: {
          'X-Cache': 'HIT',
          'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
        },
      });
    }

    if (user.role === 'STUDENT') {
      // 1. Enrolled courses count + earliest enrollment date
      const myEnrollments = await db
        .select()
        .from(enrollments)
        .where(eq(enrollments.student_id, user.id));
      const myCourseIds = myEnrollments.map((e) => e.course_id);

      let enrolledCourses = 0;
      let firstCourseName = 'No active courses';

      // ── Determine tracking start date (enrollment date or month start, whichever is later) ──
      let trackingStartStr = firstDayOfMonth; // default: beginning of current month
      if (myEnrollments.length > 0) {
        // Sort by created_at ascending, pick earliest
        const sorted = [...myEnrollments].sort(
          (a, b) =>
            new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
        );
        const enrollmentDate = new Date(sorted[0].created_at);
        enrollmentDate.setHours(0, 0, 0, 0);
        const enrollmentStr = enrollmentDate.toISOString().split('T')[0];
        // Use enrollment date if it is AFTER the month start (student joined mid-month)
        // Use month start if enrollment predates this month (long-standing student)
        trackingStartStr =
          enrollmentStr > firstDayOfMonth ? enrollmentStr : firstDayOfMonth;
      }

      if (myCourseIds.length > 0) {
        const myCourses = await db
          .select()
          .from(courses)
          .where(inArray(courses.id, myCourseIds));
        enrolledCourses = myCourses.length;
        if (myCourses.length > 0) firstCourseName = myCourses[0].title;
      }

      // 2. Attendance from tracking start date (not start of month)
      const periodAttendance = await db
        .select()
        .from(attendance)
        .where(
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

      // Walk from tracking start to today
      const startDate = new Date(trackingStartStr + 'T00:00:00');
      const endDate = new Date(todayStr + 'T00:00:00');
      for (
        let cur = new Date(startDate);
        cur <= endDate;
        cur.setDate(cur.getDate() + 1)
      ) {
        const ds = cur.toISOString().split('T')[0];
        if (cur.getDay() === 0) {
          // Sunday = holiday
          holiday++;
        } else if (presentDates.has(ds)) {
          present++;
        } else {
          absent++;
        }
      }

      const total = present + absent;
      // If tracking just started today (present=0, absent=0) percentage = 100 (pristine start)
      const percentage = total > 0 ? Math.round((present / total) * 100) : 100;

      // 3. Streak (from enrollment date)
      const streakStart = trackingStartStr;
      const recentAttendance = await db
        .select()
        .from(attendance)
        .where(
          and(
            eq(attendance.student_id, user.id),
            gte(attendance.date, streakStart)
          )
        );
      const recentPresentSet = new Set(recentAttendance.map((a) => a.date));

      let streak = 0;
      let checkDate = new Date();
      checkDate.setHours(0, 0, 0, 0);
      for (let i = 0; i < 90; i++) {
        const ds = checkDate.toISOString().split('T')[0];
        if (ds < streakStart) break; // Don't look before enrollment
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

      const recentEnrollments = await db
        .select({
          id: enrollments.id,
          courseTitle: courses.title,
          teacherName: users.name,
          createdAt: enrollments.created_at,
        })
        .from(enrollments)
        .innerJoin(courses, eq(enrollments.course_id, courses.id))
        .innerJoin(users, eq(courses.teacher_id, users.id))
        .where(eq(enrollments.student_id, user.id))
        .orderBy(desc(enrollments.created_at))
        .limit(3);

      const responseData = {
        role: 'STUDENT',
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
          trackingStartStr, // expose so UI can show "tracking since" label
        },
      };

      await setCache(cacheKey, responseData, 300); // Cache for 5 minutes

      return new Response(JSON.stringify(responseData), {
        status: 200,
        headers: {
          'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
        },
      });
    } else {
      // TEACHER
      const teacherCourses = await db
        .select()
        .from(courses)
        .where(eq(courses.teacher_id, user.id));
      const courseIds = teacherCourses.map((c) => c.id);

      let totalStudents = 0;
      let presentToday = 0;
      let chartData = { labels: [] as string[], data: [] as number[] };
      let studentsAtRisk: any[] = [];
      let recentActivity: any[] = [];

      if (courseIds.length > 0) {
        // Fetch enrollments with their created_at (enrollment date)
        const teacherEnrollments = await db
          .select()
          .from(enrollments)
          .where(inArray(enrollments.course_id, courseIds));
        const enrolledStudentIds = Array.from(
          new Set(teacherEnrollments.map((e) => e.student_id))
        );
        totalStudents = enrolledStudentIds.length;

        // Build a map: studentId -> earliest enrollment date across all teacher's courses
        const studentEnrollDateMap: Record<number, string> = {};
        for (const e of teacherEnrollments) {
          const eDateStr = new Date(e.created_at).toISOString().split('T')[0];
          if (
            !studentEnrollDateMap[e.student_id] ||
            eDateStr < studentEnrollDateMap[e.student_id]
          ) {
            studentEnrollDateMap[e.student_id] = eDateStr;
          }
        }

        if (totalStudents > 0) {
          const todaysAttendance = await db
            .select()
            .from(attendance)
            .where(
              and(
                inArray(attendance.student_id, enrolledStudentIds),
                eq(attendance.date, todayStr)
              )
            );
          presentToday = todaysAttendance.length;

          // Chart data: last 30 days attendance trends
          const thirtyDaysAgo = new Date();
          thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 29);
          const thirtyDaysAgoStr = thirtyDaysAgo.toISOString().split('T')[0];

          const monthAttendance = await db
            .select()
            .from(attendance)
            .where(
              and(
                inArray(attendance.student_id, enrolledStudentIds),
                gte(attendance.date, thirtyDaysAgoStr),
                lte(attendance.date, todayStr)
              )
            );

          // group by date
          const attByDate: Record<string, number> = {};
          for (let i = 29; i >= 0; i--) {
            const d = new Date();
            d.setDate(d.getDate() - i);
            const dStr = d.toISOString().split('T')[0];
            attByDate[dStr] = 0;
            chartData.labels.push(
              d.toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })
            );
          }
          monthAttendance.forEach((a) => {
            if (attByDate[a.date] !== undefined) attByDate[a.date]++;
          });
          chartData.data = Object.values(attByDate);

          // ── Students at risk: calculate each student's attendance from THEIR enrollment date ──
          const attByStudent: Record<number, number> = {};
          monthAttendance.forEach((a) => {
            attByStudent[a.student_id] = (attByStudent[a.student_id] || 0) + 1;
          });

          const studentsQuery = await db
            .select()
            .from(users)
            .where(inArray(users.id, enrolledStudentIds));

          const sevenDaysAgoStr = (() => {
            const d = new Date();
            d.setDate(d.getDate() - 7);
            return d.toISOString().split('T')[0];
          })();

          studentsQuery.forEach((student) => {
            const enrollDateStr =
              studentEnrollDateMap[student.id] || thirtyDaysAgoStr;
            const isNewStudent = enrollDateStr >= sevenDaysAgoStr; // enrolled within last 7 days

            // Count school days from enrollment date (or 30-days-ago, whichever is later)
            const effectiveStart =
              enrollDateStr > thirtyDaysAgoStr
                ? enrollDateStr
                : thirtyDaysAgoStr;
            let schoolDaysForStudent = 0;
            const startD = new Date(effectiveStart + 'T00:00:00');
            const endD = new Date(todayStr + 'T00:00:00');
            for (
              let cur = new Date(startD);
              cur <= endD;
              cur.setDate(cur.getDate() + 1)
            ) {
              if (cur.getDay() !== 0) schoolDaysForStudent++;
            }

            // If just enrolled today, no school days yet — skip risk calculation
            if (schoolDaysForStudent === 0) return;

            const studentAtt = attByStudent[student.id] || 0;
            const percentage = Math.round(
              (studentAtt / schoolDaysForStudent) * 100
            );
            if (percentage < 70) {
              studentsAtRisk.push({
                name: student.name,
                percentage,
                isNew: isNewStudent,
                enrolledOn: enrollDateStr,
              });
            }
          });

          // Sort risk students by lowest percentage
          studentsAtRisk.sort((a, b) => a.percentage - b.percentage);
          studentsAtRisk = studentsAtRisk.slice(0, 5);

          // Recent Activity: recent enrollments
          const recEnr = await db
            .select({
              studentName: users.name,
              courseTitle: courses.title,
              createdAt: enrollments.created_at,
            })
            .from(enrollments)
            .innerJoin(users, eq(enrollments.student_id, users.id))
            .innerJoin(courses, eq(enrollments.course_id, courses.id))
            .where(inArray(enrollments.course_id, courseIds))
            .orderBy(desc(enrollments.created_at))
            .limit(5);

          recentActivity = recEnr.map((r) => ({
            type: 'enrollment',
            message: `${r.studentName} enrolled in ${r.courseTitle}`,
            date: r.createdAt,
          }));
        }
      }

      const absentToday = Math.max(0, totalStudents - presentToday);
      const percentage =
        totalStudents > 0
          ? Math.round((presentToday / totalStudents) * 100)
          : 100;

      // Teacher's overall logs count (just a metric)
      let allLogsCount = 0;
      if (courseIds.length > 0) {
        const teacherEnrollments = await db
          .select()
          .from(enrollments)
          .where(inArray(enrollments.course_id, courseIds));
        const studentIds = Array.from(
          new Set(teacherEnrollments.map((e) => e.student_id))
        );
        if (studentIds.length > 0) {
          const logs = await db
            .select()
            .from(attendance)
            .where(inArray(attendance.student_id, studentIds));
          allLogsCount = logs.length;
        }
      }

      const responseData = {
        role: 'TEACHER',
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
          recentActivity,
        },
      };

      await setCache(cacheKey, responseData, 300); // Cache for 5 minutes

      return new Response(JSON.stringify(responseData), {
        status: 200,
        headers: {
          'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
        },
      });
    }
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
};
