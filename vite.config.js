import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy API requests to the Flask backend
      '/api': {
        // target: 'https://127.0.0.1:5001',  // Flask backend URL
        target: 'https://techstoreplatform.tech',  // Flask backend URL
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
