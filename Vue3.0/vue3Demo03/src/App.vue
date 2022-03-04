<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3.0 + Vite" />

    <!-- 1.绑定点击事件 -->
    <h1 class="name" @click="changeName">{{ msg }}</h1>
    <!-- 2.v-once 一次改变之后不会再改变 -->
    <h1 class="name" @click="changeName" v-once>{{ msg }}</h1>
    <!-- 3.双向绑定 -->
    <input type="text" v-model="msg" />
    <!-- 4.插入html内容 -->
    <p v-html="html1"></p>
    <!-- 5.v-bind 属性绑定 ( 简写 ：) -->
    <div v-bind:id="id" @click="changeColor">颜色属性绑定，点击切换颜色</div>
    <!-- 6.js表达式语法 -->
    <div>字符串颠倒：{{ msg1.split("").reverse().join("") }}</div>
    <h3>{{ id == "d1" ? "难过" : "开心" }}</h3>
    <!-- 7.动态指令，绑定属性是动态变化的 -->
    <div :[attributeName]="id2" @click="changeColor1">
      动态指令，点击切换颜色
    </div>

    <!-- 8.计算属性（缓存结果，刷新页面直接获取结果，不用重新计算） -->
    <div>{{ getNum1 }}</div>
    <!-- 9.侦听器 -->
    <input type="text" v-model="msg" />
    <p>{{ msg }}</p>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
// 命令式渲染,直接给定
// document.querySelector("h1").innerHTML="萝茗"；

// 声明式渲染，通过提前声明变量
export default {
  name: "App",
  // 数据
  data() {
    return {
      num: 1,
      msg: "萝茗",
      msg1: "Hello Vue",
      html1: "<h3 style='color:red;'>萝茗在学习Vue</h3>",
      id: "d1",
      id2: "d1",
      attributeName: "class",
    };
  },
  // 导入组件
  components: {
    HelloWorld,
  },
  // 方法
  methods: {
    changeName() {
      this.msg = "萝茗&乔穗";
    },
    changeColor() {
      this.num++;
      if (this.num % 2 == 0) {
        this.id = "d2";
      } else {
        this.id = "d1";
      }
    },
    changeColor1() {
      this.attributeName = "id";
    },
  },
  computed: {
    getNum1() {
      return 4 * 4;
    },
  },
  watch: {
    // 监听值的变化
    msg: function (newValue, oldValue) {
      console.log(newValue, oldValue);
      if (newValue.length < 10) {
        alert("输入的值太少");
      }
    },
  },
};
</script>

<style>
.name {
  cursor: pointer;
}
.d1 {
  cursor: pointer;
  color: blue;
}
#d1 {
  cursor: pointer;
  color: red;
}
#d2 {
  cursor: pointer;
  color: green;
}
</style>
