<template>
  <div>
    <h1>用户名：{{ user.username }} / 年龄：{{ user.age }}</h1>
    <h1 @click="changeAge">用户名：{{ username }} / 年龄：{{ age }}</h1>
    <h1>年龄反转 :{{ reverseType }}</h1>

    <!-- 使用组件 通过 prop 向子组件传递数据-->
    <User :username="username" :age="age" :type="type"></User>
    <Student></Student>
  </div>
</template>

<script>
// 导入ref(响应变量), reactive(响应对象)，toRefs(将 reactive ---> ref), computed(计算属性), watchEffect(监听指定数据发生改变)，watch(单独监听)
import {
  ref,
  reactive,
  toRefs,
  computed,
  watchEffect,
  watch,
  provide,
} from "vue";
// 导入组件
import User from "./components/User.vue";
import Student from "./components/Student.vue";

export default {
  name: "App",
  data() {
    return {
      count: 0,
    };
  },
  // 引入组件
  components: {
    User,
    Student,
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

    // 学生对象
    const student = reactive({
      name: "小红",
      classname: "305班",
    });

    provide("student", student);

    return { num, changeNum, user, ...toRefs(user), changeAge };
  },
};
</script>
