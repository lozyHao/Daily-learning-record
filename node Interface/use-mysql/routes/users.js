var express = require('express');
var router = express.Router();
var db = require('../dao/mysql');

// 登录接口
router.get('/getUser', async function (req, res, next) {
  var sql = 'select * from user';
  db.query(sql, function (err, rows, fields) {
    if (err) {
      res.send({
        message:"查询失败！",
        status:1,
      })
    } else {
      res.send({
        message:"查询成功！",
        status:1,
        data:rows
      });
    }
  });
});

module.exports = router;
