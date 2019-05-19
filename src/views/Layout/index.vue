<template>
  <!--<el-container style="position: relative;height: 100%; border: 1px solid #eee">
    <el-aside style="position: fixed;top: 0;left: 0;bottom: 0;width: 14%!important;background: #545c64">
      <nav-menu></nav-menu>
    </el-aside>
    <el-container style="position: fixed;width: 86%;right: 0;top:0;bottom: 0;">
      <el-header>
        <nav-bar/>
      </el-header>
      <el-main>

      </el-main>
    </el-container>
  </el-container>-->
  <div class="layout">
    <div class="menu">
      <nav-menu></nav-menu>
    </div>
    <div class="right">
      <div class="header">
        <nav-bar/>
      </div>
      <div class="content">
        <main-content></main-content>
      </div>
    </div>
  </div>
</template>

<script>
  import NavMenu from './components/NavMenu'
  import MainContent from './components/MainContent'
  import NavBar from './components/NavBar'
  export default {
    name: 'index',
    components: { NavMenu, MainContent, NavBar }
  }
</script>

<style scoped>
  .layout{position:relative;width: 100%;height: 100%;margin: 0;padding: 0}
  .menu{width: 20%;height: 100%;background: #545c64;line-height: 3rem;float: left}
  .right{width: 80%;height: 100%;background: #f5f5f5;float: left}
  .right .header{width: 100%;height: 4rem;line-height: 4rem;font-size: 1.25rem;background: #545c64;color: #fff}
  .right .content{width: 100%;margin:inherit;height: content-box}
</style>
