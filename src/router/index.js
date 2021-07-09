import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/hello',
    name: 'Hello',
    component: () => import('../views/Hello.vue'),
    children:[
      {
        path: '/login',
        name: 'Login',
        component: Login
      },
      {
        path: '/register',
        name: 'Register',
        component: () => import('../views/Register.vue')
      }
    ]
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/useComponents',
    name: 'UseComponents',
    component: () => import('../views/UseComponents.vue')
  }
]

const router = new VueRouter({
  // 历史模式
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
