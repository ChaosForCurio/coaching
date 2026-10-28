import { defineCollection } from 'astro:content';
import { z } from 'astro:schema';
import { glob, file } from 'astro/loaders';

const coursesCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/courses' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    duration: z.string().optional(),
    level: z.string().optional(),
    curriculum: z
      .array(
        z.object({
          module: z.string(),
          topics: z.array(z.string()),
        })
      )
      .optional(),
    faqs: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string(),
        })
      )
      .optional(),
  }),
});

const testimonialsCollection = defineCollection({
  loader: file('src/data/testimonials.json'),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    course: z.string(),
    courseSlug: z.string().optional(),
    placedAt: z.string().optional(),
    badge: z.string().optional(),
    rating: z.number().min(1).max(5),
    date: z.string(),
    avatar: z.string().optional(),
    text: z.string(),
  }),
});

const placementsCollection = defineCollection({
  loader: file('src/data/placements.json'),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    company: z.string(),
    companyLogo: z.string().optional(),
    role: z.string(),
    course: z.string(),
    courseSlug: z.string().optional(),
    batchYear: z.string(),
    location: z.string().optional(),
    image: z.string().optional(),
    package: z.string().optional(),
    featured: z.boolean().optional(),
    previousBackground: z.string().optional(),
    salaryGrowth: z.string().optional(),
    interviewExperience: z.string().optional(),
  }),
});

const faqsCollection = defineCollection({
  loader: file('src/data/faqs.json'),
  schema: z.object({
    id: z.string(),
    category: z.string().optional(),
    relatedCourses: z.array(z.string()).optional(),
    question: z.string(),
    answer: z.string(),
  }),
});

const instructorsCollection = defineCollection({
  loader: file('src/data/instructors.json'),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    role: z.string(),
    roleHindi: z.string().optional(),
    experience: z.string(),
    initials: z.string(),
    accent: z.string().optional(),
    specialties: z.array(z.string()),
    bio: z.string(),
    featured: z.boolean().optional(),
  }),
});

const batchesCollection = defineCollection({
  loader: file('src/data/batches.json'),
  schema: z.object({
    id: z.string(),
    courseName: z.string(),
    courseSlug: z.string(),
    batchType: z.string(),
    startDate: z.string(),
    timing: z.string(),
    duration: z.string(),
    mode: z.string(),
    seatsLeft: z.number(),
    status: z.enum(['open', 'filling-fast', 'closed']).optional(),
  }),
});

export const collections = {
  courses: coursesCollection,
  testimonials: testimonialsCollection,
  placements: placementsCollection,
  faqs: faqsCollection,
  instructors: instructorsCollection,
  batches: batchesCollection,
};
