<template>
<!-- 列表渲染 -->
  <div>
    <ol>
      <!-- 循环字符串数组 -->
      <li v-for="(item,i) in news" :key="i">{{item}}-->{{i}}</li>
    </ol>
    <ol>
      <!-- 循环对象数组 -->
      <li v-for="(item,i) in news1" :key="i">{{item.title}}--{{item.tag}}--{{item.num}}</li>
    </ol>
    <ol>
      <!-- 循环对象 item是属性 i是值-->
      <li v-for="(item,i) in my" :key="i">{{item}}--{{i}}</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "App",
  data(){
    return{
      news:[
        '教育',
        '体育',
        '娱乐',
        '音乐'
      ],
      news1:[
        {
          title:"娱乐圈",
          tag:"废",
          num:'450万'
        },{
          title:"俱乐部",
          tag:"唔",
          num:'32万'
        },{
          title:"演艺圈",
          tag:"紦",
          num:'50万'
        }
      ],
      my:{
        name:'萝茗',
        age:20,
        sex:'男'
      }
    }
  },
  methods:{
    
  }
};
</script>

<style>
  li{
    text-align: left;
  }
</style>
