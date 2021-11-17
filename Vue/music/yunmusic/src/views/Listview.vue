<template>
  <div class="listView">
    <listview-top :playlist="state.playlist"></listview-top>
    <play-list :playlist="state.playlist"></play-list>
  </div>
</template>

<script>
import listviewTop from "@/components/listviewTop.vue";
import playList from "@/components/playList.vue";
import { getPlayListDetail } from "@/api/index.js";
import { onMounted, reactive } from "vue";
import { useRoute } from "vue-router";
import store from "@/store/index.js";
export default {
  setup() {
    //   获取路由
    const route = useRoute();
    let state = reactive({
      list: [],
      playlist: {
        creator: {},
        tracks: [],
      },
    });
    onMounted(async () => {
      // 通过路由拿到id
      let id = route.query.id;
      let result = await getPlayListDetail(id);
      state.playlist = result.data.playlist;
      // console.log(state.playlist);
      // 将歌单音乐列表丢到全局中
      store.commit("setPlaylist", state.playlist.tracks);
    });
    return {
      state,
    };
  },
  components: {
    listviewTop,
    playList,
  },
};
</script>