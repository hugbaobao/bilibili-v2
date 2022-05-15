export default [
  {
    url: '/myel/order',
    method: 'get',
    response: () => {
      return {
        code: 200,
        data: [{
          姓名: '钱',
          手机: '1000'
        },
        {
          业务: '赵',
          金额: '2000'
        }, {
          业务: '孙',
          金额: '3000'
        }, {
          业务: '孙',
          金额: '2300'
        }, {
          业务: '李',
          金额: '1200'
        }, {
          业务: '周',
          金额: '3200'
        }, {
          业务: '吴',
          金额: '1400'
        }, {
          业务: '郑',
          金额: '4100'
        }, {
          业务: '郑',
          金额: '5100'
        }, {
          业务: '王',
          金额: '6200'
        }]
      }
    }
  }
]