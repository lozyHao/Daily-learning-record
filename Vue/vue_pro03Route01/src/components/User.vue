<template>
  <div>
    <h1>User页面</h1>
    <router-link to="/">首页</router-link>
    <router-link to="/user/shuban">竖版页面</router-link>
    <router-link to="/user/hengban">横版页面</router-link>
    <router-view></router-view>
  </div>
</template>