import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      base: '/',
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      build: {
        // Optimize for production
        target: 'esnext',
        rollupOptions: {
          output: {
            manualChunks: {
              // Core vendor chunks
              'vendor-react': ['react', 'react-dom', 'react-router-dom'],
              // 3D rendering (loaded lazily)
              'vendor-three': ['three', '@react-three/fiber', '@react-three/drei'],
              // Animation library
              'vendor-motion': ['framer-motion'],
              // Icons
              'vendor-icons': ['lucide-react'],
            },
            // Optimize chunk file names
            chunkFileNames: 'assets/[name]-[hash].js',
            entryFileNames: 'assets/[name]-[hash].js',
            assetFileNames: 'assets/[name]-[hash].[ext]',
          },
        },
        // Increase chunk size warning limit for Three.js
        chunkSizeWarningLimit: 1200,
        // CSS optimization
        cssCodeSplit: true,
        // Asset inlining threshold
        assetsInlineLimit: 4096,
      },
      // Optimize dependencies
      optimizeDeps: {
        include: ['react', 'react-dom', 'react-router-dom', 'framer-motion', 'lucide-react'],
      },
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
    };
});
