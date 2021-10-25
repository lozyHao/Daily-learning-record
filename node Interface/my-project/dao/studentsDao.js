// 拿到模型对象
const { studentsModel } = require('./models/studentsmodel')

// 获取学生列表/查询部分/模糊查询
module.exports.getStudents = async (params) => {
    // 精确查找
    // return await studentsModel.find(params);
    // 模糊查找：方式一
    return await studentsModel.find({
        // 正则表达式，$regex包含，$options: '$i' 忽略大小写
        [ params.searchType ]: { $regex: params.searchValue, $options: '$i' }
    });
}

// 删除学生信息
module.exports.deleteStudent = async ({ _id }) => {
    return await studentsModel.findByIdAndDelete(_id);
}

// 新增学生信息
module.exports.addStudents = async student => {
    return await studentsModel.create(student);
}

// 通过id获取要修改学生的信息
module.exports.getStudentById = async ({ _id }) => {
    return await studentsModel.findById(_id);
}

// 修改学生信息
module.exports.updateStudents = async ({ _id, name, age, gender }) => {
    return await studentsModel.findByIdAndUpdate(_id, { name, age, gender });
}