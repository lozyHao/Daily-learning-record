<template>
  <div>
    <h1>新闻内容是：{{ content }}</h1>
    <h1>登录名是：{{ msg }}</h1>
  </div>
</template>

<script>
export default {
    // 接收父组件的参数值
  props: ["content", "msg"],
};
</script>