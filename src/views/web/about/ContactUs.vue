<template>
  <div class="page">
    <div class="nav">当前位置：
      <router-link :to="'/'">医诺寰宇海外医疗</router-link>
      >
      <router-link :to="'/about'">关于我们</router-link>
      > 联系我们
    </div>
    <div class="main">
      <div>
        <p>医诺寰宇青岛总部</p>
        <div class="section0">
          <div>
            <el-image :fit="fit" style="height: 300px;width: 300px;"></el-image>
          </div>
          <div>
            <p>地址一: 青岛市市南区xx路xx号</p>
            <p>电话一: 4006120152</p>
            <p>电话二: 021-61510621</p>
          </div>
        </div>
      </div>
      <div>
        <p>客户服务</p>
        <div class="section1">
          <div>
            <p>客服电话: 4006-120-152(工作时间9:00-22:00)</p>
            <p>客服QQ: xxxxxxxxxx</p>
            <p>客服微信: xxxxxx</p>
            <p>客服邮箱: info@yinuo.com</p>
          </div>
        </div>
      </div>
      <div>
        <p>媒体采访</p>
        <div class="section2">
          <div>
            <p>工作邮箱: info@yinuo.com</p>
            <div style="color: #ccc;font-size: 1rem">(如有媒体采访需求，请将您的媒体名称、采访提纲、联系方式发送至邮箱，我们会尽快与您联系！)</div>
          </div>
        </div>
      </div>
      <div>
        <p>商务合作</p>
        <div class="section3">
          <div>
            <p>商务合作邮箱: info@yinuo.com</p>
            <p>招商加盟热线: 17199912071，朱总监</p>
            <div style="color: #ccc;font-size: 1rem">如果您希望与我们建立商务合作关系，请将合作意向进行简要描述并发送邮件至些邮箱或直接拨打电话联系我们</div>
          </div>
        </div>
      </div>
      <div>
        <p>关注我们</p>
        <div class="position">
          <h5>如果您想了解更多医诺寰宇资讯，可添加或扫描下列二维码关注后了解</h5>
          <div style="width: 60%">
            <el-image src="static/img/医诺寰球客服二维码.jpeg" :fit="fit" style="width: 200px; height: 200px"></el-image>
            <el-image src="static/img/医诺寰球公众号二维码.jpg" :fit="fit" style="width: 200px; height: 200px"></el-image>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ContactUs',
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped>
  .main{width: 100%;height: 100%}
  .main>div{width: 66%;margin: 20px 16%;}
  .main>div>p{padding: 2rem 1rem;font-size: 2rem;font-weight: 500;text-align: center}
  .main>div>div[class^='section']{width: 80%;margin: 20px 10%;font-size: 1.5rem;line-height: 2.5rem;display:flex;align-items: center;justify-content: center}
  .main>div h5{font-size: 1.5rem;line-height: 2.5rem;width: 100%;margin: 15px 0;}
  .main>div .section0 div{width: 50%;}
  .main>div .section0 div p{width: 100%;text-align: left}
  .main>div .position{width: 80%;margin: 15px 10%;text-align: center}
  .main>div .position>div{display: inline-flex;flex-flow: row nowrap;justify-content: space-between}
</style>
