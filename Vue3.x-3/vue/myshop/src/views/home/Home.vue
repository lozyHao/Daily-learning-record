<template>
  <div class="home">
    <nav-bar>
      <template v-slot:default>萝茗书库</template>
    </nav-bar>
    <!-- 加载动画 -->
    <loading v-if="isLoading"></loading>
    <!-- banner图 -->

    <!-- 选项卡推荐商品 -->
    <tab-control
      :titles="['畅销', '新书', '精选']"
      @tabClick="tabClick"
      v-show="isTabFixed"
    ></tab-control>

    <!-- 可滚动内容 -->
    <div class="wrapper">
      <div class="content">
        <div ref="banref">
          <div class="swiper-container">
            <swiper
              :modules="modules"
              :slides-per-view="1"
              :loop="true"
              :pagination="{ clickable: true }"
              :autoplay="{
                delay: 5000,
                disableOnInteraction: false,
              }"
              class="mySwiper"
            >
              <swiper-slide v-for="(item, i) in images" :key="i">
                <img v-lazy="item.img_url" alt="" />
              </swiper-slide>
            </swiper>
          </div>
          <!-- 推荐商品 -->
          <recommend :recommends="recommends"></recommend>
        </div>

        <!-- 选项卡推荐商品 -->
        <tab-control
          :titles="['畅销', '新书', '精选']"
          @tabClick="tabClick"
        ></tab-control>
        <!-- 商品列表 -->
        <goods-list :goods="showGoods"></goods-list>
      </div>
    </div>
    <!-- 回到顶部 -->
    <back-top v-show="isTabFixed" @bTop="bTop"></back-top>
  </div>
</template>

<script>
// 导入组件
import Loading from "@/components/commen/Loading.vue";
import NavBar from "@/components/commen/navbar/NavBar.vue";
import Recommend from "@/views/home/ChlidComps/Recommend.vue";
import TabControl from "@/components/tabControl/TabControl.vue";
import GoodsList from "@/components/content/goods/GoodsList.vue";
import BackTop from "@/components/commen/backtop/BackTop.vue";
// 导入资源
import { ref, reactive, onMounted, computed, watchEffect, nextTick } from "vue";
import { getHomeAllData, getHomeGoods } from "@/network/home";

// 导入swiper组件
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// 引入滚动
import BScroll from "better-scroll";

export default {
  name: "Home",
  components: {
    Swiper,
    SwiperSlide,
    Loading,
    NavBar,
    Recommend,
    TabControl,
    GoodsList,
    BackTop
  },
  setup() {
    let isLoading = ref(true);
    let images = ref([]);
    let recommends = ref([]);

    // 切换导航显示状态
    let isTabFixed = ref(false);
    
    let banref=ref([]);

    // 商品列表数据
    let goods = reactive({
      sales: {
        page: 0,
        list: [],
      },
      recommend: {
        page: 0,
        list: [],
      },
      new: {
        page: 0,
        list: [],
      },
    });

    let currentType = ref("sales");
    // 计算属性，获取当前显示的商品数据
    const showGoods = computed(() => {
      return goods[currentType.value].list;
    });

    let bs = reactive({});

    onMounted(() => {
      // 获取首页内容
      getHomeAllData().then((res) => {
        console.log(res);
        // 轮播图数据获取渲染
        images.value = res.slides;
        // 中间商品推荐
        recommends.value = res.goods.data;
        isLoading.value = false;
        // bs.refresh();
      });

      // 获取首页选项卡商品内容
      getHomeGoods("sales", 1).then((res) => {
        goods.sales.list = res.goods.data;
      });
      getHomeGoods("recommend", 1).then((res) => {
        goods.recommend.list = res.goods.data;
      });
      getHomeGoods("new", 1).then((res) => {
        goods.new.list = res.goods.data;
      });

      // 内容滚动
      bs = new BScroll(document.querySelector(".wrapper"), {
        probeType: 3, //1,2,3
        click: true, //是否允许点击
        pullUpLoad: true, //允许上拉加载更多
        pullDownRefresh: true, //允许下拉刷新
      });

      // 滚动事件，获取高度
      bs.on("scroll", (position) => {
        if((-position.y)>banref.value.offsetHeight-10){
          isTabFixed.value=true
        }else{
          isTabFixed.value=false
        }
      });

      // 上拉到底部加载更多数据，事件
      bs.on("pullingUp", () => {
        // console.log("上拉至底部了");

        // 获取数据
        let page = goods[currentType.value].page + 1;

        getHomeGoods(currentType.value, page).then((res) => {
          goods[currentType.value].list.push(...res.goods.data);
          goods[currentType.value].page += 1;
        });
        // 完成上，等待数据请求完成，要将数据展示出来
        bs.finishPullUp();
        // 重新计算高度
        bs.refresh();
      });
    });

    // 获取子组件选项卡传来的值
    let tabClick = (index) => {
      // 点击切换类型
      let types = ["sales", "recommend", "new"];
      currentType.value = types[index];
      // 切换之后，重新计算高度
      nextTick(() => {
        bs && bs.refresh();
      });
    };

    // 监听任何一个变量更新，重新计算高度
    watchEffect(() => {
      nextTick(() => {
        // dom元素加载完之后再重新计算高度刷新
        bs && bs.refresh();
      });
    });

    // 回到顶部事件，传递给子组件
    let bTop=()=>{
      bs.scrollTo(0,0,300);
    }

    return {
      isLoading,
      images,
      recommends,
      tabClick,
      showGoods,
      isTabFixed,
      banref,
      bTop,
      modules: [Autoplay, Pagination],
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  height: 100vh;
  position: relative;
  .wrapper {
    position: absolute;
    top: 40px;
    bottom: 50px;
    left: 0;
    right: 0;
    overflow: hidden;
    .content {
      .swiper-container {
        width: 100%;
        height: 150px;
        margin: 0 auto;
        // margin-top: 40px;
        .swiper {
          width: 100%;
          height: 100%;
          text-align: center;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>