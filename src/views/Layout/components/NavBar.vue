<template>
    <div class="nav-bar">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item v-for="item in currentPath.matched" :key="item" :to="item.path">{{ item.name }}</el-breadcrumb-item>
      </el-breadcrumb>
      <div>
        <el-dropdown>
          <el-button type="success" size="small">当前用户：admin<i class="el-icon-arrow-down el-icon--right"></i></el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看资料</el-dropdown-item>
            <el-dropdown-item>退出登陆</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'NavBar',
    computed: {
      currentPath() {
        return this.$router.currentRoute
      }
    },
    watch: {
      $router() {
        console.log(this.$router)
      }
    }
  }
</script>

<style scoped>
</style>
