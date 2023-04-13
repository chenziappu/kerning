import { defineConfig } from "vite";
import { resolve } from 'path';

export default defineConfig({
  build: {
    minify: 'terser',
    lib: {
      entry: resolve(__dirname, 'src/kerning.ts'),
      name: 'kerning',
      fileName: 'kerning'
    }
  }
});