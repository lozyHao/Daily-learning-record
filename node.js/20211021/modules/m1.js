// 模块一：在模块中，以下内容都是私有的，所以需要导出，再在其他文件中使用

// 1.变量
var num=10;
// 2.函数
function sum(a,b){
    return a+b;
}
// 3.类
class Animal{
    constructor(){
        this.age=10;
    }
}

// 方式一：

// 导出以上内容
// 1.导出变量
exports.num=num;
// 2.导出函数
exports.sum=sum;
// 3.导出对象/类
exports.Animal=Animal;

// 方式二：Es6语法，集中导出
module.exports={
    num,sum,Animal
}