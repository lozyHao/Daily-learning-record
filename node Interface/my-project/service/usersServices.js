// 引入第三层的方法，通过该方法执行出对应结果
const { login, isAccess, register } = require('../dao/usersDao')

module.exports.login = async function (user) {
    let data = await login(user);
    if (data.length > 0) {
        return {
            message: "登陆成功",
            status: 1,
            data: data
        }
    } else {
        return {
            message: "登陆失败",
            status: 0
        }
    }
}

// 验证账号是否存在
module.exports.isAccess = async function (username) {
    let data = await isAccess(username);
    if (data.length > 0) {
        return {
            message: "账号已存在",
            status: 0,
        }
    } else {
        return {
            message: "账号不可使用",
            status: 1
        }
    }
}

// 注册方法接口
module.exports.register = async function (user) {
    let data = await register(user);
    if (data._id) {
        return {
            message: "注册成功",
            status: 0,
        }
    } else {
        return {
            message: "注册失败",
            status: 1
        }
    }
}