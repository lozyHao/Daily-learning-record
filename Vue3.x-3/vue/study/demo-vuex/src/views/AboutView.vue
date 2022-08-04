<template>
  <div class="about">
    <h1>状态管理</h1>
    <h2>{{$store.state.num}}</h2>
    <button @click="add">加法</button>
    <button @click="sub">减法</button>
  </div>
</template>

<script>
export default{
  name: "AboutView",
  methods:{
    add(){
      this.$store.commit("add")
    },
    sub(){
      this.$store.commit("sub")
    }
  }
}
</script>