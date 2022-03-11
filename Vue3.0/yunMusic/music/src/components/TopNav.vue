<template>
  <div class="topNav">
    <div class="topLeft">
      <span class="iconfont icon-list"></span>
    </div>
    <div class="topCenter">
      <span class="btn" @click="$router.push('/meview')">我的</span>
      <span class="btn">发现</span>
      <span class="btn">云村</span>
      <span class="btn">视频</span>
    </div>
    <div class="topRight">
      <span class="iconfont icon-sousuo"></span>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="less" scoped>
.topNav {
  display: flex;
  height: 0.8rem;
  justify-content: space-between;
  background: rgb(230, 230, 230);
  padding: 0 0.15rem;
  align-items: center;
  .topCenter {
    .btn {
      margin: 0 0.15rem;
    }
  }
}
</style>