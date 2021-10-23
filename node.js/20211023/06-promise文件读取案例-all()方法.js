const fs = require("fs");
const path = require("path");
const util = require('util');
let filePath1 = path.join(__dirname, "files", "1.txt");
let filePath2 = path.join(__dirname, "files", "2.txt");
let filePath3 = path.join(__dirname, "files", "3.txt");
let filePath4 = path.join(__dirname, "files", "data.txt");


let readFilePromise = util.promisify(fs.readFile);
let writeFilePromise = util.promisify(fs.writeFile);

let p1 = readFilePromise(filePath1,"utf-8")
let p2 = readFilePromise(filePath2,"utf-8")
let p3 = readFilePromise(filePath3,"utf-8")
let p4 = writeFilePromise(filePath4,"utf-8")

Promise.all([ p1, p2 ,p3]).then((data) => {
    // data是一个数组，分别是p1和p2最后传来的数据
    console.log(data); // [ '我', '爱' ]
    console.log(data.join(""));  // 我爱
    let str1=data.join("")
    writeFilePromise(filePath4,str1);
}).catch((error) => {
    //只要执行p1,p2时其中一个报错，就会执行这里的代码
    console.log(error);
});