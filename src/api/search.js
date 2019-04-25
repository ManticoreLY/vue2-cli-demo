import request from './json-request'
import { $request } from "./jquery";

export default {
  queryItems(obj) {
    return request({
      url: 'https://8utqcw022k.execute-api.us-east-1.amazonaws.com/test',
      method: 'POST',
      data: JSON.stringify(obj)
    })
  },
  searchItems(obj, callback) {
    $request(obj, 'https://8utqcw022k.execute-api.us-east-1.amazonaws.com/test', callback)
  }
}
