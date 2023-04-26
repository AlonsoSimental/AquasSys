import './bootstrap';
import { createApp } from 'vue'
import app from './components/app.vue'
import router from './router/index.js'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

createApp(app).use(router).use(vuetify).mount("#app")

