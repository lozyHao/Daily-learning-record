<template>
  <div class="recommend">
    <div
      class="item"
      v-for="(item, i) in recommends.slice(0, 4)"
      :key="i"
      @click="itemClick(item.id)"
    >
      <img v-lazy="item.cover_url" alt="" />
      <span>{{ item.title }}</span>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "Recommend",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  setup() {
    let router = useRouter();

    // 跳转至详情页
    let itemClick = (id) => {
      router.push({
        path: "/detail",
        query: { id },
      });
    };

    return {
      itemClick
    };
  },
};
</script>

<style lang="scss" scoped>
.recommend {
  width: 100%;
  //   height: 200px;
  border-bottom: 5px solid #ddd;
  display: flex;
  justify-content: space-around;
  padding: 20px 0;
  div {
    width: 24%;
    img {
      width: 100%;
      height: auto;
    }
    span {
      font-size: 12px;
    }
  }
}
</style>