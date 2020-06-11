var { randomUUID } = require('./random')
// 初始化Client
// var co = require('co')
var OSS = require('ali-oss')
// var fs = require('fs')
var client = new OSS({
  region: 'oss-cn-shenzhen',
  bucket: 'yinuo-web',
  accessKeyId: '', // 'ltaiLAIcNl1TqlZT1',
  accessKeySecret: '' // 'RR8xCgnC6oEOKN5thsfdwFPruBVAxj2'
})

var ali_oss = {
  endPoint: 'http://oss-cn-shenzhen.aliyuncs.com/',
  dir: '/'
}

export async function uploadFile(file, success, fail) {
  try {
    var key = ali_oss.dir + randomUUID()
    const result = await client.put(key, file)
    // console.log(result)
    if (result.res.statusCode === 200) {
      success(result)
    } else {
      fail('上传失败')
    }
  } catch (e) {
    console.log(e)
    fail(e)
  }
}
