const fs = require('fs');
const path = require('path');
let filePath1 = path.join(__dirname, "files", "1.txt");
let filePath2 = path.join(__dirname, "files", "2.txt");
let filePath3 = path.join(__dirname, "files", "3.txt");
let filePath4 = path.join(__dirname, "files", "data.txt");
// 需求，读取三个文件的拼接好的内容

let p1 = new Promise((resolve, reject) => {
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
let p2 = new Promise((resolve, reject) => {
    fs.readFile(filePath2, 'utf-8', (error, data) => {
        if (error) {
            // 失败执行
            reject(error);
        } else {
            // 成功执行
            resolve(data);
        }
    })
})
let p3 = new Promise((resolve, reject) => {
    fs.readFile(filePath3, 'utf-8', (error, data) => {
        if (error) {
            // 失败执行
            reject(error);
        } else {
            // 成功执行
            resolve(data);
        }
    })
})
let str1="";

p1.then((data) => {
    str1+=data;
    return p2
}, (error) => {
    console.log("读取失败！",error);
}).then((data)=>{
    str1+=data;
    return p3
}).then((data)=>{
    str1+=data;
    console.log(str1);
})