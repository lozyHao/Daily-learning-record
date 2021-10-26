var express = require('express');
var router = express.Router();


const { addClasses, getClasses, } = require('../service/classesServices')

// 插入班级信息
router.post('/addClasses', async function (req, res, next) {
    let data = await addClasses(req.body);
    res.send(data)
});

// 获取班级信息
router.get('/getClasses', async function (req, res, next) {
    let data = await getClasses();
    res.send(data)
});


module.exports = router;