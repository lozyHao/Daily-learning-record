<template>
  <div>
    <router-view />
    <play-controller></play-controller>
  </div>
</template>

<script>
import playController from "@/components/playController.vue";

export default {
  components: {
    playController,
  },
  mounted() {
    let userData = JSON.parse(localStorage.userData);
    this.$store.commit("setUser", userData);
  },
};
</script>

<style lang="less">
// 全局布局配置
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.iconfont {
  font-size: 0.3rem;
}
a {
  color: #333;
  text-decoration: none;
}
</style>
