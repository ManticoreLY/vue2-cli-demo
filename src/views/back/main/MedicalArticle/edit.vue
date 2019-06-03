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
    methods: {}
  }
</script>

<style scoped>

</style>
