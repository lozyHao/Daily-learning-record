<template>
  <div class="home">
    <loading v-if="isLoading"></loading>
    <top-nav></top-nav>
    <swiper></swiper>
    <icon-list></icon-list>
    <good-music-list></good-music-list>
  </div>
</template>

<script>
import TopNav from "@/components/TopNav.vue";
import Swiper from "@/components/Swiper.vue";
import IconList from "@/components/IconList.vue";
import GoodMusicList from "@/components/GoodMusicList.vue";
import Loading from "@/components/others/Loading.vue";
import { ref } from "vue";
export default {
  name: "HomeView",
  components: {
    Loading,
    TopNav,
    Swiper,
    IconList,
    GoodMusicList,
  },
  setup() {
    let isLoading = ref(true);
    setTimeout(() => {
       isLoading.value=false;
    }, 1000);
    return {
      isLoading,
    };
  },
};
</script>

<style lang="less" scoped>
.home{
  padding-bottom: 2rem;
}
</style>
