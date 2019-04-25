import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const constantRouterMap = [
  // { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '',component: () => import('@/views/main/search') }
]

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
