import { EventEmitter } from 'node:events';
import { d as db, n as notifications, f as auditLogs } from './schema_UQndYuIj.mjs';
import { i as invalidateCache } from './redis_CUoFhAj3.mjs';

function createNotification(userId, message, type) {
  db.insert(notifications).values({
    user_id: userId,
    message,
    type
  }).catch((err) => {
    console.error("[Notification Error]", err?.message ?? err);
  });
}

class TypedEventBus extends EventEmitter {
  emit(event, payload) {
    return super.emit(event, payload);
  }
  on(event, listener) {
    return super.on(event, listener);
  }
}
const eventBus = new TypedEventBus();
eventBus.setMaxListeners(20);
eventBus.on("attendance.marked", ({ studentId, date, status, teacherId }) => {
  if (status === "A") {
    createNotification(
      studentId,
      `You were marked absent on ${date}.`,
      "attendance"
    );
  }
  const todayStr = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  invalidateCache(`dashboard_stats_${studentId}_${todayStr}`);
  invalidateCache(`dashboard_stats_${teacherId}_${todayStr}`);
});
eventBus.on(
  "enrollment.created",
  ({ studentId, courseId, courseTitle, teacherName, teacherId }) => {
    createNotification(
      studentId,
      `You have been enrolled in "${courseTitle}" by ${teacherName}.`,
      "enrollment"
    );
    const todayStr = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    invalidateCache(`dashboard_stats_${studentId}_${todayStr}`);
    invalidateCache(`dashboard_stats_${teacherId}_${todayStr}`);
    invalidateCache(`course_students_${courseId}`);
    invalidateCache(`courses_teacher_${teacherId}`);
  }
);
eventBus.on(
  "announcement.posted",
  ({ courseId, courseTitle, teacherName, title, enrolledStudentIds }) => {
    for (const studentId of enrolledStudentIds) {
      createNotification(
        studentId,
        `New announcement in "${courseTitle}" from ${teacherName}: "${title}"`,
        "announcement"
      );
    }
    invalidateCache(`announcements_${courseId}`);
  }
);

function logAction(userId, action, entityType, entityId, metadata) {
  db.insert(auditLogs).values({
    user_id: userId,
    action,
    entity_type: entityType,
    entity_id: entityId ?? null,
    metadata: metadata ?? null
  }).catch((err) => {
    console.error("[AuditLog Error]", err?.message ?? err);
  });
}

export { eventBus as e, logAction as l };
