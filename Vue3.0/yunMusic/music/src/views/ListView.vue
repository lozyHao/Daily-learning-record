<template>
  <div class="listView">
    <list-view-top :playlist="state.playlist"></list-view-top>
    <play-list :playlist="state.playlist"></play-list>
  </div>
</template>

<script>
import ListViewTop from "@/components/ListViewTop";
import PlayList from "@/components/PlayList.vue";
import { getPlaylistDetails } from "@/api/index.js";
import { onMounted, reactive } from "vue";
import { useRoute } from "vue-router";
import store from "@/store/index.js"
export default {
  components: {
    ListViewTop,
    PlayList,
  },
  setup() {
    const route = useRoute(); //获取路由参数
    let state = reactive({
      list: [],
      playlist: {},
    });

    onMounted(async () => {
      let id = route.query.id;
      let result = await getPlaylistDetails(id);
      state.playlist = result.data.playlist;
      console.log(result.data.playlist);
      // store.commit("setPlayList", result.data.playlist.tracks);
    });
    return {
      state,
    };
  },
};
</script>

<style lang="less" scoped>
.listView {
  padding-bottom: 2rem;
}
</style>
