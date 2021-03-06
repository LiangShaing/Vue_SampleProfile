const pkg = require('./package')


const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

const path = require('path')

module.exports = {

  server: {
    port: 3001, // default: 3000
    host: '0.0.0.0', // default: localhost
  },
  mode: 'spa',
  // generate: {
  //   // dir: 'C:\\apache-tomcat-8.5.45\\webapps\\ROOT',
  //   dir: 'C:\\nginx\\html'
  // },
  router: {
    middleware: 'i18n'
  },


  /*
  ** Headers of the page
  */
  head: {
    title: 'demo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description', name: 'description', content: 'Vue Material Admin Template is a \n' +
          '    Google Material Design inspired admin dashboard template built with Vue and Vuetify.'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/echarts/4.0.4/echarts-en.min.js' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3adced' },

  /*
  ** Global CSS
  */
  css: [
    // '~/assets/style/theme.styl',
    // '~/assets/style/app.styl',
    'font-awesome/css/font-awesome.css',
    'roboto-fontface/css/roboto/roboto-fontface.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vuetify',
    '@/plugins/i18n.js'
    // '@/plugins/vee-validate'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [],

  /*
  ** Build configuration
  */
  build: {
    transpile: ['vuetify/lib'],
    plugins: [new VuetifyLoaderPlugin()],
    // loaders: {
    //   stylus: {
    //     import: ["~assets/style/variables.styl"]
    //   }
    // },

    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  }
}
