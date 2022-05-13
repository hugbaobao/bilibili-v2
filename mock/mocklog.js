// 声明可以登录的账号名
const account = {
  admin: {}
}

export default [
  {
    url: '/myel/login',
    method: 'post',
    response: options => {
      const req = JSON.parse(options.body)
      // 账号匹配则返回一个token和头像，否则返回一个错误信息
      if (account[req.username]) {
        return {
          code: 200,
          data: {
            token: 'Bearer admintoken666',
            userPng: 'https://ycsl95-1311833186.cos.ap-nanjing.myqcloud.com/user.png'
          }
        }
      }
      return {
        code: 201,
        data: {
          err: '账号不存在！'
        }
      }
    }
  }
]
