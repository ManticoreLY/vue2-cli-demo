<template>
    <div>
        <div class="page">
           <el-form :inline="true" class="demo-form-inline">
                <el-form-item label="搜索:">
                    <el-input v-model="query.likeCondition.shotName" placeholder="输入药品名称查询"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="queryKey">查询</el-button>
                    <el-button type="success" @click="addSeries">添加药品</el-button>
                </el-form-item>
            </el-form>
            <el-table :data="dataList" :default-sort="{ prop: 'index', type: 'ascending' }">
                <el-table-column label="ID" prop="id"></el-table-column>
                <el-table-column label="序号" prop="indexNo"></el-table-column>
                <el-table-column label="药品名称" prop="name"></el-table-column>
                <el-table-column label="简介" prop="shotIntroduct"></el-table-column>
                <el-table-column label="药品说明" prop="string"></el-table-column>
                <el-table-column label="单位" prop="unit"></el-table-column>
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
    import MedicineEdit from './edit'
    import MedicineApi from '@/api/medicine'
    export default {
      name: 'index',
      components: {
        MedicineEdit
      },
      data() {
        return {
          query: {
            pageObj: {
              current: 1,
              size: 10
            },
            likeCondition: {
              shotName: ''
            }
          },
          formVisible: false,
          formTitle: '',
          index: '1-1',
          keyword: '',
          dataList: [
            { id: 1, name: '阿司匹林', indexNo: 1, message: '常用消炎药' }
          ]
        }
      },
      mounted() {
        this.initPage()
      },
      methods: {
        initPage() {
          MedicineApi.queryPage(this.query).then(data => {
            this.dataList = [].concat(data.obj.records)
          }).catch(err => {
            console.log(err)
            this.$message.warning(err.msg)
          })
        },
        edit(item) {
          this.formVisible = true
          this.formTitle = '药品管理-编辑'
          this.$nextTick(() => {
            this.$refs['form'].initData(item)
          })
        },
        queryKey() {
          this.initPage()
        },
        addSeries() {
          this.formTitle = '药品管理-添加'
          this.formVisible = true
        },
        handleClose() {
          this.formVisible = false
          this.$refs['form'].resetFields()
          this.initPage()
        }
      }
    }
</script>

<style scoped>
</style>
