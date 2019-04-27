<template>
    <div style="margin: 20px;">
        <nav-menu :active-index="index"></nav-menu>
        <div class="page">
           <breadcrumb/>
           <el-form :inline="true" class="demo-form-inline">
                <el-form-item label="搜索">
                    <el-input v-model="keyword"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="queryKey">查询</el-button>
                </el-form-item>
            </el-form>
            <el-table :data="medicines">
                <el-table-column label="药品名称" prop="name"></el-table-column>
                <el-table-column label="药品说明" prop="info"></el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button type="warning" size="small" @click="edit(scope.row.id)">编辑</el-button>
                        <el-button type="danger" size="small">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>     
        </div>
    </div>
</template>

<script>
    import NavMenu from './components/NavMenu'
    import Breadcrumb from './components/Breadcrumb'
    export default {
      name: 'MedicineManage',
      components: {
        NavMenu,
        Breadcrumb
      },
      data() {
          return{
              index: '1-1',
              keyword: '',
              medicines: [
                  { id: 1, name: '阿司匹林', info: '常用消炎药' }
              ]
          }
      },
    }
</script>

<style scoped>
.page{width: 100%;margin-top: 20px;}
</style>
