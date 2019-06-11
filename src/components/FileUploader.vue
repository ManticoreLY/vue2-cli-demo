<template>
    <el-upload :action="action" list-type="picture-card" :headers="headers" :name="name" :show-file-list="showFileList"
               :accept="accept" :drag="drag" :limit="limit" :http-request="httpRequest">
      <i class="el-icon-plus"></i>
      <!--<div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>-->
    </el-upload>
</template>

<script>
  import { randomUUID } from '@/utils/random'

  export default {
    name: 'FileUploader',
    props: {
      httpRequest: {
        type: Function
      },
      accept: {
        type: String,
        default: 'jpg, JPG, png, PNG, bmp, BMP, gif, GIf'
      },
      drag: {
        type: Boolean,
        default: false
      },
      limit: {
        type: Number,
        default: 1
      },
      showFileList: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        action: 'https://jsonplaceholder.typicode.com/posts/',
        name: randomUUID(),
        headers: {
          'Content-Type': 'image/jpeg'
        }
      }
    }
  }
</script>

<style scoped>

</style>