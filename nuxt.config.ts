import { resolve } from "node:path"

export default defineNuxtConfig({
  modules: ["@hebilicious/authjs-nuxt"],
  devtools: { enabled: true },
  alias: {
    cookie: resolve(__dirname, "node_modules/cookie")
  },
  devServer: {
    https: {
      key: './localhost-key.pem',
      cert: './localhost.pem',
    }
  },
})
