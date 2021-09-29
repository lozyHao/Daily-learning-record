<template>
  <div>
    <!-- 合成api -->
    <h1 @click="changeMsg">计数：{{ count }}</h1>
    <h1 @click="num++">计数：{{ num }}</h1>
    <h1 @click="changeNum">计数：{{ num }}</h1>
  </div>
</template>

<script>
// 导入ref
import { ref } from "vue";
export default {
  name: "App",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    changeMsg() {
      this.count++;
    },
  },
  // 引入setup()组件
  setup() {
    const num = ref(0);
    function changeNum() {
      num.value += 10;
    }
    return { num, changeNum };
  },
};
</script>
