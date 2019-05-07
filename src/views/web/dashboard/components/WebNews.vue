<template>
  <div class="web-news">
    <div v-for="item in 6" :key="item" class="news-item">
      <div><img src="" height="145" width="220"></div>
      <div style="margin-left: 10px;">
        <p class="title" style="font-size: 2rem;height: 30px;">厄洛替尼单药用于非小细胞癌的,厄洛替尼单药用于非小细胞癌的</p>
        <p class="date" style="font-size:1.75rem;color: #7f7f7f;height: 28px">2019-5-1</p>
        <p class="content" style="font-size:1.75rem;color:#7f7f7f;height: 80px;text-indent:3rem;">肺癌患者在做选择时不仅仅是考虑药效、安全性、耐药性、以及不可避免的价格问题，以及服务、卫生条件的其它诸多因素也是选择的考虑因素</p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: 'WebNews'
    }
</script>

<style scoped>
  .web-news{width: 90%;margin: 0 5%;height: auto;display: flex;flex-flow:row wrap;justify-content: space-around}
  .web-news .news-item{position:relative;display: inline-block;width: 48%;margin-bottom: 20px;}
  .web-news .news-item>div:nth-child(1){display: inline-block;height:145px;width: 220px;}
  .web-news .news-item>div:nth-child(2){display: inline-block;height:145px;width: 340px;}
  .web-news .news-item>div:nth-child(2)>p{word-wrap: break-word;text-overflow:ellipsis; -o-text-overflow:ellipsis; overflow: hidden;}
</style>
