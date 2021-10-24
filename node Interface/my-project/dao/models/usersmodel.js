// 数据库集合的相关配置
// 1.定义数据结构，定义出集合中数据的属性和值类型
const { Schema, model } = require('mongoose');

let usersSchema = new Schema({
  username: String,
  password: String
});

// 2.定义书据集合的模型，将schema和数据库中的集合关联起来
// model("模型名称",schema名称,"数据库中的集合名称")
let usersModel = model('usersModel', usersSchema, 'users')

module.exports.usersModel = usersModel;