import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://sebasao89.github.io',
  base: process.env.NODE_ENV === 'production' ? '/salarcon_trae_vibecoding' : '/',
})