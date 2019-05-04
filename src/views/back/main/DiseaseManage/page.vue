<template>
    <div style="margin: 20px;">
      <!--<nav-menu :active-index="index"></nav-menu>-->
      <div class="page">
        <!--<breadcrumb/>-->
        <el-form :inline="true">
          <el-form-item label="搜索：">
            <el-input v-model="keyword"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" size="small">查询</el-button>
          </el-form-item>
        </el-form>
        <el-table :data="dataList">
          <el-table-column label="名称"></el-table-column>
          <el-table-column label="证状说明"></el-table-column>
          <el-table-column label="药物治疗"></el-table-column>
          <el-table-column label="说明"></el-table-column>
          <el-table-column label="操作">
            <template slot-scopt="scope">
              <el-button type="warning" size="small">编辑</el-button>
              <el-button type="danger" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
</template>

<script>

  export default {
    name: 'page',
    comments: {
    },
    data() {
      return {
        page: {
          page: 1,
          pageSize: 10,
          total: null
        },
        dataList: [],
        index: '2'
      }
    }
  }
</script>

<style scoped>
  .page{width: 100%;margin-top: 20px;}
</style>
