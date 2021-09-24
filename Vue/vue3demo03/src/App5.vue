<template>
  <div>
    <div class="d1">{{ msg.split("").reverse().join("") }}</div>
    <div :id="reverseMsg" class="d1">{{ reverseMsg }}</div>
    <!-- 侦听器 -->
    <input type="text" v-model="msg" />
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      msg: "hello Vue!123456",
    };
  },
  computed: {
    reverseMsg: function () {
      return this.msg.split("").reverse().join("");
    },
  },
  watch: {
    // 监听值的变化
    msg: function (newValue, oldValue) {
      console.log(newValue, oldValue);
      if (newValue.length < 10) {
        alert("输入的值太少");
      }
    },
  },
};
</script>

<style>
.d1 {
  width: 100px;
  height: 100px;
  background: rgb(153, 96, 30);
}
#d1 {
  width: 100px;
  height: 100px;
  background: darkcyan;
}
</style>

