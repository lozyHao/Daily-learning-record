<template>
  <div class="order">
    <nav-bar>
      <template v-slot:default>订单预览</template>
    </nav-bar>
    <div class="address-wrap">
      <div class="name" @click="goTo">
        <span class="getuser">{{ address.name }}</span>
        <span class="phone">{{ address.phone }}</span>
        <span class="address"
          >{{ address.province }}{{ address.city }}{{ address.address }}</span
        >
      </div>
      <span class="more">&gt;</span>
    </div>
    <div class="goodList">
      <div class="good-item" v-for="(item, i) in cartList" :key="i">
        <div class="good-img">
          <img :src="item.goods.cover_url" alt="" />
        </div>
        <div class="good-desc">
          <span class="name">{{ item.goods.title }}</span>
          <span class="num">×{{ item.num }}</span>
          <span class="price">￥{{ item.goods.price }}</span>
        </div>
      </div>
    </div>
    <van-submit-bar
      class="submit-all"
      :price="totle * 100"
      button-text="生成订单"
      @submit="handleCreateOrder"
    >
      商品金额
    </van-submit-bar>
    <van-popup
      v-model:show="showPay"
      closeable
      position="bottom"
      :style="{ height: '30%' }"
      @close="close"
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
import {
  getOrderPreview,
  createOrder,
  payOrder,
  payOrderStatus,
} from "@/network/order";
import { ref, reactive, onMounted, toRefs, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { Toast } from "vant";
import { useStore } from "vuex";
export default {
  components: {
    NavBar,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const store = useStore();
    const state = reactive({
      cartList: [],
      address: {},
      showPay: false,
      orderNo: "",
      aliyun: "",
      wechat: "",
    });

    // 初始化，加载订单信息
    const init = () => {
      Toast.loading({
        message: "加载中...",
        forbidClik: true,
      });
      // 获取订单预览
      getOrderPreview().then((res) => {
        let address = res.address.filter((n) => n.is_default == "1");
        if (address.length == 0) {
          state.address = {
            address: "还没有设置默认地址，请选择或添加地址信息！",
          };
        } else {
          state.address = address[0];
        }
        state.cartList = res.carts;
        // 获取支付图片
      });
      console.log(state);
    };

    onMounted(() => {
      init();
    });

    // 选择收货信息
    const goTo = () => {
      router.push({ path: "/address" });
    };

    // 生成订单
    let handleCreateOrder = () => {
      const params = {
        address_id: state.address.id,
      };
      createOrder(params).then((res) => {
        Toast({ message: "创建订单成功！" });
        store.dispatch("updateCart");
        state.showPay = true;
        // 订单id
        state.orderNo = res.id;
        // 支付
        payOrder(state.orderNo, { type: "aliyun" }).then((res) => {
          console.log(res);
          // 返回支付宝支付码
          state.aliyun = res.qr_code_url;
          state.wechat = res.qr_code_url;
        });
        // payOrder(state.orderNo,{type:"wechat"}).then(res=>{
        //     // 返回微信支付码
        //     state.wechat=res.qr_code_url;
        // })

        // 支付完成，轮询查看是否支付，支付后就跳转至订单详情页面
        const timer = setInterval(() => {
          payOrderStatus(state.orderNo).then((res) => {
            if (res == "2") {
              clearInterval(timer);
              router.push({
                path: "/orderdetail",
                query: { id: state.orderNo },
              });
            }
          });
        }, 2000);
      });
    };

    // 关闭弹出层
    const close = () => {
      router.push({ path: "/orderdetail", query: { id: state.orderNo } });
    };

    // 计算属性，得到总价
    let totle = computed(() => {
      let sum = 0;
      state.cartList.forEach((item) => {
        sum += item.goods.price * item.num;
      });
      return sum;
    });

    return {
      ...toRefs(state),
      goTo,
      handleCreateOrder,
      totle,
      close,
    };
  },
};
</script>

<style lang="scss" scoped>
.order {
  width: 100%;
  min-height: 100vh;
  padding-top: 50px;
  padding-bottom: 100px;
  background: #fff;
  position: relative;
  z-index: 10;
  .address-wrap {
    width: 90%;
    height: 100px;
    margin: 10px auto;
    display: flex;
    border-bottom: 3px dashed #ccc;
    align-items: center;
    .name {
      width: 90%;
      text-align: left;
      span {
        display: block;
      }
      .getuser {
        font-size: 20px;
        height: 30px;
        line-height: 30px;
      }
      .phone,
      .address {
        height: 25px;
        line-height: 25px;
        font-size: 15px;
      }
    }
    .more {
      font-size: 25px;
    }
  }
  .goodList {
    width: 90%;
    margin: 0 auto;
    .good-item {
      width: 100%;
      display: flex;
      box-shadow: 0 0 5px 1px #ccc;
      border-radius: 20px;
      margin: 10px 0;
      padding: 10px 0;
      .good-img {
        width: 150px;
        img {
          width: 150px;
          height: auto;
        }
      }
      .good-desc {
        flex: 1;
        text-align: left;
        align-items: center;
        span {
          display: block;
          margin: 10px 0;
        }
        .name {
          font-size: 20px;
          margin-top: 30px;
        }
        .num {
          font-size: 12px;
        }
        .price {
          font-size: 15px;
          color: red;
        }
      }
    }
  }
}
</style>