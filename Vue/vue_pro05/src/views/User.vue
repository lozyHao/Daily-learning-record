<template>
  <div>
    <h1>用户界面</h1>
    <h3>姓名：{{ $store.state.user.name }}</h3>
    <h3>年龄：{{ $store.state.user.age }}</h3>
    <h3>描述：{{ $store.getters.descrption }}</h3>
    <button @click="changeName">异步修改姓名</button>
    <button @click="changeAge">异步修改年龄</button>
  </div>
</template>

<script>
export default {
  methods: {
    changeName: function () {
      this.$store.dispatch("asyncSetName");
    },
    changeAge: function () {
      this.$store.dispatch("asyncSetAge");
    },
  },
  mounted: function () {
    console.log(this.$store);
  },
};
</script>