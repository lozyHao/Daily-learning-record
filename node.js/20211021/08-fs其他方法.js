const fs = require("fs");
let nameList = fs.readdirSync(__dirname);
let str1 = "[day03]";

// 把当前文件夹的js文件的名字都添加前缀  [day03]
// nameList.forEach(currFileName => {
//     if (currFileName.endsWith(".js")) {
//         // 重命名renameSync(旧名称，新名称)
//         fs.renameSync(currFileName, `[day03]${currFileName}`)
//     }
// });

// 把当前文件夹的名字都删除前缀 [day03]
nameList.forEach(currFileName => {
    if (currFileName.startsWith(str1)) {
        fs.renameSync(currFileName, currFileName.substring(str1.length))
    }
});