<template>
  <div class="playController">
    <div class="left">
      <img :src="playList[playCurrentIndex].al.picUrl" alt="" />
      <div class="name">
        <div>{{ playList[playCurrentIndex].name }}</div>
        <div>横向滑动可以切换上下首</div>
      </div>
    </div>
    <div class="right">
      <span v-if="isPlay" class="iconfont icon-24gl-playCircle" @click="play"></span>
      <span v-else class="iconfont icon-zanting" @click="play"></span>
      <span class="iconfont icon-24gf-playlist"></span>
    </div>
    <audio ref="audio" :src="`https://music.163.com/song/media/outer/url?id=${playList[playCurrentIndex].id}.mp3`"></audio>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data(){
    return{
      isPlay:true
    }
  },
  computed: {
    ...mapState(["playList", "playCurrentIndex"]),
  },
  mounted(){
    // 通过ref属性获取audio标签
    console.log(this.$refs.audio);
  },
  updated(){
    console.log(this.playList[this.playCurrentIndex]);
  },
  methods:{
    play:function(){
      if(this.$refs.audio.paused){
        this.$refs.audio.play();
        this.isPlay=false;
      }else{
        this.$refs.audio.pause();
        this.isPlay=true;
      }
    }
  }
};
</script>

<style lang="less" scoped>
.playController {
  position: fixed;
  justify-content: space-between;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 1rem;
  border-top: #ddd 0.01rem solid;
  padding: 0 0.25rem;
  background: #fff;
  align-items: center;
  z-index: 10;
  .left {
    width: 82%;
    display: flex;
    justify-content: space-between;
    img {
      width: 0.6rem;
      height: 0.6rem;
      border-radius: 50%;
      margin-top: 0.2rem;
    }
    .name {
      width: 80%;
      display: flex;
      flex-flow: column;
      justify-content: space-between;
      div:first-of-type {
        font-size: 0.3rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
      }
      div:last-of-type {
        font-size: 0.2rem;
      }
    }
  }
  .right {
    width: 16%;
    display: flex;
    justify-content: space-between;
    .iconfont {
      font-size: 0.4rem;
    }
  }
}
</style>