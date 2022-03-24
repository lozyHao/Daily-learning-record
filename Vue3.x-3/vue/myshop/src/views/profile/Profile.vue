<template>
  <div class="profile">
    <nav-bar>
      <template v-slot:default>个人中心</template>
    </nav-bar>
    <div class="top-user">
      <div class="img"><img :src="user.avatar_url" alt="" /></div>
      <div class="user-info">
        <span class="name">昵称：{{ user.name }}</span>
        <span class="nameId">登录号：{{ user.email }}</span>
        <span class="nameCon">个性签名：好好学习，天天向上！</span>
        <span class="nameCon">上次登录：{{ user.updated_at }}</span>
      </div>
    </div>
    <div class="user-list">
      <ul>
        <li @click="goTo('/collect')">
          <span class="iconfont icon-shoucang1">&nbsp;&nbsp;我的收藏</span>
          <span>&gt;</span>
        </li>
        <li @click="goTo('/order')">
          <span class="iconfont icon-zhangdan">&nbsp;&nbsp;我的订单</span>
          <span>&gt;</span>
        </li>
        <li @click="goTo('/setting')">
          <span class="iconfont icon-gerenzhongxin">&nbsp;&nbsp;账号管理</span>
          <span>&gt;</span>
        </li>
        <li @click="goTo('/address')">
          <span class="iconfont icon-dizhiguanli">&nbsp;&nbsp;地址管理</span>
          <span>&gt;</span>
        </li>
        <li @click="goTo('/about')">
          <span class="iconfont icon-guanyu1">&nbsp;&nbsp;关于我们</span>
          <span>&gt;</span>
        </li>
      </ul>
    </div>
    <button class="goOut" @click="goOut">退出</button>
  </div>
</template>

<script>
import NavBar from "@/components/commen/navbar/NavBar.vue";

import { Toast } from "vant";

import { logout, getUser } from "@/network/user";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { ref, reactive, toRefs, onMounted } from "vue";

export default {
  components: {
    NavBar,
  },
  setup() {
    const router = useRouter();
    const store = useStore();

    const state = reactive({
      user: {},
    });

    const goOut = (values) => {
      let isOut = confirm("是否退出登录？");
      if (isOut == true) {
        logout().then((res) => {
          console.log(res);
          if (res.status == 204) {
            Toast.success("退出成功！");
            // 清空token
            window.localStorage.setItem("userToken", " ");
            // 退出成功，状态管理（设置登录状态为假）
            store.commit("setIsLogin", false);
            store.dispatch("updateCart");
            setTimeout(() => {
              router.push({ path: "/" });
            }, 1000);
          }
        });
      }else{
        Toast.fail("您已取消退出！");
      }
    };

    // 跳转方法
    let goTo = (path, query) => {
      router.push({ path, query: query || {} });
    };

    onMounted(() => {
      getUser().then((res) => {
        state.user = res;
      });
    });

    return {
      goOut,
      store,
      ...toRefs(state),
      goTo,
    };
  },
};
</script>

<style lang="scss" scoped>
.profile {
  width: 100%;
  padding-top: 60px;
  .top-user {
    width: 95%;
    height: 150px;
    margin: 0 auto;
    display: flex;
    background: darkcyan;
    border-radius: 20px;
    align-items: center;
    padding: 20px;
    .img {
      display: block;
      width: 80px;
      height: 80px;
      background: #ddd;
      border-radius: 50%;
    }
    .user-info {
      // width: 70%;
      padding: 10px;
      text-align: left;
      flex: 1;
      span {
        display: block;
        color: #fff;
        padding: 5px 0;
      }
      .name {
        font-size: 20px;
      }
      .nameId {
        font-size: 15px;
      }
      .nameCon {
        display: block;
        height: 30px;
        line-height: 30px;
        font-size: 15px;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
      }
    }
  }
  .user-list {
    width: 90%;
    margin: 40px auto;
    li {
      width: 100%;
      height: 60px;
      align-items: center;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #ddd;
      font-size: 20px;
      .iconfont {
        font-size: 18px;
        color: #555;
      }
    }
  }
  .goOut {
    margin: 70px 0;
    width: 200px;
    height: 40px;
    border-radius: 20px;
    border: none;
    background: darkcyan;
    color: #fff;
  }
}
</style>