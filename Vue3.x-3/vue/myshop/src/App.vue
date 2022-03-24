<template>
  <router-view />

<!-- 保持生命 -->
  <!-- <router-view v-slot="{ Component }">
    <transition>
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view> -->

  <nav id="mainNav">
    <router-link class="tab-bar" to="/">
      <div>
        <span class="iconfont icon-shouye"></span>
        <span>首页</span>
      </div>
    </router-link>
    <router-link class="tab-bar" to="/Category">
      <div>
        <span class="iconfont icon-fenlei"></span>
        <span>商品分类</span>
      </div>
    </router-link>
    <router-link class="tab-bar" to="/ShopCart">
      <div>
        <span class="iconfont icon-31gouwuche">
          <van-badge class="badge" :content="$store.state.cartCount" max="9"></van-badge>
        </span>
        <span>购物车</span>
      </div>
    </router-link>
    <router-link class="tab-bar" to="/Profile">
      <div>
        <span class="iconfont icon-xiazai"></span>
        <span>个人中心</span>
      </div>
    </router-link>
  </nav>
</template>

<script>
import {onMounted} from 'vue'
import {useStore} from 'vuex'
export default {
  setup() {
    const store=useStore();
    onMounted(()=>{
      store.dispatch('updateCart');
    })
  },
}
</script>

<style lang="scss">
@import "@/assets/css/base.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#mainNav {
  width: 100%;
  height: 50px;
  // background: #ddd;
  display: flex;
  justify-content: space-around;
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  box-shadow: 0px 0px 5px 1px #ccc;
  background: #fff;
  z-index: 9;
  a {
    color: var(--color-text);
    &.router-link-exact-active {
      color: var(--color-height-text);
    }
  }
  .tab-bar > div {
    display: flex;
    height: 50px;
    flex-direction: column;
    justify-content: space-around;
    .iconfont {
      display: inline-block;
      font-size: 20px;
      position: relative;
      .badge{
        position: absolute;
        top: 5px;
        right: 5px;
      }
    }
    span:last-of-type {
      font-size: 14px;
    }
  }
}
</style>
