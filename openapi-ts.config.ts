import { defineConfig, defaultPlugins } from '@hey-api/openapi-ts';

export default defineConfig({
  input: './openapi.json',
  output: {
    format: 'prettier',
    lint: 'eslint',
    path: './lib/client',
  },
  plugins: [
    ...defaultPlugins,
    '@hey-api/client-fetch',
    '@hey-api/schemas',
    'zod',
    {
      dates: true,
      name: '@hey-api/transformers',
    },
    {
      name: '@hey-api/sdk',
      transformer: true,
      validator: true,
    },
    '@tanstack/react-query',
    '@hey-api/client-next',
    '@hey-api/typescript',
  ],
});
