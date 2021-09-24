<template>
  <div>
    <!-- class类名的多种操作 -->
    <!-- 1.放置字符串 -->
    <h1 :class="msg">Hello World!</h1>
    <!-- 2.对象语法 -->
    <h1 :class="{active:isActive}">Hello Vue!1</h1>
    <h1 @click="toggleActive" :style="curpor">切换active</h1>
    <!-- 3.数组语法 -->
    <h1 :class="arr">Hello Vue!2</h1>
    <!-- 4.对象和数组结合 -->
    <h1 :class="['swiper',{active:isActive}]">Hello Vue!3</h1>

  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      msg: "active",
      isActive:true,
      curpor:"cursor: pointer;user-select: none;",
      arr:['swiper','active']
    };
  },
  methods:{
    toggleActive:function(){
      this.isActive=!this.isActive //取反
    }
  }
};
</script>

<style>
.active{
  color: red;
}
.swiper{
  font-size: 50px;
}
</style>

