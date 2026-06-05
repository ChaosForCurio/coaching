import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const coursesCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/courses" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    duration: z.string().optional(),
    level: z.string().optional(),
  }),
});

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    author: z.string().optional(),
    excerpt: z.string().optional(),
    image: z.string().optional(),
  }),
});

const citiesCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/cities" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = {
  'courses': coursesCollection,
  'blog': blogCollection,
  'cities': citiesCollection,
};
