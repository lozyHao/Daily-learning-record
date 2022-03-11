<template>
  <div>
    <router-view />
    <play-controller></play-controller>
  </div>
</template>

<script>
import PlayController from '@/components/others/PlayController.vue'
export default {
  components:{
    PlayController
  },
  mounted() {
    let userData = JSON.parse(localStorage.userData);
    this.$store.commit("setUser", userData);
  },
}
</script>


<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "微软雅黑";
}
body{
  width: 100%;
  min-height: 100vh;
}
.iconfont {
  font-size: 0.5rem;
}
a {
  color: #333;
  text-decoration: none;
}
</style>
