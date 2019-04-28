<template>
  <div class="breadcrumb">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumb',
  data() {
    return {
      levelList: []
    }
  },
  methods: {
    getBreadcrumb() {
      const route = this.$route
      const matched = route.filter(item => item.name === route.name)
      this.levelList = [].concat(matched[0])
    }
  },
  watch: {
    $route() {
      this.getBreadcrumb()
    }
  }
}
</script>

<style scoped>
 .breadcrumb{width: 100%;height: 24px;border-bottom: 1px solid #ccc;display: flex;align-items: center;margin-bottom: 15px}
</style>
