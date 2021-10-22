// 1.前两种导出方式的导入
// import{name,age} from "./m1.js";
// console.log(name,age);

// Node引擎不支持es6语法规范，就会报错
// 解决方法：
// 1、在项目文件夹下生成生成 package.json 文件 
// yarn init -y 或者  npm init -y
// 2、安装第三方工具:
// 在任意目录下执行，全局安装babel-cli 和 browserify：
// yarn global add babel-cli browserify  或者  npm install babel-cli browserify -g        
// 在自己项目目录下执行：
// yarn add babel-preset-es2015   或者   npm install babel-preset-es2015 --save-dev 
// 3、在项目根目录新建 .babelrc 文件 : 
// {
//   "presets": [
//     "es2015"
//   ]
// }
// 4、在项目目录下书写完代码后，执行:（解析到lib文件中，此时才能够被识别，成功执行）
// babel src -d lib

// 2.第三种方式导出的的导入
import m1 from "./m1"
console.log(m1.name);
console.log(m1.age);