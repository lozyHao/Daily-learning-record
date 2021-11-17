<template>
  <div>
    <div class="tit">
      <p class="title">推荐歌单</p>
      <p class="more">更多 ></p>
    </div>
    <div class="list">
      <router-link
        :to="{ path: '/Listview', query: { id: item.id } }"
        class="con"
        v-for="item in state.musicList"
        :key="item"
      >
        <img class="conImg" :src="item.picUrl" />
        <p class="iconfont icon-24gl-play">{{ changeValue(item.playCount) }}</p>
        <p class="contitle">{{ item.name }}</p>
      </router-link>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { getTopPlayList } from "@/api/index.js";
import { reactive, onMounted } from "vue";

// 使用setup()实现
export default {
  setup() {
    let state = reactive({ musicList: [] });
    function changeValue(num) {
      let res = num;
      if (num >= 10000 && num < 100000000) {
        res = num / 10000;
        res = res.toFixed(2) + "万";
      } else if (num >= 100000000) {
        res = num / 100000000;
        res = res.toFixed(2) + "亿";
      }
      return res;
    }
    onMounted(async () => {
      let res = await getTopPlayList();
      state.musicList = res.data.result;
    });
    return {
      state,
      changeValue,
    };
  },
};
/*
export default {
  data: function () {
    return {
      musicList: [],
    };
  },
  methods: {
    changeValue: function (num) {
      let res = num;
      if (num >= 10000 && num < 100000000) {
        res = num / 10000;
        res = res.toFixed(2) + "万";
      } else if (num >= 100000000) {
        res = num / 100000000;
        res = res.toFixed(2) + "亿";
      }
      return res;
    },
  },
  async mounted() {
    let res = await getTopPlayList();
    this.musicList = res.data.result;
  },
};
*/
</script>


<style lang="less" scoped>
.tit {
  position: relative;
  width: 100%;
  height: 0.8rem;
  border-top: 1px solid #ccc;
  .title {
    position: absolute;
    left: 2.5%;
    height: 0.8rem;
    line-height: 0.8rem;
    font-size: 0.4rem;
    font-weight: bolder;
  }
  .more {
    position: absolute;
    right: 2.5%;
    top: 0.15rem;
    display: block;
    height: 0.5rem;
    padding: 0 0.2rem;
    border: 1px solid #ccc;
    border-radius: 0.3rem;
    line-height: 0.5rem;
    font-size: 0.27rem;
  }
}

.list {
  width: 100%;
  .con {
    float: left;
    position: relative;
    width: 33.3%;
    height: 3.5rem;
    margin: 5px 0;
    img {
      display: block;
      width: 95%;
      height: auto;
      margin: 0.1rem auto;
      border-radius: 0.2rem;
    }
    .iconfont {
      position: absolute;
      top: 0.15rem;
      right: 0.25rem;
      display: block;
      height: 1.8rem;
      border-radius: 0.2rem;
      font-size: 0.15rem;
      color: white;
    }
    .contitle {
      display: block;
      width: 95%;
      margin: 0 auto;
      text-overflow: ellipsis;
      display: -webkit-box;
      text-overflow: ellipsis;
      overflow: hidden;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2; //当属性值为3，表示超出3行隐藏
    }
  }
}
</style>