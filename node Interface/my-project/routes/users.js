var express = require('express');
var router = express.Router();

// 引入第一层的方法，通过该方法，将所在第一层的数据通过这个方法传到第二层
const { login, isAccess, register } = require('../service/usersServices');

// 引入md5加密模块
const { getMd5 } = require('../utils/crypto');

// 引入bcryptjs加密模块--需要下载
const { bcrypt } = require('bcryptjs');

// 引入jwt 身份验证模块
const jwt = require('jsonwebtoken');

// 登录接口
router.post('/login', async function (req, res, next) {
  // 获取前端发送的数据
  let { username, password } = req.body;
  // md5加密后的存储，获取验证（再次加密验证）
  let newPassword = getMd5(password);
  let data = await login({ username, password: newPassword });
  // 生成token
  let token = jwt.sign(
    { username }, //保存的用户信息
    'Lzh', //秘钥字符串(随意)
    { expiresIn: '15h' } //令牌有效期(默认单位为s，或者'1h')
  );
  res.send({
    message: "登陆成功",
    status: 1,
    token
  });
});

// 注册接口
router.post('/register', async function (req, res, next) {
  let { username, password } = req.body;
  // md5加密存储
  let newPassword = getMd5(password);
  let data = await register({ username, password: newPassword });
  res.send(data);
});

// 验证账号是否存在
router.post('/isAccess', async function (req, res, next) {
  const { username } = req.body;
  let data = await isAccess(username);
  res.send(data);
})

// 验证是否登录（登录后就拿到用户名）
router.get('/isLogin', async function (req, res, next) {
  // 拿到本地token
  let headersToken = req.get('Authorization');
  let token = headersToken.split(' ')[ 1 ];
  // 解码
  let decode = jwt.verify(token, 'Lzh');
  // console.log("用户名：" + decode.username);
  res.send({
    message: '身份认证通过',
    status: 1,
    data: decode.username
  })
})


module.exports = router;
