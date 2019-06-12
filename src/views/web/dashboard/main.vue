<template>
    <div>
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
  import { ItemBar, DiseaseItem, ExampleItem, WebNews, MedicalReport, brand, LogoDisplay } from './components'
  export default {
    name: 'main',
    components: {
      ItemBar,
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
