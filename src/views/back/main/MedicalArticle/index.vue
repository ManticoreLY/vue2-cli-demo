<template>
    <div>
      <el-form :inline="true" label-width="120px">
        <el-form-item>
          <el-input v-model="name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="search">查询</el-button>
          <el-button type="success" @click="addNew">添加</el-button>
        </el-form-item>
      </el-form>
      <el-table :data="tableList">
        <el-table-column type="expand">
          <template slot-scope="scope">
            <div></div>
          </template>
        </el-table-column>
        <el-table-column label="标题" prop="title"></el-table-column>
        <el-table-column label="内容" prop="content"></el-table-column>
        <el-table-column label="时间" prop="updatedDt"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="warning" @click="toEdit(scope.row)">编辑</el-button>
            <el-button type="danger" @click="toDelete(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog :title="formTitle" :visible.sync="editFormVisible">
        <edit-form ref="editForm" @close="handleFormClose"></edit-form>
      </el-dialog>
    </div>
</template>

<script>
  import ArticlesApi from '@/api/articles'
  import EditForm from './edit'
  export default {
    name: 'index',
    components: {
      EditForm
    },
    data() {
      return {
        name: '',
        tableList: [],
        formTitle: [],
        editFormVisible: false
      }
    },
    methods: {
      search() {
        ArticlesApi.queryPage(this.name).then(data => {
          console.log(data)
          this.tableList = data.obj
        }).catch(err => {
          console.log(err)
        })
      },
      addNew() {
        this.formTitle = '添加'
        this.editFormVisible = true
      },
      toEdit(entity) {
        this.formTitle = '编辑'
        this.editFormVisible = true
        this.$nextTick(() => {
          this.refs['editForm'].editForm(entity)
        })
      },
      toDelete(id) {
        this.$confirm('', '请确认删除?', {}).then(() => {
          ArticlesApi.delete(id).then(data => {
            console.log(data)
            this.$message.success('删除成功')
          }).catch(err => {
            console.log(err)
            this.$message.warning('操作失败')
          })
        })
      },
      handleFormClose() {
        this.editFormVisible = false
      }
    }
  }
</script>

<style scoped>

</style>
