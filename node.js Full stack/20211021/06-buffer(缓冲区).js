// 不用引入，可以直接使用
let buf1 = Buffer.from([97, 98, 99]);  //根据一个数组创建 Buffer 对象
console.log(buf1);  // <Buffer 61 62 63> 以16进制存在buffer对象中
console.log(buf1.toString()); // abc

let buf2 = Buffer.from("nodejs");   //根据一个字符串创建 Buffer 对象
console.log(buf2); // <Buffer 6e 6f 64 65 6a 73>
console.log(buf2.toString()); // nodejs

let buf3 = Buffer.alloc(10);   // 创建了可以存放10个字符的buffer对象
buf3.write("abc");  //按照ASCII表的值，转16进制，存在buffer中
console.log(buf3); // <Buffer 61 62 63 00 00 00 00 00 00 00>
console.log(buf3.toString()); //abc