<template>
    <div>
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
  import NavBar from './components/NavBar'
  import DiseaseItem from './components/DiseaseItem'
  import ExampleItem from './components/ExampleItem'
  import WebNews from './components/WebNews'
  import MedicalReport from './components/MedicalReport'
  import brand from './components/brand'
  import LogoDisplay from './components/LogoDisplay'
  export default {
    name: 'main',
    components: {
      ItemBar,
      NavBar,
      DiseaseItem,
      ExampleItem,
      WebNews,
      MedicalReport,
      brand,
      LogoDisplay
    }
  }
</script>

<style scoped>

</style>
