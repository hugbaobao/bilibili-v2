import request from '@/uticls/request.js'

export const customAPI = function () {
  return request.get('/myel/custom')
}
