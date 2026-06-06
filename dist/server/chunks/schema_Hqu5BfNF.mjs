import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import dotenv from 'dotenv';
import { pgTable, integer, serial, text, timestamp, date } from 'drizzle-orm/pg-core';

dotenv.config();
const connectionString = "postgresql://neondb_owner:npg_2hqP5xpdHtEZ@ep-wispy-truth-ap7kmm96-pooler.c-7.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require";
const sql = neon(connectionString);
const db = drizzle(sql);

const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").unique().notNull(),
  password_hash: text("password_hash").notNull(),
  role: text("role", { enum: ["STUDENT", "TEACHER"] }).notNull()
});
const courses = pgTable("courses", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
  teacher_id: integer("teacher_id").references(() => users.id).notNull()
});
const enrollments = pgTable("enrollments", {
  id: serial("id").primaryKey(),
  student_id: integer("student_id").references(() => users.id).notNull(),
  course_id: integer("course_id").references(() => courses.id).notNull()
});
const attendance = pgTable("attendance", {
  id: serial("id").primaryKey(),
  student_id: integer("student_id").references(() => users.id).notNull(),
  date: date("date").notNull(),
  // 'YYYY-MM-DD' format
  timestamp: timestamp("timestamp").defaultNow().notNull()
});

export { attendance as a, courses as c, db as d, enrollments as e, users as u };
