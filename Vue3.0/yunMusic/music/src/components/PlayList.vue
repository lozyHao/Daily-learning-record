<template>
  <div class="playList">
    <div class="vip">
      <span class="iconfont icon-VIP2"
        >&nbsp;<span>含3首VIP专项歌曲</span></span
      >
      <span class="vip-t">首开VIP仅5元&nbsp;&gt;</span>
    </div>
    <div class="content">
      <div class="content-top">
        <div class="playAll">
          <span class="iconfont icon-bofang" @click="$store.commit('setPlayList', playlist.tracks);">&nbsp;&nbsp;播放全部</span>
          <!-- <span>&nbsp;(共{{changeValue(playlist.tracks.length)}}首)</span> -->
        </div>
        <div class="collection">
          +&nbsp;收藏({{ changeValue(playlist.subscribedCount) }})
        </div>
      </div>
      <div class="content-con">
        <div v-for="(item, i) in playlist.tracks" :key="i" @click="setPlayIndex(i)">
          <span class="indexNum">{{ i + 1 }}</span>
          <span class="name">
            <span>{{ item.name }}</span>
            <span>{{ item.al.name }}</span>
          </span>
          <span class="iconAll">
            <span
              v-if="item.mv != 0"
              class="iconfont icon-bofangqi-bofangshu"
            ></span>
            <span class="iconfont icon-gengduo"></span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  props: ["playlist"],
  mounted() {
    console.log(this.props);
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
    ...mapMutations(['setPlayIndex'])
  },
};
</script>


<style lang="less" scoped>
.playList {
  width: 100%;
  background: #eee;
  margin: -0.5rem auto;
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
  .vip {
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.25rem;
    .iconfont {
      color: rgb(255, 104, 79);
      font-size: 0.35rem;
      span {
        color: #333;
        font-size: 0.3rem;
      }
    }
    .vip-t {
      color: #666;
      font-size: 0.3em;
    }
  }
  .content {
    width: 100%;
    padding: 0 0.25rem;
    background: #fff;
    border-top-left-radius: 0.3rem;
    border-top-right-radius: 0.3rem;
    .content-top {
      width: 100%;
      height: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .iconfont {
        font-size: 0.35rem;
        font-weight: bold;
      }
      .playAll {
        font-size: 0.25rem;
      }
      .collection {
        height: 0.7rem;
        margin-top: 0.1rem;
        padding: 0 0.2rem;
        background: rgb(255, 76, 59);
        font-size: 0.25rem;
        color: #fff;
        border-radius: 0.35rem;
        line-height: 0.7rem;
        text-align: center;
      }
    }
    .content-con {
      width: 100%;
      div {
        width: 100%;
        height: 1.5rem;
        display: flex;
        align-items: center;
        .indexNum {
          display: block;
          width: 10%;
          text-align: center;
          font-size: 0.4rem;
          color: #555;
        }
        .name {
          width: 70%;
          span {
            display: block;
            width: 100%;
            font-size: 0.2rem;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
          }
          span:first-of-type{
              font-size: 0.35rem;
          }
        }
        .iconAll{
            width: 20%;
            display: flex;
            justify-content: right;
            span{
                display: block;
                width: 50%;
            }
        }
      }
    }
  }
}
</style>