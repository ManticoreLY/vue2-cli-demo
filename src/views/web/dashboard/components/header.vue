<template>
  <div class="web-header">
    <div class="web-logo" style="margin-left:5%;width: 13%">
      <img src="static/img/医诺寰球横版logo.png" style="height: 45px;width: 100%"/>
    </div>
    <div class="search-frame" style="width: 50%">
      <el-input v-model="searchWord" class="search-bar">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
        <el-button slot="append">医疗搜索</el-button>
      </el-input>
    </div>
    <div class="code-img" style="width:26%">
      <img src="static/img/微信二维码-扫码咨询.jpg" style="height:80px;height: 80px;">
      <span class="text">扫码咨询</span>
      <img src="static/img/医诺寰球公众号二维码.jpg" style="height:80px;height: 80px;margin-left: 40px;">
      <span class="text">扫码咨询</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'header',
    data() {
      return {
        searchWord: ''
      }
    }
  }
</script>

<style scoped>
  .web-header{width: 100%;height: 140px;display: flex;flex-flow:row nowrap;justify-content: space-around;align-items: center}
  .web-header>div{position: relative;height: 80px;display: inline-flex;align-items: center}
  .web-header .search-frame .search-bar{width: 100%;height: 40px;border: 2px solid #1CACA3;border-radius: 4px;}
  .web-header .code-img img, .web-header .code-img span{display: inline-block}
  .web-header .code-img .text{display: inline-flex;height: 80px;width: 2rem;font-size: 1.125rem;color: #ccc;flex-flow: column wrap}
  >>> .el-input-group__append{background: #1daca4;border:none;color:#fff;font-size: 18px;border-radius: 0px;}
  >>> .el-input{border: none}
</style>
