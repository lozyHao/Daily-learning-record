import { getCart } from "@/network/cart";

const actions = {
    updateCart({ commit }) {
        getCart().then(res => {
            if (this.state.user.isLogin) {
                commit('addCart', { count: res.data.length || 0 })
            } else {
                commit('addCart', { count: 0 })
            }

        })
    }
}

export default actions;