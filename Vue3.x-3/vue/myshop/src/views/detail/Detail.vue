<template>
  <div class="detail">
    <nav-bar>
      <template v-slot:default>商品详情</template>
    </nav-bar>
    <div class="content">
      <img class="main-image" :src="detail.cover_url" alt="" />
      <van-card
        style="text-align: left"
        :price="detail.price + '.00'"
        :desc="detail.description"
        :title="detail.title"
      >
        <template #tags>
          <van-tag plain type="danger">热款</van-tag>
          <van-tag plain type="danger">技术</van-tag>
        </template>
        <template #footer>
          <van-button size="mini" type="warning" @click="handleAddCart"
            >加入购物车</van-button
          >
          <van-button size="mini" type="danger" @click="goToCart"
            >立即购买</van-button
          >
        </template>
      </van-card>
      <van-tabs v-model:active="active">
        <van-tab title="概述">
          <div class="itemDetails" v-html="detail.details"></div>
        </van-tab>
        <van-tab title="热评">
          <div class="itemDetails" v-if="detail.comments == ''">
            暂无评论！！！
          </div>
          <div
            class="itemDetails"
            v-else
            v-for="(item, i) in detail.comments"
            :key="i"
          ></div>
        </van-tab>
        <van-tab title="相关图书">
          <!-- 商品列表 -->
          <goods-list :goods="like_goods"></goods-list>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/commen/navbar/NavBar.vue";
import GoodsList from "@/components/content/goods/GoodsList.vue";
import { useRoute, useRouter } from "vue-router";
import { ref, onMounted, reactive, toRefs } from "vue";

import { Toast } from "vant";

import { getDetail } from "@/network/detail";

import { addCart } from "@/network/cart";
import { useStore } from "vuex";

export default {
  name: "Detail",
  components: {
    NavBar,
    GoodsList,
  },
  setup() {
    let route = useRoute();
    let router = useRouter();
    let id = ref(0);
    const active = ref(0);

    const store = useStore();

    // 该商品信息
    let book = reactive({
      detail: {},
      like_goods: [],
    });

    // 获取商品详情
    onMounted(() => {
      id.value = route.query.id;
      getDetail(id.value).then((res) => {
        book.detail = res.goods;
        book.like_goods = res.like_goods;
        // console.log(book.like_goods);
      });
    });

    // 添加购物车
    let handleAddCart = () => {
      addCart({ goods_id: book.detail.id, num: 1 }).then((res) => {
        if (res.status == "201" || res.status == "204") {
          Toast.success("添加到购物车成功！");
          store.dispatch("updateCart");
          setTimeout(() => {
            router.push({ path: "/shopcart" });
          }, 2000);
        } else {
          Toast.fail("添加失败！");
        }
      });
    };

    // 立即购买
    let goToCart = () => {
      addCart({ goods_id: book.detail.id, num: 1 }).then((res) => {
        if (res.status == "201" || res.status == "204") {
          Toast.success("即将前往购物车购买...");
          store.dispatch("updateCart");
          setTimeout(() => {
            router.push({ path: "/shopcart" });
          }, 2000);
        } else {
          Toast.fail("添加失败！");
        }
      });
    };

    return {
      id,
      ...toRefs(book),
      active,
      handleAddCart,
      goToCart,
    };
  },
};
</script>

<style lang="scss" scoped>
.detail {
  width: 100%;
  min-height: 100vh;
  background: #fff;
  position: relative;
  z-index: 20;
  .content {
    width: 100%;
    padding-top: 50px;
    .main-image {
      width: 100%;
      height: auto;
    }
    .itemDetails {
      width: 100%;
      min-height: 200px;
      overflow: hidden;
      padding-bottom: 70px;
      padding-top: 30px;
    }
  }
}
</style>