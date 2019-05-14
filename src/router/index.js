import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout'
import Content from '@/views/web/dashboard'

Vue.use(Router)

export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/back/login') },
  { path: '/',
    name: '主页',
    component: Content,
    children: [
      { path: 'dashboard', component: () => import('@/views/web/dashboard/main') },
      { path: 'medicineInfo', component: () => import('@/views/web/MedicineInfo') },
      { path: 'drugDB', component: () => import('@/views/web/DrugDatabase') }
    ]
  }
]

export const asyncRouterMap = [
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
  routes: constantRouterMap.concat(asyncRouterMap)
})
