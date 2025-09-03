import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: process.env.CI ? 'https://sebasao89.github.io' : 'http://localhost:4321',
  base: process.env.CI ? '/salarcon_trae_vibecoding/' : '/',
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