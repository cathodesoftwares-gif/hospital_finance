/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import eslint from 'vite-plugin-eslint';
import path from 'path';

export default defineConfig(({ mode }) => ({
  root: __dirname,
  base: '/',
  build: {
    outDir: '../../dist/apps/frontend',
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  server: {
    port: 4201,
    host: 'localhost',
    hmr: {
      overlay: true,
    },
    open: true,
  },
  resolve: {
    alias: {
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@GlobalState': path.resolve(__dirname, 'src/app/GlobalState.ts'),
    },
  },
  plugins: [
    react({
      jsxRuntime: 'automatic',
    }),
    nxViteTsPaths(),
    // Temporarily disabled ESLint to fix deployment
    // eslint({
    //   failOnError: false,
    //   failOnWarning: false,
    // }),
  ],
  define: {
    'process.env.NODE_ENV': JSON.stringify(mode),
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
}));
