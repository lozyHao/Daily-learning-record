// 1、导入http模块
const http = require("http");

// 2、定义服务器程序端口
const port = 8080;// 端口号：1-65535 (有些服务已经有一些默认端口 apache nginx 80 web 服务。 MySQL：3306 MongoDB：27017)
// 注意：一个端口只能被一个服务进行使用，如果这个端口被某个服务使用，其他的服务不能在使用该端口的。这个时候出现端口冲突。如何解决？答：换个端口
// 建议：1-1024 端口（有些系统服务会使用这个范围的端口），不建议程序员自己使用。一般都使用 1024 以后的端口。

// 3、创建服务器对象(request 请求对象, response 响应对象)
const server = http.createServer((request, response)=>{
    response.setHeader("Content-type","text/html;charset=utf-8");//设置编码格式，中文不乱码
    response.write("hello nodejs");  // 书写响应体内容
    response.end("响应结束")   // 发生响应到浏览器  当我们修改代码后，需要重新执行该文件，重启服务
});

// 4、调用服务器的监听方法，让服务器监听浏览器请求
server.listen(port,(error)=>{
    console.log(error);
    console.log(`server is running at port ${port}`);
});

// 报错 address already in use :::8080  端口被占用