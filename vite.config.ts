import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgr from 'vite-plugin-svgr'


// https://vite.dev/config/
export default defineConfig({
  publicDir: '__public__',
  plugins: [
    react(), 
    tsconfigPaths(), 
    svgr()
  ],
  build: {
    outDir: 'public'
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.ts',
    coverage: {
      exclude: [
        '**/*.test.*',
        './__public__/**',
        './dist/**',
        './public/**',
        './eslint.config.mjs',
        './vite.config.ts',
        './src/vite-env.d.ts',
        './src/main.tsx'
      ],
      reporter: ['text', 'html'],
      thresholds: {
        '100': true
      }
    }
  }
})
