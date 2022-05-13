import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 暂时完整引入
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 引入模拟数据文件
import '../mock/index.js'

// 注册插件
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
