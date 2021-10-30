<template>
  <div>
    <h1>username:{{ username }}</h1>
    <h1>age:{{ age }}</h1>
    <h1>type:{{ type }}</h1>
  </div>
</template>

<script>
export default {
  setup(props) {
    console.log(props); //{username:"小红",age:20}
  },
  props: ["username", "age", "type"],
};
</script>