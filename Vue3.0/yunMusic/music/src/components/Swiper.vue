<template>
  <div class="swiper-container">
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :loop="true"
      :pagination="{ clickable: true }"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }"
      class="mySwiper"
    >
      <swiper-slide v-for="(item, i) in imgs" :key="i">
        <img :src="item.pic" alt="" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { getBanner } from "@/api/index.js";

import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default {
  data: function () {
    return {
      imgs: [],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination],
    };
  },
  async mounted() {
    //   轮播图图片列表
    let res = await getBanner();
    this.imgs = res.data.banners;
  },
};
</script>

<style lang="less">
.swiper-container {
  width: 95%;
  height: 3rem;
  margin: 0.2rem auto;
  border-radius: 0.2rem;
  .swiper {
    width: 100%;
    height: 100%;
    border-radius: 0.2rem;
    text-align: center;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>