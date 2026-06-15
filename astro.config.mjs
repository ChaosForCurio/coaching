import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';

import skills from 'astro-skills';

// https://astro.build/config
export default defineConfig({
  site: 'https://coaching-ts8v.onrender.com', // Update this to your Cloudflare URL if needed
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
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
    optimizeDeps: {
      exclude: ['bcryptjs', '@neondatabase/serverless', 'drizzle-orm', 'drizzle-orm/neon-http']
    }
  },
});