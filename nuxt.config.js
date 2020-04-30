export default {
  mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    title: "Nicolás Villabona",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/logo.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#3b8070" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    "bootstrap-vue/nuxt"
  ],

    serverMiddleware: [
      (req, res, next) => {
        if (/\/{2,}/.test(req.url)) {
          const url = req.url.replace(/\/{2,}/g, '/')
          res.writeHead(301, { 'Location': url })
          return res.end()
        }
        next()
      }
    ],
  
  /*
   ** Build configuration
   */
  generate: {
    fallback: true
  },
  router: {
    extendRoutes (routes, resolve) {
      routes.push({
        name: 'custom',
        path: '//',
        component: resolve(__dirname, 'layouts/error.vue')
      })
    }
  },
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
