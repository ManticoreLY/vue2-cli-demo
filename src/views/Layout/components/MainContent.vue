<template>
    <div id="main-content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
</template>

<script>
    export default {
      name: 'MainContent'
    }
</script>

<style scoped>
#main-content{position: relative;z-index: 9999}
</style>
