export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ModEgy',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '../static/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: './plugins/vue-carousel.js', mode: 'client' },{ src: './plugins/vue-split.js', mode: 'client' }, ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    ['nuxt-gmaps', {
      key: 'AIzaSyBGY9jeuPrJ0WdmEA_YWPoTOF5y86rdblo',
      
    }],
    '@nuxtjs/dotenv',
    '@nuxtjs/fontawesome',
    
  ],
  fontawesome: {
    icons: {
      regular:['faEnvelope'],
      brands: [
        "faFacebook",
        "faFacebookF",
        "faFacebookMessenger",
        "faInstagram",
        "faTwitter",
        "faWhatsapp",
        "faPinterest",
        "faTelegramPlane"
      ]
    }
  },
  
  

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      vue: {
        compilerOptions: {
          // This option is highly recommended
          preserveWhitespace: false
        }
      }
    }
  }
};
