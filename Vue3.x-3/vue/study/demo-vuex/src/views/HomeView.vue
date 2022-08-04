<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>状态管理</h1>
    <h2>{{ $store.state.num }}</h2>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>
