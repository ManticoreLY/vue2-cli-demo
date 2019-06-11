import request from './json-request'
import Constant from '@/utils/constant'

export default {
  upload(file, name) {
    return request({
      url: Constant.ImgUploadUrl,
      method: 'POST',
      data: {
        file, name
      }
    })
  }
}
