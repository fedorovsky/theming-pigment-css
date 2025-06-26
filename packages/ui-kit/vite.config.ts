import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { pigment } from '@pigment-css/vite-plugin';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import path from 'path';

export default defineConfig({
  plugins: [
    pigment({}),
    libInjectCss(),
    dts(),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      fileName: (format) => `index.${format}.js`,
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
    },
    target: 'es2020',
  },
});
