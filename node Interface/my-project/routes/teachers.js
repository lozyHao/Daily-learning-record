var express = require('express');
var router = express.Router();


const { addTeachers, getTeachers } = require('../service/teachersServices')

// 插入教师信息
router.post('/addTeachers', async function (req, res, next) {
    let data = await addTeachers(req.body);
    res.send(data)
});

// 获取教师信息
router.get('/getTeachers', async function (req, res, next) {
    let data = await getTeachers();
    res.send(data)
});


module.exports = router;