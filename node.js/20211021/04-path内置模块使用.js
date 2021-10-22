const path = require('path'); //路径操作

// __dirname：获取到当前文件所在文件夹的绝对路径
// __filename：获取到当前文件所在的绝对路径
console.log(__dirname); //f:\GitHub\Daily-learning-record\node.js\20211021
console.log(__filename); //f:\GitHub\Daily-learning-record\node.js\20211021\04-path内置模块使用.js


// 1.获取文件的后缀名
let extname=path.extname(__filename); // .js
// 2.获取文件名（包含后缀名）
let basename=path.basename(__filename); // 04-path内置模块使用.js
// 3.获取文件当前所在路径
let dirname=path.dirname(__filename); // f:\GitHub\Daily-learning-record\node.js\20211021
// 4.把路径解析成一个对象（所在盘符、路径、文件后缀名）
let parseObj=path.parse(__filename); 
    // {
    //  root: 'f:\\',
    //  dir: 'f:\\GitHub\\Daily-learning-record\\node.js\\20211021',
    //  base: '04-path内置模块使用.js',
    //  ext: '.js',
    //  name: '04-path内置模块使用'
    // }
  
// 5.拼接操作(一层目录就是其中的一个参数)*
let fullpath=path.join(__dirname,'04-path内置模块使用.js'); //f:\GitHub\Daily-learning-record\node.js\20211021\04-path内置模块使用.js
let fullpath1=path.join(__dirname,'modules','m1.js'); //f:\GitHub\Daily-learning-record\node.js\20211021\modules\m1.js
console.log(fullpath1);