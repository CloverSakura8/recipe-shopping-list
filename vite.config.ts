import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/recipe-shopping-list/', // This should match your repository name
  root: '.', // Specify the root directory
  build: {
    outDir: 'dist',
  },
  server: {
    port: 5173,
    strictPort: true,
    hmr: {
      overlay: false,
      timeout: 30000
    },
    watch: {
      usePolling: true,
      interval: 1000
    }
  }
})
