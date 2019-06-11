<template>
    <div id="login">
      <div class="login-page">
        <h2 style="width: 100%;text-align: center">登陆</h2>
        <el-form ref="form" :model="form" label-width="80px" :rules="rules">
          <el-form-item label="用户名" prop="signName">
            <el-input v-model="form.signName"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="form.password" @keyup.enter.native="toLogin"></el-input>
          </el-form-item>
        </el-form>
        <div style="width: 100%;text-align: center;margin-top: 50px;">
          <el-button type="primary" size="small" @click="toLogin">登陆</el-button>
          <el-button size="small" @click="reset">取消</el-button>
        </div>
      </div>
    </div>
</template>

<script>
  import store from '@/store'
  // import UserApi from '@/api/user'
  // import DiseaseApi from '@/api/disease'
  export default {
    name: 'index',
    data() {
      return {
        form: {
          signName: '',
          password: ''
        },
        rules: {
          signName: [
            { required: true, trigger: 'blur', message: '请输入用户名' }
          ],
          password: [
            { required: true, trigger: 'blur', message: '请输入密码' }
          ]
        }
      }
    },
    methods: {
      toLogin() {
        if (this.form.signName && this.form.password) {
          store.dispatch('login', this.form).then(() => {
            this.$router.push('/user')
          }).catch(err => {
            console.log(err)
          })
        }
      },
      reset() {
        this.$refs['form'].resetFields()
      }
    }
  }
</script>

<style scoped>
.login-page{width: 360px;height: 300px;background: #fff;border-radius: 10px;margin: 30px auto;padding: 20px 15px;}
</style>
