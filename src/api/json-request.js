import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import router from '@/router'
import { getToken } from '@/utils/auth'
import Constant from '@/utils/constant'

// create an axios instance
const service = axios.create({
  baseURL: Constant.ServerUrl, // api的base_url
  timeout: 5000, // request timeout
  // 请求头信息
  headers: { 'X-Requested-With': 'XMLHttpRequest' },
  // headers: { 'Accept': '*' },
  // 返回数据类型
  responseType: 'json', // default
  // `withCredentials` indicates whether or not cross-site Access-Control requests
  // should be made using credentials
  withCredentials: false, // default

  transformRequest: [function(data) {
    // 这里可以在发送请求之前对请求数据做处理，比如form-data格式化等，这里可以使用开头引入的Qs（这个模块在安装axios的时候就已经安装  了，不需要另外安装）
    data = JSON.stringify(data)
    return data
  }]
})

// request interceptor
service.interceptors.request.use(config => {
  // Do something before request is sent
  if (store.getters.token) {
    config.headers['X-Token'] = getToken()
  }
  config.headers['Content-Type'] = 'application/json;charset=UTF-8'
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  return Promise.reject(new Error(error.message || 'Error'))
})

// respone interceptor
service.interceptors.response.use(
  response => {
    const data = response.data
    /* if (data.code === 401 || data.code === 503) {
      // 需要重新登录
      Alert('TOKEN已过期，可以取消继续留在该页面，或者重新登录', '确定登出', {
        type: 'warning',
        callback: action => {
          store.dispatch('LogOut').then(() => {
            location.reload()// 为了重新实例化vue-router对象 避免bug
          })
        }
      })
    }*/
    if (data) {
      // 请求数据成功
      return response.data
    } else {
      if (data.message) {
        Message({
          message: data.message,
          type: 'warning',
          duration: 5 * 1000
        })
      }
      return Promise.reject(data)
    }
  },
  /**
  * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
  * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
  */
  //  const res = response.data;
  //     if (res.code !== 20000) {
  //       Message({
  //         message: res.message,
  //         type: 'error',
  //         duration: 5 * 1000
  //       });
  //       // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
  //       if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
  //         MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
  //           confirmButtonText: '重新登录',
  //           cancelButtonText: '取消',
  //           type: 'warning'
  //         }).then(() => {
  //           store.dispatch('FedLogOut').then(() => {
  //             location.reload();// 为了重新实例化vue-router对象 避免bug
  //           });
  //         })
  //       }
  //       return Promise.reject('error');
  //     } else {
  //       return response.data;
  //     }
  error => {
    console.log('err' + error)// for debug
    if (error.response.status === 401 || error.response.status === 503) {
      // 需要重新登录
      Message({
        message: 'TOKEN已过期,请重新登录',
        type: 'warning',
        duration: 5 * 1000
      })
      router.push({ path: '/login' })
    } else {
      Message({
        message: error.message,
        type: 'error',
        duration: 5 * 1000
      })
    }
    return Promise.reject(error)
  })

export default service
