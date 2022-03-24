<template>
  <div class="backTop">
    <span class="iconfont icon-huidaodingbu" @click="backtop"></span>
  </div>
</template>

<script>
export default {
    name:"BackTop",
    setup(props,{emit}) {
        return{
            backtop:()=>{
                emit('bTop');
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.backTop {
  position: fixed;
  bottom: 100px;
  right: 20px;
  z-index: 10;
  .iconfont {
    font-size: 30px;
    color: var(--color-tint);
    opacity: 0.8;
    transition: 0.3s;
  }
}
</style>