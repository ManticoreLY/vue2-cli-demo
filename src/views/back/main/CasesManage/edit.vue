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
          <el-upload></el-upload>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
  export default {
    name: 'edit',
    data() {
      return {
        curedCase: {
          title: '',
          content: '',
        }
      }
    },
    methods: {}
  }
</script>

<style scoped>

</style>
