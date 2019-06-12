// import crud from '../crud'
import request from '../json-request'

export default {
  // ...crud('api/brand/brand')
  queryPage(query) {
    return request({
      url: 'api/home/homeBrandConfig',
      method: 'POST',
      data: query
    })
  }
}
