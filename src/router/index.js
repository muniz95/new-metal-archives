import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import bands from './bands'
import labels from './labels'
import misc from './misc'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    ...bands,
    ...labels,
    ...misc
  ]
})
