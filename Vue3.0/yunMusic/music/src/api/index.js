import axios from 'axios';

let url="http://localhost:3000";

// 获取轮播图
export function getBanner(type=1){
    return axios.get(`${url}/banner?type=${type}`);
}

// 获取每日推荐歌单
export function getGoodMusicLists(limit=10){
    return axios.get(`${url}/personalized?limit=${limit}`);
}

// 获取歌单详情
export function getPlaylistDetails(id){
    return axios.get(`${url}/playlist/detail?id=${id}`);
}

// 获取歌单详情列表详情
export function getPlaylistTrackAll(id,limit,offset){
    return axios.get(`${url}/playlist/detail?id=${id}&limit=${limit}&offset=${offset}`);
}

// 手机登录接口实现
export function loginPhone(phone,password){
    return axios.get(`${url}/login/cellphone?phone=${phone}&password=${password}`);
}

// 获取用户详情
export function userDetail(uid) {
    return axios.get(`${url}/user/detail?uid=${uid}`);
}

export default{
    getBanner,getGoodMusicLists,getPlaylistDetails,getPlaylistTrackAll,loginPhone,userDetail
}