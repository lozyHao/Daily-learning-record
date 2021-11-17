<template>
  <div class="list">
    <div class="nav">
      <span class="iconfont icon-vip">
        含{{ Math.floor(Math.random() * 10) }}首VIP专属歌曲</span
      >
      <span>首开VIP仅5元 ></span>
    </div>
    <div class="list_con">
      <div class="list_con_nav">
        <div class="bfAll">
          <span class="iconfont icon-bofangqi-bofangshu"></span>
          <span> 播放全部</span>
          <span>(共{{ playlist.tracks.length }}首)</span>
        </div>
        <div class="sc">
          + 收藏 ({{ changeValue(playlist.subscribedCount) }})
        </div>
      </div>
      <div class="list_cons">
        <div
          class="list_cons_list"
          v-for="(item, i) in playlist.tracks"
          :key="i"
        >
          <div class="xuhao">{{ i + 1 }}</div>
          <div class="titleCon">
            <span>{{ item.name }}</span>
            <span>{{ item.al.name }}</span>
          </div>
          <div class="videoMore">
            <span
              class="iconfont icon-bofangqi-bofang"
              @click="setPlayIndex(i)"
            ></span>
            <span class="iconfont icon-gengduo"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: ["playlist"],
  methods: {
    changeValue: function (num) {
      let res = num;
      if (num >= 10000 && num < 100000000) {
        res = num / 10000;
        res = res.toFixed(1) + "万";
      } else if (num >= 100000000) {
        res = num / 100000000;
        res = res.toFixed(1) + "亿";
      }
      return res;
    },
    ...mapMutations(["setPlayIndex"]),
  },
};
</script>
<style lang="less" scoped>
.list {
  width: 100%;
  margin-top: -3rem;
  background: #ccc;
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
  .nav {
    display: flex;
    width: 90%;
    height: 0.8rem;
    margin: 0 auto;
    align-items: center;
    span {
      width: 50%;
    }
    span:last-of-type {
      text-align: right;
      font-size: 0.25rem;
      color: rgb(110, 110, 110);
    }
  }
  .list_con {
    width: 100%;
    border-top-left-radius: 0.2rem;
    border-top-right-radius: 0.2rem;
    background: white;
    .list_con_nav {
      width: 90%;
      height: 1rem;
      margin: 0 auto;
      display: flex;
      align-items: center;
      div:first-of-type {
        width: 72%;
        span:first-of-type {
          font-size: 0.4rem;
        }
        span:last-of-type {
          font-size: 0.25rem;
          color: rgb(124, 124, 124);
        }
      }
      div:last-of-type {
        width: 28%;
        height: 0.8rem;
        text-align: center;
        background: rgb(218, 29, 29);
        line-height: 0.8rem;
        color: white;
        font-size: 0.25rem;
        border-radius: 0.4rem;
      }
    }
    .list_cons {
      width: 90%;
      margin: 0 auto;
      padding-bottom: 1.5rem;
      .list_cons_list {
        width: 100%;
        height: 1.2rem;
        display: flex;
        margin: 0.1rem 0;
        align-items: center;
        .xuhao {
          width: 10%;
          height: 1rem;
          text-align: center;
          line-height: 1rem;
        }
        .titleCon {
          display: flex;
          width: 72%;
          height: 1rem;
          margin-left: 3%;
          flex-direction: column;
          span {
            height: 0.5rem;
            line-height: 0.5rem;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-box-orient: vertical;
            display: -webkit-box;
            -webkit-line-clamp: 1;
          }
          span:last-of-type {
            font-size: 0.2rem;
            color: rgb(110, 110, 110);
          }
        }
        .videoMore {
          display: flex;
          width: 20%;
          height: 1rem;
          align-items: center;
          span {
            width: 50%;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>