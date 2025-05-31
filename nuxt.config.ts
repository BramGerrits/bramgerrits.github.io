// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-02-16',
    devtools: { enabled: false },
    modules: [
        '@nuxtjs/i18n',
        '@nuxt/fonts',
        '@nuxt/image',
        '@nuxt/content'
    ],
    vite : {
        build: {
            chunkSizeWarningLimit: 1000
        }
    },
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
                language: 'nl',
                flag: '🇳🇱'
            },
            {
                code: 'en',
                iso: 'en-US',
                name: 'English',
                file: 'en.json',
                language: 'en',
                flag: '🇬🇧'
            }
        ],
        defaultLocale: 'nl',
        strategy: 'prefix_except_default',
        lazy: true,
        langDir: 'locales/',
        baseUrl: process.env.I18N_BASE_URL,
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',
            alwaysRedirect: false,
            fallbackLocale: 'nl'
        },
    },
    nitro: {
        static: true,
        prerender: {
            crawlLinks: true,
            routes: [],
        },
    },
    hooks: {
        async "prerender:routes"(ctx) {
            // ToDo: dynamically add all blog routes instead of them being crawled
        },
    }
})