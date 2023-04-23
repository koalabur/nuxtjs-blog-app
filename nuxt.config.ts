// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      meta: [
        { property: "og:type", content: "website" },
        { property: "og:locale", content: "en_US" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,700;1,400;1,700&display=swap",
        },
      ],
    },
  },
  // Used to access env variables
  runtimeConfig: {
    // Private keys that are exposed to the server
    // Public keys that are exposed to the client
    public: {
      CONTENTFUL_SPACE: process.env.CONTENTFUL_SPACE,
      CONTENTFUL_CDA: process.env.CONTENTFUL_CDA,
    },
  },
  css: ["@/assets/styles/global.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: "@import \"@/assets/styles/abstracts.scss\";",
        },
      },
    },
  },
  modules: ["@nuxt/image-edge", "@nuxtjs/eslint-module"],
  eslint: {
    lintOnStart: false,
  },
  image: { contentful: {} },
});
