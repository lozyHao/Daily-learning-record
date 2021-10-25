var express = require('express');
var router = express.Router();

// let students = [
//     { _id: 1, name: '张三', age: '20', gender: '男' },
//     { _id: 2, name: '李四', age: '21', gender: '男' },
//     { _id: 3, name: '王五', age: '21', gender: '女' },
// ]

const { getStudents, deleteStudent, addStudents, getStudentById, updateStudents } = require('../service/studentsServices')

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