
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/mi-portafolio/',

  build: {
    minify: 'esbuild',
    cssMinify: true,
    sourcemap: false
  }
})
