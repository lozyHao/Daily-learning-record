<template>
  <div class="me">
    <img
      class="userImgBack"
      :src="$store.state.user.userdetail.profile.avatarUrl"
      alt=""
    />
    <div class="topNav">
      <div class="topNavLeft">
        <span class="iconfont icon-zuojiantou" @click="$router.go(-1)"></span>
        <span>{{ $store.state.user.userdetail.profile.nickname }}</span>
      </div>
      <div class="topNavRight">
        <span class="iconfont icon-xiazai1"></span>
      </div>
    </div>
    <div class="border">
      <img
        class="userImg"
        :src="$store.state.user.userdetail.profile.avatarUrl"
        alt=""
      />
      <ul>
        <li>
          <span>{{ $store.state.user.userdetail.profile.gender }}</span>
          <span>粉丝</span>
        </li>
        <li>
          <span>{{ $store.state.user.userdetail.profile.follows }}</span>
          <span>关注</span>
        </li>
        <li>
          <span>LV.{{ $store.state.user.userdetail.level }}</span>
          <span>等级</span>
        </li>
      </ul>
    </div>
    <div class="yunCun">
      <div class="yunCun_title">
        <span>基本信息</span>
        <span class="iconfont icon-xiazai1">村民证</span>
      </div>
      <div class="yunCun_con">
        <span>村龄：{{ $store.state.user.userdetail.createDays }}天</span>
        <span>地区：{{ $store.state.user.userdetail.profile.city }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.me {
  position: relative;
  width: 100%;
  height: 100vh;
  background: #fff;
  z-index: 999;
  .userImgBack {
    position: fixed;
    width: 100%;
    height: auto;
    z-index: -1;
    filter: blur(20px);
  }
  .topNav {
    position: relative;
    width: 100%;
    height: 1rem;
    color: white;
    background: rgba(51, 51, 51, 0.5);
    .topNavLeft {
      display: flex;
      position: absolute;
      width: 75%;
      height: 1rem;
      left: 0;
      span:first-of-type {
        width: 20%;
        text-align: center;
        line-height: 1rem;
        font-size: 0.4rem;
      }
      span:last-of-type {
        width: 80%;
        text-align: left;
        line-height: 1rem;
        font-size: 0.4rem;
        letter-spacing: 0.03rem;
      }
    }
    .topNavRight {
      display: flex;
      position: absolute;
      width: 25%;
      height: 0.3rem;
      right: 0;
      span {
        width: 100%;
        text-align: center;
        line-height: 1rem;
        font-size: 0.45rem;
      }
    }
  }
  .border {
    width: 80%;
    height: 2rem;
    margin: 0 auto;
    margin-top: 0.5rem;
    display: flex;
    .userImg {
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;
      margin-top: 0.25rem;
    }
    ul {
      width: 70%;
      height: 1rem;
      margin-top: 0.5rem;
      margin-left: 5%;
      list-style: none;
      padding: 0;
      display: flex;
      li {
        width: 35%;
        height: 1rem;
        display: flex;
        flex-direction: column;
        text-align: center;
        span {
          display: block;
          height: 0.5rem;
          color: white;
          font-size: 0.35rem;
          line-height: 0.5rem;
        }
      }
    }
  }
  .yunCun {
    width: 80%;
    margin: 0.5rem auto;
    background: rgba(17, 17, 17, 0.3);
    border-radius: 0.2rem;
    color: white;
    padding: 0.2rem 0;
    .yunCun_title {
      position: relative;
      width: 90%;
      height: 0.8rem;
      margin: 0 auto;
      span:first-of-type {
        position: absolute;
        font-size: 0.4rem;
        font-weight: bolder;
        line-height: 0.8rem;
      }
      span:last-of-type {
        position: absolute;
        right: 0;
        top: 0.15rem;
        height: 0.5rem;
        width: 1.5rem;
        border: 0.02rem solid white;
        border-radius: 0.25rem;
        font-size: 0.25rem;
        text-align: center;
        line-height: 0.45rem;
      }
    }
    .yunCun_con {
      width: 90%;
      height: 0.8rem;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      span {
        letter-spacing: 0.03rem;
      }
    }
  }
}
</style>