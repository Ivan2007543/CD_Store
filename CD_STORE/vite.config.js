import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Una sola exportación con todos los plugins juntos
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  base: '/CD_Store/',
})