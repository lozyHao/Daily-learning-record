<template>
  <div class="playController">
    <div class="playImg">
      <img :src="playlist[playCurrentIndex].al.picUrl" alt="" />
    </div>
    <div class="playCon">
      <span>{{ playlist[playCurrentIndex].name }}</span>
      <span>
        <marquee behavior="scroll" direction="left" scrollamount="3"
          >{{ playlist[playCurrentIndex].al.name }}
        </marquee>
      </span>
    </div>
    <div class="playC">
      <span class="iconfont icon-shangyishou" @click="setPlayIndexNowOn"></span>
      <span v-if="paused" class="iconfont icon-bofang" @click="play"></span>
      <span v-else class="iconfont icon-zanting" @click="play"></span>
      <span
        class="iconfont icon-shangyishoushangyige"
        @click="setPlayIndexNowNext"
      ></span>
    </div>
    <!-- <audio ref="audio" :src="url"></audio> -->
    <audio
      ref="audio"
      autoplay="autoplay"
      :src="`https://music.163.com/song/media/outer/url?id=${playlist[playCurrentIndex].id}.mp3`"
    ></audio>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { getPlayUrl } from "@/api/index.js";
export default {
  data: function () {
    return {
      url: "",
      paused: this.pausedState,
    };
  },
  computed: {
    ...mapState(["playlist", "playCurrentIndex", "pausedState"]),
  },
  async mounted() {
    // 通过id获取音乐播放路径
    let url = await getPlayUrl(this.playlist[this.playCurrentIndex].id);
    this.url = url.data.data[0].url;
    // console.log(url.data.data[0]);
  },
  updated() {
    // console.log(this.playlist[this.playCurrentIndex]);
  },
  methods: {
    play: function () {
      if (this.$refs.audio.paused) {
        this.$refs.audio.play();
        this.paused = false;
      } else {
        this.$refs.audio.pause();
        this.paused = true;
      }
    },
    ...mapMutations(["setPlayIndexNowOn", "setPlayIndexNowNext"]),
  },
};
</script>

<style lang="less" scoped>
.playController {
  position: fixed;
  display: flex;
  bottom: 0;
  width: 100%;
  height: 1rem;
  background: rgb(230, 230, 230);
  border-top: 0.03rem solid #ccc;
  .playImg {
    width: 15%;
    height: 0.8rem;
    img {
      display: block;
      width: 0.8rem;
      height: 0.8rem;
      margin: 0.1rem auto;
      border-radius: 50%;
      background: #ccc;
    }
  }
  .playCon {
    width: 55%;
    height: 1rem;
    display: flex;
    flex-direction: column;
    span {
      height: 0.5rem;
      line-height: 0.5rem;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
      display: -webkit-box;
      -webkit-line-clamp: 1;
    }
    span:last-of-type {
      font-size: 0.2rem;
      color: rgb(121, 121, 121);
    }
  }
  .playC {
    width: 30%;
    height: 1rem;
    display: flex;
    line-height: 1rem;
    justify-content: space-around;
    span {
      text-align: center;
      font-size: 0.4rem;
      line-height: 1rem;
    }
  }
}
</style>