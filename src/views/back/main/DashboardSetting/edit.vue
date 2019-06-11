<template>
    <div>
      <el-form ref="form" :model="channelItem" label-width="120px" :rules="rules">
        <el-form-item label="名称" prop="name">
          <el-input v-model="channelItem.name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="saveForm">保存</el-button>
          <el-button type="" @click="closeForm">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
  import ChannelApi from '@/api/channel'
  export default {
    name: 'edit',
    data() {
      return {
        channelItem: {
          name: ''
        },
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
        this.channelItem = Object.assign(this.channelItem, entity)
      },
      saveForm() {
        this.$refs['form'].validate(valid => {
          if (valid) {
            if (this.isUpdate) {
              ChannelApi.update(this.channelItem).then(data => {
                this.$message.warning('修改成功！')
                this.closeForm()
              }).catch(err => {
                console.log(err)
              })
            } else {
              ChannelApi.save(this.channelItem).then(data => {
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
      }
    }
  }
</script>

<style scoped>

</style>
