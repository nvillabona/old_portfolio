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
  plugins: [
    { src: '~plugins/ga.js', mode: 'client' }
  ],
  /*
   ** Nuxt.js dev-modules
   */

  buildModules: [
    ],
  
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    "bootstrap-vue/nuxt"

  ],


  
  /*
   ** Build configuration
   */

  generate: {
    fallback: true
  },

  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
