<template>
  <div class="ListViewTop">
    <img class="bg" :src="playlist.coverImgUrl" alt="" />
    <div class="ListViewTopNav">
      <div class="back">
        <span class="iconfont icon-zuojiantou" @click="$router.go(-1)"></span>
        <span class="name">歌单</span>
      </div>
      <div class="more">
        <span class="iconfont icon-sousuo"></span>
        <span class="iconfont icon-gengduo"></span>
      </div>
    </div>
    <div class="content">
      <div class="contentLeft">
        <img :src="playlist.coverImgUrl" alt="" />
        <span class="iconfont icon-24gl-play">{{
          changeValue(playlist.playCount)
        }}</span>
      </div>
      <div class="contentRight">
        <div class="name">{{ playlist.name }}</div>
        <div class="creator">
          <img :src="playlist.coverImgUrl" alt="" />
          <span>{{ playlist.name }}</span>
        </div>
        <div class="description">{{ playlist.description }}</div>
      </div>
    </div>
    <div class="navList">
      <ul>
        <li>
          <span class="iconfont icon-pinglun"></span>
          <span class="title">{{changeValue(playlist.commentCount)}}</span>
        </li>
        <li>
          <span class="iconfont icon-fenxiang"></span>
          <span class="title">{{changeValue(playlist.shareCount)}}</span>
        </li>
        <li>
          <span class="iconfont icon-xiazai"></span>
          <span class="title">下载</span>
        </li>
        <li>
          <span class="iconfont icon-duoxuan"></span>
          <span class="title">多选</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["playlist"],
  mounted() {
    // console.log(this.props);
  },
  methods: {
    changeValue: function (number) {
      let res = 0;
      if (number >= 100000000) {
        res = number / 100000000;
        res = res.toFixed(2) + "亿";
      } else if (number >= 10000) {
        res = number / 10000;
        res = res.toFixed(2) + "万";
      } else {
        return number;
      }
      return res;
    },
  },
};
</script>


<style lang="less" scoped>
.ListViewTop {
  .bg {
    position: fixed;
    width: 100%;
    height: auto;
    filter: blur(20px);
    transform: scale(1.2);
    z-index: -1;
  }
  .ListViewTopNav {
    display: flex;
    height: 1rem;
    justify-content: space-between;
    padding: 0 0.15rem;
    align-items: center;
    background: rgba(0, 0, 0, 0.2);
    div {
      width: 1.5rem;
      height: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #ffff;
      .name {
        font-size: 0.4rem;
        font-weight: bold;
      }
    }
  }
  .content {
    width: 100%;
    padding: 0.4rem 0.25rem;
    display: flex;
    justify-content: space-between;
    background: rgba(0, 0, 0, 0.2);
    .contentLeft {
      position: relative;
      width: 40%;
      img {
        width: 100%;
        border-radius: 0.2rem;
      }
      span {
        position: absolute;
        font-size: 0.2rem;
        top: 0.1rem;
        right: 0.1rem;
        color: #fff;
        background: rgba(0, 0, 0, 0.3);
        border-radius: 0.1rem;
        padding: 0 0.1rem;
      }
    }
    .contentRight {
      position: relative;
      width: 55%;
      display: flex;
      flex-direction: column;
      color: #fff;
      .name {
        font-size: 0.35rem;
        font-weight: bold;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
      .creator {
        display: flex;
        margin: 0.2rem 0;
        align-items: center;
        justify-content: space-between;
        img {
          width: 0.6rem;
          height: 0.6rem;
          border-radius: 50%;
        }
        span {
          display: block;
          width: 80%;
          font-size: 0.2rem;
          font-weight: bold;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
        }
      }
      .description {
        display: block;
        font-size: 0.15rem;
        font-weight: bold;
        color: #eee;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
    }
  }
  .navList {
    width: 100%;
    height: 2rem;
    background: rgba(0, 0, 0, 0.2);
    ul {
      width: 100%;
      height: 1rem;
      display: flex;
      justify-content: space-around;
      li {
        display: flex;
        justify-content: space-around;
        flex-flow: column;
        color: #fff;
        text-align: center;
        font-size: 0.25rem;
      }
    }
  }
}
</style>