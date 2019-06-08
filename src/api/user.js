import crud from './crud'
import request from './json-request'

export default {
  ...crud('api/users'),
  login(user) {
    return request({
      url: 'login',
      method: 'POST',
      data: user
    })
  },
  logout(user) {
    return request({
      url: 'logout',
      method: 'POST',
      data: user
    })
  }
}
