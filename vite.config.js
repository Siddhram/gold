import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: './', // Use relative paths for assets
  server: {
    host: '0.0.0.0',
    port: 5173,
    proxy: {
      '/api': {
        target: 'https://jewelry-management-api.onrender.com',
        changeOrigin: true,
        secure: true
      }
    }
  },
  // Custom build options
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true,
  },
}); 