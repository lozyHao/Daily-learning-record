// token 验证 配置验证规则

const expressJWT = require('express-jwt');

const jwtAuth = expressJWT({
    secret: 'Lzh', //秘钥字符串(生成token时配置的字符秘钥)
    algorithms: [ 'HS256' ], //设置jwt的算法
    credentialsRequired: false, //对于没有 token 的请求是否解析（此处不解析，直接报错）
}).unless({
    path: [ '/users/login', '/users/register', '/users/isAccess' ], //不需要验证token的路径
});

module.exports = jwtAuth;