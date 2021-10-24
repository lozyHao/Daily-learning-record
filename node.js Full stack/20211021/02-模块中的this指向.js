// 模块中的this指向
let a=10;
exports.a=a;

// 或者(了解)
// module.exports={
//     a
// }
// exports=module.exports

console.log(exports); //{a:10}
console.log(module.exports); //{a:10}
console.log(exports==module.exports); //true
console.log(this); //{a:10}
console.log(exports==this); //true

// exports是module.exports的引用，文件中才有exports，交互模式下没有exports。
// 在文件中，this指向这个模块导出的这个对象。
// 在交互模式下(比如控制台)，this指向的是全局变量global(this==global)。