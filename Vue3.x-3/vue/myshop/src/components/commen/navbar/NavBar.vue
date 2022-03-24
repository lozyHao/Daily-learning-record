<template>
  <div class="navBar">
    <div class="left" @click="goBack">
      <slot name="left">
        <span class="iconfont icon-fanhui"></span>
      </slot>
    </div>
    <div class="center">
      <slot>萝茗书库</slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  name: "NavBar",
  setup() {
    const router = useRouter();
    const goBack = () => {
      router.go(-1);
    };

    return {
      goBack,
    };
  },
};
</script>
<style lang="scss" scoped>
.navBar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 50px;
  align-items: center;
  background: var(--color-tint);
  display: flex;
  justify-content: space-between;
  color: #fff;
  z-index: 9;
  div {
    height: 40px;
    line-height: 40px;
    letter-spacing: 2px;
  }
  .left {
    margin-left: 10px;
    .iconfont {
      font-size: 20px;
    }
  }
  .right {
    margin-right: 10px;
  }
}
</style>