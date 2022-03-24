import axios from 'axios';

import { Toast } from "vant";
import router from '../router/index'

export function request(config) {
    const instance = axios.create({
        baseURL: 'https://api.shop.eduwork.cn',
        timeout: 10000
    })

    // 请求拦截器
    instance.interceptors.request.use(
        config => {
            // 如果有一个借口需要认证才可以访问，就统一设置
            // 统一请求，设置token请求头
            const userToken=window.localStorage.getItem("userToken");
            if(userToken){
                config.headers.Authorization= 'Bearer '+userToken;
            }
            return config;
        }, err => {
            // return err;
        }
    )
    // 响应拦截器
    instance.interceptors.response.use(
        res => {
            return res.data ? res.data : res;
        }, err => {
            // 设置相应拦截，需要token的接口验证不通过，跳转至登录界面
            if (err.response.status=='401') {
                Toast.fail("请先登录！");
                setTimeout(()=>{
                    router.push({path:'/login'});
                },2000);
            }
            // return err;
        }
    )
    return instance(config);
}