<template>
  <!-- 表单输入绑定 -->
  <div>
    <h1>基本使用===></h1>
    <!-- 输入框 text/textarea -->
    <input v-model="searchKey" />
    <h2>Multiline message is:{{ searchKey }}</h2>
    <textarea v-model="lineText" cols="20" rows="3"></textarea>
    <h2>Multiline message is:{{ lineText }}</h2>
    <!-- 单个复选框 -->
    <input type="checkbox" id="checkbox" v-model="checked" value="石榴" />
    <label for="checkbox">石榴</label>
    <h2>Multiline message is:{{ checked }}</h2>
    <!-- 多个复选框 -->
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames" />
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
    <label for="mike">Mike</label>
    <br />
    <h2>Checked names: {{ checkedNames }}</h2>
    <!-- 单选框 -->
    <input type="radio" id="one" value="One" v-model="picked" />
    <label for="one">One</label>
    <br />
    <input type="radio" id="two" value="Two" v-model="picked" />
    <label for="two">Two</label>
    <br />
    <h2>Picked: {{ picked }}</h2>
    <!-- 单选下拉框 -->
    <select v-model="selected1">
      <option disabled value="">Please select one</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <h2>Selected: {{ selected1 }}</h2>
    <!-- 多选下拉框 -->
    <select v-model="selected2" multiple>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <br />
    <h2>Selected: {{ selected2 }}</h2>
    <!-- 值绑定 -->
    <h1>值绑定===></h1>
    <input
      type="checkbox"
      id="checkbox"
      v-model="like"
      true-value="喜欢"
      false-value="不喜欢"
    />
    <label for="like">Like</label>
    <h2>{{ like }}</h2>
    <!-- 修饰符 -->
    <h1>修饰符===></h1>
    <!-- 1.lazy  change 事件_之后_进行数据同步(光标失去焦点的时候数据变化)（避免一直更改数据影响性能）-->
    <!-- 2.number  自动将用户的输入值转为数值类型 -->
    <!-- 3.trim  自动过滤用户输入的首尾空白字符 -->
    <input v-model.lazy="msg" />
    <input v-model.number="msg" />
    <input v-model.trim="msg" />
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      searchKey: "百度一下",
      lineText: "",
      checked: false,
      checkedNames: [],
      picked: "",
      selected1: "",
      selected2: "",
      like: "",
      msg: "",
    };
  },
};
</script>
