import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/admin/',
  build: {
    emptyOutDir: true,
    outDir: '../dist/admin',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@ui': path.resolve(__dirname, '../ui'),
    },
  },
  server: {
    fs: {
      allow: ['..'],
    },
  },
})
