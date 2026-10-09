import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base relativa: el sitio funciona en cualquier ruta
// (usuario.github.io/nombre-del-repo/, dominio propio, Vercel, Netlify).
export default defineConfig({
  base: './',
  plugins: [react()],
})
