const fs = require('fs');
const path = require('path');
const util = require('util');
let filePath1 = path.join(__dirname, "files", "1.txt");
let filePath2 = path.join(__dirname, "files", "2.txt");
let filePath3 = path.join(__dirname, "files", "3.txt");
let filePath4 = path.join(__dirname, "files", "data.txt");
// 需求，读取三个文件的拼接好的内容

let readFilePromise = util.promisify(fs.readFile); // 返回一个promise对象
let writeFilePromise = util.promisify(fs.writeFile);

let str1 = "";

readFilePromise(filePath1).then((data)=>{
    str1+=data;
    return readFilePromise(filePath2)
},(error1)=>{
    console.log("读取文件1失败", error1);
    return error1
}).then((data)=>{
    str1+=data;
    return readFilePromise(filePath3);
}).then((data)=>{
    str1+=data;
    console.log(str1);
    writeFilePromise(filePath4, str1);
});