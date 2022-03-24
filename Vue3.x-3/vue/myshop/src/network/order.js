import { request } from "./request";

// 提交订单（创建订单）
export function createOrder(params){
    return request({
        url:'/api/orders',
        method:"post",
        params
    })
}

// 订单预览
export function getOrderPreview(){
    return request({
        url:'/api/orders/preview',
        method:"get",
    })
}

// 订单支付，获取二维码
export function payOrder(order,params){
    return request({
        url:`/api/orders/${order}/pay`,
        method:"get",
        params
    })
}

// 获取订单状态：1-新订单，2-支付完成，3-已发货，4-已确认收货，5-已过期
export function payOrderStatus(order){
    return request({
        url:`/api/orders/${order}/status`,
        method:"get",
    })
}

// 订单列表{page:1,status:2,include:'user,orderDetails.goods'}
export function getOrderList(params){
    return request({
        url:'/api/orders',
        method:"get",
        params,
    })
}

// 订单详情
export function getOrderDetail(order){
    return request({
        url:`/api/orders/${order}`,
        method:"get",
        params:{
            include:'user,orderDetails.goods'
        },
    })
}

// 确认收货（确认订单）
export function confirmOrder(order){
    return request({
        url:`/api/orders/${order}/confirm`,
        method:"patch",
    })
}

// 获取物流信息
export function viewExpress(order){
    return request({
        url:`/api/orders/${order}/express`,
        method:"get",
    })
}