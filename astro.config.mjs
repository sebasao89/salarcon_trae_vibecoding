import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://slarcontech.com',
  base: '/',
  output: 'static',
  build: {
    assets: 'assets'
  },
  vite: {
    css: {
      transformer: 'postcss'
    }
  }
});