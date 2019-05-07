<template>
    <div>
      <div class="web-content">
        <div v-for="item in 8" :key="item" class="example-item">
          <div>图片</div>
          <div>
            <div style="font-size: 1.5rem;height:2.75rem;">丙肝治疗实例</div>
            <div style="font-size: 1.25rem;color: #7f7f7f;word-wrap: break-word">某患者罹患丙肝15年,经过治疗现在已经全体康复.某患者罹患丙肝15年,经过治疗现在已经全体康复.</div>
          </div>
        </div>
      </div>
      <div style="width: 100%;text-align: center">
        <el-button style="background-color: #1daca4;color:#efefef">查看更多</el-button>
      </div>
    </div>
</template>

<script>
    export default {
      name: 'ExampleItem'
    }
</script>

<style scoped>
  .web-content{width: 90%;margin: 0 5%;height: auto;display: flex;flex-flow:row wrap;justify-content: space-around}
  .web-content .example-item{position:relative;width: 22%;background: #ccc;margin-bottom: 20px;}
  .web-content .example-item>div:nth-child(1){height: 300px;width: 100%;border-bottom: 2px solid #1daca4;}
  .web-content .example-item>div:nth-child(2){height: 120px;width: 93%;padding: 5px 3%;}
</style>
