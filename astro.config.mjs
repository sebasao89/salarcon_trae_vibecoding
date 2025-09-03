import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://username.github.io', // Cambiar 'username' por tu nombre de usuario de GitHub
  base: '/trae-astro-vice-coding/', // Nombre del repositorio
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