<template>
  <div class="page">
    <div class="nav">当前位置：
      <router-link :to="'/'">医诺寰宇海外医疗</router-link>
      >
      <router-link :to="'/news'">医疗新闻</router-link>
      >
    </div>
    <div class="content">
      <div class="main" style="border:none">
        <div class="main-item" v-for="(item, index) in news" :key="index">
          <div class="img">
            <el-image :src="item.img" :fit="fit"></el-image>
          </div>
          <div class="cont">
            <div class="title">{{ item.title }}</div>
            <div class="info">{{ item.content }}</div>
            <div class="foot">
              作者：{{item.author}}&nbsp;&nbsp;&nbsp;&nbsp;
              时间：{{item.time}}
              <span style="display: inline-block;float: right">阅读量：{{item.readCount}}</span>
            </div>
          </div>
        </div>
        <div class="pagination">
          <el-pagination
            small
            prev-text="上一页"
            next-text="下一页"
            layout="prev, pager, next"
            :total="150">
          </el-pagination>
        </div>
      </div>
      <div class="right">
        <div class="words">
          <div class="word-name">频道栏目</div>
          <div class="word-items">
            <el-button v-for="i in items" :key="i" size="mini" border style="border: 1px solid #008aff;padding: 5px 10px;color: #008aff;margin: 5px;font-size: 1.5rem">{{i}}</el-button>
          </div>
        </div>
        <div class="words">
          <div class="word-name">最新文章</div>
          <div class="word-title" v-for="i in 8" :key="i">海外医疗中的靶向治疗深受晚期肺癌患者...</div>
        </div>
        <div class="words">
          <div class="word-name">本周热门文章</div>
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
        items: ['乙肝新闻', '丙肝新闻', '肿瘤新闻', '试管婴儿新闻', '赴美生子新闻', '心脏支架新闻', '眼角膜新闻', 'HPV疫苗新闻', '智能诊疗新闻', '癌症早筛新闻', '海外医疗新闻', '男科新闻', '周边新闻', '糖尿病新闻', '风湿免疫新闻'],
        news: [
          {
            img: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
            title: '雷莫卢单抗联合卡培他滨治疗胃癌能活多久？',
            content: 'VEGF能诱导血管生成和新血管形成。58%的胃癌患者过表达VEGF，并且7%的癌症基因组图谱（TCGA）胃癌患者具有VEGF-A扩增。 雷莫芦单抗 的总生存时间为52个月，而支持治疗为38个月（P＝0047）。雷莫芦单抗的有效率只有3%，与安慰剂组相同。RAINBOWⅢ期试验比 ...',
            author: '康安途医疗旅游',
            time: '2019-05-18 17:25:02',
            readCount: 2173
          },
          {
            img: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
            title: '吉三代/丙通沙治疗显著减少丙肝造成的社会经济效益损失？',
            content: '丙通沙 /吉三代的问世，开启了 CHC 治疗泛基因型时代的药物，得到了 WHO 指南、EASL 指南等国际权威指南的一致推荐，它进入中国后，可给中国 CHC 患者带来什么呢？吉三代治疗中国 CHC 患者的III期临床试验结果显示，GT-1、2、6 型患者的持续病毒学应答 ...',
            author: '康安途医疗旅游',
            time: '2019-05-18 17:17:02',
            readCount: 2287
          },
          {
            img: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
            title: '哪些膀胱癌晚期患者可选择吉西他滨治疗？',
            content: '膀胱癌晚期 应如何选择治疗方案？在过去的几年中，免疫疗法一直是膀胱癌治疗领域的热门话题。然而，根据美国FDA的安全警告，患有转移性疾病的患者可能需要改变其治疗方案。在对两项临床试验进行分析后，FDA的警告反对在可使用铂类药物化疗且PD-L1低表达 ...',
            author: '康安途医疗旅游',
            time: '2019-05-18 17:08:52',
            readCount: 2336
          },
          {
            img: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
            title: '乳腺癌内分泌治疗药物依西美坦片可在家吃吗？',
            content: '乳腺癌内分泌治疗 主要是指通过口服内分泌药物，直接降低病人体内雌激素水平，从而进行抑制乳腺癌肿瘤细胞继续生长。针对目前的治疗手段以及治疗效果来说，内分泌治疗已经是在临床上比较常用的了。虽然说乳腺癌的内分泌治疗的药物比较多，而且在临床上 ...',
            author: '康安途医疗旅游',
            time: '2019-05-18 17:03:41',
            readCount: 2393
          }
        ]
      }
    }
  }
</script>

<style scoped>
.content .main .main-item .cont{position: relative;height: 100%}
.content .main .main-item .cont .title{position: relative;height: 4rem;padding:0 10px;line-height: 4rem;font-size: 1.5rem;font-weight: 600;}
.content .main .main-item .cont .info{position: relative;padding:0 10px;margin-top: 20px; font-size: 1.25rem;color: #5a5a5a;text-indent: 3rem;}
.content .main .main-item .cont .foot{position:relative;width:100%;margin-top:20px;height: 1rem;line-height: 1rem;padding: 0 10px;bottom: 0; left: 0;right: 0;font-size: 1rem;color: #686868;}
.content .right .words{position:relative;height: 100%}
.content .right .words .word-name{padding-bottom: 1rem;font-size: 1.75rem;border-bottom: 1px solid #eee;}
.content .right .words .word-title{width:initial;border-bottom: 1px solid #eee;height: 3rem;line-height: 3rem;font-size: 1.25rem;color: #5a5a5a;
  white-space: nowrap;overflow: hidden;text-overflow: ellipsis}
.content .right .words .word-items{padding: 20px 0;display: flex;flex-flow: row wrap;}
</style>
