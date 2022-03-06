<template>
  <div>
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
    <!-- 将值发送给子组件 -->
    <New :content="newsCount" :msg="msg"></New>

    <!-- 获取子组件发送过来的值 -->
    <Login @sendParentMsg="sendChildMsg"></Login>
    <h2>从子组件获取的值为：{{ msg }}</h2>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";
import New from "./components/New.vue";
import Login from "./components/Login.vue";

export default {
  name: "App",
  data() {
    return {
      newsCount: "振兴中华",
      msg: " ",
    };
  },
  components: {
    Header,
    Main,
    Footer,
    New,
    Login,
  },
  methods: {
    sendChildMsg(value) {
      this.msg = value;
    },
  },
};
</script>
