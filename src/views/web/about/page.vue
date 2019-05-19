<template>
    <div>
      <div class="nav">当前位置：
        <router-link :to="'/'">医诺寰宇海外医疗</router-link>
        >
        <router-link :to="'/about'">关于我们</router-link>
        >
      </div>
      <div class="main">
        <div>
          <p>关于我们</p>
          <h5>
            抗癌社区由河北印华健康管理有限公司打造的个性化精准抗癌服务平台——以“精准抗癌，助力生命；科学治疗，终身受益”为愿景， 打破医疗“信息孤岛”，将医疗机构、医生、医药企业、患者相连接，实现相关信息的可得性和互相联通，打造高效、 便捷、安全的健康管理服务网络。致力于拥抱互联网科技推动下的中国医疗健康产业变革，为国人提供优质、安全的健康管理服务。
            <br/><br/><br/>
            公司自成立以来，始终坚持以人才为本、诚信立业的经营原则，荟萃业界精英，以让患者获得更好的国际医疗服务，通过创新方式，打造“病情咨询+前沿治疗+后期随访”的服务闭环 ，为患者在工作生活之余提供高效、安全、便捷、专业的健康管理服务体系，将疾病预防、跟踪随访、前沿治疗、服药指南、海外医疗融为一体，随时随地为您量身定制优质的健康管理方案及专业指导服务。
          </h5>
        </div>
      </div>
      <div class="main" style="border-top: 1px solid #eee;">
        <div>
          <p>企业愿景</p>
          <h5>
            让更多的患者行到救治为宗旨，目前每年已有数万名患者通过抗癌社区的帮助行进在疾病康复的大道上，<br/>众多曾徘徊在绝望边缘的癌症病人重见生命之光！
          </h5>
        </div>
        <div class="data">
          <div>
            <div class="n">100000+</div>
            <div class="e">服务人数</div>
          </div>
          <div>
            <div class="n">100%</div>
            <div class="e">满意度</div>
          </div>
          <div>
            <div class="n">50+</div>
            <div class="e">合作企业</div>
          </div>
          <div>
            <div class="n">300000+</div>
            <div class="e">行业数据</div>
          </div>
        </div>
        <div class="clear" style="margin: 40px 0"></div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'page'
  }
</script>

<style scoped>
  .main{width: 100%;height: 100%}
  .main>div{width: 80%;margin: 20px 10%;text-align: center;}
  .main>div p{display: inline-block;padding: 2rem 1rem;font-size: 3rem;font-weight: 800;border-bottom: 1px solid #eee}
  .main>div h5{font-size: 1.375rem;line-height: 2.5rem;margin: 20px 0;}
  .main>div.data{display: inline-flex;flex-flow: row nowrap; align-content: center; justify-content: space-between}
  .main>div.data>div .n{font-size: 5rem;color: #009fff;text-align: center;}
  .main>div.data>div .e{font-size: 1.75rem;color: #545454;text-align: center}
</style>
