// 引入第三层的方法，通过该方法执行出对应结果
const { getStudents } = require('../dao/studentsDao')

module.exports.getStudents = async function () {
    let data = await getStudents();
    console.log(data);
    return {
        message: "学生数据获取成功！",
        status: 1,
        data: data
    }
}
