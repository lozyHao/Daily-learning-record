var express = require('express');
var router = express.Router();

let students = [
    { _id: 1, name: '张三', age: '20', gender: '男' },
    { _id: 2, name: '李四', age: '21', gender: '男' },
    { _id: 3, name: '王五', age: '21', gender: '女' },
]

const { getStudents } = require('../service/studentsServices')

// 获取学生信息接口
router.get('/getStudents', async function (req, res, next) {
    let data = await getStudents();
    res.send(data)
});

// 删除学生接口
router.post('/deleteStudent', function (req, res, next) {
    students = students.filter(function (item, index) {
        return req.body._id != item._id
    })
    res.send(
        {
            message: '该数据删除成功',
            status: 1,
            data: students
        }
    );
});

module.exports = router;