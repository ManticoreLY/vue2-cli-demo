<template>
  <div class="web-nav">
    <div class="nav-images">
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="banner in banners" :key="banner">
          <a :href="banner.url" target="_blank">
          <img :src="banner.img" style="width: 100%;height:100%">
          </a>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
  import home from '@/api/Homepage/home'
  export default {
    name: 'NavBar',
    data() {
      return {
        banners: [],
        imgs: [
          'static/img/首页banner2.jpg', 'static/img/首页banner3.jpg', 'static/img/首页banner4.jpg',
          'static/img/首页banner2.jpg', 'static/img/首页banner5.jpg', 'static/img/首页banner6.jpg'
        ]
      }
    },
    created() {
      home.banners().then(data => {
        this.banners = data.obj
      })
    }
  }
</script>

<style scoped>
  .web-nav{width: 100%;height: 380px;}
  .web-nav .nav-images{position: relative}
</style>
