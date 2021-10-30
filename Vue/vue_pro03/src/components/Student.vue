<template>
  <div>
    <h1>学生</h1>
    <h1>name:{{ name }}</h1>
    <h1>classname:{{ classname }}</h1>
  </div>
</template>

<script>
import { ref, inject } from "vue";
export default {
  setup(props, content) {
    const student = inject("student");
    return { ...student };
  },
};
</script>