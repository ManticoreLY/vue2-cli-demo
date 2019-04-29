import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

function generateRouters(menus) {
  var routerMap = []
  menus.forEach(menu => {
    if (menu.children && menu.children.length) {
      const childMenus = menu.children.map(child => {
        return {
          path: menu.path + child.path,
          component: _import(menu.module)
        }
      })
      routerMap = routerMap.concat(childMenus)
    } else {
      routerMap.push({
        path: menu.path + menu.children[i].path,
        component: _import(menu.module)
      })
    }
  })
  return routerMap
}

const constantRouterMap = [
  { path: '/dashboard', component: () => import('@/views/web/dashboard') },
  { path: '/login', component: () => import('@/views/back/login') }
  // { path: '/main/medicine', component: () => import('@/views/back/main/MedicineManage/index') },
  // { path: '/main/disease', component: () => import('@/views/back/main/MedicineManage/index') }
]

const syncRouterMap = generateRouters(store.state.menu.menus)
const routes = constantRouterMap.concat(syncRouterMap)

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes
})
