// 拿到模型对象
const { studentsModel } = require('./models/studentsmodel')

module.exports.getStudents = async function () {
    return await studentsModel.find();
}