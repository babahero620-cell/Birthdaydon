import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages: set the repository name here when deploying as
// https://USERNAME.github.io/REPOSITORY/ . Leave empty for a custom domain/user site.
export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? '/birthday-surprise/' : '/',
  plugins: [react(), tailwindcss()],
});
