// 引入第三层的方法，通过该方法执行出对应结果
const { getStudents, deleteStudent, addStudents, getStudentById, updateStudents } = require('../dao/studentsDao')

// 获取学生数据/查询部分
module.exports.getStudents = async (params) => {
    try {
        let data = await getStudents(params);
        return {
            message: "学生数据获取成功！",
            status: 1,
            data: data
        }
    } catch {
        return {
            message: "学生数据获取失败！",
            status: 0,
        }
    }
}

// 删除学生数据
module.exports.deleteStudent = async _id => {
    let data = await deleteStudent(_id);
    if (data) {
        return {
            message: "删除数据获取成功！",
            status: 1,
        }
    } else {
        return {
            message: "删除数据获取失败！",
            status: 0,
        }
    }
}

// 新增学生信息
module.exports.addStudents = async student => {
    let data = await addStudents(student);
    if (data._id) {
        return {
            message: "新增学生成功！",
            status: 1
        }
    } else {
        return {
            message: "新增学生失败！",
            status: 0
        }
    }
}

// 通过id获取要修改学生的信息
module.exports.getStudentById = async _id => {
    let data = await getStudentById(_id);
    if (data._id) {
        return {
            message: "获取学生成功！",
            status: 1,
            data: data
        }
    } else {
        return {
            message: "修改学生失败！",
            status: 0
        }
    }
}

// 修改学生的信息
module.exports.updateStudents = async student => {
    let data = await updateStudents(student);
    if (data._id) {
        return {
            message: "修改学生成功！",
            status: 1,
            data: data
        }
    } else {
        return {
            message: "修改学生失败！",
            status: 0
        }
    }
}