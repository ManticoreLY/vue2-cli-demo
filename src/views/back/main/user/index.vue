<template>
    <div id="user">
      <el-form :inline="true">
        <el-form-item label="名称">
          <el-input v-model="name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="search">查询</el-button>
          <el-button type="success" @click="addNew">添加用户</el-button>
        </el-form-item>
      </el-form>
      <el-table :data="tableData">
        <el-table-column label="名称" prop="username"></el-table-column>
        <el-table-column label="帐号" prop="account"></el-table-column>
        <el-table-column label="角色" prop="role" :formatter="role_formatter"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="warning" @click="toEdit(scope.row)">编辑</el-button>
            <el-button type="danger" @click="toDelete(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog :title="formTitle" :visible.sync="editFormVisible" width="50%">
        <edit-form ref="editForm" @close="handleFormClose"></edit-form>
      </el-dialog>
    </div>
</template>

<script>
  import UserApi from '@/api/user'
  import EditForm from './edit'
  export default {
    name: 'index',
    components: {
      EditForm
    },
    data() {
      return {
        name: '',
        formTitle: '',
        tableData: [
          { username: '管理员', account: 'admin', role: 2 },
          { username: '普通用户', account: 'user1', role: 1 }
        ],
        editFormVisible: false
      }
    },
    methods: {
      search() {
        if (this.name) {
          UserApi.queryPage(this.name).then(data => {
            console.log(data)
          }).catch(err => {
            console.log(err)
          })
        }
      },
      addNew() {
        this.formTitle = '添加'
        this.editFormVisible = true
      },
      toEdit(row) {
        this.formTitle = '编辑'
        this.editFormVisible = true
        this.$nextTick(() => {
          this.$refs['editForm'].editForm(row)
        })
      },
      toDelete(id) {
        this.$confirm('', '确认删除该用户', {}).then(() => {
          UserApi.delete(id).then(data => {
            console.log(data)
            this.$message.success('删除成功')
          }).catch(err => {
            console.log(err)
            this.$message.warning('操作失败')
          })
        })
      },
      role_formatter(row) {
        if (row.role === 1) {
          return '普通用户'
        } else {
          return '管理员'
        }
      },
      handleFormClose() {
        this.editFormVisible = false
      }
    }
  }
</script>

<style scoped>
</style>
