<template>
  <div class="web-brand">
    <div v-for="(item, index) in data" :key="index" :class="classSeries(index)">
      <div class="title"><img :src="item.url" width="20" height="20">&nbsp;&nbsp;{{ item.title }}</div>
      <div class="content">{{ item.content }}</div>
    </div>
  </div>
</template>

<script>
  import BrandApi from '@/api/HomePage/brand'
  export default {
    name: 'brand',
    data() {
      return {
        query: {
          pageObj: { current: 1, size: 10 }
        },
        data: [
          { title: '中科院博士团队', content: '中科院博士团队组成，多年的临床科研经验。专业性强。' },
          { title: '一流医院官方合作', content: '与印度、泰国、香港、美国、新加坡、英国的一流医院授权合作，综合实力在对应国家前列。' },
          { title: '衣食住行精挑细选', content: '海外医疗过程中的接送机服务、酒店、餐厅、景点等均长期合作，精挑细选，安全舒心。' },
          { title: '当地人服务', content: '在当地设立办事处，与当地人合作，为康安途用户提供安全放心的一站式服务。' },
          { title: '国外就医绿色通道', content: '随医诺去国外就医，绿色就医通道，免排队，直达知名专家，提供个性化治疗方案。' },
          { title: '回国后沟通渠道畅通', content: '国外治疗完毕后，提供与国外专家的直接沟通渠道，随时咨询患者的各类问题，无需漫长等待。' },
          { title: '正品保障', content: '针对丙肝患者，在美国吉利德直供印度高端医院药房根据拿药，保证正品，治愈率高，疗效有保障。' },
          { title: '复发保障', content: '针对丙肝患者，与中科院合作，对复发的患者提供免费耐药性分析，并推荐精准后续治疗方案。' },
          { title: '康安途品牌担保', content: '全国20家办事处，获得超过1000万的首轮融资，为客户提供安全放心的品牌保障。' }
        ]
      }
    },
    mounted() {
      this.init()
    },
    methods: {
      init() {
        BrandApi.queryPage(this.page).then(data => {
          this.date = data
        }).catch(err => {
          console.log(err)
        })
      },
      classSeries(item) {
        if (item % 2 === 0) {
          return 'brand-item normal'
        } else {
          if (item === 1) {
            return 'brand-item blue'
          } else if (item === 3) {
            return 'brand-item graygreen'
          } else if (item === 5) {
            return 'brand-item yellow'
          } else if (item === 7) {
            return 'brand-item green'
          }
        }
      }
    }
  }
</script>

<style scoped>
  .web-brand{position:relative;width: 86%;margin: 0 7%;height: auto;display: flex;flex-flow: row wrap; justify-content: flex-start}
  .web-brand .brand-item{height: 285px;width: 33%;}
  .web-brand .brand-item .title{height: 75px;font-size:3rem;text-align: center;margin: 20px;}
  .web-brand .brand-item .content{height: 200px;font-size:2rem;padding:0 15px;}
  .web-brand .brand-item.normal{background: #fff;}
  .web-brand .brand-item.normal .title{color: #1daca4}
  .web-brand .brand-item.blue{background: #2b96cc;color: #fff}
  .web-brand .brand-item.green{background: #29a466;color: #fff}
  .web-brand .brand-item.graygreen{background: #1daca4;color: #fff}
  .web-brand .brand-item.yellow{background: #f0a226;color: #fff}
  .web-brand .brand-item.blue, .web-brand .brand-item.green, .web-brand .brand-item.graygreen, .web-brand .brand-item.yellow{font-size:4rem;color:#FFF}
</style>
