<template>
  <div id="Login">
<el-form :model="userinfo" :rules="rules" ref="logform">
  <h1>用户登录</h1>
  <hr>
  <h6>User login</h6>

  <el-form-item prop="username">
    <el-input placeholder="请输入用户名" v-model="userinfo.username"></el-input>
  </el-form-item>

  <el-form-item prop="password">
    <el-input type="password" placeholder="请输入密码" v-model="userinfo.password"></el-input>
  </el-form-item>

  <el-form-item>
    <el-button type="primary" @click="onSubmit">立即登录</el-button>
  </el-form-item>
  <h6>测试账号admin 密码任意</h6>
</el-form>
  </div>
</template>

<script>

// 测试
// import { loginAPI } from '@/api/login.js'

export default {
  name: 'myLogin',
  created () {
    // 清除token
    sessionStorage.removeItem('Token')
    sessionStorage.removeItem('userHead')
    this.$store.commit('removetoken')
  },
  data () {
    return {
      userinfo: {
        username: '',
        password: ''
      },
      rules: {
        username: [{ required: true, message: '用户名不可为空', trigger: 'blur' }],
        password: [{ required: true, message: '密码不可为空', trigger: 'blur' }]
      }
    }
  },
  methods: {
    onSubmit () {
      this.$refs.logform.validate(valid => {
        if (valid) {
          // 调用action的登录方法发起登录的异步请求
          this.$store.dispatch('login', this.userinfo).then(() => {
            // 转到首页
            this.$router.push('/home')
            // console.log(this.$store.state.token)
          }).catch(err => {
            console.log(err)
          })
          // 测试
          /* const data = loginAPI(this.userinfo.username, this.userinfo.password)
          console.log(data) */
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
#Login {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #2c6975;
}
#Login form {
    width: 400px;
    margin: 0 auto;
    padding: 160px 35px 0;
}
#Login form h1,h6,button {
  color: white;
  font-weight: 400;
  text-align: center;
}

#Login form .el-input /deep/ input{
   height: 50px;
}
.el-button {
  width: 400px;
  background-color: #409EFF;
  border: 0;
}
</style>
