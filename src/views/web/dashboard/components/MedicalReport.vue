<template>
  <div class="web-news">
    <div v-for="item in medicalNewsVo.typeVos" :key="item" class="news-module">
      <div class="module-name">{{item.name}}</div>
      <template v-for="(vo,index) in item.newsArticles">

      <div class="module-cont" v-if="index==0">
        <div style="width: 40%"><img :src="vo.abstractImg"width="160" height="160"></div>
        <div style="width: 56%">
          <p class="ellipsis" style="font-size:2rem;color:#1daca4;height: 40px;">{{vo.title}}</p>
          <p style="font-size: 1.5rem;color:#7f7f7f;text-indent: 3rem;width:190px;height: 100px;word-wrap: break-word">{{vo.abstractText}}<a>【详情】</a></p>
        </div>
      </div>
      <div class="module-title">
          <span class="ellipsis" style="font-size: 1.25rem;color:#7f7f7f">{{vo.abstractText}}</span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span>{{vo.createdDt}}</span>
      </div>
      </template>
    </div>
  </div>
</template>

<script>
  import home from '@/api/Homepage/home'
  export default {
    name: 'MedicalReport',
    data() {
      return {
        medicalNewsVo: {}
      }
    },
    created() {
      home.medicalNews().then(data => {
        debugger
        this.medicalNewsVo = data.obj
      })
    }
  }
</script>

<style scoped>
  .ellipsis{white-space:nowrap;overflow: hidden;text-overflow: ellipsis}
  .web-news{width: 90%;margin: 0 5%;height: auto;display: flex;flex-flow:row wrap;justify-content: space-between}
  .web-news .news-module{position:relative;display: inline-block;width: 31%;margin-bottom: 20px;border-right: 1px solid #ccc}
  .web-news .news-module:last-child{border:none}
  .web-news .news-module .module-name{font-size: 2.25rem;height: 36px}
  .web-news .news-module .module-cont{height: 175px;width: 100%;display: inline-flex;flex-flow: row nowrap;justify-content: space-between;align-content: stretch;align-items: flex-start}
  .web-news .news-module .module-cont>div{display: inline-block;}
  .web-news .news-module .module-title{width: 96%}
  .web-news .news-module .module-title>div{display: flex; flex-flow: row nowrap; justify-content: space-between; align-items: center;align-content: stretch}
</style>
