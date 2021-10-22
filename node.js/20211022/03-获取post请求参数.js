const http = require("http");
const url = require("url");
const port = 8080;

const server = http.createServer((request, response)=>{
    //当存在 post 提交数据 data 事件立马执行，postData就是提交过来的数据对象
    request.on('data',(postData) => {   // 获取post请求的请求参数
        console.log(postData.toString()); //username=1911030124&password=15645646
    });

    response.write("hello nodejs");
    response.end( )
});

server.listen(port,(error)=>{
    console.log(error);
    console.log(`server is running at port ${port}`);
});