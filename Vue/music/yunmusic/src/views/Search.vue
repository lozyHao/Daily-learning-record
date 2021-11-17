<template>
  <div class="con">
    <div class="topNav">
      <span class="iconfont icon-zuojiantou" @click="$router.go(-1)"></span>
      <input
        class="input"
        type="text"
        v-model="searchKeyword"
        :placeholder="placeholder"
        @keydown.enter="saveKeyWord"
      />
    </div>
    <div class="history" v-if="stt">
      <span>历史:</span>
      <span
        @click="historySearch(item)"
        class="spanCon"
        v-for="(item, i) in keywordList"
        :key="i"
        >{{ item }}</span
      >
    </div>
    <div class="list_con" v-else>
      <div class="list_con_nav">
        <div class="bfAll">
          <span class="iconfont icon-bofangqi-bofangshu"></span>
          <span> 播放全部</span>
          <span>(共{{ listMusic.length || 0 }}首)</span>
        </div>
      </div>
      <div class="list_cons">
        <div class="list_cons_list" v-for="(item, i) in listMusic" :key="i">
          <div class="xuhao">{{ i + 1 }}</div>
          <div class="titleCon">
            <span>{{ item.name }}</span>
            <span>{{ item.album.name }}</span>
          </div>
          <div class="videoMore">
            <span
              class="iconfont icon-bofangqi-bofang"
              @click="setPlay(item, i)"
            ></span>
            <span class="iconfont icon-gengduo"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { searchMusic } from "@/api/index.js";
export default {
  data: function () {
    return {
      placeholder: "陈奕迅",
      keywordList: [], //关键字列表
      searchKeyword: "", //搜索的关键字
      listMusic: {},
      stt: true,
    };
  },
  beforeMount() {
    this.keywordList = localStorage.keywordList
      ? JSON.parse(localStorage.keywordList)
      : "";
  },
  methods: {
    saveKeyWord: async function () {
      if (this.searchKeyword != "") {
        this.keywordList.unshift(this.searchKeyword);
        this.keywordList = Array.from(new Set(this.keywordList));
        if (this.keywordList.length > 10) {
          this.keywordList.slice(0, 9);
        }
        localStorage.keywordList = JSON.stringify(this.keywordList);
        let list = await searchMusic(this.searchKeyword);
        // console.log(list.data.result.songs);
        this.listMusic = list.data.result.songs;
        this.stt = false;
      } else {
        this.stt = true;
      }
    },
    // 历史搜索
    historySearch: function (item) {
      this.searchKeyword = item;
      this.saveKeyWord();
    },
    // 播放对应歌曲
    setPlay: function (item, i) {
      item.al = item.album;
      item.al.picUrl = item.album.artist.img1v1Url;
      this.$store.commit("pushPlaylist", item);
      this.$store.commit("setPlayIndex", this.$store.state.playlist.length - 1);
    },
  },
};
</script>

<style lang="less" scoped>
.con {
  width: 90%;
  height: 1rem;
  color: rgb(51, 51, 51);
  margin: 0.2rem auto;
  .topNav {
    display: flex;
    height: 1rem;
    span {
      width: 10%;
      text-align: left;
      line-height: 1rem;
      font-size: 0.5rem;
    }
    input {
      width: 90%;
      height: 0.5rem;
      border: none;
      border-bottom: 0.02rem solid rgb(63, 63, 63);
      outline: none;
      margin-top: 0.3rem;
    }
  }
  .history {
    width: 90%;
    margin: 0.2rem auto;
    span:first-of-type {
      display: inline-block;
      width: 1rem;
      margin: 0.1rem;
      font-weight: bold;
    }
    .spanCon {
      display: inline-block;
      height: 0.4rem;
      margin: 0.1rem;
      background: #ccc;
      padding: 0 0.05rem;
      border-radius: 0.1rem;
      line-height: 0.4rem;
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
      div {
        width: 72%;
        span:first-of-type {
          font-size: 0.4rem;
        }
        span:last-of-type {
          font-size: 0.25rem;
          color: rgb(124, 124, 124);
        }
      }
    }
    .list_cons {
      width: 90%;
      margin: 0 auto;
      padding-bottom: 1.2rem;
      .list_cons_list {
        width: 100%;
        height: 1.2rem;
        display: flex;
        margin: 0.2rem 0;
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