<template>
  <div class="goodMusicList">
    <div class="goodMusicList-top">
      <div class="title">发现好歌单</div>
      <div class="more">更多</div>
    </div>
    <div class="goodMusicList_botton">
      <swiper
        :slidesPerView="3"
        :spaceBetween="30"
        :pagination="{
          clickable: true,
        }"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide v-for="(item, i) in state.musicLists" :key="i">
          <router-link :to="{ path: 'listview', query: { id: item.id } }">
            <div class="musciContent">
              <img :src="item.picUrl" :alt="item.name" />
              <span class="iconfont icon-24gl-play">{{
                changeValue(item.playCount)
              }}</span>
            </div>
            <span class="contentName">{{ item.name }}</span>
          </router-link>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { getGoodMusicLists } from "@/api/index.js";
import { reactive, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";


// 采用vue3合成api中setup实现
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup(props,{emit}) {
    let state = reactive({
      musicLists: []
    });
    function changeValue(number) {
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
    }
    onMounted(async () => {
      // 获取推荐歌单列表
      let res = await getGoodMusicLists();
      state.musicLists = res.data.result;
    });
    return {
      state,
      changeValue,
    };
  },
};
</script>

<style lang="less" scoped>
.goodMusicList {
  width: 100%;
  .goodMusicList-top {
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-between;
    padding: 0 0.25rem;
    align-items: center;
    .title {
      font-size: 0.4rem;
      font-weight: bold;
    }
    .more {
      display: block;
      width: 1.5rem;
      height: 0.5rem;
      text-align: center;
      line-height: 0.5rem;
      border: 0.01rem solid #000;
      border-radius: 0.1rem;
    }
  }
  .goodMusicList_botton {
    width: 100%;
    padding: 0 0.25rem;
    .swiper {
      width: 100%;
      height: 2.8rem;
      .musciContent {
        position: relative;
        width: 2rem;
        height: 2rem;
        img {
          width: 2rem;
          height: 2rem;
        }
        .iconfont {
          position: absolute;
          top: 0.1rem;
          right: 0.1rem;
          display: inline-block;
          padding: 0 0.05rem;
          border-radius: 0.1rem;
          background: rgba(0, 0, 0, 0.5);
          font-size: 0.1rem;
          color: #fff;
        }
      }
      .contentName {
        display: block;
        width: 2rem;
        font-size: 0.2rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
    }
  }
}
</style>