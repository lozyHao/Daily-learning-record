var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/getMovies', function (req, res, next) {
    // 1.接收前端发送的数据
    // 1.1 获取get请求数据
    console.log(req.query); //{ name: '复仇者联盟' }

    // 将后端处理的结果响应给前端
    res.send(
        {
            message: '请求成功',
            status: 1,
            data: [ {
                name: 'XXX'
            } ],
        }
    );
});

module.exports = router;