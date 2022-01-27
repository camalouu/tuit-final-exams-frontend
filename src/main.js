import Vue from 'vue'
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import routes from './routes'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

const router = new VueRouter({
  routes: routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')