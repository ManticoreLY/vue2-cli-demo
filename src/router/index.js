import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout'

Vue.use(Router)

const constantRouterMap = [
  { path: '/dashboard', component: () => import('@/views/web/dashboard') },
  { path: '/login', component: () => import('@/views/back/login') },
  { path: '/main',
    component: Layout,
    name: '后台管理',
    children: [
      { path: 'medicine', name: '药品管理', component: () => import('@/views/back/main/MedicineManage') },
      { path: 'disease', name: '疾病管理', component: () => import('@/views/back/main/DiseaseManage/page') }
    ] }
]

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
