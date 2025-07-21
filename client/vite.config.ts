import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    emptyOutDir: true,
    outDir: '../dist/client',
  },
  resolve: {
    alias: {
      '@ui': path.resolve(__dirname, '../ui'),
    },
  },
  server: {
    fs: {
      allow: ['..'],
    },
  },
})
