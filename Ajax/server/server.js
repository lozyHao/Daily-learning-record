// 导入文件系统模块
let fs = require("fs")
// 01.导入express模块
const express = require('express')
// 02.返回一个express对象
const app = express()

app.use(express.json())
// 通过express.urlencoded()这个中间件，来解析表单中的url-encoded格式的数据
app.use(express.urlencoded({ extended: false }))

// 03.监听一个端口
app.listen(8848, () => {
    console.log(`端口号:8848服务已开启...`)
})

// 1.添加一个get请求
// request是请求对象；response是响应对象
app.get('/getCitys', (request, response) => {
    // 注意：设置允许跨域访问
    response.setHeader("Access-control-Allow-Origin", "*")
    // response.send("helloworld")
    // 读取一个json文件
    let str = fs.readFileSync("../data/city.json").toString()
    // 将数据发送出去
    response.send(str)
})

// 2.get请求方式（用于返回指定省份的城市信息）
app.get("/getProvincecitys", (request, response) => {
    // 设置允许跨域访问
    response.setHeader("Access-control-Allow-Origin", "*")
    // 获取GET请求方式传递的参数
    let params = request.query
    // 读取一个json文件
    let str = fs.readFileSync("../data/city.json").toString()
    // 筛选数据
    let arr = JSON.parse(str).filter(r => r.pid == params.pid)
    response.send(arr)
})

// 3.post请求方式(用于添加城市)
app.post("/addCity", (request, response) => {
    // 设置允许跨域访问
    response.setHeader("Access-control-Allow-Origin", "*")
    console.log(request.body);
    response.send("helloworld")
})