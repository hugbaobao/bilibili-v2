import request from '@/uticls/request.js'

export const orderAPI = function () {
  return request.get('/myel/order')
}
