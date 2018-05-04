import Router from 'vue-router'
import Vue from 'vue'
import login from '@/telas/login'
import dashboard from '@/telas/dashboard'
import index from '@/site/index'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: index
    },
    {
      path: '/sys/login',
      name: 'Login',
      component: login
    },
    {
      path: '/sys/dashboard',
      name: 'Dashboard',
      component: dashboard
    }
  ]
})
