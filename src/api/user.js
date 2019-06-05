import crud from './crud'
import request from './json-request'

export default {
  ...crud('api/user'),
  login(user) {
    return request({
      url: 'api/user/login',
      method: 'POST',
      data: user
    })
  },
  logout(user) {
    return request({
      url: 'api/user/logout',
      method: 'POST',
      data: user
    })
  }
}
