// app.js
App({
  // 小程序启动就执行的方法
  onLaunch() {
    wx.cloud.init({
      env:'luozhihao-yun01-4ggorhbn3a8bbfc9', //云开发环境id
      traceUser:true,
    })
  },
})
