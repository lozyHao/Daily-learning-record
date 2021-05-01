function sum(a, b) {
    return a + b;
};
let c = 456;
export { sum, c }//定义一个接口（抛出去）(写法：必须使用花括号{})
// 错误写法：
// // 报错
// export 1;
// // 报错
// var m = 1;
// export m;

// 正确写法：
// // 写法一
// export var m = 1;
// // 写法二
// var m = 1;
// export { m };
// // 写法三
// var n = 1;
// export { n as m };