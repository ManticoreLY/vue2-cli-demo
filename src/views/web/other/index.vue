<template>
    <div class="page">
      <div class="head">
        <the-header/>
        <div class="search-title">搜索<em style="font-style: normal;color: red"> 吉三代 </em>的结果</div>
      </div>
      <div style="position: relative;margin-top: 190px;">
        <div class="main">
          <router-view/>
        </div>
        <div class="sider">
          <div style="width: 100%;padding: 20px;float:left">
            <p style="font-size: 1.5rem;font-weight: 600;">搜索热点</p>
            <div class="el-icon-arrow-right" style="font-size: 1.2rem;">
              <span v-for="word in searchWords" :key="word" style="display: inline-block;margin-right: 20px;color: #008aff">{{word}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import TheHeader from './components/TheHeader'
  export default {
    name: 'index',
    components: {
      TheHeader
    },
    data() {
      return {
        searchWords: ['吉三代', '丙肝 吉三代', '印度 吉三代', '吉三代 伊柯鲁沙 Epclusa', '吉三代 治疗方案', '索非布韦 吉三代', '泰国吉三代']
      }
    },
    methods: {}
  }
</script>

<style scoped>
.head{position:fixed; top:0;left: 0;right: 0;z-index: 99}
.search-title{width: 76%;padding: 0 12%;height: 3rem;border: 1px solid #eee; background: #f5f5f5;border-left: none;border-right: none;font-size: 1.5rem; line-height: 3rem}
.main{margin: 0;position:relative;display: inline-block;width: 62%;padding: 20px 30px 0 10%;border-right: 1px solid #eee}
.sider{margin: 0;position: relative;display: inline-block;width: 15%;padding-right: 10%}
</style>
