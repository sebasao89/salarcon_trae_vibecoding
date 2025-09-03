import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: process.env.CI ? 'https://username.github.io' : 'http://localhost:4321',
  base: process.env.CI ? '/trae-astro-vice-coding/' : '/',
  output: 'static',
  build: {
    assets: 'assets'
  },
  vite: {
    css: {
      transformer: 'postcss'
    }
  },
  trailingSlash: 'ignore'
});