import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {

    proxy: {

      "/api": {

        target: "https://script.google.com/macros/s/AKfycbz5NLFpEcv7r1KRq_zXPMHRkKRzOaFOo7e2d9R7e2QDCVPRYNxp6t2KEhZJbDQ8oVCajA/exec?action=",

        changeOrigin: true,

        rewrite: (path) => path.replace(/^\/api/,"")

      }

    }

  }
})