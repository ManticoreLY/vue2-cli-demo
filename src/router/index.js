import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout'

Vue.use(Router)

const constantRouterMap = [
  { path: '/dashboard', component: () => import('@/views/web/dashboard') },
  { path: '/login', component: () => import('@/views/back/login') },
  { path: '/main/medicine', component: () => import('@/views/back/main/MedicineManage') },
  { path: '/main/disease', component: Layout }
]

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
