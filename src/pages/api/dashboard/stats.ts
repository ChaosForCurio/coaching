import type { APIRoute } from 'astro';
import { db } from '../../../db';
import { users, courses, enrollments, attendance } from '../../../db/schema';
import { eq, inArray, and, gte, lte } from 'drizzle-orm';
import { requireAuth } from '../../../utils/auth';

export const GET: APIRoute = async ({ cookies }) => {
  try {
    const user = await requireAuth(cookies);
    if (!user) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
    }

    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).toISOString().split('T')[0];
    const todayStr = today.toISOString().split('T')[0];

    if (user.role === 'STUDENT') {
      // 1. Enrolled courses count
      const myEnrollments = await db.select().from(enrollments).where(eq(enrollments.student_id, user.id));
      const myCourseIds = myEnrollments.map(e => e.course_id);
      
      let enrolledCourses = 0;
      let firstCourseName = 'No active courses';
      if (myCourseIds.length > 0) {
        const myCourses = await db.select().from(courses).where(inArray(courses.id, myCourseIds));
        enrolledCourses = myCourses.length;
        if (myCourses.length > 0) firstCourseName = myCourses[0].title;
      }

      // 2. Attendance this month
      const monthAttendance = await db.select()
        .from(attendance)
        .where(
          and(
            eq(attendance.student_id, user.id),
            gte(attendance.date, firstDayOfMonth),
            lte(attendance.date, todayStr)
          )
        );
      
      const presentDates = new Set(monthAttendance.map(a => a.date));
      let present = 0;
      let absent = 0;
      let holiday = 0;
      
      const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
      for (let d = 1; d <= daysInMonth; d++) {
        const cellDate = new Date(currentYear, currentMonth, d);
        const cellStr = cellDate.toISOString().split('T')[0];
        if (cellStr > todayStr) break; // Don't count future days
        
        if (cellDate.getDay() === 0) { // Sunday
          holiday++;
        } else if (presentDates.has(cellStr)) {
          present++;
        } else {
          absent++;
        }
      }

      const total = present + absent;
      const percentage = total > 0 ? Math.round((present / total) * 100) : 100;

      // 3. Streak
      // For streak, we need all past attendance, but let's query just the last 90 days.
      const ninetyDaysAgo = new Date();
      ninetyDaysAgo.setDate(ninetyDaysAgo.getDate() - 90);
      const recentAttendance = await db.select()
        .from(attendance)
        .where(
          and(
            eq(attendance.student_id, user.id),
            gte(attendance.date, ninetyDaysAgo.toISOString().split('T')[0])
          )
        );
      const recentPresentSet = new Set(recentAttendance.map(a => a.date));
      
      let streak = 0;
      let checkDate = new Date();
      checkDate.setHours(0,0,0,0);
      for (let i = 0; i < 90; i++) {
        const ds = checkDate.toISOString().split('T')[0];
        if (checkDate.getDay() === 0) { 
          checkDate.setDate(checkDate.getDate() - 1); 
          continue; 
        }
        if (recentPresentSet.has(ds)) { 
          streak++; 
        } else if (i > 0) {
          break; // Streak broken
        }
        checkDate.setDate(checkDate.getDate() - 1);
      }

      return new Response(JSON.stringify({
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
          firstCourseName
        }
      }), { status: 200 });
      
    } else {
      // TEACHER
      const teacherCourses = await db.select().from(courses).where(eq(courses.teacher_id, user.id));
      const courseIds = teacherCourses.map(c => c.id);
      
      let totalStudents = 0;
      let presentToday = 0;

      if (courseIds.length > 0) {
        const teacherEnrollments = await db.select().from(enrollments).where(inArray(enrollments.course_id, courseIds));
        const enrolledStudentIds = Array.from(new Set(teacherEnrollments.map(e => e.student_id)));
        totalStudents = enrolledStudentIds.length;

        if (totalStudents > 0) {
          const todaysAttendance = await db.select()
            .from(attendance)
            .where(
              and(
                inArray(attendance.student_id, enrolledStudentIds),
                eq(attendance.date, todayStr)
              )
            );
          presentToday = todaysAttendance.length;
        }
      }

      const absentToday = Math.max(0, totalStudents - presentToday);
      const percentage = totalStudents > 0 ? Math.round((presentToday / totalStudents) * 100) : 100;

      // Teacher's overall logs count (just a metric)
      let allLogsCount = 0;
      if (courseIds.length > 0) {
        // Just as an estimate or fetch count
        const teacherEnrollments = await db.select().from(enrollments).where(inArray(enrollments.course_id, courseIds));
        const studentIds = Array.from(new Set(teacherEnrollments.map(e => e.student_id)));
        if (studentIds.length > 0) {
           const logs = await db.select().from(attendance).where(inArray(attendance.student_id, studentIds));
           allLogsCount = logs.length;
        }
      }

      return new Response(JSON.stringify({
        role: 'TEACHER',
        name: user.name,
        stats: {
          activeCourses: teacherCourses.length,
          totalStudents,
          presentToday,
          absentToday,
          percentage,
          allLogsCount
        }
      }), { status: 200 });
    }

  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
};
