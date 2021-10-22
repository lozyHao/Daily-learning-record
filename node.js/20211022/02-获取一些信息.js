const http = require("http");
const url = require("url");

const port = 8080;

const server = http.createServer((request, response)=>{
    // 请求一次，就会执行一次
    let reqUrl=request.url; //获取请求路径
    // console.log(reqUrl); //index.html?name=nodejs&age=11

    let method = request.method; // 获取本次请求的方式
    console.log(reqUrl,method); ///index.html?name=nodejs&age=11 GET

    let obj = url.parse( reqUrl, true); // 获取get请求的查询字符串    
    console.log(obj.query); // { name: 'nodejs', age: '11' }
    //  localhost:8080?name=nodejs&age=11   get请求

    //当存在 post 提交数据 data 事件立马执行，postData就是提交过来的数据对象
    request.on('data',(postData) => {   // 获取post请求的请求参数
        console.log(postData.toString());
    });

    response.write("hello nodejs456");
    response.end( )
});

server.listen(port,(error)=>{
    console.log(error);
    console.log(`server is running at port ${port}`);
});