import request from '@/uticls/request.js'

export const orderAPI = function (page_) {
  return request.get('/myel/order', {
    params: {
      page: page_
    }
  })
}
