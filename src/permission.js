import router from './router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style
// import store from './store'

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (to.path === '/back') {
    next('/login')
    NProgress.done()
  } else if (to.path === '/web' || to.path === '/') {
    next('/dashboard')
    NProgress.done()
  } else {
    next()
  }
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
})
