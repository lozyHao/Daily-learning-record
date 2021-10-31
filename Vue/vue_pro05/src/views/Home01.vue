// 状态管理
<template>
  <div class="home">
    <h1>数量：{{ $store.state.count }} 件</h1>
    <h1>单价：100 元/件</h1>
    <h1>总价：{{ $store.getters.totalPrice }} 元</h1>
    <button @click="changeEvent">点击增加</button>

    <h1>段子列表</h1>
    <p v-for="(item, i) in $store.state.dzList" :key="i">{{ item.text }}</p>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  methods: {
    changeEvent: function () {
      // commit 触发 mutations里面的方法
      // this.$store.commit("setCount"); //无参
      this.$store.commit("setCountNum", 3); //有参
    },
  },
  // 触发 actions 里面的方法
  mounted: function () {
    this.$store.dispatch("getDz");
  },
};
</script>
