// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src',
  devtools: { enabled: true },
  modules: [
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "nuxt-icon",
    "@nuxt/test-utils",
    "@vee-validate/nuxt",
    "nuxt-typed-router",
    "@vueuse/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    '@nuxt/test-utils/module',
    "@nuxt/fonts",
    "@nuxt/eslint"
  ],
  vue: {
    propsDestructure: true,
  },

  tailwindcss: {
  viewer: false,
  cssPath: '~/assets/css/tailwind.css',
  },

  compatibilityDate: "2024-07-10"
})