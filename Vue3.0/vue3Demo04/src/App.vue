<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>表单输入绑定</h1>
    <!-- 1.输入框 -->
    <input type="text" v-model="searchKey" @keydown.enter="searchEvent" /><br />
    <textarea
      name="textarea"
      id=""
      cols="30"
      rows="10"
      v-model="lineText"
      @keydown.enter="lineEvent"
    ></textarea
    ><br />
    <!-- 2.复选框 -->
    <input type="checkbox" id="checkbox" v-model="checked" value="石榴" />
    <label for="checkbox">石榴</label><br />
    <h2>是否选中:{{ checked }}</h2>
    <!-- 3.多个复选框 -->
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames" />
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
    <label for="mike">Mike</label>
    <br />
    <h2>选中的名字: {{ checkedNames }}</h2>
    <!-- 4.单选框 -->
    <input type="radio" id="one" value="One" v-model="picked" />
    <label for="one">One</label>
    <br />
    <input type="radio" id="two" value="Two" v-model="picked" />
    <label for="two">Two</label>
    <br />
    <h2>Picked: {{ picked }}</h2>
    <!-- 5.单选下拉框 -->
    <select v-model="selected1">
      <option disabled value="">Please select one</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <h2>Selected: {{ selected1 }}</h2>
    <!-- 6.多选下拉框 -->
    <select v-model="selected2" multiple>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <h2>Selected: {{ selected2 }}</h2>

    <!-- 7.值绑定——获取是否选中的内容 -->
    <input
      type="checkbox"
      id="checkbox"
      v-model="like"
      true-value="喜欢"
      false-value="不喜欢"
    />
    <label for="like">Like</label>
    <h2>{{ like }}</h2>

    <!-- 8.修饰符 -->
    <!-- 8.1 lazy /input失去焦点后再变化值，提高了性能 -->
    <input type="text" v-model.lazy="searchKey" @keydown.enter="searchEvent" /><br />
    <h2>{{searchKey}}</h2>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      searchKey: "百度一下",
      lineText: "",
      checked: "false",
      checkedNames: [],
      picked: "",
      selected1: "",
      selected2: [],
      like:''
    };
  },
  methods: {
    searchEvent() {
      console.log(this.searchKey);
    },
    lineEvent() {
      console.log(this.lineText);
    },
  },
};
</script>
