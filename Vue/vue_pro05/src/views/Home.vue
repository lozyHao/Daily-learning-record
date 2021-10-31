// 映射状态数据和方法
<template>
  <div class="home">
    <h1>数量：{{ count }} 件</h1>
    <h1>数量：{{ produetCount }} 件</h1>
    <h1>数量：{{ $store.state.count }} 件</h1>
    <h1>单价：100 元/件</h1>
    <h1>总价：{{ $store.getters.totalPrice }} 元</h1>
    <button @click="changeEvent">点击增加</button>
    <button @click="setCountNum(5)">更改数据</button>

    <h1>段子列表</h1>
    <p v-for="(item, i) in $store.state.dzList" :key="i">{{ item.text }}</p>
  </div>
</template>

<script>
// 导入映射状态数据和方法的相关方法
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "Home",
  components: {},
  computed: {
    // 数据映射
    ...mapState(["count"]),
    ...mapState({
      produetCount: (state) => state.count,
    }),
    ...mapGetters(["totalPrice"]),
  },
  methods: {
    changeEvent: function () {
      this.$store.commit("setCountNum", 3); //有参
    },
    // 映射方法
    ...mapMutations(["setCountNum"]),
    ...mapActions(["getDz"]),
  },
  // 触发 actions 里面的方法
  mounted: function () {
    this.$store.dispatch("getDz");
  },
};
</script>
