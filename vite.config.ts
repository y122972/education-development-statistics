import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // When deploying to GitHub Pages the site lives under /<repo-name>/.
  // The VITE_BASE_PATH env var is set by the GitHub Actions workflow.
  base: process.env.VITE_BASE_PATH ?? '/',
})
