// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src',
  devtools: { enabled: true },
  modules: [
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "shadcn-nuxt",
    "nuxt-icon",
    "@nuxt/test-utils",
    "@vee-validate/nuxt",
    "nuxt-typed-router",
    "@vueuse/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    '@nuxt/test-utils/module',
    "@nuxt/fonts"
  ],
  shadcn: {
    prefix: 'S', // Sirius Prefix
    componentDir: './src/components/ui',
  },
  vue: {
    propsDestructure: true,
  },
  tailwindcss: {
    viewer: false,
  }
})