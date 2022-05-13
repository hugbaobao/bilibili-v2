import request from '@/uticls/request.js'

export const loginAPI = function (name, pass) {
  return request.post('/myel/login', {
    username: name,
    password: pass
  })
}
