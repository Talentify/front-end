import type { NuxtConfig } from '@nuxt/types';

require('dotenv').config();

const config: NuxtConfig = {
  /**
   * Build modules property
   * See https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-modules#buildmodules
   */
  buildModules: [
    [
      '@nuxtjs/stylelint-module',
      {
        fix: true,
      },
    ],
    [
      '@nuxt/typescript-build',
      {
        typeCheck: {
          typescript: {
            enabled: true,
            mode: 'write-tsbuildinfo',
          },
        },
      },
    ],
  ],

  /**
   * Global CSS
   * https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-css
   */
  css: [],

  /**
   * Auto import components
   * See https://nuxtjs.org/api/configuration-components
   */
  components: false,

  /**
   * Modern property
   * See https://nuxtjs.org/docs/configuration-glossary/configuration-modern/
   */
  modern: process.env.MODERN,

  /**
   * Modules property
   * See https://nuxtjs.org/docs/2.x/directory-structure/modules
   */
  modules: [],

  /**
   * Plugins to load before mounting the App
   * See https://nuxtjs.org/guide/plugins
   */
  plugins: [],

  /**
   * Server property
   * See https://nuxtjs.org/api/configuration-server/
   */
  server: {
    host: '0.0.0.0',
    port: 3000,
    timing: false,
  },

  /**
   * Target property
   * See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',

  /**
   * Telemetry property
   * See https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-telemetry
   */
  telemetry: false,

  /**
   * TypeScript config
   * See https://typescript.nuxtjs.org/guide/setup
   */
  typescript: {
    typeCheck: {
      eslint: {
        files: './**/*.{ts,js,vue}',
      },
    },
  },
};

export default config;
