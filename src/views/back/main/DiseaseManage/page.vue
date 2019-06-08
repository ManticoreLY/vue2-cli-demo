<template>
    <div>
      <div class="page">
        <el-form :inline="true">
          <el-form-item label="搜索：">
            <el-input v-model="name"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="search">查询</el-button>
            <el-button type="primary" @click="addNew">添加</el-button>
          </el-form-item>
        </el-form>
        <el-table :data="tableList">
          <el-table-column label="名称" prop="name"></el-table-column>
          <el-table-column label="症状说明" prop="instruction"></el-table-column>
          <el-table-column label="药物治疗" prop=""></el-table-column>
          <el-table-column label="说明"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button type="warning" size="small" @click="toEdit(scope.row)">编辑</el-button>
              <el-button type="danger" size="small" @click="toDelete(scope.row.id)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <el-pagination style="margin-top: 20px"
                     background
                     :page-size="page.size"
                     :current-page="page.current"
                     :total="page.total"
                     layout="total, prev, pager, next"></el-pagination>
      <el-dialog :title="formTitle" :visible.sync="editFormVisible">
        <edit-form ref="editForm" @close="handleFormClose"></edit-form>
      </el-dialog>
    </div>
</template>

<script>
import EditForm from './edit'
import DiseaseApi from '@/api/disease'

export default {
  name: 'page',
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
      tableList: [
        { id: 1, name: '乙肝', instruction: '' }
      ],
      index: '2',
      formTitle: '',
      editFormVisible: false
    }
  },
  mounted() {
    this.search()
  },
  methods: {
    search() {
      DiseaseApi.queryPage(this.query).then(data => {
        this.page = Object.assign(this.page, data.obj)
        this.tableList = data.obj.records
      }).catch(err => {
        console.log(err)
        this.$message.warning(err.msg)
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
        DiseaseApi.delete(id).then(data => {
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
      this.search()
    }
  }
}
</script>

<style scoped>
  .page{width: 100%;margin-top: 20px;}
</style>
