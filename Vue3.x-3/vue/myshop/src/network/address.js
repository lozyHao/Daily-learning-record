import { request } from "./request";

// 添加地址
export function addAddress(params){
    return request({
        url:'/api/address',
        method:"post",
        params
    })
}

// 修改地址
export function editAddress(id,params){
    return request({
        url:`/api/address/${id}`,
        method:"put",
        params
    })
}

// 删除地址
export function deleteAddress(id){
    return request({
        url:`/api/address/${id}`,
        method:"delete",
    })
}

// 获取地址列表
export function getAddressList(){
    return request({
        url:`/api/address`,
        method:"get",
    })
}

// 获取地址详情
export function getAddressDetail(id){
    return request({
        url:`/api/address/${id}`,
        method:"get",
    })
}