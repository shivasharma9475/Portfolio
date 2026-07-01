import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 900,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('/three/')) return 'three'
            if (id.includes('@react-three')) return 'r3f-vendor'
            if (id.includes('framer-motion') || id.includes('gsap')) return 'motion-vendor'
          }
        },
      },
    },
  },
})
