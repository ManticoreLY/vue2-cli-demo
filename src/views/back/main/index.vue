<template>
    <div style="margin: 20px;">
        <!--<nav-menu :active-index="index"></nav-menu>-->
        <div class="page">
            <router-view/>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'index',
    components: {
    },
    data() {
      return {
        index: '1-1'
      }
    }
  }
</script>

<style scoped>
.page{width: 100%;margin-top: 20px;}
</style>
