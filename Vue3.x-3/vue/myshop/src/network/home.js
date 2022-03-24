import { request } from "./request";

// 获取首页所有数据
export function getHomeAllData(){
    return request({
        url:'/api/index',
    })
}

// 获取首页选项卡内容
export function getHomeGoods(type='sales',page=1){
    return request({
        url:`/api/index?${type}=1&${page}=1`,
    })
}