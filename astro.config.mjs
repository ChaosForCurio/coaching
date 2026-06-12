import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/serverless';

import skills from 'astro-skills';

// https://astro.build/config
export default defineConfig({
  site: 'https://coaching-ts8v.onrender.com', // Update this to your Vercel URL if needed
  output: 'server',
  adapter: vercel(),
  server: {
    host: true
  },
  integrations: [sitemap(), skills()],
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      external: ['@neondatabase/serverless', 'drizzle-orm', 'drizzle-orm/neon-http'],
    },
  },
});