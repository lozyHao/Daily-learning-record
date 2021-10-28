// 数据加密
// 引入加密模块
const crypto = require('crypto'); //node.js 内置模块，不用下载
const md5 = require('md5-node');

/**
 * @md5加密模块 (加密固定不可逆)
 * @param str string 加密字符串
 * @param secret string 要使用的加密秘钥
 * @return string 加密后的字符串 
 */
module.exports.getMd5 = function (str, secret = '9vApxlk5G3PAsJrW') {
    // return crypto.createHash(" md5 ").update(str + secret).digest(" hex "); //报错 this[kHandle] = new _Hash(algorithm, xofLen);
    return (md5(str));
}
/**
 * @aes128 加密模块
 * @param str string要加密的字符串
 * @param secret string要使用的加密密钥(要记住, 不然就解不了密啦)
 * @retrun string加密后的字符串
*/
module.exports.getEncAse128 = function (str, secret = '9vApxLk5G3PAsJrW', iv = 'FnJL7EDzjqNjcav9') {
    const cipheriv = crypto.createCipheriv(' aes-128-cbc ', secret, iv);
    var enc = cipheriv.update(str, "utf8", "hex");//编码方式从utf-8转为hex;
    enc += cipheriv.final("hex");//编码方式从转为hex;
    return enc;//返回加密后的字符串
}
/**
 * @aes128 解密模块
 * @param str string要解密的字符串
 * @param secret string 要使用的解密密钥(要和密码的加密密钥对应,不然就解不了密啦)
 * @retrun string解密后的字符串
 */
module.exports.getDecAse128 = function (str, secret = '9vApxLk5G3PAsJrW', iv = 'FnJL7EDzjqwjcav9') {
    var decipheriv = crypto.createDecipheriv("aes-128-cbc", secret, iv);
    var dec = decipheriv.update(str, "hex", "utf8");//编码方式从hex转为utf-8;
    dec += decipheriv.final("utf8");//编码方式从utf-8;
    return dec;
}
/** 
 * @Hmac-sha1 加密模块〈每次加密随机,不可逆)
 * @param str string要加密的字符串
 * @param secret string要使用的加密密钥
 * @retrun string加密后的字符串
 */
module.exports.getHmac = function (str, secret = "9vApxLk5G3PAsJrw") {
    var buf = crypto.randomBytes(16);
    secret = buf.toString("hex");//密钥加密;
    var Signture = crypto.createHmac("sha1", secret);//定义加密方式
    Signture.update(str);
    var miwen = Signture.digest().toString("base64");//生成的密文后将再次作为明文再通过pbkdf2算法迭代加密;
    return miwen;
}

/** 
 * @sha1 加密模块(加密固定,不可逆)
 * @param str string要加密的字符串
 * @retrun string加密后的字符串
 */
module.exports.getSha1 = function (str) {
    var sha1 = crypto.createHash("sha1");//定义加密方式:md5不可逆,此处的md5可以换成任意hash加密的方法名称,
    sha1.update(str);
    var res = sha1.digest("hex"); // 加密后的值d
    return res;
}