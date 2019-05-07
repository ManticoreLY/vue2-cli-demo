<template>
  <div class="web-brand">
    <div v-for="item in 9" :key="9" :class="classSeries(item)">
      <div class="title"><i class="el-icon-bell"></i>中科院博士团队</div>
      <div class="content">中科院博士团队组成，多年的临床科研经验，专业性强</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'brand',
    methods: {
      classSeries(item) {
        if (item % 2 === 1) {
          return 'brand-item normal'
        } else {
          if (item === 2) {
            return 'brand-item blue'
          } else if (item === 4) {
            return 'brand-item graygreen'
          } else if (item === 6) {
            return 'brand-item yellow'
          } else if (item === 8) {
            return 'brand-item green'
          }
        }
      }
    }
  }
</script>

<style scoped>
  .web-brand{position:relative;width: 90%;margin: 0 5%;height: auto;display: flex;flex-flow: row wrap; justify-content: flex-start}
  .web-brand .brand-item{height: 285px;width: 33%;}
  .web-brand .brand-item .title{height: 75px;font-size:3rem;text-align: center;margin: 20px;}
  .web-brand .brand-item .content{height: 200px;font-size:2rem;padding:0 15px;}
  .web-brand .brand-item.normal{background: #f5f5f5;}
  .web-brand .brand-item.normal .title{color: #1daca4}
  .web-brand .brand-item.blue{background: #2b96cc;color: #fff}
  .web-brand .brand-item.green{background: #29a466;color: #fff}
  .web-brand .brand-item.graygreen{background: #1daca4;color: #fff}
  .web-brand .brand-item.yellow{background: #f0a226;color: #fff}
  .web-brand .brand-item.blue, .web-brand .brand-item.green, .web-brand .brand-item.graygreen, .web-brand .brand-item.yellow{font-size:4rem;color:#FFF}
</style>
