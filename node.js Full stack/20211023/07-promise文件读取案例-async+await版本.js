const fs = require("fs");
const path = require("path");
const util = require("util");

let filePath1 = path.join(__dirname, "files", "1.txt");
let filePath2 = path.join(__dirname, "files", "2.txt");
let filePath3 = path.join(__dirname, "files", "3.txt");
let filePath4 = path.join(__dirname, "files", "data.txt");

let readFile = util.promisify(fs.readFile);
let writeFile = util.promisify(fs.writeFile);

async function func() {
    let data1 = await readFile(filePath1, "utf-8");
    let data2 = await readFile(filePath2, "utf-8");
    let data3 = await readFile(filePath3, "utf-8");

    console.log(data1+data2+data3);
    writeFile(filePath4, data1+data2+data3)
}

func();