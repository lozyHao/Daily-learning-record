<template>
    <div>
        <h2>新闻页</h2>
        <h3>内容为：{{msg}}</h3>
    </div>
</template>

<script>
export default {
    data(){
        return{
            msg:" ",
        }
    },
    mounted(){
        // 获取路由参数
        console.log(this.$router.currentRoute._rawValue.params.id);
        this.msg=this.$router.currentRoute._rawValue.params.id
    }
}
</script>