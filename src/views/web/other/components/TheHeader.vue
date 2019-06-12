<template>
    <div class="page">
      <div class="web-title">
        <div class="item1" style="width: 180px;text-align: right">
          <div class="text-icon">寰球医疗最新动态<i class="arrow-right"></i></div>
        </div>
        <div class="item2" style="width: 450px;height: 2.5rem;line-height: 2.5rem">
          <canvas id="canvas" style="width: 100%;height: 2.25rem;"></canvas>
        </div>
        <div class="item3" style="width: 720px;text-align: right">
          <router-link v-show="$route.fullPath !== '/dashboard'" to="/dashboard" class="item-title"><i class="my-icon-home" style="color: #1daca4;font-size: 1.2rem">&nbsp;医诺寰球首页</i></router-link>
          <a class="item-title">网站地图</a>
          <a class="item-title">医疗客服</a>
          <a class="item-title">海外医疗：400-0000-000</a>
          <a class="item-title" style="border: none">邮箱：xxxx@yinuohuanqiu.com</a>
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
      <div class="web-header">
        <div class="web-logo" style="margin-left:5%;width: 15%">
          <router-link :to="{ path: '/dashboard'}">
            <img src="static/img/医诺寰球横版logo.png" style="height: 60%;width: 100%"/>
          </router-link>
        </div>
        <div class="search-frame" style="width: 50%;margin-left: 30px;">
          <el-input v-model="searchWord" class="search-bar" placeholder="请输入疾病或药品名,例如乙肝 吉三代">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
            <el-button slot="append">医疗搜索</el-button>
          </el-input>
        </div>
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
  export default {
    name: 'TheHeader',
    data() {
      return {
        dianhua: 'static/icon/dianhua.png',
        qq: 'static/icon/qqicon.png',
        weixin: 'static/icon/微信icon.png',
        wxgzh: 'static/icon/微信公众号icon.png',
        weibo: 'static/icon/微博icon.png'
      }
    },
    methods: {}
  }
</script>

<style scoped>
  .web-title{position: relative;width:80%;padding: 0 10%;height: 2.75rem;background: #f5f5f5;border-bottom: 1px solid #eee;display:inline-flex;flex-flow: row nowrap;align-items: center}
  .web-title .item1, .web-title .item2, .web-title .item3{display: inline-block}
  .web-title .item1 .text-icon{display: inline-block;position:relative;font-size: 1rem;font-weight: 600;color: #efefef;background: #1CACA3;color: #ececec;padding: 4px 12px;border-radius: 3px;}
  .web-title .item1 .text-icon .arrow-right{position:absolute;top:8px;right: -10px;height: 0;width: 0;border-width: 5px;border-style: solid;border-color: transparent transparent transparent #1CACA3}
  .web-title .item3{font-size: 1.125rem;color: #545454;line-height: 1.5rem;line-height: 1.5rem;}
  .web-title .item3 .item-title{display: inline-flex;position:relative;border-right:1px solid #545454;padding: 0 6px;}
  .web-title .item3 .item-title .arrow-down{position:absolute;top: 5px;right: -10px;height: 0;width: 0;border-width: 5px;border-style: solid;border-color: #545454 transparent transparent transparent}

  .nav-bar{width: 76%;height: 42px;padding: 0 12%;margin-top: 20px;font-size: 1.5rem;border-bottom: 4px solid #1CACA3}
  .nav-bar span{display: inline-block;padding: 10px 2.25rem;}
  .nav-bar span:nth-child(1){display: inline-block;padding: 10px 2.25rem;background: #1CACA3;color: #efefef}

  .fix-content{position: fixed;right: 2.25rem; top: 16rem;z-index: 20;display: inline-flex;flex-flow: column nowrap;font-size: 10px;}
  .fix-content a{display: inline-block;margin:2px 0;padding: 5px;width:60px;height: 56px;text-align:center;background: #fff;box-shadow: 0 2px 5px 0 #444;z-index: 99}

  .web-header{width: 80%;padding: 0 10%;height: 80px;display: flex;flex-flow:row nowrap;justify-content: left;align-items: center;align-content: center}
  .web-header .search-frame .search-bar{width: 100%;height: 40px;border: 2px solid #1CACA3;border-radius: 4px;}
  >>> .el-input-group__append{background: #1daca4;border:none;color:#fff;font-size: 18px;border-radius: 0px;}
  >>> .el-input{border: none}
</style>
