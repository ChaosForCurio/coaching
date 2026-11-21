-- Migration: 0004_critical_fixes
-- Applies all 4 critical database integrity fixes:
--   1. enquiries.claimed_by_user_id  — proper FK replacing free-text claimed_by
--   2. ON DELETE cascade / restrict / set null on all FKs
--   3. UNIQUE(student_id, course_id) on enrollments
--   4. user_role ENUM + CHECK constraint on users.role

-- ============================================================
-- FIX #4 — Create user_role ENUM
-- ============================================================

-- Normalise any casing drift before we apply the constraint
UPDATE users SET role = lower(role) WHERE role != lower(role);

CREATE TYPE user_role AS ENUM ('admin', 'teacher', 'student');
--> statement-breakpoint

ALTER TABLE users
  ALTER COLUMN role TYPE user_role USING role::user_role;
--> statement-breakpoint

-- ============================================================
-- FIX #2 — Rebuild FKs with correct ON DELETE behaviour
-- Drop old FK constraints, re-add with cascade / restrict / set null
-- ============================================================

-- attendance
ALTER TABLE attendance DROP CONSTRAINT attendance_student_id_users_id_fk;
--> statement-breakpoint
ALTER TABLE attendance DROP CONSTRAINT attendance_course_id_courses_id_fk;
--> statement-breakpoint
ALTER TABLE attendance
  ADD CONSTRAINT attendance_student_id_users_id_fk
    FOREIGN KEY (student_id) REFERENCES users(id) ON DELETE CASCADE;
--> statement-breakpoint
ALTER TABLE attendance
  ADD CONSTRAINT attendance_course_id_courses_id_fk
    FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE;
--> statement-breakpoint

-- enrollments
ALTER TABLE enrollments DROP CONSTRAINT enrollments_student_id_users_id_fk;
--> statement-breakpoint
ALTER TABLE enrollments DROP CONSTRAINT enrollments_course_id_courses_id_fk;
--> statement-breakpoint
ALTER TABLE enrollments
  ADD CONSTRAINT enrollments_student_id_users_id_fk
    FOREIGN KEY (student_id) REFERENCES users(id) ON DELETE CASCADE;
--> statement-breakpoint
ALTER TABLE enrollments
  ADD CONSTRAINT enrollments_course_id_courses_id_fk
    FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE;
--> statement-breakpoint

-- sessions
ALTER TABLE sessions DROP CONSTRAINT sessions_user_id_users_id_fk;
--> statement-breakpoint
ALTER TABLE sessions
  ADD CONSTRAINT sessions_user_id_users_id_fk
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE;
--> statement-breakpoint

-- passkeys
ALTER TABLE passkeys DROP CONSTRAINT passkeys_user_id_users_id_fk;
--> statement-breakpoint
ALTER TABLE passkeys
  ADD CONSTRAINT passkeys_user_id_users_id_fk
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE;
--> statement-breakpoint

-- notifications
ALTER TABLE notifications DROP CONSTRAINT notifications_user_id_users_id_fk;
--> statement-breakpoint
ALTER TABLE notifications
  ADD CONSTRAINT notifications_user_id_users_id_fk
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE;
--> statement-breakpoint

-- password_reset_tokens
ALTER TABLE password_reset_tokens DROP CONSTRAINT password_reset_tokens_user_id_users_id_fk;
--> statement-breakpoint
ALTER TABLE password_reset_tokens
  ADD CONSTRAINT password_reset_tokens_user_id_users_id_fk
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE;
--> statement-breakpoint

-- audit_logs — SET NULL so historical records survive user deletion
-- audit_logs.user_id must become nullable first
ALTER TABLE audit_logs ALTER COLUMN user_id DROP NOT NULL;
--> statement-breakpoint
ALTER TABLE audit_logs DROP CONSTRAINT audit_logs_user_id_users_id_fk;
--> statement-breakpoint
ALTER TABLE audit_logs
  ADD CONSTRAINT audit_logs_user_id_users_id_fk
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL;
--> statement-breakpoint

-- announcements — cascade on course, restrict on teacher (keep course history)
ALTER TABLE announcements DROP CONSTRAINT announcements_course_id_courses_id_fk;
--> statement-breakpoint
ALTER TABLE announcements DROP CONSTRAINT announcements_teacher_id_users_id_fk;
--> statement-breakpoint
ALTER TABLE announcements
  ADD CONSTRAINT announcements_course_id_courses_id_fk
    FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE;
--> statement-breakpoint
ALTER TABLE announcements
  ADD CONSTRAINT announcements_teacher_id_users_id_fk
    FOREIGN KEY (teacher_id) REFERENCES users(id) ON DELETE RESTRICT;
--> statement-breakpoint

-- courses — restrict deletion if a teacher still owns courses
ALTER TABLE courses DROP CONSTRAINT courses_teacher_id_users_id_fk;
--> statement-breakpoint
ALTER TABLE courses
  ADD CONSTRAINT courses_teacher_id_users_id_fk
    FOREIGN KEY (teacher_id) REFERENCES users(id) ON DELETE RESTRICT;
--> statement-breakpoint

-- ============================================================
-- FIX #3 — UNIQUE constraint on enrollments(student_id, course_id)
-- De-duplicate any existing duplicate rows first (keep lowest id)
-- ============================================================

DELETE FROM enrollments
WHERE id NOT IN (
  SELECT min(id)
  FROM enrollments
  GROUP BY student_id, course_id
);
--> statement-breakpoint

ALTER TABLE enrollments
  ADD CONSTRAINT uq_enrollment UNIQUE (student_id, course_id);
--> statement-breakpoint

-- ============================================================
-- FIX #1 — Add claimed_by_user_id FK to enquiries
-- Keep the old claimed_by text column for now (can drop after backfill)
-- ============================================================

ALTER TABLE enquiries
  ADD COLUMN claimed_by_user_id INTEGER
    REFERENCES users(id) ON DELETE SET NULL;
--> statement-breakpoint
