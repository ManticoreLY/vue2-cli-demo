<template>
  <div class="web-nav">
    <div class="nav-bar">
      <span><a class="el-icon-d-arrow-right">常见疾病库</a></span>
      <span class=""><a>医药数据库</a></span>
      <span class=""><a>治疗案例</a></span>
      <span class=""><a>医疗新闻</a></span>
      <span class=""><a>关于我们</a></span>
    </div>
    <div class="nav-images">
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="img in imgs" :key="img">
          <img :src="img" style="width: 100%;height:auto">
        </el-carousel-item>
      </el-carousel>
      <div class="fix-content">
        <a><img :src="dianhua" style="height:38px;height:38px"><br/><b>咨询电话</b></a>
        <a><img :src="qq" style="height:38px;height:38px"><br/>QQ咨询</a>
        <a><img :src="weixin" style="height:38px;height:38px"><br/>微信咨询</a>
        <a><img :src="weibo" style="height:38px;height:38px"><br/>官方微博</a>
        <a><img :src="wxgzh" style="height:38px;height:38px"><br/>官方微信</a>
      </div>
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
        ],
        dianhua: 'static/icon/dianhua.png',
        qq: 'static/icon/qqicon.png',
        weixin: 'static/icon/微信icon.png',
        wxgzh: 'static/icon/微信公众号icon.png',
        weibo: 'static/icon/微博icon.png'
      }
    }
  }
</script>

<style scoped>
  .web-nav{width: 100%;height: 380px;}
  .web-nav .nav-bar{width: 90%;height: 42px;padding: 0 5%;font-size: 1.5rem;border-bottom: 4px solid #1CACA3}
  .web-nav .nav-bar span{display: inline-block;padding: 10px 2.25rem;}
  .web-nav .nav-bar span:nth-child(1){display: inline-block;padding: 10px 2.25rem;background: #1CACA3;color: #efefef}
  .web-nav .nav-images{position: relative}
  .web-nav .nav-images .fix-content{position: fixed;right: 2.25rem; top: 18rem;z-index: 20;display: inline-flex;flex-flow: column nowrap;font-size: 10px;color:red}
  .web-nav .nav-images .fix-content a{display: inline-block;width:60px;height: 56px;text-align:center;background: #fff;box-shadow: 0 5px 2px 0 #ccc;margin-top:2px}
</style>
