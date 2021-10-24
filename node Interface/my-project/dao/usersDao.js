// 拿到模型对象
const { usersModel } = require('./models/usersmodel')

module.exports.login = async function (user) {
    let result = await usersModel.find(user);
    return result;
}

module.exports.isAccess = async function (username) {
    let result = await usersModel.find({ username });
    console.log(result);
    return result;
}

module.exports.register = async function (user) {
    let result = await usersModel.create(user);
    console.log(result);
    return result;

}