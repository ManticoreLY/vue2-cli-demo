<template>
  <div class="web-news">
    <div v-for="item in newsReportVo.newsArticles" :key="item" class="news-item">
      <div><img :src="item.abstractImg" height="145" width="220"></div>
      <div style="margin-left: 10px;">
        <p class="title" style="font-size: 2rem;height: 30px;">{{item.title}}</p>
        <p class="date" style="font-size:1.75rem;color: #7f7f7f;height: 28px">{{item.createdDt}}</p>
        <p class="content" style="font-size:1.75rem;color:#7f7f7f;height: 80px;text-indent:3rem;overflow: hidden">{{item.abstractText}}</p>
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
  .web-news .news-item{position:relative;display: inline-block;width: 48%;margin-bottom: 20px;}
  .web-news .news-item>div:nth-child(1){display: inline-block;height:145px;width: 220px;}
  .web-news .news-item>div:nth-child(2){display: inline-block;height:145px;width: 340px;}
  .web-news .news-item>div:nth-child(2)>p{word-wrap: break-word;text-overflow:ellipsis; -o-text-overflow:ellipsis; overflow: hidden;}
</style>
