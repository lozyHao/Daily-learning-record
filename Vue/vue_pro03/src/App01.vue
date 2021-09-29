<template>
  <div>
    <!-- 生命周期 -->
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld :msg="msg" v-if="isShow" />
    <button @click="changeMsg">点击修改</button>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  data() {
    return {
      msg: "Hello Vue 3.0 + Vite",
      isShow: true,
    };
  },
  methods: {
    changeMsg() {
      (this.msg = "My Vue！"), (this.isShow = !this.isShow);
    },
  },
  components: {
    HelloWorld,
  },
  beforeCreate() {
    console.log("beforeCreate:数据初始化之前");
  },
  created() {
    console.log("create:数据初始化之前");
  },
  beforeMount() {
    console.log("beforeMounte：挂在渲染之前");
  },
  mounted() {
    console.log("mounted:挂载渲染之后");
  },
  beforeUpdate() {
    console.log("beforeUpdate:更新之前");
  },
  updated() {
    console.log("update:更新之后");
  },
  beforeUnmount() {
    console.log("beforeDestroy:销毁之前");
  },
  unmounted() {
    console.log("destroy:销毁之后");
  },
};
</script>
