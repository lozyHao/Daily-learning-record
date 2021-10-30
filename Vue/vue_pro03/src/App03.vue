<template>
  <div>
    <!-- 合成api 详解 -->
    <h1 @click="changeMsg">计数：{{ count }}</h1>
    <!-- ref -->
    <h1 @click="num++">计数：{{ num }}</h1>
    <h1 @click="changeNum">计数：{{ num }}</h1>
    <!-- reactive -->
    <h1>用户名：{{ user.username }} / 年龄：{{ user.age }}</h1>
    <!-- toRefs -->
    <h1 @click="changeAge">用户名：{{ username }} / 年龄：{{ age }}</h1>
    <h1>年龄反转 :{{ reverseType }}</h1>
  </div>
</template>

<script>
// 导入ref(响应变量), reactive(响应对象)，toRefs(将 reactive ---> ref), computed(计算属性), watchEffect(监听指定数据发生改变)，watch(单独监听)
import { ref, reactive, toRefs, computed, watchEffect, watch } from "vue";
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
    // 对象
    const user = reactive({
      username: "小明",
      age: 30,
      type: "超级帅",
      reverseType: computed(() => {
        return user.type.split("").reverse().join("");
      }),
    });
    function changeAge() {
      user.age = 25;
    }
    // 监听指定数据变化
    watchEffect(() => {
      console.log("发生改变触发1" + user.age);
    });
    // 单独监听
    watch(num, (newNum, preNum) => {
      console.log(newNum, preNum);
      console.log("发生改变触发2");
    });
    // 多个监听
    watch([num, user], (newNum, preNum) => {
      console.log(newNum, preNum);
      console.log("发生改变触发3");
    });
    return { num, changeNum, user, ...toRefs(user), changeAge };
  },
};
</script>
