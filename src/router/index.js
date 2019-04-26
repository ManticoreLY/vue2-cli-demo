import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const constantRouterMap = [
  { path: '/dashboard',component: () => import('@/views/back/dashboard') },
  { path: '/login', component: () => import('@/views/back/login'), hidden: true },
  { path: '/main', component: () => import('@/views/back/main'), hidden: true }
]

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
