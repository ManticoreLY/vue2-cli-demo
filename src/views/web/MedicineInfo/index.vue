<template>
    <div id="medicine-info">
      <div class="description">
        <div class="item">
          <el-carousel :interval="5000" arrow="always">
            <el-carousel-item v-for="item in medicine_info_images" :key="item">
              <img :src="item" style="width: 100%;height: 100%">
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="item" style="position: relative">
          <div class="item-name">奥利司他</div>
          <div class="item-extra">所有名称:色瑞替尼 | 赛立替尼 Ceritinib(LDK378/Zykadia)</div>
          <div class="item-unit">
            <p class="shallowblue">品牌: zzxxcc</p>
            <p class="green">剂型: 胶囊</p>
            <p class="graygreen">单位: 120mg/粒</p>
            <p class="yellow">规格: 3*10粒/盒</p>
          </div>
          <div class="item-info">奥利司他奥利司他奥利司他奥利司他奥利司他奥利司他奥利司他奥利司他奥利司他奥利司他奥利司他奥利司他奥利司他奥利司他奥利司他奥利司他奥利司他奥利司他奥利司他奥利司他奥利司他奥利司他奥利司他奥利司他奥利司他奥利司他奥利司他奥利司他奥利司他奥利司他奥利司他</div>
          <div class="item-bottom"><b style="color: #29a466">注:</b>本网站关于药品使用的建议仅供参考,不能替代医属</div>
        </div>
      </div>
      <div class="information">
        <div class="item">
          <div class="info-title">
            <el-divider content-position="center"><b class="text">药品简介</b></el-divider>
          </div>
          <h5 v-for="i in 3" :key="i">
            <div class="info-question">【什么是色瑞替尼？】</div>
            <div class="info-answer">色瑞替尼是晚期（转移性）非小细胞肺癌的一种小分子靶向药物，其相应的基因靶点是ALK，是肿瘤药物专门针对ALK基因重排的有效药物，色瑞替尼对EML4-ALK、NPM-ALK
              基因表达基因融合蛋白的细胞有抑制作用，能够克隆克唑替尼的耐药性。患者单次口服后约在4到6小时后血液中药物浓度达到最高浓度</div>
          </h5>
        </div>
        <div class="item">
          <div class="info-title">
            <el-divider content-position="center"><b class="text">副作用及并发症</b></el-divider>
          </div>
          <h5 v-for="i in 3" :key="i">
            <div class="info-question">【常见不良反应？】</div>
            <div class="info-answer">色瑞替尼最常见不良反应(发生率至少25%)为腹泻，恶心，转氨酶升高，呕吐，腹痛，疲乏，食欲减退和便秘。</div>
          </h5>
        </div>
        <div class="item">
          <div class="info-title">
            <div class="info-title">
              <el-divider content-position="center"><b class="text">药品简介</b></el-divider>
            </div>
          </div>
          <h5>
            文案来源于广告行业，是“广告文案”的简称，由copy writer翻译而来。多指以语辞进行广告信息内容表现的形式，有广义和狭义之分，广义的广告文案包括标题、正文、口号的撰写和对广告形象的选择搭配；狭义的广告文案包括标题、正文、口号的撰写。
          </h5>
        </div>
      </div>
      <div class="information">
        <div class="item">
          <div class="info-title">
            <el-divider content-position="center"><b style="font-size: 1.8rem">相关药品</b></el-divider>
          </div>
          <div class="info-items">
            <el-button v-for="item in medicine_name" :key="item" round>{{ item }}</el-button>
          </div>
          <div class="info-title">
            <el-divider content-position="center"><b style="font-size: 1.8rem">常见问题</b></el-divider>
          </div>
          <div class="info-display">
            <div style="width: 20%">
              <el-image :src="img_url" :fit="fit" width="30rem" height="20rem"></el-image>
            </div>
            <div style="width: 75%">
              <p v-for="p in 16" :key="p">
                我国有哪些足不出户能买到的正品印度特罗凯的药品我国有哪些足不出户能买到的正品印度特罗凯的药品
              </p>
            </div>
          </div>
        </div>
        <div class="footer">注：【医诺寰宇海外医疗】为您提供印度特罗凯官方正品保障，特罗凯价格、说明书查询请认准医诺寰宇官方网站</div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'index',
    data() {
      return {
        img_url: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
        medicine_info_images: [
          'static/img/info/INBEC1.jpg',
          'static/img/info/INBEC2.jpg',
          'static/img/info/INBEC3.jpg',
          'static/img/info/INBEC4.jpg'
        ],
        medicine_name: ['达拉非尼', '达卡他韦', '艾曲博帕', '恩西地平', '恩替卡韦', '恩杂鲁胺', '依维莫司', '鲁索替尼', '乐伐替尼',
          '来曲唑', '马法兰', '米哚妥林', '尼罗替尼', '尼达尼布', '奥拉帕尼', '奥沙利铂', '帕博西尼', '帕妥珠单抗', '雷莫卢单抗',
          '苏金单抗体', '托法替尼', '曲美替尼', '凡德他尼', '威罗菲尼', '伏立诺他', '达沙替尼', '尼拉帕尼', '恩格列净', '曲格列汀', '索拉非尼', '伊马替尼']
      }
    }
  }
</script>

<style scoped>
#medicine-info{position: relative;}
.shallowblue{background:#2b96cc;color: #fff}
.green{background: #29a466;color: #fff}
.graygreen{background: #1daca4;color: #fff}
.yellow{background: #f0a226;color: #fff}
.description{width: 90%;background: #fff;padding: 20px 5%;display: inline-flex;flex-flow: row nowrap;align-items: flex-start;align-content: center;justify-content: space-between}
.description .item{width: 47%}
.description .item .item-name{font-size: 3rem;font-weight: 700}
.description .item .item-extra{font-size: 1.2rem;}
.description .item .item-unit{height: 12rem;display: flex;flex-flow: row wrap;align-items: center;align-content: center;justify-content: space-around}
.description .item .item-unit p{width: 36%;height: 40px;line-height: 40px;font-size: 1.2rem;padding-left: 5px;}
.description .item .item-info{height: 15rem;font-size: 1.2rem;font-weight: 700}
.description .item .item-bottom{font-size: 1rem}
.information{width: 90%;margin-top:20px;background: #fff;padding:20px 5%}
.information .item{margin:3rem 2rem;}
.information .item .info-title .text{color: #29a466;font-size: 2rem;font-weight: 700}
.information .item .info-question{height: 3rem;line-height: 3rem;font-size: 1.75rem;font-weight: 800}
.information .item .info-answer{line-height: 1.75rem;font-size: 1.2rem;font-weight: 800}
.el-button.is-round{padding: 8px 15px;border: 1px solid #2b96cc;margin: 10px 5px;color: #2b96cc}
.el-button.is-round:hover{padding: 8px 15px;border: 1px solid #29a466;margin: 10px 5px;color: #fff;background: #29a466}
.information .item .info-display{display:inline-flex;flex-flow: row nowrap;align-items: center;align-content: stretch;justify-content: space-between}
.information .item .info-display>div:nth-child(2){display:flex;flex-flow: row wrap;align-items: flex-start;align-content: stretch;justify-content: space-between}
.information .item .info-display>div:nth-child(2) p{width: 45%;font-size: 1.2rem;white-space: nowrap;text-overflow: ellipsis;overflow: hidden}
.footer{color: #ccc;}
</style>
