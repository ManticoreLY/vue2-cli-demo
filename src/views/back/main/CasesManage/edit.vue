<template>
    <div>
      <el-form ref="form" :model="curedCase" label-width="120px">
        <el-form-item label="标题">
          <el-input v-model="curedCase.title"></el-input>
        </el-form-item>
        <el-form-item label="内容">
          <el-input v-model="curedCase.content" type="textarea" :col="3" max-length="500"></el-input>
        </el-form-item>
        <el-form-item label="图片上传">
          <FileUploader :httpRequest="fileUploadRequest" :limit="3"></FileUploader>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
  import CaseApi from '@/api/cases'
  // import { getToken } from '@/utils/auth'
  import { uploadFile } from '@/utils/ali-upload'
  import FileUploader from '@/components/FileUploader'

  export default {
    name: 'edit',
    components: {
      FileUploader
    },
    data() {
      return {
        curedCase: {
          title: '',
          content: '',
          imgUrl: ''
        },
        isUpdate: false
      }
    },
    methods: {
      editForm(entity) {
        this.curedCase = Object.assign(this.curedCase, entity)
        this.isUpdate = true
      },
      saveForm() {
        this.$refs['form'].validate(valid => {
          if (valid) {
            if (this.isUpdate) {
              CaseApi.update(this.curedCase).then(() => {
                this.$message.success('修改成功！')
              }).catch(err => {
                console.log(err)
              })
            } else {
              CaseApi.save(this.curedCase).then(() => {
                this.$message.success('添加成功！')
              }).catch(err => {
                console.log(err)
              })
            }
          }
        })
      },
      closeForm() {
        this.$refs['form'].resetFields()
        this.$emit('close')
      },
      fileUploadRequest(option) {
        uploadFile(
          option.file,
          res => {
            this.curedCase.imgUrl = res.url
            option.onSuccess(res)
          },
          err => {
            console.log(err)
          })
      }
    }
  }
</script>

<style scoped>

</style>
