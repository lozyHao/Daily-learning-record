<template>
  <div class="iconList">
    <ul>
      <li>
        <div><span class="iconfont icon-meirituijian-"></span></div>
        <span>每日推荐</span>
      </li>
      <li>
        <div><span class="iconfont icon-diantai"></span></div>
        <span>私人FM</span>
      </li>
      <li>
        <div><span class="iconfont icon-gedan"></span></div>
        <span>歌单</span>
      </li>
      <li>
        <div><span class="iconfont icon-paixingbang"></span></div>
        <span>排行榜</span>
      </li>
    </ul>
  </div>
</template>

<style lang="less" scoped>
.iconList {
  width: 100%;
  height: 1.5rem;
  ul {
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    align-items: center;
    li {
      display: flex;
      flex-direction: column;
      text-align: center;
      div {
        width: 0.80rem;
        height: 0.80rem;
        border-radius: 50%;
        background: linear-gradient(to bottom right, rgb(255,104,79), rgb(255,52,18));
        margin: 0 auto 0.05rem;
        span{
            font-size: 0.5rem;
            line-height: 0.8rem;
            color: #fff;
        }
      }
      span {
        font-size: 0.25rem;
      }
    }
  }
}
</style>