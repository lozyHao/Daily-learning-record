const { addTeachers, getTeachers } = require('../dao/teachersDao')

// 增加班级信息
module.exports.addTeachers = async teacher => {
    try {
        let data = await addTeachers(teacher);
        return {
            message: "增加教师信息成功！",
            status: 1,
            data: data
        }
    } catch {
        return {
            message: "增加教师信息失败！",
            status: 0,
        }
    }
}

// 获取班级信息
module.exports.getTeachers = async () => {
    try {
        let data = await getTeachers();
        return {
            message: "获取教师信息成功！",
            status: 1,
            data: data
        }
    } catch {
        return {
            message: "获取教师信息失败！",
            status: 0,
        }
    }
}