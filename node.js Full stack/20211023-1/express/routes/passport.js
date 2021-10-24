// 抽取路由
const express = require('express');
const router = express.Router();
const fs = require("fs");
const path = require("path");

router.get('/login', (req, res) => {
    //读取页面内容，并返回这个页面
    let pathName = path.join(__dirname, '../views', "login.html");
    const loginPage = fs.readFileSync(pathName, "utf-8");
    res.send(loginPage);
});

router.all('/register',(req, res) => {
    let method = req.method
    if(method==='GET'){
        //读取页面内容，并返回这个页面
        let pathName = path.join(__dirname, '../views', "register.html");
        const regPage = fs.readFileSync(pathName, "utf-8");
        res.send(regPage);
    }else if(method==='POST'){
        console.log(req.body.username);
        
        // 一般注册成功之后可以跳转到登录页面，这就是重定向
        res.redirect('/login');    
    }
    
})

module.exports = router;