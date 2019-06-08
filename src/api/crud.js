import request from './json-request'

export default (baseUrl) => {
  return {
    queryPage(page) {
      return request({
        url: `${baseUrl}/page`,
        method: 'POST',
        data: page
      })
    },
    getEntity(id) {
      return request({
        url: baseUrl + '/' + id,
        method: 'GET'
      })
    },
    save(form) {
      return request({
        url: baseUrl,
        method: 'POST',
        data: form
      })
    },
    update(form) {
      return request({
        url: baseUrl,
        method: 'PUT',
        data: form
      })
    },
    remove(id) {
      return request({
        url: baseUrl + '/' + id,
        method: 'DELETE'
      })
    }
  }
}
