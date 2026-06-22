import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

import mdx from '@astrojs/mdx';
import { remarkReadingTime } from './src/utils/readingTime';

import skills from 'astro-skills';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.bhavyacomputerclasses.com',
  output: 'server',
  adapter: vercel(),
  server: {
    host: true,
    allowedHosts: true,
  },
  security: {
    checkOrigin: false,
  },
  integrations: [sitemap(), skills(), mdx()],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      external: [
        '@neondatabase/serverless',
        'drizzle-orm',
        'drizzle-orm/neon-http',
        'better-auth',
        'firebase-admin',
        'firebase-admin/app',
        'firebase-admin/auth',
      ],
    },
    optimizeDeps: {
      exclude: [
        'bcryptjs',
        '@neondatabase/serverless',
        'drizzle-orm',
        'drizzle-orm/neon-http',
        'better-auth',
        'firebase-admin',
      ],
    },
  },
});
