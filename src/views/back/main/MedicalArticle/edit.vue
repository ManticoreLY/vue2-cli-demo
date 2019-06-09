<template>
    <div>
      <el-form ref="form" :model="medincalArticle" label-width="120px">
        <el-form-item label="标题">
          <el-input v-model="medincalArticle.title"></el-input>
        </el-form-item>
        <el-form-item label="内容">
          <el-input v-model="medincalArticle.content" type="textarea" :col="3" max-length="500"></el-input>
        </el-form-item>
        <el-form-item label="图片上传">
          <el-upload></el-upload>
        </el-form-item>
        <el-form-item label="作者">
          <el-input v-model="medincalArticle.author"></el-input>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
  import ArticleApi from '@/api/articles'
  export default {
    name: 'edit',
    data() {
      return {
        medincalArticle: {
          title: '',
          content: '',
          author: ''
        }
      }
    },
    methods: {
      editForm(entity) {
        this.isUpdate = true
        this.medincalArticle = Object.assign(this.medincalArticle, entity)
      },
      saveForm() {
        this.$refs['form'].validate(valid => {
          if (valid) {
            if (this.isUpdate) {
              ArticleApi.update(this.medincalArticle).then(data => {
                this.$message.warning('修改成功！')
              }).catch(err => {
                console.log(err)
              })
            } else {
              ArticleApi.save(this.medincalArticle).then(data => {
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
