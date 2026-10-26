import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // No GitHub Pages o site fica em /nome-do-repositorio/
  base: process.env.GITHUB_ACTIONS ? '/atividade-react/' : '/',
})