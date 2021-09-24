<template>
  <div>
    <!-- 动态指令 -->
    <a v-bind:[attributeName]="d1"> 123456789 </a>
    <button @click="toggleColor">点击切换颜色</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      attributeName:"class",
      d1:'d1'
    };
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

