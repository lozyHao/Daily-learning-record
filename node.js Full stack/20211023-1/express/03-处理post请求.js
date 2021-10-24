const express = require('express');
const app = express();
const fs = require("fs");
const path = require("path");

// 2、处理/register的get请求
app.get('/register', (req, res) => {
    //读取页面内容，并返回这个页面
    let pathName = path.join(__dirname, 'views', "register.html");
    const regPage = fs.readFileSync(pathName, "utf-8");
    res.send(regPage);
});
// 接收get请求参数
app.get('/index', (req, res) => {
    let ret = req.query   // 获取到一个对象
    console.log(ret);
    res.send(ret.name); //将参数返回到页面

    //可以在请求的时候传入查询参数：
    //http://localhost:3000/index?curPage=3&perPage=10
});

// post请求
app.post('/register',(req,res)=>{
    res.send("post ok!");
})



app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
});