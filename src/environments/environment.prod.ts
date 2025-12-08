import { Environment } from '@abp/ng.core';

const baseUrl = 'https://naqliyat.app';

const oAuthConfig = {
  issuer: 'https://naqliyatapi.azurewebsites.net/',
  redirectUri: baseUrl,
  clientId: 'Naqliyat_App',
  responseType: 'code',
  scope: 'offline_access Naqliyat',
  requireHttps: true,
};

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'Naqliyat',
  },
  oAuthConfig,
  apis: {
    default: {
      url: 'https://naqliyatapi.azurewebsites.net',
      rootNamespace: 'Naqliyat',
    },
    AbpAccountPublic: {
      url: oAuthConfig.issuer,
      rootNamespace: 'AbpAccountPublic',
    },
  },
  remoteEnv: {
    url: '/getEnvConfig',
    mergeStrategy: 'deepmerge'
  }
} as Environment;
