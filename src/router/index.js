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
      { path: 'drugDB', component: () => import('@/views/web/DrugDatabase') },
      { path: 'cases', component: () => import('@/views/web/CureCase') },
      { path: 'news', component: () => import('@/views/web/MedicalNews') },
      { path: 'about', component: () => import('@/views/web/about') }
    ]
  }
]
const prefix = '/main'
export const asyncRouterMap = [
  {
    path: prefix + '/medicine',
    component: Layout,
    name: '药品管理',
    children: [
      { path: '', name: '药品管理', component: () => import('@/views/back/main/MedicineManage') },
      { path: 'rank', name: '排行榜管理', component: () => import('@/views/back/main/MedicineManage/rank') }
    ]
  },
  {
    path: prefix + '/disease',
    component: Layout,
    name: '疾病管理',
    children: [
      { path: 'disease', name: '疾病管理', component: () => import('@/views/back/main/DiseaseManage/page') }
    ]
  },
  {
    path: prefix + '/cases',
    component: Layout,
    name: '转阴案例管理',
    children: [
      { path: '', name: '转阴案例管理', component: () => import('@/views/back/main/CasesManage') }
    ]
  }
]

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap.concat(asyncRouterMap)
})
