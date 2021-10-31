import { createStore } from 'vuex'

import user from './user'

export default createStore({
  state: {
    // 设置全局数据的地方
    count: 0,
    dzList: []
  },
  getters: {
    // 计算属性
    totalPrice: function (state) {
      return state.count * 100
    }
  },
  mutations: { //同步
    // 修改状态的方法
    setCount: function (state) {
      state.count++;
    },
    setCountNum: function (state, num) {
      state.count += num;
    },
    setDz: function (state, arr) {
      state.dzList = arr
    }
  },
  actions: { //异步
    getDz: function (context) {
      let api = "https://api.apiopen.top/getJoke?page=2&count=10&type=video";
      // 1.使用fatch()方法获取
      fetch(api)
        .then((res) => res.json())
        .then((result) => {
          context.commit('setDz', result.result)
          console.log(result);
        });
    }
  },
  modules: {
    // 模块导入方式
    user
  }
})
