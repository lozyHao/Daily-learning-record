// 1.如果await后面只写一个基本数据类型，会这个基本数据类型进行包装，包装成一个 Promise 对象
// async function func(){
//     let data1=await 123;
//     console.log("data1:"+data1); //data1:123
//     return data1;
// }
// let a=func();
// console.log("a:"+a); //a:[object Promise]
// a.then((data)=>{
//     console.log("data:"+data); //data:123
// })