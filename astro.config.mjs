import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://partners.goconstellation.com',
  integrations: [sitemap()],
  output: 'static',
});
