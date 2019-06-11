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
            LOGO: <el-image :src="scope.row.img" style="width: 300px; height: auto"></el-image>
          </template>
        </el-table-column>
        <el-table-column label="链接名" prop="linkName"></el-table-column>
        <el-table-column label="类型" :formatter="type_format"></el-table-column>
        <el-table-column label="链接地址" prop="linkUrl"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="warning" @click="toEdit(scope.row)">编辑</el-button>
            <el-button type="danger" @click="toDelete(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination background style="margin-top: 20px;"
                     :current-page="page.current"
                     :page-size="page.size"
                     :total="page.total"
                     @current-change="handlePageChange"
                     @size-change="handleSizeChange"
                     layout="total, prev, pager, next">
      </el-pagination>
      <el-dialog :title="formTitle" :visible.sync="editFormVisible">
        <edit-form ref="editForm" @close="handleFormClose"></edit-form>
      </el-dialog>
    </div>
</template>

<script>
  import FriendLinkApi from '@/api/HomePage/FriendLink'
  import EditForm from './edit'
  export default {
    name: 'index',
    components: {
      EditForm
    },
    data() {
      return {
        query: {
          pageObj: {
            current: 1,
            size: 10
          },
          likeCondition: {
            name: ''
          }
        },
        page: {},
        name: '',
        tableList: [],
        formTitle: [],
        editFormVisible: false
      }
    },
    mounted() {
      this.search()
    },
    methods: {
      search() {
        FriendLinkApi.queryPage(this.query).then(data => {
          this.page = Object.assign(this.page, data.obj)
          this.tableList = data.obj.records
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
          this.$refs['editForm'].editForm(entity)
        })
      },
      toDelete(id) {
        this.$confirm('', '请确认删除?', {}).then(() => {
          FriendLinkApi.remove(id).then(data => {
            console.log(data)
            this.$message.success('删除成功')
          }).catch(err => {
            console.log(err)
            this.$message.warning('操作失败')
          })
        })
      },
      type_format(row) {
        var data = [
          { value: 1, name: '战略合作伙伴' },
          { value: 2, name: '媒体合作伙伴' },
          { value: 3, name: '链接聚合' },
          { value: 4, name: '友情链接' }
        ]
        return data.find(item => item.value === row.type).name
      },
      handleFormClose() {
        this.editFormVisible = false
        this.search()
      }
    }
  }
</script>

<style scoped>

</style>
