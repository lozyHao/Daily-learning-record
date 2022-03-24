<template>
  <div class="shopcart">
    <nav-bar>
      <template v-slot:default>
        购物车(<span>{{ $store.state.cartCount }}</span
        >)
      </template>
    </nav-bar>
    <div class="cart-body">
      <van-checkbox-group
        ref="checkedBoxGroup"
        v-model="result"
        @change="groupChange"
      >
        <van-swipe-cell v-for="(item, i) in list" :key="i">
          <div class="good-item">
            <van-checkbox :name="item.id" />
            <div class="good-img">
              <img :src="item.goods.cover_url" alt="" />
            </div>
            <div class="good-desc">
              <div class="good-title">
                <span class="name">{{ item.goods.title }}</span>
                <span class="num">×{{ item.num }}</span>
              </div>
              <div class="good-btn">
                <div class="price"><small>￥</small>{{ item.goods.price }}</div>
                <van-stepper
                  :model-value="item.num"
                  :min="1"
                  :max="item.goods.stock"
                  :name="item.id"
                  @change="changeNum"
                />
              </div>
            </div>
          </div>
          <template #right>
            <van-button
              square
              text="删除"
              type="danger"
              class="delete-button"
              @click="deleteGood(item.id)"
            />
          </template>
        </van-swipe-cell>
      </van-checkbox-group>
    </div>
    <van-submit-bar :price="totle*100" button-text="结算" @submit="onSubmit">
      <van-checkbox v-model:checked="checkedAll" @click="allCheck">全选</van-checkbox>
    </van-submit-bar>
    <div class="empty" v-if="!list.length">
      <img src="@/assets/images/empty-cart.jpg" alt="" />
      <van-button round color="#1baeae" type="primary" block @click="goTo"
        >前往选购</van-button
      >
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/commen/navbar/NavBar.vue";
import { computed, onMounted, reactive, ref, toRefs } from "vue";
import {
  getCart,
  modifyCart,
  checkedCart,
  deleteCartItem,
} from "@/network/cart";
import router from "@/router";
import { Toast } from "vant";
import { useStore } from 'vuex';
export default {
  name: "ShopCart",
  components: {
    NavBar,
  },
  setup() {
    let store=useStore();
    // 步进器，商品数量加减
    const value = ref(1);

    const state = reactive({
      list: [], //商品列表
      result: {}, //选择的商品列表
      checkedAll:false
    });

    // 初始化购物车数据
    let init = () => {
      Toast.loading({
        message: "加载中...",
        forbidClick: true,
      });
      getCart("include=goods").then((res) => {
        console.log(res.data);
        state.list = res.data;
        state.result = res.data
          .filter((n) => n.is_checked == 1)
          .map((item) => item.id);
        // console.log(state.result);
        Toast.clear();
      });
    };

    // 计算属性，计算商品总价
    let totle=computed(()=>{
      let sum=0;
      state.list.filter(item=>state.result.includes(item.id)).forEach(item=>{
        sum+=(item.goods.price*item.num);
      })
      return sum;
    })

    // 点击修改购物车数量
    let changeNum = (value, detail) => {
      // console.log(value); //获取改变的值
      // console.log(detail.name); //获取商品id
      Toast.loading({
        message: "修改中...",
        forbidClick: true,
      });
      modifyCart(detail.name, { num: value }).then((res) => {
        // 点击过快会导致数量错误。
        state.list.forEach((item) => {
          if (item.id == detail.name) {
            item.num = value;
          }
        });
        Toast.clear();
      });
    };

    // 点击修改选中状态
    let groupChange = (result) => {
      if (result.length==state.list.length) {
        state.checkedAll=true
      }else{
        state.checkedAll=false
      }
      state.result=result;
      checkedCart({cart_ids:result}).then(res=>{
        // console.log(res);
      })
    };

    // 全选/反选
    let allCheck=()=>{
      if(!state.checkedAll){
        state.result=state.list.map(item=>item.id);
        state.checkedAll=true
      }else{
        state.result=[];
        state.checkedAll=false
      }
      // console.log(state.checkedAll);
    }

    // 删除商品
    let deleteGood=(id)=>{
      Toast.loading({
        message: "删除中...",
        forbidClick: true,
      });
      deleteCartItem(id).then(res=>{
        Toast.clear();
        init();
        store.dispatch("updateCart");
      })
    }

    onMounted(() => {
      init();
    });

    // 订单结算
    let onSubmit = () => {
      if (state.result.length==0) {
        Toast.fail("请选择购买商品...")
      }else{
        router.push({
          path:'/createorder'
        })
      }
    };

    // 前往购物
    let goTo = () => {
      router.push({ path: "/home" });
    };

    return {
      onSubmit,
      value,
      ...toRefs(state),
      goTo,
      changeNum,
      groupChange,
      allCheck,
      deleteGood,
      totle
    };
  },
};
</script>

<style lang="scss" scoped>
.shopcart {
  padding-top: 60px;
  padding-bottom: 110px;
  .cart-body {
    width: 100%;
    background-color: #fff;
    .good-item {
      display: flex;
      justify-content: space-around;
      width: 100%;
      margin: 10px 0;
      .good-img {
        width: 100px;
        height: 100px;
        background: #ddd;
        img {
          display: inline-block;
          width: 100px;
          height: auto;
          background: #ddd;
        }
      }
      .good-desc {
        width: 60%;
        .good-title {
          width: 100%;
          height: 50px;
          align-items: center;
          display: flex;
          justify-content: space-between;
        }
        .good-btn {
          width: 100%;
          height: 50px;
          align-items: center;
          display: flex;
          justify-content: space-between;
        }
      }
    }
    .delete-button {
      height: 100%;
    }
  }
  .van-submit-bar {
    bottom: 50px;
    background: #eee;
  }
}
</style>