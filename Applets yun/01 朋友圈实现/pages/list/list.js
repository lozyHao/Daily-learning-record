// pages/list/list.js
let that;
Page({
  data: {
    userInfo:null,
    list:[],
    showOperationIndex:-1,//点赞条目索引
    currentCircleIndex:-1,//评论条目索引
    showCommentAdd:false,//评论输入框
    heightBottom:0,//键盘弹起时输入框上升高度
  },
  onLoad: function (options) {
    that=this;
    wx.getStorage({
      key: 'userInfo',
      success(res){
        that.setData({
          userInfo:JSON.parse(res.data)
        })
      }
    })
// 假数据绑定显示朋友圈列表
    for(let i=1;i<10;i++){
      let cDate={};
      cDate.nickName="朋友-"+i;
      cDate.content="朋友圈发布内容-"+i;
      cDate.time="2020-04-0"+i;
      let imageList=[];
      let loveList=[];
      let commentList=[];

      cDate.imageList=imageList;
      cDate.loveList=loveList;
      cDate.commentList=commentList;

      for(let j=1;j<i;j++){
        imageList.push(j);
        let loveDate={};
        loveDate.nickName="点赞-"+j;
        loveList.push(loveDate);

        let commentData={};
        commentData.nickName="兰陵王"+j+": ";
        commentData.content="评论内容-"+j;
        commentList.push(commentData);
      }
      that.data.list.push(cDate);
    }
    that.setData({
      list:that.data.list
    })
    console.log(that.data.list);
  },
  // 点击显示隐藏点赞和评论列表
  showOperationIndex(e){
    console.log("showOperationIndex",e)
    var index=e.currentTarget.dataset.index;
    if(that.data.showOperationIndex==index){
      that.setData({
        showOperationIndex:-1
      })
    }else{
      that.setData({
        showOperationIndex:index
      })
    }
  },
  // 点赞功能实现
  clickLove(e){
     var index=e.currentTarget.dataset.index;
     var cData=that.data.list[index];
     var loveList=cData.loveList;

     var isHaveLove=false;
     for(var i=0;i<loveList.length;i++){
       if(that.data.userInfo.nickName==loveList[i].nickName){
        isHaveLove=true;
        loveList.splice(i,1);
        break;
       }
     }
     if(!isHaveLove){
       loveList.push({nickName:that.data.userInfo.nickName})
     }
     that.setData({
       list:that.data.list,
       showOperationIndex:-1
     })
  },
  // 评论功能实现
  // 点击弹起输入框
  clickComment(e){
    this.setData({
      currentCircleIndex:e.currentTarget.dataset.index,
      showCommentAdd:true,
      showOperationIndex:-1,
    })
  },
  bindInput(e){
    this.setData({
      commentContent:e.detail.value
    })
  },
  bindFocus(e){
    this.setData({
      heightBottom:e.detail.height
    })
  },
  clickSend(e){
    let circleData=this.data.list[that.data.currentCircleIndex];
    let commentList=circleData.commentList;
    let commentData={}
    commentData.nickName=this.data.userInfo.nickName+":";
    commentData.content=this.data.commentContent;
    commentList.push(commentData);
    this.setData({
      list:this.data.list,
      showCommentAdd:false,
      commentContent:''
    })
   },
  //  跳转发布页面
  goPublish(){
    wx.navigateTo({
        url: '/pages/list/publish',
    })
  }
})