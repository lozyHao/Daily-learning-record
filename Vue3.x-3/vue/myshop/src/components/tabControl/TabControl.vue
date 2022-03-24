<template>
  <div class="tabControl">
    <div class="tab">
      <div
        class="tab-item"
        v-for="(item, i) in titles"
        :key="i"
        @click="itemClick(i)"
      >
        <span class="name" :class="{ active: i == currentIndex }">{{
          item
        }}</span>
        <span class="bon" :class="{ active: i == currentIndex }"></span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  setup(props, { emit }) {
    // 导航点击处理
    let currentIndex = ref(0);

    let itemClick = (index) => {
      currentIndex.value = index;
      // 将选项传递给父组件
      emit("tabClick", index);
    };

    return {
      currentIndex,
      itemClick,
    };
  },
};
</script>

<style lang="scss" scoped>
.tabControl {
  width: 100%;
  height: 40px;
  background: #fff;
//   新增属性，上划位置悬浮
  position: sticky;
  top: 50px;
  z-index: 10;
  .tab {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .tab-item {
      height: 40px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      .bon {
        display: block;
        width: 100%;
        height: 2px;
        background: var(--color-tint);
        opacity: 0;
        transition: 0.3s;
      }
      .active {
        opacity: 1;
        color: var(--color-tint);
      }
    }
  }
}
</style>