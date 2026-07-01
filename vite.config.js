import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import sitemap from 'vite-plugin-sitemap'

// https://vite.dev/config/
// Using SWC instead of Babel to avoid CSP eval() issues on GitHub Pages
export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://arthshastra.netlify.app',
      readable: true,
      dynamicRoutes: [
        '/',
        '/lessons',
        '/progress',
        '/about'
      ]
    })
  ],
  base: '/',
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
    target: 'es2015',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          firebase: ['firebase/app', 'firebase/auth', 'firebase/firestore']
        }
      }
    }
  }
})
