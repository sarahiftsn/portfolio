import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio/',  // Spécifiez le nom de votre dépôt GitHub ici // Remplacez par le nom de votre dépôt GitHub
  plugins: [react()],
})
