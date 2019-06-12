import crud from '../crud'
import request from '../json-request'
export default {
  ...crud('front/home'),
  banners() {
    const url = 'front/home/banners'
    return request({
      url,
      method: 'GET'
    })
  },
  diseaseColumn() {
    const url = 'front/home/diseaseColumn'
    return request({
      url,
      method: 'GET'
    })
  },
  newsReport() {
    const url = 'front/home/newsReport'
    return request({
      url,
      method: 'GET'
    })
  },
  medicalNews() {
    const url = 'front/home/medicalNews'
    return request({
      url,
      method: 'GET'
    })
  },
  brands() {
    const url = 'front/home/brands'
    return request({
      url,
      method: 'GET'
    })
  },
  friendLinks() {
    const url = 'front/home/friendLinks'
    return request({
      url,
      method: 'GET'
    })
  },
  footerInfo() {
    const url = 'front/home/footerInfo'
    return request({
      url,
      method: 'GET'
    })
  }
}
