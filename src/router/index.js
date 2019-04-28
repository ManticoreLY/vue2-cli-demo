import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const constantRouterMap = [
  { path: '/dashboard', component: () => import('@/views/web/dashboard') },
  { path: '/login', component: () => import('@/views/back/login') },
  { path: '/main/medicine', component: () => import('@/views/back/main/MedicineManage/index') },
  { path: '/main/disease', component: () => import('@/views/back/main/MedicineManage/index') },
]

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
