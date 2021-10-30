<template>
  <div id="app">
    <p>
      <!-- 路由跳转到对应页面内容 -->
      <!-- <router-link to="/">Go to Home</router-link>
      <router-link to="/about">Go to About</router-link>
      <router-link to="/news/456456456">Go to News</router-link> -->
    </p>
    <!-- 显示对应路径的组件 -->
    <router-view name="ShopTop"></router-view>
    <router-view></router-view>
    <router-view name="ShopFooter"></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>
