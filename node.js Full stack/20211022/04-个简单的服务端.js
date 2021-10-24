const http = require("http");
const fs = require("fs");
const path = require("path");
const port = 8080;

const server = http.createServer((request, response) => {
    let requestUrl = request.url;
    console.log(requestUrl);
    if (requestUrl === "/" || requestUrl === "/index.html") {
        let content = fs.readFileSync(path.join(__dirname, "assets", "index.html"));
        response.end(content)
    } else if (requestUrl === "/detail.html") {
        let content = fs.readFileSync(path.join(__dirname, "assets", "detail.html"));
        response.end(content)
    } else {
        response.end("404 NOt Fround:找不到该页面")
    }
});


server.listen(port, (error) => {
    console.log(error);
    console.log(`server is running at port ${port}`);

});