// app.js
App({ // 配置云开发id
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    wx.cloud.init({
        env: 'luozhihao-yun01-4ggorhbn3a8bbfc9', //云开发环境id
        traceUser: true,
      }),
      // 登录
      wx.login({
        success: res => {
          // 发送 res.code 到后台换取 openId, sessionKey, unionId
        }
      })
  },
  globalData: {
    userInfo: null
  },

})