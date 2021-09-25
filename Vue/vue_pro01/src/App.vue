<template>
<!-- 事件处理 -->
  <div>
    <h1 :style="{color:color}">{{num}}</h1>
    <!-- 绑定事件，不需要参数 -->
    <button @click="addEvent">点击+2</button>
    <!-- 绑定事件 直接处理表达式 -->
    <button @click="num+=2">点击+2</button>
    <!-- 绑定事件 传递参数 -->
    <button @click="addNumEvent(10)">点击+10</button>
    <button @click="addNumEvent1(20,$event)">点击+20</button>

    <!-- 多事件绑定 -->
    <button @click="addEvent(),changeColor()">点击+2 / 改变颜色</button>

    <!-- 事件修饰符 -->
    <!-- once -->
    <button @click.once="addEvent(),changeColor()">点击+2 / 改变颜色 / 只能点击一次</button>

    <!-- 按键修饰符 -->
    <br><input @keyup.enter="submit($event)" />
  </div>
</template>

<script>
export default {
  name: "App",
  data(){
    return{
      num:0,
      color:'red'
    }
  },
  methods:{
    addEvent:function(){
      this.num+=2
    },
    addNumEvent:function(number){
      this.num+=number
    },
    addNumEvent1:function(number,event){
      console.log(event);
      this.num+=number
    },
    changeColor:function(){
      this.color=='red'?this.color='blue':this.color='red'
    },
    submit:function(event){
      console.log(event);
    }
  }
};
</script>
