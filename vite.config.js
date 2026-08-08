import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages user site (anusha-payidiparthi.github.io) uses root base.
export default defineConfig({
  plugins: [react()],
  base: '/',
});
