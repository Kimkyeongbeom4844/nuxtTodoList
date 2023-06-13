// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/robots",
  ],
  css: ["@/assets/css/reset.css", "@/assets/css/style.css"],
  devServer: {
    port: 3000,
  },
  runtimeConfig: {
    dbHost: process.env.DATABASE_HOST || "localhost",
    dbUser: process.env.DATABASE_USER || "root",
    dbPw: process.env.DATABASE_PASSWORD || "이건안알려줌",
    dbDb: process.env.DATABASE_DATABASE || "todolist",
  },
  app: {
    head: {
      title: "nuxt로 만든 투두리스트",
      meta: [
        {
          name: "description",
          content: "SEO까지 세팅한 nuxt3로 만든 투두리스트",
        },
        {
          charset: "utf-8",
        },
      ],
    },
  },
  piniaPersistedstate: {
    cookieOptions: {
      maxAge: 3600,
      sameSite: "strict",
    },
    storage: "cookies",
  },
  typescript: {
    strict: true,
  },
});
