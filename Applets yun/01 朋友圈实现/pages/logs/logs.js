// logs.js
const util = require('../../utils/util.js')
Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUseGetUserProfile: false,
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
    // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        // 获取登录信息成功
        this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          }),
          console.log(res);
        // 将数据放入缓存
        wx.setStorage({
          data: JSON.stringify(res.userInfo),
          key: 'userInfo',
          success: (res) => {
            console.log("成功", res);

          }
        })
        // 将数据拿出缓存
        // wx.getStorage({
        //   key: 'userInfo',
        //   success: (result) => {
        //     console.log('获取数据成功', JSON.stringify(res.userInfo));
        //     this.setData({
        //       userInfo: res.userInfo
        //     })
        //     this.addUser(res.userInfo)
        //   },
        // })
        wx.reLaunch({
          url: '/pages/list/list',
        })
      },
      fail: (res) => {
        console.log("登录失败");
      },
    })
  },
  // addUser(userInfo){
  //   wx.cloud.database().collection('user')
  //   .add({
  //     data:{
  //      ninkName:userInfo.nickName,
  //      avatarUrl:userInfo.avatarUrl,
  //      gender:userInfo.gender,
  //      time:new Date()
  //     }
  //   }).then(res=>{
  //     console.log("添加成功",res);
  //   }).catch(res=>{
  //     console.log("添加失败",res);
  //   })
  // }
})