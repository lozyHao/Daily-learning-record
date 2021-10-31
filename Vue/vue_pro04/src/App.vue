<template>
  <div>
    <h1>Ajax请求</h1>
    <div v-for="(item, i) in store.state.duanziList" :key="i">
      <p>{{ item.text }}</p>
    </div>
  </div>
</template>

<script>
// 导入全局配置
import store from "./store/index.js";
import axios from "axios";

export default {
  provide: {
    store,
  },
  setup() {
    let api = "https://api.apiopen.top/getJoke?page=1&count=10&type=video";
    // 1.使用fatch()方法获取
    // fetch(api)
    //   .then((res) => res.json())
    //   .then((result) => {
    //     store.setDzList(result.result);
    //     console.log(result.result);
    //   });
    // 2.通过axios()方法获取数据
    axios.get(api).then((res) => {
      store.setDzList(res.data.result);
      console.log(res);
    });
    return {
      store,
    };
  },
};
</script>
