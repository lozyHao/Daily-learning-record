// 连接数据库MongoDB
const mongoose=require('mongoose');
const dbUrl='mongodb://127.0.0.1:27017/Student'; //项目数据库地址
mongoose.connect(dbUrl,{ useNewUrlParser: true, useUnifiedTopology: true,});
// 项目和数据库连接上是触发事件
mongoose.connection.on("connected",function(){
  console.log(dbUrl+' 数据库连接成功！');
})