<template>
  <el-container style="position: relative;height: 100%; border: 1px solid #eee">
    <el-aside style="position: fixed;top: 0;left: 0;bottom: 0;width: 14%!important;background: #545c64">
      <nav-menu></nav-menu>
    </el-aside>
    <el-container style="position: fixed;width: 86%;right: 0;top:0;bottom: 0;">
      <el-header style="text-align: right; font-size: 12px">
        <breadcrumb></breadcrumb>
      </el-header>
      <el-main>
        <main-content></main-content>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import NavMenu from './components/NavMenu'
  import MainContent from './components/MainContent'
  import Breadcrumb from './components/Breadcrumb'
  export default {
    name: 'index',
    components: { NavMenu, MainContent, Breadcrumb },
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }
      return {
        tableData: Array(20).fill(item)
      }
    }
  }
</script>

<style scoped>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>
