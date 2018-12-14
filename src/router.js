import Vue from 'vue'
import Router from 'vue-router'
import Auth from '@/auth'

import Home from './views/Home.vue'
import Login from './views/auth/login.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { notWhileLoggedIn: true },
    },
    {
      path: '/',
      name: 'home',
      meta: { requiresAuth: true },
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      meta: { requiresAuth: true },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})


router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {   
    if (!Auth.checkSession()) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.notWhileLoggedIn)){
      if (Auth.checkSession()) {
        next({
          path: '/'
        })
      } else {
        next()
      }
  } else {
    next()
  }
})

export default router