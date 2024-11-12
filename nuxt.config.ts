// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/icon", "@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      Lato: [100, 300, 400, 700],
    },
  },
  tailwindcss: {},
});
