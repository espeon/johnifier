import { defineConfig } from 'tsup';

export default defineConfig([
  // Core library (framework-agnostic)
  {
    entry: ['lib/index.ts'],
    format: ['esm', 'cjs'],
    dts: true,
    clean: true,
    outDir: 'dist/lib',
    sourcemap: true,
    treeshake: true,
    splitting: false,
    minify: false,
    external: [],
    tsconfig: 'tsconfig.lib.json',
  },
  // React bindings
  {
    entry: ['lib-react/index.ts'],
    format: ['esm', 'cjs'],
    dts: true,
    clean: false,
    outDir: 'dist/lib-react',
    sourcemap: true,
    treeshake: true,
    splitting: false,
    minify: false,
    external: ['react', 'react-dom'],
    tsconfig: 'tsconfig.lib-react.json',
  },
]);
