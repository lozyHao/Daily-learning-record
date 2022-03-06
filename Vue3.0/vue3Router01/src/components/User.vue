<template>
  <div>
    <h2>用户界面</h2>
    <!-- 嵌套路由 -->
    <router-link to="/">首页</router-link>
    <router-link to="/user/123/shuban">竖版页面</router-link>
    <router-link to="/user/123/hengban">横版页面</router-link>
    <!-- 路由页面展示 -->
    <router-view></router-view>
  </div>
</template>