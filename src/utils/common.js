export default (_t, api) => {
  return {
    search() {
      api.queryPage(_t.name).then(data => {
        console.log(data)
        _t.tableList = data.obj
      }).catch(err => {
        console.log(err)
      })
    },
    addNew() {
      _t.formTitle = '添加'
      _t.editFromVisible = true
    },
    toEdit(entity) {
      _t.formTitle = '编辑'
      _t.editFromVisible = true
      _t.$nextTick(() => {
        _t.refs['editForm'].editForm(entity)
      })
    },
    toDelete(id) {
      _t.$confirm('', '请确认删除?', {}).then(() => {
        api.delete(id).then(data => {
          console.log(data)
          this.$message.success('删除成功')
        }).catch(err => {
          console.log(err)
          this.$message.warning('操作失败')
        })
      })
    }
  }
}

