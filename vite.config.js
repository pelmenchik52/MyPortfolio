import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// base './' дозволяє розгорнути на GitHub Pages у будь-якому репозиторії
export default defineConfig({ plugins: [react()], base: './' })
