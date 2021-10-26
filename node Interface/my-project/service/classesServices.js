const { addClasses, getClasses } = require('../dao/classesDao')

// 增加班级信息
module.exports.addClasses = async classes => {
    try {
        let data = await addClasses(classes);
        return {
            message: "增加班级信息成功！",
            status: 1,
            data: data
        }
    } catch {
        return {
            message: "增加班级信息失败！",
            status: 0,
        }
    }
}

// 获取班级信息
module.exports.getClasses = async () => {
    try {
        let data = await getClasses();
        return {
            message: "获取班级信息成功！",
            status: 1,
            data: data
        }
    } catch {
        return {
            message: "获取班级信息失败！",
            status: 0,
        }
    }
}