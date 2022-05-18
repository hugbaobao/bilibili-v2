import Vue from 'vue'
import Vuex from 'vuex'

// 导入api
import { loginAPI } from '@/api/login.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    customs: [],
    orders: []
  },
  getters: {
  },
  mutations: {
    setToken (state, newdata) {
      state.token = newdata
    },
    removetoken (state) {
      state.token = ''
    },
    savecustom (state, list) {
      state.customs = list
    },
    saveorders (state, list) {
      state.orders = list
    }
  },
  actions: {
    login (context, userinfo) {
      const { username, password } = userinfo
      return new Promise((resolve, reject) => {
        // 请求成功
        loginAPI(username, password).then(result => {
          const res = result.data
          // console.log(res)
          if (res.code === 200) {
            // 将token存储在本地防止刷新界面消失
            sessionStorage.setItem('Token', res.data.token)
            // 存储头像
            sessionStorage.setItem('userHead', res.data.userPng)
            // 将token存储在state中
            context.commit('setToken', res.data.token)
            resolve()
          } else {
            alert(res.data.err)
          }
          // 请求失败
        }).catch(error => {
          reject(error)
        })
      })
    }
  },
  modules: {
  }
})
