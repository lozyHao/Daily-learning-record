import { request } from "./request";

// 注册
export function register(data){
    return request({
        url:'/api/auth/register',
        method:"post",
        data
    })
}

// 登录
export function login(data){
    return request({
        url:'/api/auth/login',
        method:"post",
        data
    })
}

// 退出
export function logout(){
    return request({
        url:'/api/auth/logout',
        method:"post",
    })
}

// 获取用户信息
export function getUser(){
    return request({
        url:'/api/user',
        method:"get",
    })
}