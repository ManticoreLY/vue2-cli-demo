<template>
  <div class="web-news">
    <div v-for="item in 3" :key="item" class="news-module">
      <div class="module-name">医疗公告</div>
      <div class="module-cont">
        <div style="width: 40%"><el-image src="" style="width: 160px;height: 160px"/></div>
        <div style="width: 56%">
          <p style="font-size:1.75rem;color:#1daca4;height: 4.25rem;overflow: hidden;text-overflow:ellipsis">杨博士出席人工智能大会人工智能大会被杨博士出席</p>
          <p style="font-size: 1.5rem;color:#7f7f7f;text-indent: 2rem;height: 100%;width: 100%;overflow: hidden">1月12日，南京大学人工智能生物医疗技术研究院落地江北地区签约仪式在汉府饭店举行<em>【详情】</em></p>
        </div>
      </div>
      <div class="module-title">
        <div v-for="k in 6" :key="k" style="margin-top:10px;">
          <span class="ellipsis" style="font-size: 1.25rem;color:#7f7f7f">XXXXXXXXXXXXXX</span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span>2019-05-01</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MedicalReport'
  }
</script>

<style scoped>
  .ellipsis{white-space:nowrap;overflow: hidden;text-overflow: ellipsis}
  .web-news{height: auto;display: flex;flex-flow:row wrap;justify-content: space-between}
  .web-news .news-module{position:relative;display: inline-block;width: 31%;margin-bottom: 20px;border-right: 1px solid #ccc}
  .web-news .news-module:last-child{border:none}
  .web-news .news-module .module-name{font-size: 2.25rem;height: 36px}
  .web-news .news-module .module-cont{height: 175px;width: 100%;display: inline-flex;flex-flow: row nowrap;justify-content: space-between;align-content: stretch;align-items: flex-start}
  .web-news .news-module .module-cont>div{display: inline-block;}
  .web-news .news-module .module-title{width: 96%}
  .web-news .news-module .module-title>div{display: flex; flex-flow: row nowrap; justify-content: space-between; align-items: center;align-content: stretch}
</style>
