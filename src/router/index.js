import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'    //没使用路由懒加载，在当打包构建应用时，就被打包进去了，在访问该路由时不会再下载对应的文件了

Vue.use(VueRouter)

const routes = [
  {
    // 路由重定向
    path: '/',
    redirect: '/login'
  },
  {
    path: '/hello',
    name: 'Hello',
    component: () => import('../views/Hello.vue'),
    children:[
      {
        // hello/login    
        path: 'login',   //path: '/login' 以 / 开头的嵌套路径会被当作根路径。
        name: 'Login',
        component: Login,        
        alias: '/login'   //别名
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import('../views/Register.vue')   //路由懒加载的写法，当路由被访问的时候才加载对应组件
      }
    ]
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta:{
      requiredLogin:true
    },
    
  },
  {
    path: '/useComponents',
    name: 'UseComponents',
    component: () => import('../views/UseComponents.vue')
  },
  {
    path: '/vuexTodos',
    name: 'VuexTodos',
    component: () => import('../views/VuexTodos.vue')
  }
]

const router = new VueRouter({
  // 历史模式
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes,
})

// 为路由对象，添加 beforeEach 导航守卫
// router.beforeEach((to, from, next) => {
//   // 如果访问的登录页，直接放行
//   if (to.path === '/login') return next()
//   // 从 sessionStorage 中获取到 保存的 token 值
//   const token = window.sessionStorage.getItem('token')
//   // 没有token，强制跳转到登录页
//   if (!token) return next('/login')
//   next()
// })

// 使用了路由元信息控制路由访问权限    更方便于多个页面需要不同的验证
router.beforeEach((to, from, next) => {
  // 如果访问的登录页，直接放行
  if (to.path === '/login') return next()
  // 从 sessionStorage 中获取到 保存的 token 值
  const token = window.sessionStorage.getItem('token')
  // 路由要求要登录且没有token，强制跳转到登录页
  if (to.meta.requiredLogin && !token) return next('/login')
  next()
})

export default router
