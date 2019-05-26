<template>
    <div class="nav-bar">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item v-for="item in $router.currentRoute.matched" :key="item" :to="item.path">{{ item.name }}</el-breadcrumb-item>
      </el-breadcrumb>
      <div style="float:right">
        <span><i class="el-icon-s-check"></i>admin</span>
        <span><i class="el-icon-arrow-down"></i>退出</span>
      </div>
    </div>
</template>

<script>
  import Breadcrumb from './Breadcrumb'
  export default {
    name: 'NavBar',
    components: {
      Breadcrumb
    }
  }
</script>

<style scoped>
.nav-bar{}
</style>
