<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <h2>{{msg}}</h2>
    <button @click="msg='萝茗在学Vue！——2022.02.06'">点击修改</button>
    <h2 v-if="isShow">显示/影藏</h2>
    <button @click="isShowClick">点击更新</button>
  </div>
</template>

<script>

export default {
  name: "App",
  data(){
    return {
      msg:"萝茗在学Vue！",
      isShow:true
    }
  },
  methods:{
    isShowClick(){
      this.isShow=!this.isShow;
    }
  },
  beforeCreate() {
    console.log("beforeCreate:数据初始化之前");
  },
  created() {
    console.log("create:数据初始化之前");
  },
  beforeMount() {
    console.log("beforeMounte：挂在渲染之前");
  },
  mounted() {
    console.log("mounted:挂载渲染之后");
  },
  beforeUpdate() {
    console.log("beforeUpdate:更新之前");
  },
  updated() {
    console.log("update:更新之后");
  },
  beforeUnmount() {
    console.log("beforeDestroy:销毁之前");
  },
  unmounted() {
    console.log("destroy:销毁之后");
  },
};
</script>
