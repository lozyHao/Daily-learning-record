// 拿到模型对象
const { studentsModel } = require('./models/studentsmodel')

// 获取学生列表/查询部分/模糊查询
module.exports.getStudents = async (params) => {
    // 精确查找
    // return await studentsModel.find(params);
    // 模糊查找：方式一
    // return await studentsModel.find({
    //     // 正则表达式，$regex包含，$options: '$i' 忽略大小写
    //     [ params.searchType ]: { $regex: params.searchValue, $options: '$i' }
    // })
    //     // 1.关联单个数据表--关联班级数据表
    //     // .populate('classId');
    //     // 2.嵌套关联多个数据表——学生关联班级表，班级表关联教师表
    //     .populate({
    //         path: 'classId',
    //         populate: {
    //             path: 'teachersId'
    //         }
    //     })
    // 3.关联多个数据表——学生表关联班级表，学生表关联教师表
    // .populate('classId').populate('teachersId')

    // 分页
    let students = await studentsModel.find({
        [ params.searchType ]: { $regex: params.searchValue, $options: '$i' }
    }).populate({
        path: 'classId',
        populate: {
            path: 'teachersId'
        }
    }).limit(params.pageSize - 0) //设置请求数据条数
        .skip((params.currentPage - 1) * params.pageSize)  //跳过数据的条数

    // 获取总条数
    let totle = await studentsModel.find({
        [ params.searchType ]: { $regex: params.searchValue, $options: '$i' }
    }).populate({
        path: 'classId',
        populate: {
            path: 'teachersId'
        }
    }).countDocuments();

    // 计算总页数
    let pages = Math.ceil(totle / params.pageSize);
    return {
        totle, pages, students
    }
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