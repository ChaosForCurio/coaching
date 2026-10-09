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

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    author: z.string().optional(),
    excerpt: z.string().optional(),
    image: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const citiesCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/cities' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

const testimonialsCollection = defineCollection({
  loader: file('src/data/testimonials.json'),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    course: z.string(),
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
    role: z.string(),
    course: z.string(),
    batchYear: z.string(),
    location: z.string().optional(),
    image: z.string().optional(),
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

export const collections = {
  courses: coursesCollection,
  blog: blogCollection,
  cities: citiesCollection,
  testimonials: testimonialsCollection,
  placements: placementsCollection,
  faqs: faqsCollection,
};
