// pages/demo1-1/demo1-1.js
let price = '';
let id = '';
Page({
  data: {
    goods: {}
  },
  onLoad(options) {
    console.log("列表传的值是：", options);
    id = options.id;
    this.getDetail();
  },
  // 获取商品数据
  getDetail() {
    wx.cloud.database().collection("goods")
      .doc(id)
      .get()
      .then(res => {
        console.log("商品详情页请求成功", res);
        this.setData({
          goods: res.data
        })
      }).catch(res => {
        console.log("商品详情页请求失败", res);
      })
  },
  // 1. 获取用户输入的新价格
  getPrice(e) {
    price = e.detail.value;
  },
  // 2. 修改商品价格
  update() {
    console.log("新的价格", price);
    if (price == '') {
      wx.showToast({
        icon: 'none',
        title: '价格为空',
      })
    } else {
      wx.cloud.database().collection("goods")
        .doc(id)
        .update({
          data: {
            price: price
          }
        }).then(res => {
          console.log("更新成功", res);
          this.getDetail();
          // 修改成功回到首页
          wx.navigateTo({
            url: '/pages/demo1/demo1',
          })
        }).catch(res => {
          console.log("更新失败", res);
        })
    }
  },
  // 3.删除当前商品
  shanchu() {
    wx.showModal({
      title: '提示',
      content: '是否确认删除！',
      success(res) {
        if (res.confirm == true) {
          // 用户选择了确认
          wx.cloud.database().collection("goods")
            .doc(id)
            .remove()
            .then(res => {
              console.log("删除成功", res);
              // 删除成功回到首页
              wx.navigateTo({
                url: '/pages/demo1/demo1',
              })
            }).catch(res => {
              console.log("删除失败", res);
            })
        } else if (res.cancel == true) {
          // 用户选择了取消
        }
      }
    })
  }
})