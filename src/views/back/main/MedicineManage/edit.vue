<template>
  <div>
    <el-form ref="form" label-width="120px" :model="form" :rules="rules">
      <el-form-item label="序号" prop="indexNo">
        <el-input-number v-model="form.indexNo" style="width: 240px;"></el-input-number>
      </el-form-item>
      <el-form-item label="药品名称" prop="name">
        <el-input v-model="form.shotName"></el-input>
      </el-form-item>
      <el-form-item label="药品英文名" prop="foreignName">
        <el-input v-model="form.foreignName"></el-input>
      </el-form-item>
      <el-form-item label="特性" prop="spec">
        <el-input type="textarea" :col="3" v-model="form.spec"></el-input>
      </el-form-item>
      <el-form-item label="单位" prop="unit">
        <el-input type="textarea" :col="3" v-model="form.unit"></el-input>
      </el-form-item>
      <el-form-item label="药品说明" prop="introduct">
        <el-input v-model="form.introduct" type="textarea" :col="4"  maxlength="500" show-word-limit></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="saveForm">保存</el-button>
        <el-button type="info" @click="resetForm">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
    import medicine_api from '@/api/medicine'
    export default {
      name: 'edit',
      data() {
        return {
          isUpdate: false,
          form: {
            indexNo: null,
            shotName: '',
            foreignName: '',
            spec: '',
            unit: '',
            introduct: ''
          },
          rules: {
            name: [
              { required: true, trigger: 'blur', message: '请输入药品名称' }
            ],
            message: [
              { required: true, trigger: 'blur', message: '请输入药品说明' }
            ]
          }
        }
      },
      methods: {
        initData(item) {
          /* medicine_api.getEntity(id).then(data => {
            this.form = Object.assign({}, data.obj)
          }).catch(err => {
            console.log(err)
          })*/
          this.form = Object.assign({}, item)
          this.isUpdate = true
        },
        saveForm() {
          this.$refs['form'].validate((valid) => {
            if (valid) {
              if (this.isUpdate) {
                medicine_api.update(this.form).then(data => {
                  this.$message.success('保存成功')
                  this.resetForm()
                }).catch(err => {
                  console.log(err)
                })
              } else {
                medicine_api.save(this.form).then(data => {
                  this.$message.success('保存成功')
                  this.resetForm()
                }).catch(err => {
                  console.log(err)
                })
              }
            }
          }).catch(() => {
            this.$message.error('信息不全')
          })
        },
        resetForm() {
          this.$refs['form'].resetFields()
          this.$emit('close')
        }
      }
    }
</script>

<style scoped>

</style>
