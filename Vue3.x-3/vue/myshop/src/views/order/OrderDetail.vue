<template>
  <div class="order">
    <nav-bar>
      <template v-slot:default>订单详情</template>
    </nav-bar>
    <div class="order-status">
      <div class="status-item">
        <label>订单状态:</label>
        <span>{{ statusString }}</span>
      </div>
      <div class="status-item">
        <label>订单编号:</label>
        <span>{{ detail.order_no }}</span>
      </div>
      <div class="status-item">
        <label>下单时间:</label>
        <span>{{ detail.created_at }}</span>
      </div>
      <van-button
        v-if="detail.status == 1"
        @click="showPayFn"
        style="margin-bottom: 10px"
        color="#1baeae"
        block
        >去支付</van-button
      >
      <van-button v-if="detail.status == 3" @click="handleConfirmOrder" block>确认订单</van-button>
    </div>
    <div class="order-price">
      <div class="price-item">
        <label>商品金额:</label><span>￥{{ totle }}</span>
      </div>
      <div class="price-item">
        <label>配送方式:</label><span>普通快递</span>
      </div>
    </div>
    <van-card
      v-for="(item, i) in detail.orderDetails.data"
      :key="i"
      :num="item.num"
      :price="item.price"
      desc="全场包那"
      :title="item.goods.title"
      :thumb="item.goods.cover_url"
    />
    <div style="width: 100%; height: 50px"></div>

    <van-popup
      v-model:show="showPay"
      closeable
      position="bottom"
      :style="{ height: '30%' }"
    >
      <van-grid :border="false" :column-num="3">
        <van-grid-item>
          支付宝二维码<br />
          <van-image width="100" height="100" :src="aliyun" />
        </van-grid-item>
        <van-grid-item>
          微信二维码<br />
          <van-image width="100" height="100" :src="wechat" />
        </van-grid-item>
      </van-grid>
    </van-popup>
  </div>
</template>

<script>
import NavBar from "@/components/commen/navbar/NavBar.vue";
import { useRoute, useRouter } from "vue-router";
import { reactive, toRefs } from "@vue/reactivity";
import { computed, onMounted } from "@vue/runtime-core";
import {
  getOrderPreview,
  createOrder,
  getOrderDetail,
  payOrder,
  payOrderStatus,
  confirmOrder,
  viewExpress,
} from "@/network/order";
import { Dialog } from 'vant';

export default {
  components: {
    NavBar,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const state = reactive({
      orderNo: "", //订单id
      detail: {
        //订单详情
        orderDetails: {
          data: [],
        },
      },
      showPay: false,
      aliyun: "",
      wechat: "",
    });

    const init = () => {
      const { id } = route.query;
      state.orderNo = id;
      getOrderDetail(id).then((res) => {
        console.log(res);
        state.detail = res;
      });
    };

    onMounted(() => {
      init();
    });

    // 订单状态
    const statusString = computed(() => {
      let status = ["", "已下单", "已支付", "等待发货", "确认发货", "已过期"];
      return status[state.detail.status];
    });

    // 总价
    const totle = computed(() => {
      let sum = 0;
      state.detail.orderDetails.data.forEach((item) => {
        sum += item.num * item.price;
      });
      return sum + ".00";
    });

    // 显示支付
    const showPayFn = () => {
      state.showPay = true;

      // 支付
      payOrder(state.orderNo, { type: "aliyun" }).then((res) => {
        console.log(res);
        // 返回支付宝支付码
        state.aliyun = res.qr_code_url;
        state.wechat = res.qr_code_url;
      });

      // 支付完成，轮询查看是否支付，支付后就跳转至订单详情页面
      const timer = setInterval(() => {
        payOrderStatus(state.orderNo).then((res) => {
          if (res == "2") {
            clearInterval(timer);
            router.push({
              path: "/order",
            });
          }
        });
      }, 2000);
    };

    // 确认订单
    const handleConfirmOrder=()=>{
      Dialog.confirm({
        title:"是否确认订单！"
      }).then(()=>{
        confirmOrder(state.orderNo).then(res=>{
          console.log(res);
        })
      })
    }

    return {
      ...toRefs(state),
      statusString,
      totle,
      showPayFn,
      handleConfirmOrder
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
  .order-status {
    width: 90%;
    margin: 20px auto;
    text-align: left;
    .status-item {
      width: 100%;
      height: 30px;
      align-items: center;
      label {
        color: #555;
      }
    }
  }
  .order-price {
    width: 90%;
    margin: 20px auto;
    text-align: left;
    padding: 20px 0;
    .price-item {
      width: 100%;
      height: 30px;
      align-items: center;
      label {
        color: #555;
      }
    }
  }
}
</style>