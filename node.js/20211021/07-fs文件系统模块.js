const fs = require("fs");
const path = require("path");
let pathName = path.join(__dirname, 'hello.txt');

// 1.同步读取文件 readFileSync（路径文件，编码格式（不传为buffer））
// const content0 = fs.readFileSync(pathName);
// console.log(content0); //是buffer对象 <Buffer 61 62 63 64 65 66 67 2c 68 69 6a 6b 6c 6d 6e 0d 0a 6f 70 71 72 73 74>
// console.log(content0.toString());
const content = fs.readFileSync(pathName, "utf-8");
console.log("同步读取：" + content);

// 2.异步读取文件 readFile（路径文件，编码格式（不传为buffer），回调函数）
fs.readFile(pathName, function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log("异步读取: " + data.toString());
});

// 3.异步写入文件（会覆盖） writeFile（路径文件，内容，编码格式（不传为buffer），回调函数）
fs.writeFile(pathName, "你好呀！！！", "utf-8", (error, data) => {
    if (error) {
        console.log("error");
        return;
    } else {
        console.log('写完了！');
    }
});