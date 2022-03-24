<template>
    <div class="goodsList">
        <goods-list-item v-for="(item,i) in goods" :key="i" :product="item">
            {{item.name}}
        </goods-list-item>
    </div>
</template>

<script>
import GoodsListItem from "@/components/content/goods/GoodsListItem.vue"
export default {
    name:"GoodsList",
    components:{
        GoodsListItem
    },
    props:{
        goods:{
            type:Array,
            default:[]
        }
    },
    setup() {
        
    },
}
</script>

<style lang="scss" scoped>
.goodsList{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 60px;
}
</style>