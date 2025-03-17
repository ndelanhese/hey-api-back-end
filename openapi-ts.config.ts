import { defineConfig, defaultPlugins } from '@hey-api/openapi-ts';

export default defineConfig({
  input: './openapi.json',
  output: {
    path: './src/client',
  },
  plugins: [...defaultPlugins, '@hey-api/client-fetch'],
});
