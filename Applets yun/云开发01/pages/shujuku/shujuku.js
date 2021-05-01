// pages/shujuku/shujuku.js
Page({
  data:{
    list:[],
    good:{}
  },
  onLoad(){
    // console.log('onLode中的this是：',this);
    // 1.传统的固定写法
    // let that=this;
    // wx.cloud.database().collection('goods')
    //   .get({// 查询操作
    //     success(res){//请求成功
    //       // console.log('请求成功',res);
    //       // console.log('传统写法success中的this是：',this);
    //       that.setData({
    //         list:res.data
    //       })
    //     },
    //     fail(err){//请求失败
    //       console.log("请求失败",err);
    //     }
    //   })
      // 2.ES6简洁写法
    wx.cloud.database( ).collection( 'goods' )
      // .where({
      //   name:'橘子'
      // })
      .get()
      .then( res => {
        // console.log('第二种方法请求成功', res.data)
        // console.log('ES6写法then中的this是：',this);
        this.setData({
          list:res.data
        })
      })
      .catch( err => {//请求失败
          console.log( '第二种方法请求失败',err)}) 

      // 使用doc()查询单条信息
      wx.cloud.database().collection('goods')
      .doc('b00064a7606969ce0d351b692791bb50')
      .get().then(res=>{
        console.log("查询单条数据成功",res.data);
        this.setData({
          good:res.data
        })
      }).catch(res=>{
        console.log("查询单条数据失败",err)
      })
      
  }
})