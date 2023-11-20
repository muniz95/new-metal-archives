import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import NotFound from '@/views/NotFound.vue'
import bands from './bands'
import labels from './labels'
import misc from './misc'
import albums from './albums'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        requiresAuth: false,
        isAdmin: false
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        requiresAuth: false,
        isAdmin: false
      }
    },
    ...bands,
    ...labels,
    ...misc,
    ...albums,
    {
      path: '/*',
      component: NotFound
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('jwt') == null) {
      next({
        path: '/login',
        params: { nextUrl: to.fullPath }
      })
    } else {
      const user = JSON.parse(localStorage.getItem('user'))
      if (to.matched.some(record => record.meta.is_admin)) {
        if (user.is_admin === 1) {
          next()
        } else {
          next({ name: 'userboard' })
        }
      } else {
        next()
      }
    }
  } else if (to.matched.some(record => record.meta.guest)) {
    if (localStorage.getItem('jwt') == null) {
      next()
    } else {
      next({ name: 'userboard' })
    }
  } else {
    next()
  }
})

export default router
