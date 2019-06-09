<template>
  <div class="page">
    <div class="nav">当前位置：
      <router-link :to="'/'">医诺寰宇海外医疗</router-link>
      >
      <router-link :to="'/about'">关于我们</router-link>
      > 加入我们
    </div>
    <div class="main">
      <div>
        <p>加入我们</p>
        <h4>简历发送至<span style="color: #1daca4">hr@kangantu.com</span>,标题请注明所申请职位</h4>
        <div class="positions">
          <div class="info"></div>
          <div class="info"></div>
          <div class="info"></div>
        </div>
      </div>
      <div>
        <p>福利条件</p>
        <div class="welfare" style="width: 80%;height: 300px;">
           <div class="info">
             <i class="my-icon-money" style="font-size: 4.5rem;color: #1daca4"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             <span style="font-size: 1.8rem;color: #1daca4;line-height: 3rem">五险一金、带薪年假、健康关怀，薪满益足，胜于你想</span>
           </div>
          <div class="info">
            <i class="my-icon-favorate" style="font-size: 4.5rem;color: #1daca4"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span style="font-size: 1.8rem;color: #1daca4;line-height: 3rem">绩效奖、年终奖、活动经费，众多惊喜，等你嗨不停！</span>
          </div>
          <div class="info">
            <i class="my-icon-user" style="font-size: 4.5rem;color: #1daca4"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span style="font-size: 1.8rem;color: #1daca4;line-height: 3rem">简单、平等互助的工作方式，弱化层级，创意无限，妙趣挡不住！</span>
          </div>
          <div class="info">
            <i class="my-icon-home" style="font-size: 4.5rem;color: #1daca4"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span style="font-size: 1.8rem;color: #1daca4;line-height: 3rem">舞台够大，展示你最美风采，上班轻松，下班愉快，这！才叫生活！</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'JoinUs',
    data() {
      return {}
    }
  }
</script>

<style scoped>
  .main{width: 100%;height: 100%}
  .main>div{width: 90%;margin: 20px 5%;}
  .main>div p{;padding: 2rem 1rem;font-size: 2.25rem;font-weight: 600;text-align: center}
  .main>div h4{font-size: 1.65rem;line-height: 2.5rem;text-align: center;}
  .main>div .positions, .main>div .welfare{width: 100%;margin: 4rem auto;display: flex;flex-flow: row wrap;justify-content: space-between;}
  .main>div .positions .info{width: 30%;height: 400px;background: #ccc;}
  .main>div .welfare .info{position:relative;width: 45%;height: auto;display: inline-flex;justify-content: space-between;align-content: stretch;align-items: center}
  .main>div .welfare .info i{}
</style>
