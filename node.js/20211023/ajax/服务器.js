const http = require("http");
const fs = require("fs");
const path = require("path");
const port = 8080;
let uname="123456"
let pwd='123456'

function responseEnd(response, fileName) {
    let filePath = path.join(__dirname, "assets", fileName);
    let content = fs.readFileSync(filePath)
    response.end(content)
}

const server = http.createServer((request, response) => {
    let requestUrl = request.url;
    if (requestUrl === "/" || requestUrl === "/index.html") {
        responseEnd(response, 'index.html')
    }
    else if (requestUrl === "/detail.html") {
        responseEnd(response, 'detail.html')
    }
    else if (requestUrl === "/login.html") {
        responseEnd(response, 'login.html')
    }
    else if (requestUrl === "/login_post") {
        // 处理post请求（获取请求参数）
        request.on('data',(postData) => {   // 获取post请求的请求参数
            let {username,password}=JSON.parse(postData.toString())
            if(username==uname&&password==pwd){
                response.end("登陆成功！！！")
            }else{
                response.end("登陆失败！！！")
            }
        });
    }
    else if (requestUrl.startsWith("/get_data")) {
        response.write("这个数据是来自服务器的...");
    }
    else {
        response.end("404 NOt Fround:找不到该页面")
    }
});


server.listen(port, (error) => {
    console.log(error);
    console.log(`server is running at port ${port}`);

});