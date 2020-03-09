import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify)



export default ctx => {
  const vuetify = new Vuetify({
    theme: {
      dark: false 
    }
  })

  ctx.app.vuetify = vuetify
  ctx.$vuetify = vuetify.framework
}