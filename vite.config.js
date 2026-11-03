import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// BASE permite publicar el sitio en una subcarpeta (GitHub Pages);
// en Netlify y en local queda en la raíz.
export default defineConfig({
  base: process.env.BASE || '/',
  plugins: [react()],
})
