<template>
  <div class="home">
    <top-nav></top-nav>
    <swiper></swiper>
    <icon-list></icon-list>
    <recommend-song-list></recommend-song-list>
  </div>
</template>
<script>
import topNav from "@/components/topNav.vue";
import swiper from "@/components/swiper.vue";
import iconList from "@/components/iconList.vue";
import recommendSongList from "@/components/recommendSongList.vue";
export default {
  name: "Home",
  components: {
    topNav,
    swiper,
    iconList,
    recommendSongList,
  },
};
</script>

<style lang="less" scoped>
</style>