import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    // Warn if any chunk exceeds 200 KB
    chunkSizeWarningLimit: 200,
    terserOptions: {
      compress: {
        // Strip all console.* calls in production
        drop_console: true,
        drop_debugger: true,
        // Remove dead code paths
        dead_code: true,
        passes: 2,
      },
      format: {
        comments: false,
      },
    },
    rollupOptions: {
      output: {
        // Vendor chunk splitting for better caching
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-router': ['react-router-dom'],
          'vendor-motion': ['framer-motion'],
          'vendor-helmet': ['react-helmet-async'],
        },
      },
    },
  },
})
