import { request } from "./request";

// 获取分类数据
export function getCategory(){
    return request({
        url:'/api/goods',
    })
}

// 获取类别数据
export function getCategoryGoods(order='sales',cid=0,page=1){
    return request({
        url:`/api/goods?category_id=${cid}&page=${page}&${order}=1`,
    })
}