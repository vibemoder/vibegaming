import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import clerk from '@clerk/astro';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), clerk()],
  output: 'server',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt', 'es'],
    routing: {
      prefixDefaultLocale: false
    }
  },

  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  })
});
