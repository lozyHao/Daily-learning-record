const express = require('express');
const app = express();
const path = require("path");

// 1、修改模板引擎为html，导入express-art-template
app.engine('html', require('express-art-template'));
// 2、设置运行的模式为生产模式
// production 生产模式，线上模式
// development 开发模式
app.set('view options', {
    debug: process.env.NODE_ENV !== 'production'
});
// 3、设置模板存放目录为views文件夹
app.set('views', path.join(__dirname, 'views'));
// 4、设置引擎后缀为html
app.set('view engine', 'html');


app.get('/', (req, res) => {
    res.render('index') //通过render返回该模板
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
});