<template>
  <div>
    <h1>{{ msg }}</h1>
    <button @click="count++">count is: {{ count }}</button>
    <p>
      Edit <code>components/HelloWorld.vue</code> to test hot module
      replacement.
    </p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      count: 0,
    };
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
