<template>
  <div>
    <!-- Style内联样式绑定 -->
    <!-- 1.放置字符串 -->
    <h1 :style="msg">Hello World!</h1>
    <!-- 2.对象语法 -->
    <h1 :style="st">Hello Vue!1</h1>
    <button @click="toggleActive" :style="curpor">切换active</button>
    <!-- 3.数组语法 -->
    <h1 :style="[msg1,msg2]">Hello Vue!2</h1>
    <!-- 4.对象和数组结合 -->
    <h1 :style="[msg3, st]">Hello Vue!3</h1>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      msg: "color:blue;",
      msg1:'background-color:blue',
      msg2:'color:white',
      msg3:'border:3px solid green',
      st:{
        color: "green",
        fontSize: 60+ 'px',
        'background-color':'blue'
      },
      isActive: true,
      curpor: "cursor: pointer;user-select: none;",
      arr: ["swiper", "active"],
    };
  },
  methods: {
    toggleActive: function () {
      this.st.color=='green'?this.st.color='red':this.st.color='green'
    },
  },
};
</script>

<style>
.active {
  color: red;
}
.swiper {
  font-size: 50px;
}
</style>

