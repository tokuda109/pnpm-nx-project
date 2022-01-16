import { NuxtConfig } from '@nuxt/types';

const config: NuxtConfig = {
  dev: process.env.NODE_ENV !== 'production',
  generate: {
    dir: '../../dist'
  },
  buildModules: ['@nuxt/typescript-build']
};

export default config;
