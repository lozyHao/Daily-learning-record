// 导入模块数据
const m1 = require("./modules/m1"); //注意：相对路径

console.log(m1); //{ num: 10, sum: [Function: sum], Animal: [class Animal] }
console.log(m1.num); //10
console.log(m1.sum(10, 30)); //40

let obj=new m1.Animal()
obj.age=50
console.log(obj.age); //50