import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

import skills from 'astro-skills';

// https://astro.build/config
export default defineConfig({
  site: 'https://coaching-ts8v.onrender.com', // Update this to your Cloudflare URL if needed
  output: 'server',
  adapter: cloudflare(),
  server: {
    host: true,
    allowedHosts: true
  },
  integrations: [sitemap(), skills()],
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      external: ['@neondatabase/serverless', 'drizzle-orm', 'drizzle-orm/neon-http'],
    },
  },
});