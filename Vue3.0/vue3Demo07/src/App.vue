<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>{{num}}</h1>
    <button @click="changeEvent">计数</button>
    <h1>用户姓名：{{user.name}} / 年龄：{{user.age}} / 性别：{{user.gender}}</h1>
    <h1>{{user.getString}}</h1>
    <button @click="changeUser">更改用户信息</button>
  </div>
</template>

<script>
// 合成API使用
// 导入ref(响应变量), reactive(响应对象)，toRefs(将 reactive ---> ref), computed(计算属性), watchEffect(监听指定数据发生改变)，watch(单独监听)
import {ref,computed} from 'vue';
export default {
  name: "App",
  data(){
    return {}
  },
  methods:{
    
  },
  setup(){
    const num=ref(0);
    const user=ref({
      name:"萝茗",
      age:22,
      gender:"男",
      getString:computed(()=>{
        return `用户姓名：${user.value.name}—年龄：${user.value.age}—性别：${user.value.gender}`;
      })
    });
    function changeEvent(){
      num.value+=1;
    }
    function changeUser(){
        user.value.name="萝茗&乔穗"
      }
    return {num,changeEvent,user,changeUser}
  }
};
</script>
