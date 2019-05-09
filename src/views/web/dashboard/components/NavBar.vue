<template>
  <div class="web-nav">
    <div class="nav-images">
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="img in imgs" :key="img">
          <img :src="img" style="width: 100%;height:auto">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NavBar',
    data() {
      return {
        imgs: [
          'static/img/首页banner2.jpg', 'static/img/首页banner3.jpg', 'static/img/首页banner4.jpg',
          'static/img/首页banner2.jpg', 'static/img/首页banner5.jpg', 'static/img/首页banner6.jpg'
        ]
      }
    }
  }
</script>

<style scoped>
  .web-nav{width: 100%;height: 380px;}
  .web-nav .nav-images{position: relative}
</style>
