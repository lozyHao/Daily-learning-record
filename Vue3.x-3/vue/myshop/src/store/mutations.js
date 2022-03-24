import { addCart } from "@/network/cart";

const mutations = {
    // 修改登录状态
    setIsLogin(state, payload) {
        state.user.isLogin = payload;
    },
    // 获取购物车数量
    addCart(state,payload){
        state.cartCount=payload.count;
    }
}

export default mutations;