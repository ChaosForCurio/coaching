import type { APIRoute } from 'astro';
import { db } from '../../db';
import { enrollments } from '../../db/schema';

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const data = await request.formData();
  const student_id = parseInt(data.get('student_id') as string);
  const course_id = parseInt(data.get('course_id') as string);

  if (student_id && course_id) {
    await db.insert(enrollments).values({
      student_id,
      course_id,
    });
  }

  return redirect('/dashboard');
};
