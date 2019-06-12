<template>
  <div class="web-news">
    <div v-for="item in newsReportVo.newsArticles" :key="item" class="news-item">
      <div><img :src="item.abstractImg" height="145" width="220"></div>
      <div style="margin-left: 5%;">
        <p class="title" style="font-size: 1.75rem;height: 30px;">{{item.title}}</p>
        <p class="date" style="font-size:1.5rem;color: #7f7f7f;height: 2rem;line-height: 2rem">{{item.createdDt}}</p>
        <p class="content" style="font-size:1.65rem;color:#7f7f7f;height: 80px;text-indent:2rem;overflow: hidden">{{item.abstractText}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import home from '@/api/Homepage/home'
  export default {
    name: 'WebNews',
    data() {
      return {
        newsReportVo: {}
      }
    },
    created() {
      home.newsReport().then(data => {
        this.newsReportVo = data.obj
      })
    }
  }
</script>

<style scoped>
  .web-news{width: 100%;height: auto;display: flex;flex-flow:row wrap;justify-content: space-around}
  .web-news .news-item{position:relative;display: inline-block;width: 45%;margin-bottom: 20px;}
  .web-news .news-item>div:nth-child(1){display: inline-block;width: 40%;}
  .web-news .news-item>div:nth-child(2){display: inline-block;width: 50%;}
  .web-news .news-item>div:nth-child(2)>p.content{overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 3;-webkit-box-orient: vertical}
  .web-news .news-item>div:nth-child(2)>p.title{white-space: nowrap;overflow: hidden;text-overflow: ellipsis}
</style>
