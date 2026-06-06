import { pgTable, serial, text, timestamp, integer, date } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").unique().notNull(),
  password_hash: text("password_hash").notNull(),
  role: text("role", { enum: ["STUDENT", "TEACHER"] }).notNull(),
});

export const courses = pgTable("courses", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
  teacher_id: integer("teacher_id").references(() => users.id).notNull(),
});

export const enrollments = pgTable("enrollments", {
  id: serial("id").primaryKey(),
  student_id: integer("student_id").references(() => users.id).notNull(),
  course_id: integer("course_id").references(() => courses.id).notNull(),
});

export const attendance = pgTable("attendance", {
  id: serial("id").primaryKey(),
  student_id: integer("student_id").references(() => users.id).notNull(),
  date: date("date").notNull(), // 'YYYY-MM-DD' format
  timestamp: timestamp("timestamp").defaultNow().notNull(),
});
