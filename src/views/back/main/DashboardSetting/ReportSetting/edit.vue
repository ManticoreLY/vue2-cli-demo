<template>
    <div>
      <el-form ref="form" :model="ReportSetting" label-width="120px" :rules="rules">
        <el-form-item label="选择新闻">
          <el-autocomplete v-model="ReportSetting.name" :fetch-suggestions="querySearchAsync"  placeholder="请输入新闻标题搜索" @select="handleSelect"></el-autocomplete>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="saveForm">保存</el-button>
          <el-button type="" @click="closeForm">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
  import HomeNewsReportApi from '@/api/HomePage/NewsReport'
  import ArticleApi from '@/api/articles'
  export default {
    name: 'edit',
    data() {
      return {
        obj: null,
        ReportSetting: {
          name: '',
          img: '',
          url: ''
        },
        query: {
          pageObj: {
            current: 1,
            size: 10
          },
          likeCondition: {
            name: ''
          }
        },
        timer: null,
        isUpdate: false,
        rules: {
          name: [
            { required: true, trigger: 'blur', message: '请填写频道名称' }
          ]
        }
      }
    },
    methods: {
      editForm(entity) {
        this.isUpdate = true
        this.obj = this.ReportSetting = Object.assign(this.ReportSetting, entity)
      },
      saveForm() {
        this.$refs['form'].validate(valid => {
          if (valid) {
            if (this.isUpdate) {
              HomeNewsReportApi.update(this.ReportSetting).then(data => {
                this.$message.warning('修改成功！')
                this.closeForm()
              }).catch(err => {
                console.log(err)
              })
            } else {
              HomeNewsReportApi.save(this.ReportSetting).then(data => {
                this.$message.warning('添加成功！')
                this.closeForm()
              }).catch(err => {
                console.log(err)
              })
            }
          }
        })
      },
      closeForm() {
        this.$refs['form'].resetFields()
        this.$emit('close')
      },
      handleChange(opt) {
        this.ReportSetting = Object.assign(this.ReportSetting, opt)
      },
      handleRemove() {
        this.ReportSetting.img = ''
      },
      getFileList(...url) {
        const objs = url.map(l => {
          return { name: 'img', url: l }
        })
        return [].concat(...objs)
      },
      querySearchAsync(query, callback) {
        if (!query) return
        else {
          this.query.likeCondition.name = query
          clearTimeout(this.timer)
          this.timer = setTimeout(() => {
            ArticleApi.queryPage(this.query).then(data => {
              console.log(data)
              callback(data.obj.records)
            }).catch(err => {
              console.log(err)
              callback([])
            })
          }, 500)
        }
      },
      handleSelect(item) {
        console.log(item)
      }
    }
  }
</script>

<style scoped>

</style>
