<template>
  <div class="order">
    <nav-bar>
      <template v-slot:default>订单管理</template>
    </nav-bar>
    <van-tabs class="nav" v-model:active="active" @click-tab="onClickTab">
      <van-tab title="全部" name="0"></van-tab>
      <van-tab title="待付款" name="1"></van-tab>
      <van-tab title="待发货" name="2"></van-tab>
      <van-tab title="待收货" name="3"></van-tab>
      <van-tab title="交易完成" name="4"></van-tab>
      <van-tab title="已过期" name="5"></van-tab>
    </van-tabs>
    <div class="content">
      <van-pull-refresh
        v-model="refreshing"
        @refresh="onRefresh"
        class="order-list-refresh"
        ><van-list
          v-model:loading="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
          @offset="10"
        >
          <div
            @click="goTo(item.id)"
            class="order-item-box"
            v-for="(item, i) in list"
            :key="i"
          >
            <div class="order-item-header">
              <div class="status-item">
                <label>订单编号:</label>
                <span>{{ item.order_no }}</span>
              </div>
              <div class="status-item">
                <label>创建时间:</label>
                <span>{{ item.created_at }}</span>
              </div>
            </div>
            <van-card
              v-for="(sub, j) in item.orderDetails.data"
              :key="j"
              :num="sub.num"
              :price="sub.price"
              desc="全场包邮"
              :title="sub.goods.title"
              :thumb="sub.goods.cover_url"
            />
          </div>
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/commen/navbar/NavBar.vue";
import { reactive, ref, toRefs } from "@vue/reactivity";
import { useRoute, useRouter } from "vue-router";
import { onMounted } from "@vue/runtime-core";
import { getOrderList } from "@/network/order";
export default {
  components: {
    NavBar,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const active = ref(0);
    const state = reactive({
      loading: false,
      finished: false, //上拉加载更多
      refreshing: false, //下拉刷新
      list: [],
      page: 1,
      totalPage: 0,
      status: 0,
    });

    onMounted(() => {
      onRefresh(); //数据初始化
    });

    const loadData = () => {
      getOrderList({
        page: state.page,
        status: state.status,
        include: "orderDetails.goods",
      }).then((res) => {
        state.list = state.list.concat(res.data);
        state.loading = false;
        state.totalPage = res.meta.pagination.total_pages;
        if (state.page >= state.totalPage) {
          state.finished = true;
        }
      });
    };

    // 异步更新数据
    const onLoad = () => {
      if (!state.refreshing && state.page < state.totalPage) {
        state.page += 1;
      }
      if (state.refreshing) {
        state.list = [];
        state.refreshing = false;
      }
      loadData();
    };

    const onRefresh = () => {
      state.refreshing = true;
      state.finished = false;
      state.loading = true;
      state.page = 1;
      onLoad();
    };

    // 跳转至订单详情页
    const goTo = (id) => {
      router.push({ path: "/orderDetail", query: { id } });
    };

    // 点击导航
    const onClickTab = (data) => {
      state.status = data.name;
      onRefresh();
    };

    return {
      active,
      ...toRefs(state),
      loadData,
      onLoad,
      onRefresh,
      onClickTab,
      goTo,
    };
  },
};
</script>

<style lang="scss" scoped>
.order {
  width: 100%;
  min-height: 100vh;
  padding-top: 50px;
  background: #fff;
  position: relative;
  z-index: 10;
  .nav {
    position: fixed;
    z-index: 10;
  }
  .content {
    width: 100%;
    padding: 20px 0;
    margin-top: 50px;
    border-top: 2px solid #eee;
    .order-item-box {
      width: 90%;
      padding: 20px 0;
      padding-bottom: 50px;
      background: #eee;
      border-radius: 10px;
      margin: 20px auto;
      .status-item {
        text-align: left;
        height: 30px;
        line-height: 30px;
        padding: 0 20px;
      }
      img {
        width: 100px;
        height: auto;
      }
      div {
        text-align: left;
        padding-left: 20px;
      }
    }
  }
}
</style>