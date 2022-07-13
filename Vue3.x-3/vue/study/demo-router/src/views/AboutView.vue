<template>
  <div class="about">
    <h1>这是关于界面</h1>
    <nav>
      <router-link to="/about/aboutone">AboutOne</router-link> |
      <router-link to="/about/abouttwo">AboutTwo</router-link>
    </nav>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<style lang="less" scoped>
.fade-enter-active,.fade-leave-active {
  transition:0.5s ease;
  opacity: 1;
  margin-left: 0;
}

.fade-enter-from,.fade-leave-to {
  opacity: 0;
  margin-left:20px;
}

// .fade-enter-active {
//   transition: all 0.5s ease-out;
// }

// .fade-leave-active {
//   transition: all 0.3s ease-in;
// }

// .fade-enter-from,
// .fade-leave-to {
//   transform: translateX(20px);
//   opacity: 0;
// }
</style>