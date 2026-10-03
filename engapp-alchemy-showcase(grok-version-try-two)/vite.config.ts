import path from 'node:path'
import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

const projectDir = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  cacheDir: './.vite-cache',
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: { '@': path.resolve(projectDir, './src') },
  },
})
