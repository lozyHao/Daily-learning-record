import axios from "axios";

axios.all(values: [
    axios.get("https://api.shop.eduwork.cn/api/index"),
    axios.get("https://api.shop.eduwork.cn/api/goods")
]).then(res => {
    console.log(res); //打印出所有请求结果
    axios.spread(callback: (res1, res2) => {
        // 将结果数组分为res1，res2...
        console.log(res1);
        console.log(res2);
    })

}).catch(err => {
    console.log(err);
})