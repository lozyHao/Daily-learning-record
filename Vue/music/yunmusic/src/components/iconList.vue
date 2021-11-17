<template>
  <div class="iconList">
    <div>
      <span class="iconfont icon-meirituijian-"></span>
      <span>每日推荐</span>
    </div>
    <div>
      <span class="iconfont icon-diantai"></span>
      <span>私人FM</span>
    </div>
    <div>
      <span class="iconfont icon-gedan"></span>
      <span>歌单</span>
    </div>
    <div>
      <span class="iconfont icon-paixingbang"></span>
      <span>排行榜</span>
    </div>
  </div>
</template>

<style lang="less" scoped>
.iconList {
  display: flex;
  width: 95%;
  height: 1.5rem;
  margin: 15px auto;
}
.iconList > div {
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 1.5rem;
}

.iconList > div > span:first-of-type {
  display: block;
  width: 1rem;
  height: 1rem;
  text-align: center;
  line-height: 1rem;
  margin: 0 auto;
  background: rgb(221, 82, 82);
  color: white;
  font-size: 0.5rem;
  border-radius: 50%;
}
.iconList > div > span:last-of-type {
  display: block;
  width: 100%;
  height: 0.5rem;
  text-align: center;
  line-height: 0.5rem;
  font-size: 0.25rem;
  margin-top: 0.05rem;
}
</style>