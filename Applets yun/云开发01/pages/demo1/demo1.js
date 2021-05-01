// pages/demo1/demo1.js
let name = ''; //设置为全局变量，可以多方法内访问
let price = '';
Page({
  onLoad() {
    this.getList()
  },
  // 1. 获取列表数据
  getList(type) {
    // wx.cloud.database().collection("goods")
    // .get()
    // .then(res=>{
    //   console.log("请求成功",res);
    //   this.setData({
    //     list:res.data
    //   })
    // }).catch(res=>{
    //   console.log("请求失败",res);
    // })
    // 解决代码冗余
    let db = wx.cloud.database().collection("goods");
    if (type == 1) {
      db = db.orderBy('price', 'asc')
    } else if (type == -1) {
      db = db.orderBy('price', 'desc')
    }
    db.get().then(res => {
      console.log("请求成功", res);
      this.setData({
        list: res.data
      })
    }).catch(res => {
      console.log("请求失败", res);
    })
  },
  // 2. 点击跳转到商品详情页
  goDetail(event) {
    console.log("点击跳转", event.currentTarget.dataset.id);
    wx.navigateTo({
      url: '/pages/demo1-1/demo1-1?id=' + event.currentTarget.dataset.id,
    })
  },
  // 3. 获取用户输入的商品名
  getName(e) {
    name = e.detail.value
    console.log(name);
  },
  // 4. 获取用户输入的商品价格
  getPrice(e) {
    price = e.detail.value
    console.log(price);
  },
  // 5. 添加商品到数据库
  addGood() {
    console.log("商品名", name);
    console.log("价格", price);
    if (name == '') {
      console.log("商品名为空");
      wx.showToast({
        icon: 'none',
        title: '商品名为空',
      })
    } else if (price == '') {
      console.log("价格为空");
      wx.showToast({
        icon: 'none',
        title: '价格为空',
      })
    } else if (name == '' && price == '') {
      console.log("商品名、价格为空");
      wx.showToast({
        icon: 'none',
        title: '商品名、价格为空',
      })
    } else {
      // 满足条件后即可进行  添加操作
      console.log("可以进行操作了");
      wx.cloud.database().collection("goods")
        .add({
          data: {
            name: name,
            price: parseInt(price)
          }
        }).then(res => {
          console.log("添加成功", res);
          this.getList() //调用获取列表方法
        }).catch(res => {
          console.log("添加失败", res);
        })
    }
  },
  // 6.按照商品价格进行排序
  paixu() {
    this.getList(1)
  },
  // 7.按照商品降序排序
  jiangxu() {
    this.getList(-1)
  },
  // 8.返回指定条数数据
  limit(){
    wx.cloud.database().collection("goods")
    .limit(3)
    .get()
    .then(res => {
      console.log("返回成功", res),
      this.setData({
        list:res.data
      })
    }).catch(res => {
      console.log("返回失败", res);
    })
  }
})