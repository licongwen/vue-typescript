import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/Login')
    },
    {
      path: '/personal',
      name: 'Personal',
      component: () => import('@/views/Personal')
    },
    {
      path: '/home',
      name: 'Home',
      componet: () => import('@/views/Subscribe')
    },
    {
      path: '/subscribe',
      name: 'Subscribe',
      component: () => import('@/views/Subscribe')
    },
    {
      path: '/message',
      name: 'Message',
      componet: () => import('@/views/Message')
    }
  ]
})
