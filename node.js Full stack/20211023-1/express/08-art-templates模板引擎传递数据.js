const express = require('express');
const app = express();
const path = require("path");

app.engine('html', require('express-art-template'));
app.set('view options', {
    debug: process.env.NODE_ENV !== 'production'
});
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.get('/', (req, res) => {
    let data = {
        user:{
            id:1,
            name: "Jack",
            age:18,
            job: "coder"
        },
        books:["《西游记》", "《三国演义》","《红楼梦》", "《水浒传》"],
        num1:20,
        num2:30
    }
    console.log(data);
    res.render('index', data);   // 把data数据传入到index.html页面中。
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
});