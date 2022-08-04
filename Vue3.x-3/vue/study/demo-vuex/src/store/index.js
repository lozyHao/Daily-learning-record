import { createStore } from 'vuex'
import createPersistedstate from 'vuex-persistedstate'

export default createStore({
  state: {
    num: 0
  },
  getters: {
  },
  mutations: {
    sub(state) {
      state.num--;
    },
    add(state) {
      state.num++;
    }
  },
  actions: {

  },
  modules: {
  },
  // 数据持久化
  plugins: [
    createPersistedstate({
      // 默认存储在localStorage 现改为sessionStorage
      // storage: window.sessionStorage,
      // 本地存储数据的键名
      key: 'pc-store',
      // 指定需要存储的模块，如果是模块下具体的数据需要加上模块名称，如user.token
      // paths: ['user', 'cart']
    })
  ]
})


