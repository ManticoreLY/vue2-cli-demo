<template>
    <div>
      <el-form ref="form" :model="curedCase" label-width="120px">
        <el-form-item label="标题">
          <el-input v-model="curedCase.title"></el-input>
        </el-form-item>
        <el-form-item label="内容">
          <el-input v-model="curedCase.content" type="textarea" :col="3" max-length="500"></el-input>
        </el-form-item>
        <el-form-item label="图片上传">
          <el-upload></el-upload>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
  import CaseApi from '@/api/cases'
  export default {
    name: 'edit',
    data() {
      return {
        curedCase: {
          title: '',
          content: ''
        },
        isUpdate: false
      }
    },
    methods: {
      editForm(entity) {
        this.curedCase = Object.assign(this.curedCase, entity)
        this.isUpdate = true
      },
      saveForm() {
        this.$refs['form'].validate(valid => {
          if (valid) {
            if (this.isUpdate) {
              CaseApi.update(this.curedCase).then(() => {
                this.$message.success('修改成功！')
              }).catch(err => {
                console.log(err)
              })
            } else {
              CaseApi.save(this.curedCase).then(() => {
                this.$message.success('添加成功！')
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
      }
    }
  }
</script>

<style scoped>

</style>
