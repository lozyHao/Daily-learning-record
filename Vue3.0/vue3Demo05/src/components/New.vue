<template>
  <div>
    <h3>从父组件获取的值——新闻内容是：{{ content }}</h3>
    <h3>从父组件获取的值——新闻内容是：{{ msg }}</h3>
  </div>
</template>

<script>
export default {
  // 接收父组件的参数值
  props: ["content","msg"],
};
</script>