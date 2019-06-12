<template>
  <div>
    <div class="web-header">
      <div class="web-logo" style="margin-left:5%;width: 15%">
        <router-link :to="{ path: '/dashboard'}">
          <img src="static/img/医诺寰球横版logo.png" style="height: 60%;width: 100%"/>
        </router-link>
      </div>
      <div class="search-frame" style="width: 50%">
        <el-input v-model="searchWord" class="search-bar" placeholder="请输入疾病或药品名,例如乙肝 吉三代">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
          <el-button slot="append">医疗搜索</el-button>
        </el-input>
      </div>
      <div class="code-img" style="width:20%">
        <img src="static/img/微信二维码-扫码咨询.jpg" style="height:80px;height: 80px;">
        <span class="text">扫码咨询</span>
        <img src="static/img/医诺寰球公众号二维码.jpg" style="height:80px;height: 80px;margin-left: 40px;">
        <span class="text">扫码咨询</span>
      </div>
    </div>
    <div class="nav-bar">
      <span style="position:relative" id="hover-icon">
        <i class="el-icon-d-arrow-right"></i>
        &nbsp;&nbsp;&nbsp;&nbsp;常见疾病库&nbsp;&nbsp;&nbsp;&nbsp;
        <div id="hover-panel">
          <hover-bar></hover-bar>
        </div>
      </span>
      <span class="">
        <router-link :to="{ path: '/drugDB' }">医药数据库</router-link>
      </span>
      <span class="">
        <router-link :to="{ path: '/cases' }">治疗案例</router-link>
      </span>
      <span class="">
        <router-link :to="{ path: '/news' }">医疗新闻</router-link>
      </span>
      <span class="">
        <router-link :to="{ path: '/about' }">关于我们</router-link>
      </span>
    </div>
    <div class="fix-content">
      <a><img :src="dianhua" style="height:38px;height:38px"><br/><b>咨询电话</b></a>
      <a><img :src="qq" style="height:38px;height:38px"><br/>QQ咨询</a>
      <a><img :src="weixin" style="height:38px;height:38px"><br/>微信咨询</a>
      <a><img :src="weibo" style="height:38px;height:38px"><br/>官方微博</a>
      <a><img :src="wxgzh" style="height:38px;height:38px"><br/>官方微信</a>
    </div>
  </div>
</template>

<script>
  import HoverBar from './HoverBar'
  export default {
    name: 'header',
    components: { HoverBar },
    data() {
      return {
        searchWord: '',
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
  .web-header{width: 80%;padding: 0 10%;height: 140px;display: flex;flex-flow:row nowrap;justify-content: space-around;align-items: center;align-content: center}
  .web-header>div.code-img{position: relative;height: 80px;display: inline-flex;align-items: center}
  .web-header .search-frame .search-bar{width: 100%;height: 40px;border: 2px solid #1CACA3;border-radius: 4px;}
  .web-header .code-img img, .web-header .code-img span{display: inline-block}
  .web-header .code-img .text{display: inline-flex;height: 80px;width: 2rem;font-size: 1.125rem;color: #ccc;flex-flow: column wrap}
  >>> .el-input-group__append{background: #1daca4;border:none;color:#fff;font-size: 18px;border-radius: 0px;}
  >>> .el-input{border: none}

  .nav-bar{width: 76%;height: 42px;padding: 0 12%;font-size: 1.5rem;border-bottom: 4px solid #1CACA3}
  .nav-bar span{display: inline-block;padding: 10px 2.25rem;}
  .nav-bar span:nth-child(1){display: inline-block;padding: 10px 2.25rem;background: #1CACA3;color: #efefef}

  .fix-content{position: fixed;right: 2.25rem; top: 16rem;z-index: 20;display: inline-flex;flex-flow: column nowrap;font-size: 10px;}
  .fix-content a{display: inline-block;margin:2px 0;padding: 5px;width:60px;height: 56px;text-align:center;background: #fff;box-shadow: 0 2px 5px 0 #444;z-index: 99}

  #hover-panel{position:absolute;width: 207px;height: 450px;background: #2cbca3;top: 45px;left: 0;z-index: 100;visibility: hidden}
  #hover-icon:hover #hover-panel{visibility: visible}

</style>
