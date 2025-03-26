import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/", // Asegura que todas las rutas sean relativas a la raíz
  server: {
    hmr: true, // Recarga en caliente
  },
  build: {
    outDir: "dist", // Carpeta de salida
  }
})
