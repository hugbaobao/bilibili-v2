import axios from 'axios'

const request = axios.create({
  // 切换开发、生产的请求地址
  baseURL: '',
  timeout: 5000
})

export default request
