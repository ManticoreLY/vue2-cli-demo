<template>
  <div class="layout">
    <nav-menu class="menu"></nav-menu>
    <div class="right">
      <nav-bar class="navbar"/>
      <main-content class="page"></main-content>
    </div>
  </div>
</template>

<script>
  import { NavMenu, MainContent, NavBar } from './components'
  export default {
    name: 'index',
    components: { NavMenu, MainContent, NavBar }
  }
</script>

<style scoped>
  .layout{position:relative;width: 100%;height: 100%;}
  .menu{width: 200px !important;height: 100%;position: fixed;top: 0;left: 0;bottom: 0;z-index: 1001;background: #304156;overflow-x: hidden !important;}
  .right{position:relative;margin-left: 200px;min-height: 100%;background: #fff;}
  .right .navbar{width: 96%;padding:0 2%;font-size:1.5rem;background: #fff;height: 46px;display: inline-flex;justify-content: space-between;align-items: center;border: 1px solid #eee}
  .right .page{position:relative;width: 100%;min-height: 100%}
</style>
