// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: true,
  nitro: {
    preset: 'static',
    devProxy: {
      '/api/': 'http://localhost:8788/api/',
    }
  }
})
