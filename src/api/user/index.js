import request from '../json-request'
import crud from '../crud'

export default {
  ...crud('api/users'),
  getUserById(id) {
    return request({
      url: 'api/users' + id,
      method: 'GET'
    })
  }
}
