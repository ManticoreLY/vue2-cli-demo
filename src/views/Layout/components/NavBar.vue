<template>
    <div class="nav-bar">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item v-for="item in $route.matched" :key="item" :to="item.path">{{ item.name }}</el-breadcrumb-item>
      </el-breadcrumb>
      <div>
        <el-dropdown>
          <el-button type="success" size="small"><i class="my-icon-user" style="font-size: 1.25rem">&nbsp;&nbsp;admin</i><i class="el-icon-arrow-down"></i></el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看资料</el-dropdown-item>
            <el-dropdown-item>
              <el-button type="text" @click="logout">退出登陆</el-button>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'NavBar',
    methods: {
      logout() {
        this.$router.replace({ path: '/login' })
      }
    }
  }
</script>

<style scoped>
</style>
