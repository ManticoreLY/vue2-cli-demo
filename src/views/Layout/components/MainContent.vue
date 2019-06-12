<template>
    <keep-alive id="main-content">
      <router-view></router-view>
    </keep-alive>
</template>

<script>
  export default {
    name: 'MainContent'
  }
</script>

<style scoped>
  #main-content{margin: 20px;}
</style>
