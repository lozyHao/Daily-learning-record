<template>
  <div class="goodsListItem">
    <div class="item" @click="itemClick(product.id)">
      <img class="img" v-lazy="product.cover_url" alt="" />
      <div>
        <span class="title">{{product.title}}</span>
        <span class="iconfont icon-jiage price">{{product.price}}</span>
        <span class="iconfont icon-shoucang collect">&nbsp;{{product.collects_count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import {useRouter} from "vue-router"
export default {
  name: "GoodsListItem",
  props:{
      product:{
          type:Object,
          default:{}
      }
  },
  setup() {
    let router =useRouter();

    // 点击跳转到详情页
    let itemClick=(id)=>{
      router.push({
        path:'/detail',
        query:{id}
      })
    }

    return {
      itemClick,
    }
  },
};
</script>

<style lang="scss" scoped>
.goodsListItem {
  width: 50%;
  padding: 10px 0;
  .item {
    width: 90%;
    margin: 0 auto;
    box-shadow: 0px 0px 5px 1px #ccc;
    .img {
      width: 100%;
      height: 200px;
      background: #ccc;
    }
    div {
      width: 90%;
      margin: 0 auto;
      padding: 2px 0;
      .title {
        display: block;
        width: 100%;
        height: 30px;
        text-align: center;
        line-height: 30px;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
      }
      .price {
        display: inline-block;
        width: 100%;
        height: 30px;
        text-align: left;
        line-height: 30px;
        color: red;
      }
      .collect {
        display: inline-block;
        width: 100%;
        height: 20px;
        text-align: left;
        line-height: 20px;
        color: #ccc;
        font-size: 12px;
      }
    }
  }
}
</style>