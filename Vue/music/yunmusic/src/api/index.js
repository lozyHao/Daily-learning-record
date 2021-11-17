// 数据请求配置
import axios from "axios";

const url = 'http://localhost:3000';
// 获取轮播图的api
// type:资源类型,对应以下类型,默认为 0
// 0: pc / 1: android / 2: iphone / 3: ipad
export function getBanner(type = 1) {
    return axios.get(`${url}/banner?type=${type}`);
}

// 获取首页每日推荐歌单
export function getTopPlayList(limit = 8) {
    return axios.get(`${url}/personalized?limit=${limit}`);
}

// 获取歌单详情
export function getPlayListDetail(id) {
    return axios.get(`${url}/playlist/detail?id=${id}`);
}

// 通过id获取音乐播放路径
export function getPlayUrl(id) {
    return axios.get(`${url}/song/url?id=${id}`);
}

// 通过id获取音乐播放路径
export function searchMusic(keyword) {
    return axios.get(`${url}/search?keywords=${keyword}`);
}

// 手机登录接口实现
export function loginPhone(no, pwd) {
    return axios.get(`${url}/login/cellphone?phone=${no}&password=${pwd}`);
}

// 获取用户详情
export function userDetail(uid) {
    return axios.get(`${url}/user/detail?uid=${uid}`);
}

export default {
    getBanner, getTopPlayList, getPlayListDetail, getPlayUrl, searchMusic, loginPhone, userDetail
}