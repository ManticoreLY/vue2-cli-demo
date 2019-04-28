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
                    <el-button type="success" @click="addSeries">添加药品</el-button>
                </el-form-item>
            </el-form>
            <el-table :data="medicines" :default-sort="{ prop: 'index', type: 'ascending' }">
                <el-table-column label="药品名称" prop="name"></el-table-column>
                <el-table-column label="排序" prop="indexNo"></el-table-column>
                <el-table-column label="药品说明" prop="message"></el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button type="warning" size="small" @click="edit(scope.row)">编辑</el-button>
                        <el-button type="danger" size="small">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>     
        </div>
      <el-dialog :title="formTitle" :visible.sync="formVisible" @before-close="handleClose" width="40%">
        <medicine-edit ref="editForm" @close="handleClose"></medicine-edit>
      </el-dialog>
    </div>
</template>

<script>
    import NavMenu from '../components/NavMenu'
    import Breadcrumb from '../components/Breadcrumb'
    import MedicineEdit from './edit'

    export default {
      name: 'index',
      components: {
        NavMenu,
        Breadcrumb,
        MedicineEdit
      },
      data() {
        return {
          formVisible: false,
          formTitle: '',
          index: '1-1',
          keyword: '',
          medicines: [
            { id: 1, name: '阿司匹林', indexNo: 1, message: '常用消炎药' }
          ]
        }
      },
      methods: {
        edit(item) {
          this.formVisible = true
          this.formTitle = '药品管理-编辑'
          this.$nextTick(() => {
            this.$refs['form'].initData(item)
          })
        },
        queryKey() {

        },
        addSeries() {
          this.formTitle = '药品管理-添加'
          this.formVisible = true
        },
        handleClose() {
          this.formVisible = false
          this.$refs['form'].resetFields()
        }
      }
    }
</script>

<style scoped>
.page{width: 100%;margin-top: 20px;}
</style>
