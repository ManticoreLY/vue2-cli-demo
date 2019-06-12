import Vue from 'vue'
import Router from 'vue-router'
import Content from '@/views/web/dashboard'
import Search from '@/views/web/other'
import yinuo from './yinuo'

Vue.use(Router)

export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/back/login') }
]
export const asyncRouterMap = [
  { path: '',
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
  },
  {
    path: '/search',
    name: '搜索',
    component: Search,
    children: [
      { path: '', component: () => import('@/views/web/other/SearchPage') }
    ]
  }
]

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: [...yinuo, ...constantRouterMap, ...asyncRouterMap]
})
