"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 1.第一种导出方式
// export let name = "nodejs";
// export let age = 11;

// 2.第二种导出方式
var name = "nodejs";
var age = 11;

exports.name = name;
exports.age = age;

// 3.第三种导出方式
// 默认导出只能写一次
// let name = "nodejs";
// let age = 11;
// export default {name, age}