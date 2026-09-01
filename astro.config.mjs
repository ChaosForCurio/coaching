import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';
import partytown from '@astrojs/partytown';

import mdx from '@astrojs/mdx';
import { remarkReadingTime } from './src/utils/readingTime';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.bhavyacomputerclasses.com',
  image: {
    domains: ['images.unsplash.com'],
  },
  server: {
    host: true,
    allowedHosts: true,
  },
  security: {
    checkOrigin: false,
  },
  integrations: [
    sitemap(),
    mdx(),
  ],
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
