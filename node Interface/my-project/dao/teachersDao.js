// 拿到模型对象
const { teachersModel } = require('./models/teachersModel')

// 获取教师信息
module.exports.getTeachers = async () => {
    return await teachersModel.find();
}

// 新增教师信息
module.exports.addTeachers = async teacher => {
    return await teachersModel.create(teacher);
}