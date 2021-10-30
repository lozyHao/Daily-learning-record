<template>
  <div>
    <h1>Article页{{ $route.params.id }}</h1>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route);
  },
};
</script>