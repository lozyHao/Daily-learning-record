<template>
  <div class="category">
    <nav-bar>
      <template v-slot:default>商品分类</template>
    </nav-bar>

    <div id="mainbox">
      <van-sidebar class="leftmenu" v-model="active">
        <van-collapse v-model="activeName" accordion>
          <van-collapse-item
            v-for="(item, i) in categories.slice(0, 5)"
            :key="i"
            :title="item.name"
            :name="i + 1"
          >
            <van-sidebar-item
              v-for="(sub, inn) in item.children"
              :key="inn"
              :title="sub.name"
              @click="getGoods(sub.id)"
            />
          </van-collapse-item>
        </van-collapse>
      </van-sidebar>

      <div class="content">
        <div class="ordertab">
          <van-tabs v-model:active="activetab" @click="tabClick">
            <van-tab title="销量排序"></van-tab>
            <van-tab title="价格排序"></van-tab>
            <van-tab title="评论排序"></van-tab>
          </van-tabs>
        </div>
        <div class="goodsList">
          <div class="content">
            <van-card
              v-for="(item, i) in showGoods"
              @click="itemClick(item.id)"
              :key="i"
              :num="item.collects_count"
              tag="标签"
              :price="item.price"
              :desc="item.title"
              :title="item.title"
              :thumb="item.cover_url"
              origin-price="100.00"
              :lazy-load="true"
            />
          </div>
        </div>
        
      </div>
    </div>
    <!-- 回到顶部 -->
    <back-top v-show="isTabFixed" @bTop="bTop"></back-top>
  </div>
</template>

<script>
import NavBar from "@/components/commen/navbar/NavBar.vue";
import BackTop from "@/components/commen/backtop/BackTop.vue";

import { ref, reactive, onMounted, computed, watchEffect, nextTick } from "vue";

import { getCategory, getCategoryGoods } from "@/network/category";

// 引入滚动
import BScroll from "better-scroll";
import {useRouter} from 'vue-router'

export default {
  name: "Category",
  components: {
    NavBar,
    BackTop,
  },
  setup() {
    const active = ref(0);
    const activetab = ref(0);
    const activeName = ref("1");

    // 获取路由
    let router=useRouter();

    // 分类数据
    let categories = ref([]);
    // 当前排序条件
    let currentOrder = ref("sales");
    // 当前类别id
    let currentCid = ref(0);

    // 切换导航显示状态
    let isTabFixed = ref(false);

    // 数据
    let goods = reactive({
      sales: {
        page: 1,
        list: [],
      },
      price: {
        page: 1,
        list: [],
      },
      comments_count: {
        page: 1,
        list: [],
      },
    });

    // 获取数据展示
    let showGoods = computed(() => {
      return goods[currentOrder.value].list;
    });

    // 获取数据放入数据模型中
    let init = () => {
      getCategoryGoods("sales", currentCid.value).then((res) => {
        goods.sales.list = res.goods.data;
      });
      getCategoryGoods("price", currentCid.value).then((res) => {
        goods.price.list = res.goods.data;
      });
      getCategoryGoods("comments_count", currentCid.value).then((res) => {
        goods.comments_count.list = res.goods.data;
      });
    };

    let bs = reactive({});

    onMounted(() => {
      getCategory().then((res) => {
        categories.value = res.categories;
      });

      getCategoryGoods("sales", currentCid.value).then((res) => {
        goods.sales.list = res.goods.data;
      });

      // 内容滚动
      bs = new BScroll(".goodsList", {
        probeType: 3, //1,2,3
        click: true, //是否允许点击
        pullUpLoad: true, //允许上拉加载更多
      });

      // 滚动事件，获取高度
      bs.on("scroll", (position) => {
        console.log(position);
        if (-position.y > 200) {
          isTabFixed.value = true;
        } else {
          isTabFixed.value = false;
        }
      });

      // 上拉到底部加载更多数据，事件
      bs.on("pullingUp", () => {
        console.log("上拉至底部了");

        // 获取数据
        let page = goods[currentOrder.value].page + 1;

        getCategoryGoods(currentOrder.value, page).then((res) => {
          goods[currentOrder.value].list.push(...res.goods.data);
          goods[currentOrder.value].page += 1;
        });

        // 完成上，等待数据请求完成，要将数据展示出来
        bs.finishPullUp();
        // 重新计算高度
        bs.refresh();
      });
    });

    // 监听任何一个变量更新，重新计算高度
    watchEffect(() => {
      nextTick(() => {
        // dom元素加载完之后再重新计算高度刷新
        bs && bs.refresh();
      });
    });

    // 点击排序选项卡
    let tabClick = (index) => {
      let orders = ["sales", "price", "comments_count"];
      currentOrder.value = orders[index];

      getCategoryGoods(currentOrder.value, currentCid.value).then((res) => {
        goods[currentOrder.value].list = res.goods.data;
      });
      bs && bs.refresh();
      console.log(currentCid.value + "," + currentOrder.value);
    };

    // 点击类别
    let getGoods = (cid) => {
      currentCid.value = cid;
      init();
      bs && bs.refresh();
      console.log(currentCid.value + "," + currentOrder.value);
    };

    // 回到顶部事件，传递给子组件
    let bTop = () => {
      bs.scrollTo(0, 0, 300);
    };

    // 点击跳转到详情页
    let itemClick=(id)=>{
      router.push({
        path:'/detail',
        query:{id}
      })
    }

    return {
      active,
      activetab,
      getGoods,
      categories,
      activeName,
      tabClick,
      currentOrder,
      currentCid,
      goods,
      showGoods,
      init,
      isTabFixed,
      bTop,
      itemClick
    };
  },
};
</script>

<style lang="scss" scoped>
#mainbox {
  width: 100%;
  display: flex;
  .leftmenu {
    position: fixed;
    left: 0;
    top: 100px;
    width: 30%;
    z-index: 2;
  }
  .content {
    // position: absolute;
    // right: 0;
    // top: 50px;
    width: 70%;
    margin-left: 30%;
    .ordertab {
      position: fixed;
      top: 50px;
      right: 0;
      width: 70%;
      height: 50px;
      z-index: 9;
    }
    .goodsList {
      width: 100%;
      height: 100vh;
      // overflow: hidden;
      position: relative;
      .content {
        position: absolute;
        width: 95%;
        margin: 0 auto;
        padding-top: 100px;
        margin-bottom: 100px;
      }
    }
  }
}
</style>