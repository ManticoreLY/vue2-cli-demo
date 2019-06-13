<template>
    <div class="page">
      <the-header class="head"/>
      <div style="margin-top: 190px;">
        <div class="search-title">搜索<em style="font-style: normal;color: red"> 吉三代 </em>的结果</div>
        <div style="width: 100%;display: flex;align-items: flex-start;align-content: stretch;">
          <div class="main">
            <router-view/>
          </div>
          <div class="sider">
            <div style="width: 100%;padding: 20px;float:left">
              <p style="font-size: 1.5rem;font-weight: 600;">搜索热点</p>
              <div class="el-icon-arrow-right" style="font-size: 1.3rem; line-height: 2rem;">
                <span v-for="word in searchWords" :key="word" style="display: inline-block;margin-right: 20px;color: #008aff">{{word}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer">Copyright &copy; 2015-2019 医诺 - 青岛医诺寰宇海外医疗服务有限公司 版权所有</div>
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
.page{position:relative;width: 100%;height: 100%}
.head{position:fixed; top:0;left: 0;right: 0;z-index: 99;height: 190px;}
.search-title{width: 76%;padding: 0 12%;height: 3rem;border: 1px solid #eee; background: #f5f5f5;border-left: none;border-right: none;font-size: 1.5rem; line-height: 3rem}
.main{position:relative;display: inline-block;width: 58%;padding:20px 30px 0 10%;border-right: 1px solid #eee;margin-bottom: 4rem;}
.sider{margin: 0;position: relative;display: inline-block;width: 18%;padding: 20px 10% 0 0;}
.footer{width: 100%;height: 4rem;line-height: 4rem;text-align: center;position:absolute;left: 0;bottom: 0;right: 0;z-index: 99;border-top: 1px solid #eee}
</style>
