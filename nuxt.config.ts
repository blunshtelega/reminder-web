export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',

  devtools: { 
    enabled: true ,
  },

  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: '123',
    // Keys within public are also exposed client-side
    public: {
      apiBase: '/api'
    }
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/_colors.scss" as *;'
        }
      }
    }
  },

  typescript: {
    typeCheck: true
  },

  // components: [
  //   { path: '~/components/UI', extensions: ['vue'] }
  // ]

  // This method does not allow you to provide reactive data. We recommend to use useHead() in app.vue.
  // css: ['~/assets/scss/main.scss']
  app: {
    // head: {
    //   charset: 'utf-8',
    //   viewport: 'width=device-width, initial-scale=1',
    // }
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },

  modules: ["@nuxt/eslint"]
})