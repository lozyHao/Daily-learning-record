<template>
  <div class="topNav">
    <div class="topLeft iconfont icon-list"></div>
    <div class="topCenter">
      <span @click="$router.push('/me')">我的</span>
      <span class="active">发现</span>
      <span>云村</span>
      <span>视频</span>
    </div>
    <router-link
      :to="{ path: '/Search' }"
      class="topRight iconfont icon-sousuo"
    ></router-link>
  </div>
</template>

<style lang='less' scoped>
.topNav {
  display: flex;
  width: 100%;
  height: 0.5rem;
  margin-top: 0.1rem;
  .topLeft {
    text-align: center;
    height: 0.5rem;
    line-height: 0.5rem;
    width: 10%;
    font-size: 0.35rem;
  }
  .topCenter {
    text-align: center;
    height: 0.5rem;
    line-height: 0.5rem;
    width: 80%;
    span {
      padding: 0 3%;
      text-align: center;
      font-size: 0.3rem;
    }
    .active {
      font-weight: 900;
    }
  }
  .topRight {
    text-align: center;
    height: 0.5rem;
    line-height: 0.5rem;
    width: 10%;
    font-size: 0.35rem;
  }
}
</style>