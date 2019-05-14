<template>
    <div class="drug-db">
      <div class="bg">
        <el-image :src="img_url" :fit="fill"></el-image>
      </div>
      <div class="item-list">
        <div class="item">
          <div class="title">数据全面</div>
          <div class="cont">涵盖上百种靶向信息和数据</div>
        </div>
        <div class="item">
          <div class="title">资料参考</div>
          <div class="cont">多方面覆盖药物各项资料供参考</div>
        </div>
        <div class="item">
          <div class="title">智能搜索</div>
          <div class="cont">数据库智能匹配，推送相关资讯</div>
        </div>
        <div class="item">
          <div class="title">疑问解答</div>
          <div class="cont">在线医生实时解答药品相关疑问</div>
        </div>
      </div>
      <div class="category">
        <div style="height:3rem;line-height:3rem;text-align: center;font-size: 2rem;">药品类目</div>
        <div style="height:3rem;line-height:3rem;text-align: center;font-size: 1.375rem;color: #545454">药品数据库分类，整合药品类目、指导指南、常见问题等方面，帮助您从海量的数据快速找到药物精准信息。</div>
        <div class="list">
          <div class="item" v-for="item in diseases" :key="item">
            <el-image :src="item.img" :fit="fit" style="float:left"></el-image>
            <div class="name">
              <div>{{ item.name }}</div>
              <div v-for="(drug, index) in item.drugs" :key="index" v-if="index < 3 || (item.show && index >= 3)">{{ drug }}</div>
              <div v-show="item.drugs.length > 3 && !item.show"><a @click="showMore(item)">更多<i class="el-icon-arrow-down"></i></a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'index',
    data() {
      return {
        img_url: 'static/img/info/医药数据库banner2.jpg',
        diseases: [
          { img: 'static/icon/disease/az1.png', name: '丙肝', drugs: ['吉三代', '吉二代', '索非布韦', '达卡他韦', '雷迪帕韦'], show: false },
          { img: 'static/icon/disease/az1.png', name: '丙肝', drugs: ['吉三代', '吉二代', '索非布韦', '达卡他韦', '雷迪帕韦'], show: false },
          { img: 'static/icon/disease/az1.png', name: '丙肝', drugs: ['吉三代', '吉二代', '索非布韦', '达卡他韦', '雷迪帕韦'], show: false },
          { img: 'static/icon/disease/az1.png', name: '丙肝', drugs: ['吉三代', '吉二代', '索非布韦', '达卡他韦', '雷迪帕韦'], show: false }
        ]
      }
    },
    methods: {
      showMore(t) {
        const item = this.diseases.find(p => p === t)
        item.show = !item.show
      }
    }
  }
</script>

<style scoped>
.drug-db{width: 100%;}
.bg{width: 100%}
.item-list{width:90%;padding: 20px 5%;display: inline-flex;flex-direction: row;align-items: center;justify-content: space-around}
.item-list .item{background: #fff;width: 18%;height: 10rem;border: 1px solid #f5f5f5;box-shadow: 2px 1px #ccc;padding: 20px;transition: margin-top .5s}
.item-list .item:hover{margin-top: -10px;}
.item-list .item:hover .title{color: #2b96cc}
.item-list .item .title{display: inline-block;font-size: 1.75rem;font-weight: 600;padding-bottom: 1rem; border-bottom: 2px solid #2b96cc}
.item-list .item .cont{font-size: 1.25rem;padding:10px 0;color: #545454}
.category{background: #fff;width:90%;padding: 2rem 5%;margin-top: 0px;}
.category .list{width:100%;margin-top: 20px;display:flex;flex-flow: row wrap;align-items: stretch;align-content: stretch;justify-content: space-between}
.category .list .item{width:20%;margin-top: 20px;}
.category .list .item .name{width:70%;margin-left: 5%;display: inline-block;font-size: 1.75rem;}
.category .list .item .name div{border-top:1px solid #ccc;height: 3rem;line-height: 3rem;font-size: 1.25rem;color: #7a7a7a}
.category .list .item .name div:nth-child(1){height: 4rem;font-size: 1.5rem;border:none;line-height: inherit;font-weight: 600}
.category .list .item .name div:hover{color: #1caca3;background: #efefef}
</style>
