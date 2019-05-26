<template>
  <div class="layout">
    <nav-menu class="menu"></nav-menu>
    <div class="right">
      <nav-bar class="header"/>
      <main-content class="content"></main-content>
    </div>
  </div>
</template>

<script>
  import NavMenu from './components/NavMenu'
  import MainContent from './components/MainContent'
  import NavBar from './components/NavBar'
  // import SideBar from './components/Sidebar'
  export default {
    name: 'index',
    components: { NavMenu, MainContent, NavBar }
  }
</script>

<style scoped>
  .layout{position:relative;width: 100%;height: 100%;}
  .menu{width: 180px !important;height: 100%;position: fixed;top: 0;left: 0;bottom: 0;z-index: 1001}
  .right{position:relative;margin-left: 180px;height: 100%;background: #f5f5f5;}
  .right .header{width: 100%;height: 4rem;line-height: 4rem;font-size: 1.25rem;color: #fff}
  .right .content{width: 100%;}
</style>
