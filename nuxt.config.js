export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Modern Egy',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Modern Egy is a website that enhances your real estate experience ' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'}
    ]
  },

  generate:{
    crawler: true

  },
 
  router: {
    scrollBehavior(to) {
      if (to.hash) {
        return window.scrollTo({
          top: document.querySelector(to.hash).offsetTop,
          behavior: 'smooth'
        });
      }
      return window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'aos/dist/aos.css'
  ],
  
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: './plugins/vue-carousel.js', mode: 'client' },
  { src: './plugins/vue-split.js', mode: 'client' },
  {src: './plugins/aos.js', mode: 'client'},
  
  
  
],
  // loading: '~/components/Loading.vue',
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    'nuxt-compress',
    '@nuxt/image',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ['nuxt-lazy-load', {
      // These are the default values
      images: true,
      videos: true,
      audios: true,
      iframes: true,
      native: false,
      directiveOnly: true,
      
      // Default image must be in the static folder
  
      // To remove class set value to false
      loadingClass: 'isLoading',
      loadedClass: 'isLoaded',
      appendClass: 'lazyLoad',
      
      observerConfig: {
        // See IntersectionObserver documentation
      }
    }],
    '@nuxtjs/axios',
    [
      'nuxt-compress',
      {
        gzip: {
          threshold: 8192,
        },
        brotli: {
          threshold: 8192,
        },
      },
    ],
    'nuxt-leaflet',
    '@nuxtjs/dotenv',
    '@nuxtjs/fontawesome',
    'nuxt-ssr-cache',
    '@nuxt/image'
    
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
        "faTelegramPlane",
        "faLinkedin"
      ],
      solid: ['faArrowRight', 'faTimes', 'faExpandArrowsAlt', 'faCompress']
    }
  },
  
  cache: {
   
    useHostPrefix: false,
    pages: [
      '/'
    ],
    
    key(route, context) {
     
    },
 
    store: {
      type: 'memory',
 
      
      max: 100,
 
      ttl: 60,
    },
  },
  
  image: {
    // Options
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
