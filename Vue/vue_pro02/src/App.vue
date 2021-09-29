<template>
  <div>
    <!-- 3.调用组件 -->
    <Header></Header>
    <!-- 4.组件复用 -->
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
    <!-- 5.通过 prop 向子组件传递数据 -->
    <News :content="newsCount" :msg="msg" />
    <!-- 6.通过 $emit 方法 子组件传递数据给父组件，自定义事件 -->
    <Login @sendParentMsg="sendChildMsg"></Login>
    <h2>从子组件获取的值为：{{ msg }}</h2>
  </div>
</template>

<script>
// 1.导入组件

import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";
import News from "./components/News.vue";
import Login from "./components/Login.vue";
export default {
  name: "App",
  data() {
    return {
      newsCount: "振兴中华",
      msg: "",
    };
  },
  // 2.注册组件
  components: {
    Header,
    Main,
    Footer,
    News,
    Login,
  },
  methods: {
    sendChildMsg(value) {
      console.log(value);
      this.msg = value;
    },
  },
};
</script>
