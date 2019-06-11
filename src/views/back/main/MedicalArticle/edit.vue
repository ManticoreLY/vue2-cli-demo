<template>
  <div>
    <el-form ref="form" :model="medicalArticle" label-width="120px">
      <el-form-item label="标题">
        <el-input v-model="medicalArticle.title"></el-input>
      </el-form-item>
      <el-form-item label="内容">
        <quill-editer @getContent="getEditerContent"></quill-editer>
      </el-form-item>
      <el-form-item label="图片上传">
        <FileUploader :http-request="fileUploadRequest" :limit="7"></FileUploader>
      </el-form-item>
      <el-form-item label="作者">
        <el-input v-model="medicalArticle.author"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import ArticleApi from '@/api/articles'
  import { uploadFile } from '@/utils/ali-upload'
  import FileUploader from '@/components/FileUploader'
  import QuillEditer from '@/components/QuillEditer'
  export default {
    name: 'edit',
    components: {
      FileUploader,
      QuillEditer
    },
    data() {
      return {
        medicalArticle: {
          title: '',
          content: '',
          author: '',
          imgUrl: ''
        },
        isUpdate: false
      }
    },
    methods: {
      editForm(entity) {
        this.isUpdate = true
        this.medicalArticle = Object.assign(this.medicalArticle, entity)
      },
      saveForm() {
        this.$refs['form'].validate(valid => {
          if (valid) {
            if (this.isUpdate) {
              ArticleApi.update(this.medicalArticle).then(data => {
                this.$message.warning('修改成功！')
              }).catch(err => {
                console.log(err)
              })
            } else {
              ArticleApi.save(this.medicalArticle).then(data => {
                this.$message.warning('添加成功！')
              }).catch(err => {
                console.log(err)
              })
            }
          }
        })
      },
      getEditerContent(val) {
        console.log(val)
      },
      fileUploadRequest(opt) {
        uploadFile(
        opt.file,
        res => {
          this.medicalArticle.imgUrl = res.url
          opt.onSuccess(res)
        },
        err => {
          console.log(err)
        }
        )
      },
      closeForm() {
        this.$refs['form'].resetFields()
        this.$emit('close')
      }
    }
  }
</script>

<style scoped>

</style>
