import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  build: {
      outDir: "dist",
      assetsDir: "assets",
      rollupOptions: {
        input: {
            app: "resources/js/main.tsx",
        }
      }
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./public', import.meta.url))
    }
  }
})
