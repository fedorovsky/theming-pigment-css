import { defineConfig } from 'vite'
import { pigment } from '@pigment-css/vite-plugin';
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), pigment({})],
  optimizeDeps: {
    include: ['react-is', 'prop-types']
  }
})
