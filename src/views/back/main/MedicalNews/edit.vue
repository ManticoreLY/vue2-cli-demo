<template>
    <div>
      <el-form ref="form" :model="medicalNews" label-width="120px">
        <el-form-item label="标题">
          <el-input v-model="medicalNews.title"></el-input>
        </el-form-item>
        <el-form-item label="内容">
          <el-input v-model="medicalNews.content" type="textarea" :col="3" max-length="500"></el-input>
        </el-form-item>
        <el-form-item label="图片上传">
          <el-upload></el-upload>
        </el-form-item>
        <el-form-item label="作者">
          <el-input v-model="medicalNews.author"></el-input>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
  import NewsApi from '@/api/news'
  export default {
    name: 'edit',
    data() {
      return {
        medicalNews: {
          title: '',
          content: '',
          author: ''
        },
        isUpdate: false
      }
    },
    methods: {
      editForm(entity) {
        this.isUpdate = true
        this.medicalNews = Object.assign(this.medicalNews, entity)
      },
      saveForm() {
        this.$refs['form'].validate(valid => {
          if (valid) {
            if (this.isUpdate) {
              NewsApi.update(this.medicalNews).then(data => {
                this.$message.warning('修改成功！')
              }).catch(err => {
                console.log(err)
              })
            } else {
              NewsApi.save(this.medicalNews).then(data => {
                this.$message.warning('添加成功！')
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
      }
    }
  }
</script>

<style scoped>

</style>
