const { addClasses } = require('../dao/classesDao')

// 获取学生数据/查询部分
module.exports.addClasses = async classes => {
    try {
        let data = await addClasses(classes);
        return {
            message: "插入班级信息成功！",
            status: 1,
            data: data
        }
    } catch {
        return {
            message: "插入班级信息失败！",
            status: 0,
        }
    }
}