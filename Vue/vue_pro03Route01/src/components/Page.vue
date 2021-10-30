<template>
  <div>
    <h2>这是Page页面，学习Vue</h2>
    <button @click="goPage">跳转页面</button>
    <button @click="replacePage">替换页面</button>
    <button @click="$router.go(1)">前进</button>
    <button @click="$router.go(-1)">后退</button>
  </div>
</template>

<script>
export default {
  methods: {
    goPage() {
      //   1.无参跳转
      //   this.$router.push("/");
      //   this.$router.push("/about");
      //   2.携带参数跳转
      //   2.1 通常情况下
      //   this.$router.push({
      //     path: "/news/123456",
      //   });
      //   2.2 如果配置路由中含有名字name，可使用以下方法
      //   this.$router.push({
      //     name: "news",
      //     params: { id: 78950 },
      //   });
      //   3.带问号携带参数跳转
      this.$router.push({
        path: "/",
        query: {
          search: "小明",
        },
      });
    },
    replacePage() {
      this.$router.replace({
        path: "/",
        query: {
          search: "小明",
        },
      });
    },
  },
  // 导航守卫——组件内使用
  beforeRouteEnter(to, from) {
    // 路由进入
    console.log("路由进入");
  },
  beforeRouteUpdate(to, from) {
    // 路由更新
    console.log("路由更新");
  },
  beforeRouteLeave(to, from) {
    // 路由离开
    console.log("路由离开");
  },
};
</script>