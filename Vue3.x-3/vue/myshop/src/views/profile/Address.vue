<template>
  <div class="address">
    <nav-bar>
      <template v-slot:default>地址管理</template>
    </nav-bar>
    <div class="addressList">
      <van-address-list
        v-model="chosenAddressId"
        :list="list"
        default-tag-text="默认"
        @add="onAdd"
        @edit="onEdit"
      />
      <div v-if="list.length == 0">你还未添加地址！</div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/commen/navbar/NavBar.vue";
import { ref, reactive, toRefs, onMounted } from "vue";
import { useRouter } from "vue-router";
import { getAddressList } from "@/network/address";
export default {
  components: {
    NavBar,
  },
  setup() {
    let router = useRouter();
    const state = reactive({
      chosenAddressId: "1",
      list: [],
    });
    // 点击新增地址
    const onAdd = () => {
      router.push({
        path: "/addressEdit",
        query: {
          type: "add",
        },
      });
    };
    // 点击编辑地址
    const onEdit = (item, index) => {
      router.push({
        path: "/addressEdit",
        query: {
          type: "edit",
          addressId: item.id,
        },
      });
    };

    onMounted(() => {
      // 获取地址列表
      getAddressList().then((res) => {
        console.log(res);
        state.list = res.data.map((item) => {
          return {
            id: item.id,
            name: item.name,
            tel: item.phone,
            address: item.province + item.city + item.address,
            isDefault: item.is_default,
          };
        });
      });
    });

    return {
      onAdd,
      onEdit,
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss" scoped>
.address {
  width: 100%;
  padding: 50px 0;
  min-height: 100vh;
  background: #fff;
  position: relative;
  z-index: 10;
}
</style>