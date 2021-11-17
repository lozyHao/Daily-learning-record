<template>
  <div class="swiper">
    <el-carousel
      height="3rem"
      interval="5000"
      arrow="never"
      indicator-position="none"
    >
      <el-carousel-item v-for="item in imgs" :key="item">
        <img :src="item.pic" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
import Swiper from "../components/swiper.vue";
import axios from "axios";
import { getBanner } from "@/api/index.js";
export default {
  name: "Swiper",
  data: function () {
    return {
      imgs: [],
    };
  },
  components: {
    Swiper,
  },
  async mounted() {
    //   轮播图图片列表
    let res = await getBanner();
    this.imgs = res.data.banners;
  },
};
</script>

<style lang="less" scoped>
.el-carousel {
  width: 95%;
  margin: 10px auto;
  border-radius: 10px;
  background: #ccc;
}
.el-carousel img {
  width: 100%;
  height: 3rem;
}
.el-carousel__item h3 {
  height: 3rem;
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>