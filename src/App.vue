<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
html, body{
  margin: 0;
  padding: 0;
  font-size: 12px;
  background: #f5f5f5;
  width: 100%;
  height: 100%;
}
a{text-decoration: none;color: inherit}
a:hover{cursor: pointer}
p{margin: 5px auto;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
}
.el-input{width: 240px}
</style>
