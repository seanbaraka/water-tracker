// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: true,
  },
  devtools: { enabled: true },
  ssr: false,
  modules: ["@nuxtjs/tailwindcss"],
  css: ["~/assets/styles/main.css"],
});
