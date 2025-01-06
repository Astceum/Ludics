import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'esbuild', // Usa esbuild para una minificación rápida
    chunkSizeWarningLimit: 500, // Ajusta el límite de tamaño de los chunks
  },
});
