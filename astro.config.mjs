import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

import skills from 'astro-skills';

// https://astro.build/config
export default defineConfig({
  site: 'https://bhavyacareerinstitute.com',
  output: 'server',
  adapter: vercel(),
  integrations: [sitemap(), skills()],
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      external: ['@neondatabase/serverless', 'drizzle-orm', 'drizzle-orm/neon-http'],
    },
  },
});