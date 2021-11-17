import { createStore } from 'vuex'
import api, { loginPhone, userDetail } from '../api/index.js';

// 全局配置
export default createStore({
  state: {
    playlist: [ {
      id: 130411760,
      name: "上路2021",
      al: {
        id: 130411760,
        name: "上路2021",
        pic: 109951166181045860,
        picUrl: "http://p4.music.126.net/WWP4DTzioESGe2tnyvkRHQ==/109951166181045850.jpg",
        pic_str: "109951166181045850",
      },
    } ], //全局歌单列表
    playCurrentIndex: 0, //播放的索引
    pausedState: true, //歌曲播放状态
    user: {
      isLogin: false,
      userinfo: '未登录',
      account: {},
      userdetail: {}
    }
  },
  mutations: {
    setPlaylist: function (state, value) {
      state.playlist = value;
      state.playCurrentIndex = 0
    },
    // 搜索的歌曲点击添加到该播放列表中
    pushPlaylist: function (state, value) {
      state.playlist.push(value);
    },
    // 点击播放，修改索引找到对应歌曲
    setPlayIndex(state, value) {
      state.playCurrentIndex = value
      state.pausedState = false
    },
    // 上一首
    setPlayIndexNowOn(state) {
      if (state.playCurrentIndex <= 0) {
        state.playCurrentIndex = 9
      } else {
        state.playCurrentIndex -= 1
      }
    },
    // 下一首
    setPlayIndexNowNext(state) {
      if (state.playCurrentIndex >= 9) {
        state.playCurrentIndex = 0
      } else {
        state.playCurrentIndex += 1
      }
    },
    setUser(state, value) {
      state.user = value
    }
  },
  actions: {
    async loginPhone(content, payload) {
      let result = await loginPhone(payload.phone, payload.password);
      if (result.data.code == 200) {
        content.state.user.isLogin = true
        content.state.user.userinfo = '已登录'
        content.state.user.account = result.data.account
        let userdetail = await userDetail(result.data.account.id)
        content.state.user.userdetail = userdetail.data;
        localStorage.userData = JSON.stringify(content.state.user)
        content.commit('setUser', content.state.user)
        console.log(userdetail);
      }
      return result;
    }
  },
  modules: {
  }
})
