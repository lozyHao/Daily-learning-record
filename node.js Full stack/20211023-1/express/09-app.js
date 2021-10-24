const express = require('express');
const app = express();

// 1、引入对应的路由模块
const passportRouters = require('./routes/passport');
const indexRouters = require('./routes/index');


var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// 2、将路由注册到app上
app.use(passportRouters)
app.use(indexRouters)


app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
});