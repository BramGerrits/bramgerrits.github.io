// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/i18n',
    '@nuxt/fonts',
    '@nuxt/image'
  ],
  fonts: {
    families: [
      {
        name: 'Faustina',
        weights: [400, 500, 600, 700]
      },
      {
        name: 'Inter',
        weights: [400, 500, 600]
      }
    ]
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  i18n: {
    locales: [
      { 
        code: 'nl', 
        iso: 'nl-NL', 
        name: 'Nederlands', 
        file: 'nl.json', 
        flag: '🇳🇱' 
      },
      { 
        code: 'en', 
        iso: 'en-US', 
        name: 'English', 
        file: 'en.json', 
        flag: '🇬🇧' 
      }
    ],
    defaultLocale: 'nl',
    strategy: 'prefix_except_default',
    lazy: true,
    langDir: 'locales/',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: false,
      fallbackLocale: 'nl'
    }
  }
})