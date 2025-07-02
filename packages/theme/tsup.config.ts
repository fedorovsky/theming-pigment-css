import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['out/tokens.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: false,
  splitting: false,
  target: 'es2019',
  platform: 'node',
  minify: true,
});
