<template>
  <div class="listviewTop">
    <img class="bg" :src="playlist.coverImgUrl" alt="" />
    <div class="topNav">
      <div class="topNavLeft">
        <span class="iconfont icon-zuojiantou" @click="$router.go(-1)"></span>
        <span>歌单</span>
      </div>
      <div class="topNavRight">
        <span class="iconfont icon-sousuo"></span>
        <span class="iconfont icon-gengduo"></span>
      </div>
    </div>
    <div class="topContent">
      <img class="img" :src="playlist.coverImgUrl" alt="" />
      <div class="contents">
        <div class="con_title">{{ playlist.name }}</div>
        <div class="con_con">
          <img class="con_con_img" :src="playlist.creator.avatarUrl" alt="" />
          <span class="con_con_con">{{ playlist.creator.nickname }}</span>
        </div>
        <div class="con_con1">{{ playlist.description }}</div>
      </div>
    </div>
    <div class="navs">
      <div>
        <span class="iconfont icon-pinglun"></span>
        <span>{{ playlist.commentCount }}</span>
      </div>
      <div>
        <span class="iconfont icon-fenxiang"></span>
        <span>{{ playlist.shareCount }}</span>
      </div>
      <div>
        <span class="iconfont icon-xiazai"></span>
        <span>下载</span>
      </div>
      <div>
        <span class="iconfont icon-duoxuan"></span>
        <span>多选</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["playlist"],
};
</script>
<style lang="less" scoped>
.listviewTop {
  width: 100%;
  height: 8rem;
  margin: 0 auto;
  border: none;
  .bg {
    position: fixed;
    width: 100%;
    height: auto;
    z-index: -1;
    filter: blur(30px); //滤镜，模糊度
  }
  .topNav {
    position: relative;
    width: 100%;
    height: 1rem;
    color: white;
    .topNavLeft {
      display: flex;
      position: absolute;
      width: 25%;
      height: 1rem;
      left: 0;
      span {
        width: 50%;
        text-align: center;
        line-height: 1rem;
        font-size: 0.4rem;
      }
    }
    .topNavRight {
      display: flex;
      position: absolute;
      width: 25%;
      height: 1rem;
      right: 0;
      span {
        width: 50%;
        text-align: center;
        line-height: 1rem;
        font-size: 0.45rem;
      }
    }
  }
  .topContent {
    position: relative;
    width: 90%;
    height: 2.5rem;
    margin: 0 auto;
    .img {
      width: 40%;
      height: 2.5rem;
      background: #ccc;
    }
    .contents {
      position: absolute;
      top: 0;
      right: 0;
      width: 55%;
      height: 2.5rem;
      color: white;
      .con_title {
        letter-spacing: 2px;
        font-weight: bold;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        display: -webkit-box;
        -webkit-line-clamp: 2;
      }
      .con_con {
        position: absolute;
        top: 1rem;
        display: flex;
        font-size: 0.25rem;
        align-items: center;
        .con_con_img {
          width: 0.5rem;
          height: 0.5rem;
          border-radius: 50%;
        }
        .con_con_con {
          padding-left: 0.1rem;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-box-orient: vertical;
          display: -webkit-box;
          -webkit-line-clamp: 1;
        }
      }
      .con_con1 {
        position: absolute;
        bottom: 0;
        font-size: 0.15rem;
        align-items: center;
        color: #ccc;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        display: -webkit-box;
        -webkit-line-clamp: 3;
      }
    }
  }
  .navs {
    display: flex;
    width: 90%;
    height: 2.5rem;
    margin: 0 auto;
    div {
      width: 25%;
      height: 0.8rem;
      margin-top: 0.2rem;
      display: flex;
      flex-direction: column;
      text-align: center;
      color: white;
      span {
        display: block;
        height: 0.4rem;
        line-height: 0.4rem;
      }
      .iconfont {
        font-size: 0.4rem;
      }
    }
  }
}
</style>