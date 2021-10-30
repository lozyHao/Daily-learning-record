var express = require('express');
var router = express.Router();

const { getStudents, deleteStudent, addStudents, getStudentById, updateStudents } = require('../service/studentsServices')
//导入上传图片的插件封装的方法
const { moveFiles, removeFiles } = require('../utils/handleFiles')

// 获取学生信息接口/查询部分
router.get('/getStudents', async function (req, res, next) {
    let data = await getStudents(req.query);
    res.send(data)
});

// 删除学生接口
router.post('/deleteStudent', async function (req, res, next) {
    let data = await deleteStudent(req.body);
    res.send(data);
});

// 添加学生信息
router.post('/addStudents', async function (req, res) {
    let data = await addStudents(req.body);
    //用户点击确认添加
    if (data.status && req.body.imagesName) {
        // 用户确认后再移动图片从临时文件夹temp --> imgs
        moveFiles({
            fromPath: './public/temp/',
            toPath: "./public/imgs/",
            filename: req.body.imagesName,
        });
        // 再清空临时文件夹中的图片
        removeFiles("./public/temp")
    }
    res.send(data);
});

// 通过id获取要修改学生的信息
router.get('/getStudentById', async function (req, res) {
    let data = await getStudentById(req.query);
    res.send(data);
});

// 修改学生的信息
router.post('/updateStudents', async function (req, res) {
    let data = await updateStudents(req.body);
    res.send(data);
});

module.exports = router;