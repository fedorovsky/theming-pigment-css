import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { pigment } from '@pigment-css/vite-plugin';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import path from 'path';
import fg from 'fast-glob';

const componentsDir = path.resolve(__dirname, 'src');

// Найдём все index.ts/tsx в папках компонентов
const componentEntryFiles = fg.sync('*/index.{ts,tsx}', {
  cwd: componentsDir,
  onlyFiles: true,
});

// Сформируем entry-объект
const entries = componentEntryFiles.reduce<Record<string, string>>(
  (acc, relativePath) => {
    const [dirName] = relativePath.split('/'); // 'first-component'
    acc[dirName] = path.resolve(componentsDir, relativePath); // абсолютный путь
    return acc;
  },
  {}
);

export default defineConfig({
  plugins: [
    pigment({}),
    libInjectCss(),
    dts({
      outDir: path.resolve(__dirname, 'dist', 'types'),
    }),
  ],
  build: {
    lib: {
      entry: entries,
      // entry: {
      //   'first-component': path.resolve(
      //     __dirname,
      //     'src',
      //     'first-component',
      //     'index.ts'
      //   ),
      //   'pigment-card': path.resolve(
      //     __dirname,
      //     'src',
      //     'pigment-card',
      //     'index.ts'
      //   ),
      //   'second-component': path.resolve(
      //     __dirname,
      //     'src',
      //     'second-component',
      //     'index.ts'
      //   ),
      // },
      fileName: (format, entryName) => `${entryName}.${format}.js`,
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
    },
    target: 'es2020',
  },
});
