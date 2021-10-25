var express = require('express');
var router = express.Router();


const { addClasses } = require('../service/classesServices')

// 插入班级信息
router.post('/addClasses', async function (req, res, next) {
    let data = await addClasses(req.body);
    res.send(data)
});

module.exports = router;