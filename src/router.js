import Vue from 'vue'
import Router from 'vue-router'
import Auth from '@/auth'

import Home from './views/Home.vue'
import Login from './views/auth/login.vue'
import Register from './views/auth/register.vue'

import Members from './views/members/index'
import Products from './views/products/index'

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
      path: '/register',
      name: 'register',
      component: Register,
      meta: { notWhileLoggedIn: true },
    },
    {
      path: '/',
      name: 'home',
      meta: { requiresAuth: true },
      component: Home
    },
    {
      path: '/profile',
      name: 'profile',
      meta: { requiresAuth: true },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Profile.vue')
    },
    {
      path: '/members',
      name: 'members',
      meta: { requiresAuth: true },
      component: Members
    },
    {
      path: '/products',
      name: 'products',
      meta: { requiresAuth: true },
      component: Products
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