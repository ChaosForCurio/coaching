import postgres from 'postgres';
import { drizzle } from 'drizzle-orm/postgres-js';
import { pgTable, text, serial, timestamp, boolean, integer, index, date, uniqueIndex, jsonb } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

const connectionString = "postgresql://postgres:a%23ec2CD%269VjK%23xE@db.qttzzkrwijtxnmeukmlx.supabase.co:5432/postgres";
const client = postgres(connectionString, { max: 10, ssl: "require" });
const db = drizzle(client);
const readDb = db;

const users = pgTable("users", {
  id: serial("id").primaryKey(),
  firebase_uid: text("firebase_uid").unique(),
  name: text("name").notNull(),
  email: text("email").unique().notNull(),
  role: text("role", { enum: ["STUDENT", "TEACHER"] }).notNull(),
  avatar_url: text("avatar_url"),
  bio: text("bio"),
  phone: text("phone")
});
const courses = pgTable("courses", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
  teacher_id: integer("teacher_id").references(() => users.id).notNull()
});
const enrollments = pgTable(
  "enrollments",
  {
    id: serial("id").primaryKey(),
    student_id: integer("student_id").references(() => users.id).notNull(),
    course_id: integer("course_id").references(() => courses.id).notNull(),
    created_at: timestamp("created_at").defaultNow().notNull()
  },
  (table) => ({
    studentIdx: index("enrollments_student_idx").on(table.student_id),
    courseIdx: index("enrollments_course_idx").on(table.course_id)
  })
);
const attendance = pgTable(
  "attendance",
  {
    id: serial("id").primaryKey(),
    student_id: integer("student_id").references(() => users.id).notNull(),
    course_id: integer("course_id").references(() => courses.id).notNull(),
    date: date("date").notNull(),
    // 'YYYY-MM-DD' format
    timestamp: timestamp("timestamp").defaultNow().notNull()
  },
  (table) => ({
    studentCourseDateIdx: uniqueIndex("attendance_student_course_date_idx").on(
      table.student_id,
      table.course_id,
      table.date
    ),
    courseDateIdx: index("attendance_course_date_idx").on(
      table.course_id,
      table.date
    )
  })
);
relations(users, ({ many }) => ({
  courses: many(courses),
  enrollments: many(enrollments),
  attendance: many(attendance)
}));
relations(courses, ({ one, many }) => ({
  teacher: one(users, {
    fields: [courses.teacher_id],
    references: [users.id]
  }),
  enrollments: many(enrollments),
  attendance: many(attendance)
}));
relations(enrollments, ({ one }) => ({
  student: one(users, {
    fields: [enrollments.student_id],
    references: [users.id]
  }),
  course: one(courses, {
    fields: [enrollments.course_id],
    references: [courses.id]
  })
}));
relations(attendance, ({ one }) => ({
  student: one(users, {
    fields: [attendance.student_id],
    references: [users.id]
  }),
  course: one(courses, {
    fields: [attendance.course_id],
    references: [courses.id]
  })
}));
const auditLogs = pgTable(
  "audit_logs",
  {
    id: serial("id").primaryKey(),
    user_id: integer("user_id").references(() => users.id).notNull(),
    action: text("action").notNull(),
    // e.g. "mark_attendance", "assign_course", "login"
    entity_type: text("entity_type").notNull(),
    // e.g. "attendance", "enrollment", "session"
    entity_id: integer("entity_id"),
    // nullable — some actions have no single entity
    metadata: jsonb("metadata"),
    // arbitrary extra data
    created_at: timestamp("created_at").defaultNow().notNull()
  },
  (table) => ({
    userIdx: index("audit_logs_user_idx").on(table.user_id),
    createdIdx: index("audit_logs_created_idx").on(table.created_at)
  })
);
const notifications = pgTable(
  "notifications",
  {
    id: serial("id").primaryKey(),
    user_id: integer("user_id").references(() => users.id).notNull(),
    message: text("message").notNull(),
    type: text("type", {
      enum: ["enrollment", "attendance", "grade", "system", "announcement"]
    }).notNull(),
    is_read: boolean("is_read").default(false).notNull(),
    created_at: timestamp("created_at").defaultNow().notNull()
  },
  (table) => ({
    userIdx: index("notifications_user_idx").on(table.user_id),
    unreadIdx: index("notifications_unread_idx").on(
      table.user_id,
      table.is_read
    )
  })
);
const announcements = pgTable(
  "announcements",
  {
    id: serial("id").primaryKey(),
    course_id: integer("course_id").references(() => courses.id).notNull(),
    teacher_id: integer("teacher_id").references(() => users.id).notNull(),
    title: text("title").notNull(),
    body: text("body").notNull(),
    pinned: boolean("pinned").default(false).notNull(),
    created_at: timestamp("created_at").defaultNow().notNull()
  },
  (table) => ({
    courseIdx: index("announcements_course_idx").on(table.course_id),
    pinnedIdx: index("announcements_pinned_idx").on(
      table.course_id,
      table.pinned
    )
  })
);

export { announcements as a, attendance as b, courses as c, db as d, enrollments as e, auditLogs as f, notifications as n, readDb as r, users as u };
