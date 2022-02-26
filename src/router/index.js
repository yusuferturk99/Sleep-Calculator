import Vue from 'vue'
import VueRouter from 'vue-router'
import ThePages from '../components/ThePages.vue'
import TheWakeup from '../components/TheWakeup.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: ThePages
  },
  {
    path: '/wakeup',
    name: 'TheWakeup',
    component: TheWakeup
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
