var express = require('express');
var router = express.Router();

// 创建账户模拟数据库
let users = [
  { username: "123", password: '123456' },
  { username: "456", password: '123456' }
]

// 引入第一层的方法，通过该方法，将所在第一层的数据通过这个方法传到第二层
const { login, isAccess, register } = require('../service/usersServices')

// 登录接口
router.post('/login', async function (req, res, next) {
  // 获取前端发送的数据
  let user = req.body;
  let data = await login(user);
  res.send(data);
});

// 注册接口
router.post('/register', async function (req, res, next) {
  let user = req.body;
  let data = await register(user);
  res.send(data);
});

// 验证账号是否存在
router.post('/isAccess', async function (req, res, next) {
  const { username } = req.body;
  let data = await isAccess(username);
  res.send(data);
})


module.exports = router;
