const express = require('express');
const app = express();
const fs = require("fs");
const path = require("path");
// 1.引入body-parser(获取post请求参数)
const bodyParser = require('body-parser')

// 2、bodyParser功能添加到项目app中
// parse application/x-www-form-urlencoded   针对普通页面提交功能
app.use(bodyParser.urlencoded({ extended: false }))  //false接收的值为字符串或者数组，true则为任意类型
app.use(bodyParser.json())   // 解析json格式

// 处理/register的get请求
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
    res.send(ret.username); //将参数返回到页面
    //可以在请求的时候传入查询参数：
    //http://localhost:3000/index?curPage=3&perPage=10
});
// 添加登录页面的接口
app.get('/login', (req, res) => {
    //读取页面内容，并返回这个页面
    let pathName = path.join(__dirname, 'views', "login.html");
    const loginPage = fs.readFileSync(pathName, "utf-8");
    res.send(loginPage);
});
// post请求
// app.post('/register',(req,res)=>{
//     res.send("post ok!");
// })

// 3、在接口中获取请求参数 req.body
app.post('/register', (req, res) => {
    console.log(req.body.username);
    res.redirect('/login');   // 重定向到'/login'接口，对应的接口函数会执行
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
});