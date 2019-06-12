<template>
  <div id="web-index">
    <div class="web-title">
      <div class="item1" style="width: 15%;text-align: right">
        <div class="text-icon">寰球医疗最新动态<i class="arrow-right"></i></div>
      </div>
      <div class="item2" style="width: 43%;height: 2.5rem;line-height: 2.5rem">
        <canvas id="canvas" style="width: 100%;height: 2.25rem;"></canvas>
      </div>
      <div class="item3" style="width: 40%;text-align: right">
        <router-link v-show="$route.fullPath !== '/dashboard'" to="/dashboard" class="item-title"><i class="my-icon-home" style="color: #1daca4;font-size: 1.2rem">&nbsp;医诺寰球首页</i></router-link>
        <a class="item-title">网站地图</a>
        <a class="item-title">医疗客服</a>
        <a class="item-title">海外医疗：400-0000-000</a>
        <a class="item-title" style="border: none">邮箱：xxxx@yinuohuanqiu.com</a>
      </div>
    </div>
    <div class="web-content">
      <web-header></web-header>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      <web-info></web-info>
    </div>
    <footer>
      <div class="footer">
        <div>医诺寰宇是出国看病的领导者，国内专业赴印度治疗丙肝、乙肝的团队。印度丙肝新药<b>索非布韦</b>、达卡他韦、<b>吉二代</b>，
          吉印度Mylan产<b>吉三代Hepbest</b>已经在印度上市，治疗所有分型丙肝。印度乙肝<b>TAF</b>新方案，副作用小价格低，
          Mylan产已经在印度上市。肿瘤癌症方案<b>AZD9291,PD-1</b>。糖尿病新药恩格列净。白血病淋巴瘤方案<b>CAR-T</b>疗法。
          更多资讯请访问医疗新闻。</div>
        <div>Copyright&nbsp;&copy;&nbsp;2015-2019&nbsp;医诺寰球-青岛医诺寰球有限公司&nbsp;&nbsp;版权所有 | 鲁ICP备15022986号-1</div>
      </div>
    </footer>
    </div>
</template>

<script>
  import WebHeader from './components/header'
  import WebInfo from './components/WebInfo'
  import main from './main'
  export default {
    name: 'index',
    components: {
      WebHeader,
      WebInfo,
      main
    },
    data() {
      return {
        searchWord: ''
      }
    },
    methods: {

    }
  }
</script>

<style scoped>
  /*color:#1CACA3*/
  #web-index{margin: 0;padding: 0;}
  .web-title{position: relative;width:100%;height: 2.75rem;background: #f5f5f5;border-bottom: 1px solid #eee;display:inline-flex;flex-flow: row nowrap;align-items: center}
  .web-content{position: relative;width: 76%; margin: 0 12%;}
  .web-title .item1, .web-title .item2, .web-title .item3{display: inline-block}
  .web-title .item1 .text-icon{display: inline-block;position:relative;font-size: 1rem;font-weight: 600;color: #efefef;background: #1CACA3;color: #ececec;padding: 4px 12px;border-radius: 3px;}
  .web-title .item1 .text-icon .arrow-right{position:absolute;top:8px;right: -10px;height: 0;width: 0;border-width: 5px;border-style: solid;border-color: transparent transparent transparent #1CACA3}
  .web-title .item3{font-size: 1.125rem;color: #545454;line-height: 1.5rem;line-height: 1.5rem;}
  .web-title .item3 .item-title{display: inline-flex;position:relative;border-right:1px solid #545454;padding: 0 6px;}
  .web-title .item3 .item-title .arrow-down{position:absolute;top: 5px;right: -10px;height: 0;width: 0;border-width: 5px;border-style: solid;border-color: #545454 transparent transparent transparent}

  .footer{background: #f5f5f5;border-top: 1px solid #eee;width: 80%;height: 100px;padding: 0 10%;text-align: center;font-size: .75rem;color: #545454;text-space: 5px;
   display: flex; flex-flow: row wrap; align-content: center; align-items: center;justify-content: space-around}
  .footer div{line-height: 28px}
</style>
