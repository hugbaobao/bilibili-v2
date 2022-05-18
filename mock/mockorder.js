const orderinfo = [{
  orderId: '0001',
  business: '注册',
  money: '1000',
  done: true
},
{
  orderId: '0002',
  business: '注销',
  money: '3000',
  done: false
}, {
  orderId: '0003',
  business: '注册',
  money: '1000',
  done: true
}, {
  orderId: '0004',
  business: '注销',
  money: '3000',
  done: true
}, {
  orderId: '0005',
  business: '注册',
  money: '1200',
  done: true
}, {
  orderId: '0006',
  business: '注册',
  money: '1000',
  done: false
}, {
  orderId: '0007',
  business: '财务',
  money: '3000',
  done: false
}, {
  orderId: '0008',
  business: '注销',
  money: '4100',
  done: true
}, {
  orderId: '0009',
  business: '财务',
  money: '6000',
  done: false
}, {
  orderId: '0010',
  business: '注册',
  money: '1200',
  done: true
}, {
  orderId: '0011',
  business: '财务',
  money: '5000',
  done: true
}, {
  orderId: '0012',
  business: '财务',
  money: '5000',
  done: false
}, {
  orderId: '0013',
  business: '注册',
  money: '5000',
  done: false
}, {
  orderId: '0014',
  business: '财务',
  money: '5000',
  done: false
}, {
  orderId: '0015',
  business: '财务',
  money: '5000',
  done: true
}, {
  orderId: '0016',
  business: '财务',
  money: '5000',
  done: false
}, {
  orderId: '0017',
  business: '财务',
  money: '5000',
  done: false
}, {
  orderId: '0018',
  business: '财务',
  money: '5000',
  done: true
}, {
  orderId: '0019',
  business: '财务',
  money: '5000',
  done: false
}, {
  orderId: '0020',
  business: '财务',
  money: '5000',
  done: true
}]

export default [
  {
    url: '/myel/order',
    method: 'get',
    response: options => {
      // const req = JSON.parse(options.body)
      const req = options.url.substring(17, 18)
      console.log(options.url.substring(17, 18))
      if (req === '1') {
        console.log('1')
        const half1 = orderinfo.slice(0, 10)
        return {
          code: 200,
          data: half1
        }
      } else if (req === '2') {
        const half2 = orderinfo.slice(10, 20)
        return {
          code: 200,
          data: half2
        }
      }
      return {
        code: 200,
        data: orderinfo
      }
    }
  }
]
