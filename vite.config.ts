import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Use relative base to ensure it works in subfolders like /Portfolio or at the root
  base: './', 
  server: {
    port: 3000,
    host: true
  },
  define: {
    // This allows the code to access process.env.API_KEY as requested
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY)
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: './index.html',
      },
    },
  },
});