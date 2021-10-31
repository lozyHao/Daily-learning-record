<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
// 导入全局配置
import store from "./store/index.js";
export default {
  name: "App",
  components: {
    HelloWorld,
  },
  provide: {
    store,
  },
};
</script>
