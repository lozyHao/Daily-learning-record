const fs = require('fs');
const path = require('path');
let filePath1 = path.join(__dirname, "files", "1.txt");
let filePath2 = path.join(__dirname, "files", "2.txt");
let filePath3 = path.join(__dirname, "files", "3.txt");
let filePath4 = path.join(__dirname, "files", "data.txt");
// 需求，读取三个文件的拼接好的内容

// 函数封装
function readFilePromise(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf-8', (error, data) => {
            if (error) {
                // 失败执行
                reject(error);
            } else {
                // 成功执行
                resolve(data);
            }
        })
    })
}

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
});