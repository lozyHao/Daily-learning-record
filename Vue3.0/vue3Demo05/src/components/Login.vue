<template>
  <div>
    <input type="text" v-model="username" />
    <button @click="sendMsg">提交数据给父组件</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
    };
  },
  methods: {
    sendMsg: function () {
      // 触发自定义事件，$emit(事件名称，向父组件发送事件的参数)
      this.$emit("sendParentMsg", this.username);
    },
  },
};
</script>