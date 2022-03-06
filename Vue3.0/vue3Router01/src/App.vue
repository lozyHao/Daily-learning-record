<template>
  <div>
    <!-- 路由 -->
    <p class="nav">
      <router-link class="navS" to="/">首页</router-link>
      <router-link class="navS" to="/about">关于</router-link>
      <!-- 动态路由 -->
      <router-link class="navS" to="/news/小明上学记">新闻</router-link>
      <router-link class="navS" to="/user/123/hengban">用户</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
.nav {
  display: block;
  width: 100%;
  height: 50px;
  text-align: center;
  background: darkcyan;
}
.nav > .navS {
  display: inline-block;
  margin: 0 20px;
  line-height: 50px;
  color: #fff;
  text-decoration: none;
}
</style>