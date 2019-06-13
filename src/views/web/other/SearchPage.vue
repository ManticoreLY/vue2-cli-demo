<template>
    <div class="search">
      <div class="search-item" style="border: 1px solid #eee">
        <el-image style="width: 30%;height: 100%"></el-image>
        <div class="search-main">
          <div class="key-word" style="height: 4rem;">吉三代 伊柯鲁沙 Epclusa</div>
          <div class="search-content" style="height: 8rem;">处方药.索非布韦(Sofosbuvir,SOF)400mg+维帕他韦(Velpasir, VEL)100mg组成的复合剂(SOF/VEL),索非布韦(Sofosbuvir,SOF)400mg+维帕他韦(Velpasir, VEL)100mg组成的复合剂(SOF/VEL)索非布韦(Sofosbuvir,SOF)400mg+维帕他韦(Velpasir, VEL)100mg组成的复合剂(SOF/VEL)</div>
          <div class="more" style="width: 100%;height: 2rem;text-align: right;margin-top:15px;">
            <el-button type="primary" style="padding: 5px;">立即查看</el-button>
          </div>
        </div>
      </div>
      <div class="search-list">
        <div v-for="x in 9" :key="x" class="list-item">
          <div class="list-title">吉三代集所有丙肝抗病毒药物优势于一身</div>
          <div class="list-content">
            <el-image style="width: 22%;height: 120px;"></el-image>
            <div style="position: relative;margin-left: 20px;width: 76%;height: 120px">
              <div class="item-content">
                吉三代又名丙通沙,是美国吉利公司德公司的丙肝支柱药物, 该药的出现彻底改写丙肝治疗的历史, 让我们顺利进入到丙肝治疗泛基因时代, 吉三代可以说是集合了前几代抗病毒药物的所有优势, 成为当之无愧的治疗丙肝首选.
              </div>
              <div class="item-info">
                <span><i>分类:</i> 丙肝新闻</span>
                <span><i>作者:</i> 康安途旅游</span>
                <span><i>日期:</i> 2019-05-16</span>
                <span><i>关键词:</i> 吉三代, 伊柯鲁沙, Epclusa</span>
              </div>
            </div>
          </div>
        </div>
      <el-pagination style="margin-top: 20px"
                     :current-page="1"
                     :page-size="10"
                     :total="50"
                     prev-text="上一页"
                     next-text="下一页"
                     layout="prev, pager, next">
                     </el-pagination>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'SearchPage',
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped>
.search{width: 100%;}
.search .search-item{display: flex; align-items: flex-start; align-content: stretch; justify-content: space-between}
.search .search-item, .search .search-list{width: 92%;padding: 20px}
.search .search-item .search-main{margin-left: 20px;width: 65%;display: inline-block;flex-flow: column nowrap; align-items: flex-start;align-content: stretch;justify-content:flex-start}
.search .search-item .search-main .key-word{font-size: 2.25rem; font-weight: 600}
.search .search-item .search-main .search-content, .search .search-list .list-item .item-content{
  font-size: 1.5rem;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 4;-webkit-box-orient: vertical}
.search .search-list .list-item{display:block;width: 100%;height: 150px;margin-bottom: 20px;}
.search .search-list .list-item .list-title{margin-bottom: 10px;font-size: 1.75rem; text-decoration: underline;color: #008aff}
.search .search-list .list-item .list-content{width: 100%;display: flex; align-items: flex-start;align-content: stretch; justify-content: space-between}
.search .search-list .list-item .item-info{position:absolute;bottom: 10px;left: 0;font-size: 1.25rem;margin-top: 15px}
.search .search-list .list-item .item-info>span{display: inline-block;marign-right: 15px;}
.search .search-list .list-item .item-info>span i{color: #ccc;font-style:normal}
</style>
