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

// all方法合并同一路径不同请求方式
app.all('/register',(req, res) => {
    let method = req.method
    if(method==='GET'){
        //读取页面内容，并返回这个页面
        let pathName = path.join(__dirname, 'views', "register.html");
        const regPage = fs.readFileSync(pathName, "utf-8");
        res.send(regPage);
    }else if(method==='POST'){
        console.log(req.body.username);
        
        // 一般注册成功之后可以跳转到登录页面，这就是重定向
        res.redirect('/login');    
    }
    
})

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
});