<template>
    <div class="cure-case">
      <div class="bg">
        <el-image :src="img_url" :fit="fill"></el-image>
      </div>
      <div class="nav">当前位置：
        <router-link :to="'/'">医诺寰宇海外医疗</router-link>
         >
        <router-link :to="'/cases'">医疗案例</router-link>
         >
      </div>
      <div class="content">
        <div class="main">
          <div class="main-title">医疗案例</div>
          <div class="main-case" v-for="item in cases" :key="item">
            <div class="img">
              <el-image :src="item.img" :fit="contain"></el-image>
            </div>
            <div class="cont">
              <div class="title">{{item.title}}<span>更新时间：{{item.date}}</span></div>
              <div class="info">{{item.content}}...<a style="color:red">【详情】</a></div>
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
            <div class="word-name">最新文章</div>
            <div class="word-title" v-for="word in latest_words" :key="word">{{word}}</div>
          </div>
          <div class="words">
            <div class="word-name">本周热门文章</div>
            <div class="word-title" v-for="word in latest_words" :key="word">{{word}}</div>
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
        img_url: 'static/img/info/banner_patientStory.png',
        cases: [
          { img: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
            date: '2019-04-18',
            title: '丙肝患者吉三代治疗后超敏丙肝病毒量检查低于检测下限',
            content: '丙肝客户服用吉三代1月做的超敏丙肝病毒量检查低于检测下限，恭喜效果很好.'
          },
          { img: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
            date: '2019-04-18',
            title: '丙肝患者服用吉三代6周后病毒量转阴',
            content: '早上收到的好消息，服用丙肝吉三代之前病毒量有10的7次方，服用6周病毒量转阴，效果杠杠的'
          },
          { img: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
            date: '2019-04-18',
            title: 'L女士干扰素治疗丙肝复发使用吉三代痊愈',
            content: 'L女士，2月28日咨询丙肝，当天下午签单。 　　7年前打干扰素治疗丙肝，后期复发。 　　现服用吉三代1月做的超敏丙肝病毒量检查低于检测限，病毒量已转阴，服用效果很好。恭喜恭喜'
          },
          { img: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
            date: '2019-04-18',
            title: '抚州市H先生使用吉三代12周转阴',
            content: '抚州H先生，男性，47周岁，2018-08-01检测HCV-RNA为4.30x106IU/ml（图1），经咨询康安途后使用Mylan产吉三代治疗12周后，于2018-12-01复查高灵敏度丙肝RNA阴性（图2）'
          }
        ],
        latest_words: ['西达本胺能延缓乳腺癌内分泌治疗', '吉西他滨与奥沙利铂辅助治疗胆管', '病毒性丙肝发展到肝癌需要多久？', '阿格列汀治疗糖尿病患者的疗效怎',
          '糖尿病药曲格列汀治疗时要注意哪', '仑伐替尼瑞戈非尼是治疗原发肝癌', '晚期肺癌患者一线用药是先选择AZ', '饭后血糖超20的患者除了吃曲格列']
      }
    }
  }
</script>

<style scoped>
  .cure-case{width: 100%;background: #fff}
  .bg{width: 100%}
  .nav{width: 90%;padding: 10px 5%;height: 2rem;line-height: 2rem;font-size: 1.25rem;color: #5a5a5a}
  .content{position: relative;width: 90%;padding: 0 5%;display: flex; flex-flow: row wrap; align-items: flex-start;align-content: stretch;justify-content: space-between}
  .content .main{width: 75%;padding: 10px;min-height: 500px;border: 1px solid #eee;}
  .content .main .main-title{width: 90%;height: 4rem;line-height: 4rem;padding: 5px 5%;border-bottom: 1px solid #eee;font-size: 1.5rem;font-weight: 600}
  .content .main .main-case{width: initial;padding:10px;border-bottom: 1px dotted #eee;min-height: 150px;
    display: inline-flex;flex-flow: row nowrap; align-items: flex-start;align-content: stretch;justify-content: space-between}
  .content .main .main-case .img{width: 25%;}
  .content .main .main-case .cont{width: 70%;}
  .content .main .main-case .cont .title{position: relative;height: 4rem;line-height: 4rem;font-size: 1.5rem;font-weight: 600;}
  .content .main .main-case .cont .title span{font-size: 1.25rem;color: #5a5a5a;display: block;float:right;margin-right: 15px;}
  .content .main .main-case .cont .info{position: relative;margin-top: 20px; font-size: 1.25rem;color: #5a5a5a;}
  .content .right{width: 23%;}
  .content .right .words{width: 100%;min-height: 200px;border: 1px solid #eee;margin-bottom: 20px;padding:15px;}
  .content .right .words>div.word-name{width:initial;border-bottom: 1px solid #eee;height: 4rem;line-height: 4rem;font-size: 1.5rem;font-weight: 600}
  .content .right .words>div.word-title{width:initial;border-bottom: 1px solid #eee;height: 3rem;line-height: 3rem;font-size: 1.25rem;font-weight: 600;color: #5a5a5a;
      white-space: nowrap;overflow: hidden;text-overflow: ellipsis}
</style>
