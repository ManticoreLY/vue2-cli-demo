<template>
    <div class="web-info">
      <div>
        <div class="info-title">
          <div>医诺寰球</div>
        </div>
        <div class="info-content1">
          <span><a><i class="el-icon-arrow-right"></i>海外医疗主页</a></span>
          <span><a><i class="el-icon-arrow-right"></i>丙肝医疗方案</a></span>
          <span><a><i class="el-icon-arrow-right"></i>印度看病实录</a></span>
          <span><a><i class="el-icon-arrow-right"></i>丙肝转阴实例</a></span>
          <span><a><i class="el-icon-arrow-right"></i>关于我们</a></span>
          <span><a><i class="el-icon-arrow-right"></i>加入我们</a></span>
          <span><a><i class="el-icon-arrow-right"></i>友情链接</a></span>
          <span><a><i class="el-icon-arrow-right"></i>联系我们</a></span>
          <span><a><i class="el-icon-arrow-right"></i>网站地图</a></span>
        </div>
      </div>
      <div>
        <div class="info-title">
          <div>官方发布</div>
        </div>
        <div class="info-content2">
          <span>康安途印度丙肝方案服务患者安全感2000人, 查看吉三代方案<br/><samp>5月11日</samp></span>
          <span>乙肝TAF新药，副作用小，价格低，乙肝患者的更佳选择， 查看乙肝TAF方案<br/><samp>5月12日</samp></span>
        </div>
      </div>
      <div>
        <div class="info-title">
          <div>联系我们</div>
        </div>
        <div class="info-content3">
          <span><i class="el-icon-mobile-phone">&nbsp;&nbsp;</i>免费热线:  4006-120-152</span>
          <span><i class="el-icon-location">&nbsp;&nbsp;</i>上海徐汇区均瑶国际广场618室</span>
          <span><i class="el-icon-mobile-phone">&nbsp;&nbsp;</i>info@yinuohuanqiu.com</span>
          <span><i class="el-icon-phone">&nbsp;&nbsp;</i>合作热线:  17199912074</span>
          <span><i class="el-icon-phone-outline">&nbsp;&nbsp;</i>投诉电话:  15618478090</span>
        </div>
      </div>
      <div>
        <div class="info-title">
          <div>官方微信</div>
        </div>
        <div class="info-content3">
          <img src="static/img/医诺寰球公众号二维码.jpg" width="160" height="160">
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'WebInfo',
    data() {
      return {
        items: ['医诺寰球', '官方发布', '联系我们', '官方微信']
      }
    }
  }
</script>

<style scoped>
.web-info{width: 90%;padding: 0 5%;display: inline-flex;flex-flow: row nowrap;align-items: flex-start;align-content: center;justify-content: space-around}
.web-info>div{width: 20%;height: 25rem;}
.web-info>div .info-title{position: relative;width: 100%;border-bottom: 1px solid #ccc;}
.web-info>div .info-title>div{display: inline-block;padding: .75rem 0;border-bottom:1px solid #1CACA3;color: #1CACA3;font-size: 2rem;}
.web-info>div .info-content1{height: 18rem;margin:2rem 0;display: flex;flex-flow: row wrap; align-items: center;align-content: stretch; justify-content: space-between}
.web-info>div .info-content1>span{display: inline-block;width: 45%;font-size: 1.2rem;color: #545454}
.web-info>div .info-content2{height: 18rem;margin:2rem 0;display: flex;flex-flow: column wrap; align-items: flex-start;align-content: stretch; justify-content: space-around;font-size: 1.2rem;color: #545454}
.web-info>div .info-content2>span{display: inline-block;width: 80%;}
.web-info>div .info-content2>span samp{font-size: 1rem;color:#bfbfbf}
.web-info>div .info-content3{height: 18rem;margin:2rem 0;display: flex;flex-flow: column wrap; align-items: flex-start;align-content: stretch; justify-content: space-between;font-size: 1.2rem;color: #545454}
.web-info>div .info-content3>span{display: inline-block;width: 80%;}
</style>
