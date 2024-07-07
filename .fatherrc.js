import { defineConfig } from 'father';

export default defineConfig({
  platform: 'browser',
  targets: { chrome: 86 },
  cjs: { output: 'lib' },
  esm: {
    output: 'es',
    alias: { 'rc-util/lib': 'rc-util/es' },
  },
});
