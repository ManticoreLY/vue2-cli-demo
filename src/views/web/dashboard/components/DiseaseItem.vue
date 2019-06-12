<template>
  <div class="web-items">
    <div class="item-name">疾病专栏</div>
    <div class="items">
      <div class="child">
        <a v-for="item in diseaseItems" :key="item">
          <div style="width: 80px;text-align: center"><img :src="item.url" style="height: 60px;width: 60px;"></div>
          <div style="width: 150px;display: inline-block;text-align: center">
            <span style="display:inline-block;font-size:1.75rem;padding: 5px;border-bottom: 1px solid #1caca4">{{ item.name }}</span><br/>
            <span style="display:inline-block;font-size: 1.25rem;padding: 4px;color: #7f7f7f">{{ item.description }}</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import home from '@/api/HomePage/home'
  export default {
    name: 'DiseaseItem',
    data() {
      return {
        diseaseItems: [],
        disease_icons: [
          { name: '丙肝', description: '吉三代 索非布韦', url: 'static/icon/icon-1.png' },
          { name: '乙肝', description: 'TAF', url: 'static/icon/icon-2.png' },
          { name: '糖尿病', description: '恩格列净 曲格列汀', url: 'static/icon/icon-3.png' },
          { name: '前列腺癌', description: '阿比特龙 恩杂鲁胺', url: 'static/icon/icon-4.png' },
          { name: '卵巢癌', description: '奥拉帕尼 尼拉帕尼', url: 'static/icon/icon-5.png' },
          { name: '肺癌', description: '奥希替尼 克唑替尼', url: 'static/icon/icon-6.png' },
          { name: '肝癌', description: '索拉非尼 乐伐替尼', url: 'static/icon/icon-7.png' },
          { name: '乳腺癌', description: '帕博西尼 奥拉帕尼', url: 'static/icon/icon-8.png' },
          { name: '结直肠癌', description: '瑞格非尼', url: 'static/icon/icon-9.png' },
          { name: '更多', description: '更多', url: 'static/icon/icon-10.png' }
        ]
      }
    },
    created() {
      home.diseaseColumn().then(data => {
        this.diseaseItems = data
      })
    }
  }
</script>

<style scoped>
  .web-items{width: 100%;height:225px;position:relative;display:flex;flex-flow: row nowrap;align-items: flex-start}
  .web-items .item-name{display:inline-block;height:220px;width: 80px;display: inline-flex;align-items: center;text-align: center;background: #1CACA3;color:#efefef;font-size: 2.4rem;border-radius: 4px;word-wrap: break-word}
  .web-items .items .child{display: inline-block;margin-left: 15px;}
  .web-items .items .child>a{display: inline-block;border-right: 1px solid #eee;height: 100px;width: 19%;display: inline-flex;align-items: center;justify-content: flex-start;margin-bottom: 10px;text-align: center}
</style>
