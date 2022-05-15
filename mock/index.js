// 使用 Mock
import Mock from 'mockjs'

// 导入api模块
import logmocks from '../mock/mocklog.js'
import custommocks from '../mock/mockcustom.js'
import ordermocks from '../mock/mockorder.js'

// 生成新的api数组
const mocks = [
  ...logmocks,
  ...custommocks,
  ...ordermocks
]

// 循环数组添加ajax拦截
mocks.forEach(item => {
  Mock.mock(RegExp(item.url), item.method || 'get', item.response)
})
// console.log(mocks)
