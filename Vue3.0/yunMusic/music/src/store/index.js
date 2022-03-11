import { createStore } from 'vuex'
import { loginPhone,userDetail } from '../api/index.js';

export default createStore({
  state: {
    playList: [
      {
        track: {},
        name: "选择播放音乐",
        al: {
          picUrl: "http://p4.music.126.net/jg4CzEQhpbdfaP7MVtApSg==/109951166031907879.jpg"
        }
      }
    ],//全局播放列表
    playCurrentIndex: 0, //播放的序号
    user:{
      isLogin:false,
      userinfo:"未登录"
    }
  },
  getters: {
  },
  mutations: {
    setPlayList: function (state, value) {
      // 设置播放列表函数
      state.playList = value;
    },
    setPlayIndex(state,value){
      state.playCurrentIndex=value;
    },
    setUser(state, value) {
      state.user = value
    }
  },
  actions: {
    async loginPhone(content,payload){
      let result=await loginPhone(payload.phone,payload.password)
      console.log(result);
      if (result.data.code == 200) {
        content.state.user.isLogin = true
        content.state.user.userinfo = '已登录'
        content.state.user.account = result.data.account
        let userdetail = await userDetail(result.data.account.id)
        content.state.user.userdetail = userdetail.data;
        localStorage.userData = JSON.stringify(content.state.user)
        content.commit('setUser', content.state.user)
      }
      return result;
    }
  },
  modules: {
  }
})
