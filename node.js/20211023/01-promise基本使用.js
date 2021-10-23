const fs = require('fs');
const path = require('path');

let filePath1 = path.join(__dirname, "files", "1.txt");
// fs.readFile(filePath1,'utf-8',(error,data)=>{
//     if(error){
//         console.log(error);
//         return;
//     }else{
//         console.log(data);
//     }
// })

// 创建promise对象
// 异步操作可能成功或者失败
// 第一个形参resolve，成功的时候执行的函数
// 第二个形参reject，失败的时候执行的函数
let p1 = new Promise((resolve, reject) => {
    // 同步代码
    // console.log('123456');
    // 异步代码
    fs.readFile(filePath1, 'utf-8', (error, data) => {
        if (error) {
            // 失败执行
            reject(error);
        } else {
            // 成功执行
            resolve(data);
        }
    })
})

p1.then((data) => {
    console.log("你成功了！");
    console.log(data);
    // return "成功"
    return p1
}, (error) => {
    console.log("你失败了！");
    console.log(error);
    return "失败"
}).then((data)=>{
    // 1.then的链式调用，不管成功还是失败都会调用
    // 2.then的函数里面可以有返回值，被下一个then的形参接收
    // 3、如果返回的是一个promise对象，下一个then的形参接收到的不是这个promise对象，而是这个promise对象内部调用resolve时候的实际参数
    console.log("执行完的第二个then",data); // 成功 /（第一个then返回p1，则接收到）我
})