import count from "./js/count";
import sum from "./js/sum";
// 导入样式文件
import "./css/index.css"
import "./less/index.less"
import "./sass/index.sass"
import "./sass/index.scss"

console.log(count(2, 1));
console.log(sum(1, 2, 3, 4));

// eslint检查，禁止使用var
// var result1 = count(2, 1);
// console.log(result1);
// var result2 = sum(1, 2, 3, 4);
// console.log(result2);