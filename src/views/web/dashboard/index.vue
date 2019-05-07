<template>
  <div id="web-index">
    <div class="web-title">
      <div class="item1" style="margin-left: 5%">
        <div class="text-icon">寰球医疗最新动态<i class="arrow-right"></i></div>
      </div>
      <div class="item2" style="width: 40%">
        <canvas id="canvas" width="600" height="22"></canvas>
      </div>
      <div class="item3" style="width: 40%">
        <span class="item-title">网站地图</span>
        <span class="item-title">医疗客服</span>
        <span class="item-title">海外医疗：400-0000-000</span>
        <span class="item-title" style="border: none">邮箱：xxxx@yinuohuanqiu.com</span>
      </div>
    </div>
    <web-header></web-header>
    <nav-bar/>
    <disease-item/>
    <item-bar name="出国实例"/>
    <example-item/>
    <item-bar name="新闻报道"/>
    <web-news/>
    <item-bar name="医疗新闻资讯"/>
    <medical-report/>
    <item-bar name="品牌实力"/>
    <brand/>
    <logo-display/>
  </div>
</template>

<script>
  import ItemBar from './components/ItemBar'
  import WebHeader from './components/header'
  import NavBar from './components/NavBar'
  import DiseaseItem from './components/DiseaseItem'
  import ExampleItem from './components/ExampleItem'
  import WebNews from './components/WebNews'
  import MedicalReport from './components/MedicalReport'
  import brand from './components/brand'
  import LogoDisplay from './components/LogoDisplay'
  export default {
    name: 'index',
    components: {
      ItemBar,
      WebHeader,
      NavBar,
      DiseaseItem,
      ExampleItem,
      WebNews,
      MedicalReport,
      brand,
      LogoDisplay
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
  .web-title{position: relative;width:100%;height: 2.75rem;background: #f5f5f5;border-bottom: 1px solid #eee;}
  .web-title .item1, .web-title .item2, .web-title .item3{display: inline-block}
  .web-title .item1 .text-icon{display: inline-block;position:relative;font-size: 1rem;font-weight: 600;color: #efefef;background: #1CACA3;color: #ececec;padding: 4px 12px;border-radius: 3px;}
  .web-title .item1 .text-icon .arrow-right{position:absolute;top:8px;right: -10px;height: 0;width: 0;border-width: 5px;border-style: solid;border-color: transparent transparent transparent #1CACA3}
  .web-title .item3{font-size: 1.125rem;color: #545454;line-height: 1.5rem;line-height: 1.5rem;}
  .web-title .item3 .item-title{display: inline-flex;position:relative;border-right:1px solid #545454;padding: 0 6px;}
  .web-title .item3 .item-title .arrow-down{position:absolute;top: 5px;right: -10px;height: 0;width: 0;border-width: 5px;border-style: solid;border-color: #545454 transparent transparent transparent}
</style>
