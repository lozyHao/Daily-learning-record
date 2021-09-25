<template>
<!-- 条件渲染 -->
  <div>
    <h1 v-if="user=='vip'">超级用户</h1>
    <h1 v-else>普通用户</h1>
    <h1 v-show="isShow">切换显示/隐藏</h1>
    <button @click="toggleUser">{{con}}</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data(){
    return{
      user:"vip",
      con:"vip过期",
      isShow:true
    }
  },
  methods:{
    toggleUser:function(){
      this.user=="com"?this.user="vip":this.user="com";
      this.con=="vip过期"?this.con="充值vip":this.con="vip过期";
      this.isShow=!this.isShow
    }
  }
};
</script>
