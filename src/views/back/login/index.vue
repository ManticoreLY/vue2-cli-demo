<template>
    <div id="login">
      <div class="login-page">
        <h2 style="width: 100%;text-align: center">登陆</h2>
        <el-form ref="form" :model="form" label-width="80px" :rules="rules">
          <el-form-item label="用户名" prop="username">
            <el-input v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="form.password"></el-input>
          </el-form-item>
        </el-form>
        <div style="width: 100%;text-align: center;margin-top: 50px;">
          <el-button type="primary" size="small" @click="login">登陆</el-button>
          <el-button size="small" @click="reset">取消</el-button>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: 'index',
      data() {
        return {
          form: {
            username: '',
            password: ''
          },
          rules: {
            username: [
              { required: true, trigger: 'blur', message: '请输入用户名'}
            ],
            password: [
              { required: true, trigger: 'blur', message: '请输入密码'}
            ]
          }
        }
      },
      methods: {
        login() {
          if (this.form.username === 'admin' && this.form.password === 'admin') {
            this.$message.success('登陆成功')
            this.$router.push('/main')
          }
        },
        reset() {
          this.$refs['form'].resetFields()
        }
      }
    }
</script>

<style scoped>
.login-page{width: 360px;height: 300px;background: aliceblue;border-radius: 10px;margin: 30px auto;padding: 20px 15px;}
</style>
