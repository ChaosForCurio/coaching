/**
 * Internal Event Bus — Feature #12
 *
 * A typed, singleton EventEmitter that decouples write actions from their
 * side-effects (notifications, cache invalidation, audit logs).
 *
 * Usage:
 *   eventBus.emit('attendance.marked', { studentId, date, status, teacherId });
 *   eventBus.on('attendance.marked', handler);
 */

import { EventEmitter } from 'node:events';
import { createNotification } from './notify';
import { invalidateCache } from './redis';

// ── Event Payload Types ────────────────────────────────────────────────────────

export interface AttendanceMarkedEvent {
  studentId: number;
  date: string;
  status: 'P' | 'A';
  teacherId: number;
  courseId?: number;
}

export interface EnrollmentCreatedEvent {
  studentId: number;
  courseId: number;
  courseTitle: string;
  teacherName: string;
  teacherId: number;
}

export interface AnnouncementPostedEvent {
  announcementId: number;
  courseId: number;
  courseTitle: string;
  teacherName: string;
  title: string;
  enrolledStudentIds: number[];
}

export interface EventMap {
  'attendance.marked': AttendanceMarkedEvent;
  'enrollment.created': EnrollmentCreatedEvent;
  'announcement.posted': AnnouncementPostedEvent;
}

// ── Singleton EventEmitter ─────────────────────────────────────────────────────

class TypedEventBus extends EventEmitter {
  emit<K extends keyof EventMap>(event: K, payload: EventMap[K]): boolean {
    return super.emit(event, payload);
  }

  on<K extends keyof EventMap>(event: K, listener: (payload: EventMap[K]) => void): this {
    return super.on(event, listener);
  }
}

export const eventBus = new TypedEventBus();
eventBus.setMaxListeners(20);

// ── Listeners ─────────────────────────────────────────────────────────────────

/**
 * attendance.marked → notify absent students; invalidate dashboard cache
 */
eventBus.on('attendance.marked', ({ studentId, date, status, teacherId }) => {
  if (status === 'A') {
    createNotification(
      studentId,
      `You were marked absent on ${date}.`,
      'attendance'
    );
  }

  // Invalidate student's and teacher's cached dashboard stats
  const todayStr = new Date().toISOString().split('T')[0];
  invalidateCache(`dashboard_stats_${studentId}_${todayStr}`);
  invalidateCache(`dashboard_stats_${teacherId}_${todayStr}`);
});

/**
 * enrollment.created → notify student; invalidate relevant caches
 */
eventBus.on('enrollment.created', ({ studentId, courseId, courseTitle, teacherName, teacherId }) => {
  createNotification(
    studentId,
    `You have been enrolled in "${courseTitle}" by ${teacherName}.`,
    'enrollment'
  );

  // Invalidate student + teacher dashboard stats and course student list
  const todayStr = new Date().toISOString().split('T')[0];
  invalidateCache(`dashboard_stats_${studentId}_${todayStr}`);
  invalidateCache(`dashboard_stats_${teacherId}_${todayStr}`);
  invalidateCache(`course_students_${courseId}`);
  invalidateCache(`courses_teacher_${teacherId}`);
});

/**
 * announcement.posted → notify all enrolled students; invalidate announcements cache
 */
eventBus.on('announcement.posted', ({ courseId, courseTitle, teacherName, title, enrolledStudentIds }) => {
  for (const studentId of enrolledStudentIds) {
    createNotification(
      studentId,
      `New announcement in "${courseTitle}" from ${teacherName}: "${title}"`,
      'announcement'
    );
  }

  // Invalidate the announcements cache for this course
  invalidateCache(`announcements_${courseId}`);
});
