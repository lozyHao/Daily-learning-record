import { request } from "./request";

// 添加购物车，参数，该商品id，num
export function addCart(data){
    return request({
        url:'/api/carts',
        method:"post",
        data
    })
}

// 修改购物车，参数cart=商品id data={num:2}
export function modifyCart(cart,data){
    return request({
        url:`/api/carts/${cart}`,
        method:"put",
        data
    })
}

// 选择商品的状态，参数：选中商品id [1,4,7]
export function checkedCart(data){
    return request({
        url:'/api/carts/checked',
        method:"patch",
        data
    })
}

// 获取购物车列表,data="include=goods"
export function getCart(data=''){
    return request({
        url:'/api/carts?'+data,
    })
}

// 删除购物车数据，参数：商品id
export function deleteCartItem(id){
    return request({
        url:`/api/carts/${id}`,
        method:"delete",
    })
}
