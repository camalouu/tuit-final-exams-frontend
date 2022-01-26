import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import AddQuestions from './components/AddQuestions.vue'
import QuestionForm from './components/QuestionForm.vue'
import App from './App.vue'

const router = new VueRouter({
  routes: [
    {
      path: '/addQuestions',
      component: AddQuestions
    },
    {
      path: '/addQuestions/:subject',
      component: QuestionForm
    }
  ]
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')