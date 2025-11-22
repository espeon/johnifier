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
  // Language-specific entry points
  {
    entry: {
      'greetings/languages/en': 'lib/greetings/languages/en.ts',
      'greetings/languages/es': 'lib/greetings/languages/es.ts',
      'greetings/languages/fr': 'lib/greetings/languages/fr.ts',
      'greetings/languages/de': 'lib/greetings/languages/de.ts',
      'greetings/languages/ja': 'lib/greetings/languages/ja.ts',
      'greetings/languages/zh-Hans': 'lib/greetings/languages/zh-Hans.ts',
      'greetings/languages/zh-Hant': 'lib/greetings/languages/zh-Hant.ts',
      'greetings/languages/ko': 'lib/greetings/languages/ko.ts',
      'greetings/languages/pt': 'lib/greetings/languages/pt.ts',
      'greetings/languages/it': 'lib/greetings/languages/it.ts',
      'greetings/languages/ru': 'lib/greetings/languages/ru.ts',
    },
    format: ['esm', 'cjs'],
    dts: true,
    clean: false,
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
