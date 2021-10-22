// md5 加密
const md5 = require('./npm/node_modules/md5/md5');
// 整数转大写
const Nzh = require("./npm/node_modules/nzh/nzh");
const nzhcn = require("./npm/node_modules/nzh/cn"); //直接使用简体中文
const nzhhk = require("./npm/node_modules/nzh/hk"); //繁体中文
        
console.log(md5("12345789")); //192c3425f0a3a4cca70e96149b5f3ff9

console.log(nzhcn.encodeB(100111)); // 转中文大写 >> 壹拾万零壹佰壹拾壹
console.log(nzhcn.encodeS("1.23456789e+21")); // 科学记数法字符串 >> 十二万三千四百五十六万万七千八百九十万亿
console.log(nzhcn.toMoney("100111.11")); // 转中文金额 >> 人民币壹拾万零壹佰壹拾壹元壹角壹分