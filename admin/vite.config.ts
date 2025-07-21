import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/admin/',
  build: {
    emptyOutDir: true,
    outDir: '../dist/admin',
  },
})
