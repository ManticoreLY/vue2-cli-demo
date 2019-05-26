<template>
  <div class="breadcrumb">
    <el-breadcrumb style="width: 90%;margin: 15px 5%" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item v-for="item in currentPath" :key="item" :to="item.path">{{ item.name }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumb',
  props: {
    currentPath: Array
  },
  data() {
    return {
      levelList: []
    }
  }
}
</script>

<style scoped>
 .breadcrumb{width: 100%;height: 46px;line-height: 46px;background: #fff; font-size: 1.25rem;}
</style>
