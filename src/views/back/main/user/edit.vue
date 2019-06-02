<template>
    <div id="edit">
      <el-form ref="form" :model="user" label-width="120px" :rules="rules">
        <el-form-item label="名称:" prop="username">
          <el-input v-model="user.username"></el-input>
        </el-form-item>
        <el-form-item label="帐号:" prop="account">
          <el-input v-model="user.account"></el-input>
        </el-form-item>
        <el-form-item label="密码:" prop="password">
          <el-input type="password" v-model="user.password"></el-input>
        </el-form-item>
        <el-form-item label="密码确认:" prop="re_password">
          <el-input type="password" v-model="user.re_password"></el-input>
        </el-form-item>
        <el-form-item label="角色:" prop="role">
          <el-radio v-model="user.role" size="mini" v-for="role in roles" :key="role" :label="role.value">{{ role.name }}</el-radio>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="saveForm">保存</el-button>
          <el-button type="reset" @click="closeForm">关闭</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
  import UserApi from '@/api/user'
  export default {
    name: 'edit',
    data() {
      return {
        user: {
          username: '',
          account: '',
          password: '',
          re_password: '',
          role: null
        },
        roles: [
          { name: '普通用户', value: 1 },
          { name: '管理员', value: 2 }
        ],
        rules: {
          username: [
            { required: true, trigger: 'blur', message: '用户名不能为空' }
          ],
          account: [
            { required: true, trigger: 'blur', message: '帐号不能为空' },
            { validator: this.accountValidate, trigger: 'blur' }
          ],
          password: [
            { required: true, trigger: 'blur', message: '密码不能为空' }
          ],
          re_password: [
            { required: true, trigger: 'blur', message: '请确认密码' },
            { validator: this.passwordConfirming, trigger: 'blur' }
          ],
          role: [
            { required: true, trigger: 'blur', message: '请设置用户角色' }
          ]
        }
      }
    },
    methods: {
      editForm(data) {
        this.user = Object.assign(this.user, data)
      },
      accountValidate(rule, value, cb) {
        const expr = /^([a-z]|[A-Z])([a-z]|[A-Z]|[0-9]){2,14}$/
        if (!expr.test(this.user.account)) {
          cb(new Error('账号必须是字母和数字的组合,长度在3到15之间'))
        } else {
          cb()
        }
      },
      passwordConfirming(rule, value, cb) {
        if (this.user.password !== this.user.re_password) {
          cb(new Error('确认密码不正确,请重新设置密码'))
        } else {
          cb()
        }
      },
      saveForm() {
        this.$refs['form'].validate((valid) => {
          if (valid) {
            UserApi.add(this.user).then(data => {
              console.log(data)
              this.$message.success('保存成功')
            }).catch(err => {
              console.log(err)
              this.$message.warning('操作失败')
            })
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
