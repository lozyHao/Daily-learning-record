// axios网络请求封装
import axios from 'axios';

const instance = axios.create({
    baseUrl: "https://api.shop.eduwork.cn/",
    timeout: 5000
})

// 拦截器
instance.interceptors.request.use(
    config => {
        return config
    }, error => {
        return error
    }
)
instance.interceptors.response.use(
    response => {
        return response
    }, error => {
        return error
    }
)

// get请求
export function get(url, params) {
    return instance.get(url, {
        params
    })
}

// post请求
export function post(url, params) {
    return instance.post(url, params, {
        transformRequest: [
            function (data) {
                let str = '';
                for (let key in data) {
                    str += encodeURIComponent(key) + '=' + encodeURIComponent(data[key]) + '&'
                }
                console.log(str);
                return str;
            }
        ],
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }

    })
}

export function del(url) {
    return instance.delete(url);
}