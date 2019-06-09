import router from './router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style
import { getToken } from './utils/auth'
// import store from './store'

const whiteList = ['/login']

router.beforeEach((to, from, next) => {
  NProgress.start()
  const token = getToken()
  if (to.path === '/web' || to.path === '/') {
    next('/dashboard')
    NProgress.done()
  } else {
    if (token !== 'undefined' && typeof token !== undefined) {
      next()
      NProgress.done()
    } else if (whiteList.indexOf(to.path) > -1) {
      next()
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
})
