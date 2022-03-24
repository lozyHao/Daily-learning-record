<template>
  <div class="home"></div>
</template>

<script>
import { onMounted } from "@vue/runtime-core";
import { getHomeAllData } from "@/network/home";

export default {
  name: "HomeView",
  setup() {
    onMounted(() => {
      getHomeAllData()
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  },
  components: {},
};
</script>
