const fs = require('fs');
const path = require('path');

let filePath1 = path.join(__dirname, "files", "1.txt");

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

p1.then((data) => {
    console.log("你成功了！", data);
}).catch((error) => {
    console.log("你失败了！", error);
}).finally(() => {
    console.log("承诺成功与失败都会执行这里的代码");
});