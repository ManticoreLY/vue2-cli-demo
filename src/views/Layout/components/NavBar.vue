<template>
    <div class="nav-bar">
      <breadcrumb :currentPath="$router.currentRoute.matched"/>
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
.nav-bar{width: 100%;height: 4rem;line-height: 4rem;position:relative;font-size: 1.5rem;}
</style>
