<template>
  <div class="web-news">
    <div v-for="item in medicalNewsVo.typeVos" :key="item" class="news-module">
      <div class="module-name">{{item.name}}</div>
      <div class="module-cont">
        <div style="width: 40%"><el-image :src="item.newsArticles[0].abstractImg" style="width: 160px;height: 160px"/></div>
        <div style="width: 56%">
        <p style="font-size:1.75rem;color:#1daca4;height: 4.25rem;overflow: hidden;overflow: hidden">
          {{item.newsArticles[0].title.substring(0, 19)}}<em v-show="item.newsArticles[0].title.length > 19">...</em>
        </p>
        <p style="font-size: 1.25rem;color:#7f7f7f;text-indent: 2rem;height: 100px;width: 100%;overflow: hidden">1月12日，{{item.newsArticles[0].abstractText.substring(0, 60) + '...'}}<a>【详情】</a></p>
        </div>
      </div>
      <div class="module-title">
        <div v-for="(vo, index) in item.newsArticles" :key="index" v-if="index > 0" style="margin-top: 10px">
          <div class="ellipsis" style="font-size: 1.25rem;color:#7f7f7f;width: 64%">{{vo.title}}</div>
          <div style="width: 16%">{{vo.createdDt.substring(0, 10)}}</div>
      </div>
    </div>
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
        this.medicalNewsVo = data.obj
      })
    }
  }
</script>

<style scoped>
  .ellipsis{white-space:nowrap;overflow: hidden;text-overflow: ellipsis}
  .web-news{width: 100%;height: auto;display: flex;flex-flow:row wrap;justify-content: space-between;align-items: flex-start;align-content: stretch}
  .web-news .news-module{position:relative;display: inline-block;width: 31%;margin-bottom: 20px;border-right: 1px solid #ccc}
  .web-news .news-module:last-child{border:none}
  .web-news .news-module .module-name{font-size: 2.1rem;height: 36px}
  .web-news .news-module .module-cont{height: 175px;width: 100%;display: inline-flex;flex-flow: row nowrap;justify-content: space-between;align-content: stretch;align-items: flex-start}
  .web-news .news-module .module-cont>div{display: inline-block;}
  .web-news .news-module .module-title{width: 96%;}
  .web-news .news-module .module-title>div{display: flex; flex-flow: row nowrap; justify-content: space-between; align-items: center;align-content: stretch}
</style>
