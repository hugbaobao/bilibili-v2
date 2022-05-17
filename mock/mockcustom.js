export default [
  {
    url: '/myel/custom',
    method: 'get',
    response: () => {
      return {
        code: 200,
        data: [{
          id: '001',
          name: '赵',
          phone: '177xxxxx',
          status: true
        }, {
          id: '002',
          name: '钱',
          phone: '177xxxxx',
          status: true
        }, {
          id: '003',
          name: '孙',
          phone: '177xxxxx',
          status: false
        }, {
          id: '004',
          name: '李',
          phone: '177xxxxx',
          status: true
        }, {
          id: '005',
          name: '周',
          phone: '177xxxxx',
          status: false
        }, {
          id: '006',
          name: '吴',
          phone: '177xxxxx',
          status: true
        }, {
          id: '007',
          name: '郑',
          phone: '177xxxxx',
          status: true
        }, {
          id: '008',
          name: '王',
          phone: '177xxxxx',
          status: true
        }]
      }
    }
  }
]
