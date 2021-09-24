<template>
  <div>
    <!-- 计算属性 -->
    <div class="d1">{{msg.split('').reverse().join('')}}</div>
    <div :id="reverseMsg" class="d1">{{reverseMsg}}</div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      msg:"hello Vue!"
    };
  },
  computed:{
    reverseMsg:function(){
      return this.msg.split('').reverse().join('');
    }
  },
  methods:{
    toggleColor:function(){
      this.attributeName='id'
    }
  }
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

