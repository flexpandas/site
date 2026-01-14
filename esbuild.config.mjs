import { build } from 'esbuild';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// esbuild doesn't support alias directly, but it resolves imports during bundling
// The path aliases from tsconfig.json are resolved by TypeScript/tsx during development
// For production builds, we need to ensure the paths resolve correctly
await build({
  entryPoints: ['server/index.ts'],
  platform: 'node',
  packages: 'external',
  bundle: true,
  format: 'esm',
  outdir: 'dist',
  // Use resolve extensions and mainFields to help with module resolution
  mainFields: ['module', 'main'],
  resolveExtensions: ['.ts', '.tsx', '.js', '.jsx', '.mjs', '.cjs'],
  // External packages that shouldn't be bundled
  external: [
    'better-sqlite3',
    '@neondatabase/serverless',
    'express',
    'express-session',
    'passport',
    'passport-local',
    'connect-pg-simple',
    'memorystore',
    '@sendgrid/mail',
    'ws',
  ],
});
