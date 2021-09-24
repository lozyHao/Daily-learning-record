// HTML 标签
<template>
  <div>
    <h1>{{ msg }}</h1>
    <!-- v-once 禁止改变 -->
    <h1 @click="changeMsg" v-once>{{ msg }}</h1>
    <!-- 双向绑定  v-model="msg" -->
    <input type="text" v-model="msg" />
    <!-- v-html 内容是标签 -->
    <div>{{ content }}</div>
    <div v-html="content"></div>
    <!-- v-bind 绑定属性内容 -->
    <div :id="id"></div>
    <div v-bind:id="id"></div>
    <!-- js语法 -->
    <h2>{{1+3}}</h2>
    <h2>{{msg.split('')}}</h2>
  </div>
</template>

// js 代码
<script>
// 命令式
// document.querySelector('h1').innerHTML='HELLOWORLD'

// 声明式
export default {
  name: "App",
  data() {
    return {
      msg: "Helloworld",
      content: "<h1>标题1</h1><h2>标题2</h2>",
      id: "d1",
    };
  },
  methods: {
    changeMsg: function () {
      this.msg = "123456789";
      this.id = "d2";
    },
  },
};
</script>

// css样式
<style>
#d1 {
  width: 100px;
  height: 100px;
  background: darkcyan;
}
#d2 {
  width: 100px;
  height: 100px;
  background: darkmagenta;
}
</style>

