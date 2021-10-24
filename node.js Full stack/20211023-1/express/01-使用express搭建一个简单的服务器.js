// 1、引入express模块并创建express对象
const express = require('express');
const app = express();

// 2、书写处理请求的方法，来响应请求
app.get('/', (req, res) => {
    // 这里的代码在浏览器以get请求/的时候执行，  
    // 这个函数就是用来处理浏览器的 对于/的get请求 的
    // 第一个参数req是请求头对象，里面包含请求头信息
    // 第二个参数res用来做响应
    console.log(req);
    
    res.send('Hello World!111');
});
// 3、监听端口
app.listen(3000, () => {
    //这里的代码服务器刚启动的时候执行1次
    console.log('Example app listening on port 3000!')
});